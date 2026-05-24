---
sidebar_position: 4
title: Privacy Mode
---

# Privacy Mode

> How Surge keeps L2 transaction data confidential while keeping the rollup permissionless and verifiable.

## What Is Privacy Mode?

In privacy mode, every L2 transaction list that Surge posts to L1 as an EIP-4844 blob is **encrypted before broadcast** and decrypted off-chain by the driver and the prover. A passive L1 observer can see the blob hashes, fees, and the proposer's EOA, but cannot read the underlying transactions.

The encryption lives entirely at the **blob payload level**. The L1 protocol contracts (`RealTimeInbox`, `SurgeVerifier`, `SignalService`) contain no encryption logic and don't change. Encryption is a property of how Catalyst packages blobs and how the driver and Raiko unpack them.

```
Catalyst  ---(encrypts L2 tx list)--->  L1 blob (ciphertext only; no plaintext on-chain)

L1 blob   --->  Driver       ---(decrypts with K_sym / SK_sys)--->  L2 EL (NMC / Alethia-Reth)

L1 blob   --->  Raiko host   --->  Raiko guest  ---(decrypts under hash-bound keys)--->  ZK proof
```

## Privacy Boundary

| Private                              | Not Private                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| L2 transaction calldata in L1 blobs  | L1 blob hashes                                                         |
|                                      | L1 propose tx metadata (block number, block hash, state root checkpoint) |
|                                      | Proposer's EOA                                                         |
|                                      | Forced-inclusion submitter EOAs and fees                               |
|                                      | L2 P2P mempool traffic                                                 |

Privacy mode protects what gets archived on L1. It does not anonymize who proposes or who pays for forced inclusion, and it does not encrypt the L2 mempool.

## Cipher Schemes

Every privacy-mode blob payload starts with a 1-byte **scheme id**. The driver and prover dispatch on this byte, so adding new schemes is additive — old blobs continue to decrypt under their original scheme.

| Scheme              | Algorithm                              | Used for                                          | Key                               |
| ------------------- | -------------------------------------- | ------------------------------------------------- | --------------------------------- |
| `0x00`              | Plaintext                              | Non-privacy chains; FI blobs in non-privacy chains | n/a                               |
| `0x01`              | AES-256-GCM                            | Catalyst's normal proposal blobs                  | shared `K_sym`                    |
| `0x02`              | ECIES (secp256k1 ECDH + HKDF + AES-GCM) | Forced-inclusion blobs                            | system keypair `(SK_sys, PK_sys)` |
| `0x03` _(reserved)_ | ML-KEM-768 (FIPS 203)                  | Future post-quantum FI                            | —                                 |
| `0x04` _(reserved)_ | Hybrid ML-KEM ⊕ X25519                 | Future PQ + classical hybrid FI                   | —                                 |

Two live schemes cover the two flows:

- **`0x01` (AES-256-GCM)** for Catalyst's proposals. Catalyst, the driver, and the Raiko host all hold the same `K_sym`. A fresh 96-bit nonce is drawn from the CSPRNG per blob and shipped in-band.
- **`0x02` (ECIES on secp256k1)** for forced inclusion. FI submitters are external parties who don't share `K_sym` — they encrypt to a published system public key `PK_sys`. The driver and Raiko hold the matching `SK_sys`. Each submission uses a fresh ephemeral keypair, so submitter pubkeys do not need to be registered on-chain.

## Key Management

There are two secret keys and one public key:

| Key      | Length   | Held by                                                                                   |
| -------- | -------- | ----------------------------------------------------------------------------------------- |
| `K_sym`  | 32 bytes (AES-256)              | Catalyst, driver, Raiko host (env var); Raiko guest (witness)                   |
| `SK_sys` | 32 bytes (secp256k1 scalar)     | Driver, Raiko host (env var); Raiko guest (witness)                             |
| `PK_sys` | 33 bytes (compressed secp256k1) | Published in chain spec / docs. FI submitters use it to encrypt to the system.  |

Catalyst does **not** hold `SK_sys` — it only references FI blob hashes on-chain via `numForcedInclusions`; it never decrypts.

### Hash-Bound Keys in the ZK Guest

The Raiko guest receives the secret keys as part of its witness, which is untrusted from the guest's perspective. To prevent a malicious host from substituting bogus keys, the guest verifies them against `keccak256` hashes that were **baked into the binary at compile time**:

- `SURGE_PRIVACY_SYMMETRIC_KEY_HASH`
- `SURGE_PRIVACY_FI_PRIVKEY_HASH`

If either env var is non-zero at build time and the witness key's hash doesn't match, the guest panics and the proof becomes unverifiable. Defaulting these to zero bypasses the check, which is what non-privacy builds and CI use.

The consequence: **the verifier vkey deployed on L1 commits to the encryption keys** without ever putting the secret bytes into the public input. Key rotation is therefore an explicit on-chain event — recompile the guest, redeploy the vkey — not a silent change.

### Generating Keys

A single script emits the full env-var bundle, including build-time hashes and the public FI key:

```sh
bash packages/protocol/script/keygen/surge-privacy-keygen.sh
```

Output includes `SURGE_PRIVACY_SYMMETRIC_KEY`, `SURGE_PRIVACY_FI_PRIVKEY`, the two `*_HASH` build-time vars, and `SURGE_PRIVACY_FI_PUBKEY` to publish.

## Forced Inclusion with Privacy

Forced inclusion lets an external user push a transaction list onto L1 even if Catalyst refuses to include it. Privacy mode adds encryption to the FI blob payload but doesn't change the queueing logic. The lifecycle:

1. **Submission**. The user builds a transaction list, encrypts it under `PK_sys` with scheme `0x02` (or prepends `0x00` on a non-privacy chain), wraps it in an EIP-4844 blob tx, and calls `RealTimeInbox.saveForcedInclusion()` with the current FI fee.
2. **Queueing**. The inbox validates the blob reference via `blobhash`, enqueues `ForcedInclusion { feeInGwei, blobSlice }`, and refunds any excess ETH.
3. **Consumption**. On the next proposal, Catalyst reads the queue head/tail, sets `numForcedInclusions` on `ProposeInput`, and submits as usual. The inbox pops that many entries, prepends them to the proposal's `sources[]` (proposer's own blob comes last), and forwards the accumulated fees to the proposer.
4. **Driver derivation**. For each source, the driver fetches blob bytes, dispatches on the scheme byte, decrypts, decompresses, and applies the resulting L2 blocks. Non-FI decrypt failure is fatal. FI decrypt failure falls back to an empty L2 block with the anchor tx only — the chain progresses even if a submitter sent garbage.
5. **Prover replay**. Raiko's guest does the same per-source decryption, under hash-bound keys, and re-executes the L2 blocks inside the ZK circuit.

If Catalyst is offline or refuses to consume queued FIs past `forcedInclusionDelay`, the inbox reverts with `UnprocessedForcedInclusionIsDue` until they're processed. Past `permissionlessInclusionMultiplier × forcedInclusionDelay`, anyone can step in as the proposer.

## Enabling Privacy Mode

Privacy mode is toggled by a single shared env var across all four off-chain components: `SURGE_PRIVACY_MODE=true|false`.

| Component             | What `SURGE_PRIVACY_MODE=true` requires                             | Behavior on missing key                                                           |
| --------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Catalyst              | `SURGE_PRIVACY_SYMMETRIC_KEY`                                       | Refuses to start.                                                                 |
| Driver (taiko-client) | `--privacy.symmetricKey`, `--privacy.fiPrivateKey`                  | Refuses to start.                                                                 |
| Raiko host            | `SURGE_PRIVACY_SYMMETRIC_KEY`, `SURGE_PRIVACY_FI_PRIVKEY`           | Forwards `None` to the guest; guest fails on any non-plaintext blob.              |
| Raiko guest (build)   | `SURGE_PRIVACY_SYMMETRIC_KEY_HASH`, `SURGE_PRIVACY_FI_PRIVKEY_HASH` | Default zero-hash bypasses the binding check (non-privacy build).                 |

Each blob is self-describing via its scheme byte, so partial deployments cannot silently corrupt the chain. A non-FI source with an unrecognized or undecryptable scheme is a hard error. FI sources fall back to empty-block-with-anchor. The worst case is a chain halt at the driver if Catalyst encrypts but the driver lacks `K_sym` — loud, not silent.

Operators verify lockstep by checking the "privacy mode: enabled" startup banner on each component.

## Threat Model

| Adversary                                          | Mitigated?                                                                                                              |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Passive L1 observer                                | Yes (under classical crypto)                                                                                            |
| Active L1 frontrunner of `propose` calls           | Out of scope — existing concern, no privacy regression                                                                  |
| Compromise of `K_sym`                              | All historical and future Catalyst blobs decryptable. Operator-managed rotation required.                               |
| Compromise of `SK_sys`                             | All historical and future FI blobs decryptable. Same rotation.                                                          |
| Cryptographically-relevant quantum computer (CRQC) | Scheme `0x01` is PQ-safe (AES-256, ~128-bit post-Grover). Scheme `0x02` is broken by Shor — harvest-now-decrypt-later applies to FI blobs. |

The PQ-vulnerable surface is bounded to forced inclusion — a low-volume censorship-resistance channel. Migration when needed is purely additive: implement `0x03` (ML-KEM-768) or `0x04` (hybrid), deploy alongside, leave the legacy `0x02` dispatcher arm in place so old blobs still decrypt. No on-chain protocol change.

## Operational Notes

### Bootstrap

1. Run `surge-privacy-keygen.sh`, store the bundle securely.
2. Publish `SURGE_PRIVACY_FI_PUBKEY` to FI submitters.
3. Build Raiko guests with the two `*_HASH` env vars set. Note the resulting vkey.
4. Deploy `SurgeVerifier` on L1 with the new vkey.
5. Set `SURGE_PRIVACY_MODE=true` and the runtime keys on Catalyst, driver, and the Raiko host.
6. Restart all four components and confirm each logs the privacy banner.

### Rotation

Rotation is an explicit on-chain event because the verifier vkey commits to the key hashes:

1. Generate a new bundle.
2. Recompile Raiko guests with the new `*_HASH` env vars.
3. Deploy the new vkey to `SurgeVerifier` on L1.
4. Drain in-flight proposals; restart Catalyst, driver, and Raiko host with the new runtime keys.

Blobs proven under the old vkey remain verifiable forever — the old vkey is still on L1, just no longer the active one.

### Mismatch Recovery

If logs show repeated "privacy dispatch failed", one component has the wrong keys. Stop Catalyst, audit env vars on each component against the bundle, restart in lockstep.

## Further Reading

- [Surge Architecture](./architecture) — how the off-chain and on-chain entities fit together
- [Real-Time Proving](./real-time-proving) — the proving model that privacy mode plugs into
- [Components & Repositories](./components) — where the privacy code lives across repos
