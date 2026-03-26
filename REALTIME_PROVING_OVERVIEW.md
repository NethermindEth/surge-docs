# Real-Time Proving: Comprehensive Overview

> **Purpose:** Golden-source reference for all real-time proving information. Compiled from migration documents, Slack discussions, PRs, and deployment artifacts.
>
> **Last updated:** 2026-03-26

---

## Table of Contents

- [1. What is Real-Time Proving?](#1-what-is-real-time-proving)
- [2. Why the Shift from Pacaya/Based Rollup](#2-why-the-shift-from-pacayabased-rollup)
- [3. Architecture](#3-architecture)
- [4. Protocol Changes (On-Chain)](#4-protocol-changes-on-chain)
- [5. Execution Layer Changes (Alethia-Reth)](#5-execution-layer-changes-alethia-reth)
- [6. Proving Pipeline Changes (Raiko)](#6-proving-pipeline-changes-raiko)
- [7. Driver Changes](#7-driver-changes)
- [8. Deployment](#8-deployment)
- [9. Performance](#9-performance)
- [10. Cross-Chain Composability & L1SLOAD](#10-cross-chain-composability--l1sload)
- [11. Key Repositories & Branches](#11-key-repositories--branches)
- [12. References](#12-references)

---

## 1. What is Real-Time Proving?

Real-time proving is a new protocol paradigm for Surge where **ZK proofs are generated within seconds of block production** and submitted atomically with the block proposal. Instead of a two-phase "propose then prove" model (as in Pacaya), real-time proving collapses both into a **single atomic transaction**: `propose(data, checkpoint, proof)`.

This means:
- **No proving windows** -- proofs are not deferred; they accompany the proposal
- **No bonds** -- there is no need for economic security against late proofs
- **Instant finality** -- the block is proven the moment it is proposed
- **One proposal per proof** -- no batch proving, each block is individually proven

**Key metric:** Proof generation takes **~10-17 seconds** depending on GPU hardware (RTX 5090 achieves ~10-11s).

---

## 2. Why the Shift from Pacaya/Based Rollup

### What Pacaya Had

| Feature | Pacaya Model |
|---------|-------------|
| Proposal | Two-phase: propose first, prove later |
| Proving window | Up to 24 hours to submit proof |
| Bonds | Required (10,000 ETH testnet) for proving liveness |
| Batch proving | Supported (multiple proposals per proof) |
| Ring buffer | On-chain storage for proposals |
| Config fields | 17 configuration parameters |
| Forced inclusions | Supported |
| Proposer/Prover checks | Whitelist and checker contracts |
| Contestation | Window-based contestation model |
| On-chain state | Multiple slots for proposals, transitions, bonds |

### What Real-Time Proving Brings

| Feature | Real-Time Model |
|---------|----------------|
| Proposal | Single-phase: propose + prove + finalize atomically |
| Proving window | None -- proof is immediate |
| Bonds | Removed |
| Batch proving | Removed (one proof per proposal) |
| Ring buffer | Removed |
| Config fields | 3 (`proofVerifier`, `signalService`, `basefeeSharingPctg`) |
| Forced inclusions | Removed |
| Proposer/Prover checks | Removed |
| Contestation | Removed (pure ZK-Rollup finality) |
| On-chain state | Single slot: `bytes32 lastFinalizedBlockHash` |

**Bottom line:** The protocol is radically simplified. All deferred-proof machinery is removed because proofs happen in real time.

---

## 3. Architecture

### High-Level Flow

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│   L2 Block   │────>│   Catalyst   │────>│    Raiko      │────>│ RealTimeInbox  │
│  Produced    │     │ (Orchestrator)│    │ (ZK Prover)   │     │  (L1 Contract) │
└─────────────┘     └─────────────┘     └──────────────┘     └────────────────┘
       │                   │                    │                      │
       │              Constructs            Generates              Atomic
       │              proof request         ZK proof              propose()
       │              with block data       (~10-17s)             + verify
       │                                                          + finalize
       ▼                                                              │
┌─────────────┐                                                       ▼
│   Driver     │                                              ┌────────────────┐
│ (Sync L2)    │<─────────────────────────────────────────────│  Finalized on  │
└─────────────┘                                               │     L1         │
                                                              └────────────────┘
```

### Components

| Component | Role | Repo |
|-----------|------|------|
| **RealTimeInbox** | L1 contract; receives atomic propose+proof, verifies, finalizes | surge-taiko-mono |
| **Catalyst** | Orchestrator; constructs proof requests, coordinates prover and proposer | catalyst (private) |
| **Raiko** | ZK prover; generates proofs via Zisk backend on GPU | raiko (NethermindEth fork) |
| **Alethia-Reth** | L2 execution client; processes blocks with RealTime hardfork rules | alethia-reth |
| **NMC (Nethermind)** | Alternative L2 execution client; supports L1SLOAD | nethermind |
| **Driver** | Syncs L2 state from L1; supports `--fork realtime` mode | surge-taiko-mono |
| **Zisk** | GPU-accelerated ZK proving backend used by Raiko | external (Zisk team) |

### What Changed Per Component

**Protocol (RealTimeInbox):**
- Replaces `SurgeTaikoL1` (Pacaya inbox)
- Single `propose()` function does everything atomically
- On-chain state: just `lastFinalizedBlockHash`
- Signal slots enable cross-chain message relay

**Driver:**
- New `--fork realtime` and `--realtimeInbox <address>` flags
- Modularized fork support -- can run a single fork without deploying Pacaya+Shasta
- Reads `ProposedAndProved` events instead of separate `Proposed`/`Proved`

**Raiko:**
- New endpoint: `POST /v3/proof/batch/realtime`
- New `RealTimeProofRequest` type
- No aggregation pipeline (one proof per proposal)
- Constructs proposal locally (no on-chain event to fetch)
- New hashing functions for real-time commitments

**Alethia-Reth:**
- New `TaikoHardfork::RealTime` (activates after Shasta)
- New anchor function: `anchorV4WithSignalSlots`
- New payload attributes: `signal_slots`, `max_anchor_block_number`
- `TaikoSpecId::REALTIME = 4` (supersedes `SHASTA = 3`)

---

## 4. Protocol Changes (On-Chain)

> Source: `PROTOCOL_MIGRATION_REAL_TIME_FORK.md` and `REAL_TIME_INBOX_MIGRATION.md`

### RealTimeInbox Contract

The `RealTimeInbox` replaces the previous two-phase inbox with a single atomic operation:

```solidity
function propose(
    bytes calldata data,      // RLP-encoded block data
    Checkpoint calldata checkpoint,  // L2 state checkpoint
    bytes calldata proof      // ZK proof
) external;
```

One call = propose + verify + finalize.

### Data Structures

**ProposeInput** (what the caller provides):
- `signalSlots` -- `bytes32[]` of L1 signal slots to relay to L2
- `maxAnchorBlockNumber` -- highest L1 block the anchor references
- Standard block data fields

**Proposal** (transient, never stored):
- `parentProposalHash`
- `maxAnchorBlockNumber`, `maxAnchorBlockHash`
- `basefeeSharingPctg`
- `sources` (block data sources)
- `signalSlotsHash`

**Commitment** (what the proof covers):
- `proposalHash`
- `lastFinalizedBlockHash` -- proof starting state
- `checkpoint` -- `{ blockNumber, blockHash, stateRoot }`

**On-chain state:** Single slot -- `bytes32 public lastFinalizedBlockHash`

### What's Removed

- Ring buffer for proposals
- Bond deposits and management
- Forced inclusion logic
- Proposer checker / prover whitelist contracts
- Proving windows and contestation
- Batch proving support
- 14 of 17 config fields

### Events

Single event replaces all previous:
```
ProposedAndProved(proposalHash, lastFinalizedBlockHash, checkpoint, signalSlots)
```

### Proof Verification

```
verifyProof(0, commitmentHash, proof)
```

Where `commitmentHash = keccak256(abi.encode(proposalHash, lastFinalizedBlockHash, checkpoint.blockNumber, checkpoint.blockHash, checkpoint.stateRoot))` and `proposalAge` is always 0 (proof is immediate).

---

## 5. Execution Layer Changes (Alethia-Reth)

> Source: `ALETHIA_RETH_MIGRATION.md`

### New Hardfork

```
TaikoHardfork::RealTime  (after Shasta)
TaikoSpecId::REALTIME = 4
```

Detected via `is_realtime_active()` helper. Fork activation uses `ForkCondition::Timestamp`. Devnet activates at timestamp 0 (all blocks are RealTime).

### New Anchor Function

```solidity
anchorV4WithSignalSlots(
    (uint48 maxAnchorBlockNumber, bytes32 maxAnchorBlockHash, bytes32 stateRoot),
    bytes32[] signalSlots
)
```

Replaces `anchorV3` from Shasta. The anchor transaction is the first transaction in every L2 block and carries L1 state commitments plus signal slot data for cross-chain messaging.

### Payload Attributes

New optional fields on `TaikoPayloadAttributes`:
- `signal_slots: Option<Vec<B256>>` -- L1 signals to relay
- `max_anchor_block_number: Option<u64>` -- L1 anchor reference

### What Stays the Same

- EVM handler (opcodes, precompiles)
- EIP-4396 base fee mechanism
- Transaction types
- Block assembler core logic
- RPC endpoints
- P2P networking
- CLI interface

---

## 6. Proving Pipeline Changes (Raiko)

> Source: `PROVING_MIGRATION.md`

### 10-Step Pipeline

| Step | Change |
|------|--------|
| 1. Request | New `RealTimeProofRequest` type; new endpoint `POST /v3/proof/batch/realtime` |
| 2. Event parsing | No on-chain event fetch -- prover constructs `RealTimeProposal` locally |
| 3. Preflight | New `prepare_taiko_chain_batch_input_realtime()`; L1 header at `maxAnchorBlockNumber` |
| 4. Anchor | New `decode_anchor_realtime()` for `anchorV4WithSignalSlots`; new linkage verification |
| 5. Tx generation | Unchanged (fork-agnostic) |
| 6. GuestOutput | New `TransitionFork::RealTime(RealTimeTransitionData)` and `BlockMetaDataFork::RealTime` |
| 7. Hashing | New `hash_realtime_proposal()`, `hash_realtime_commitment()`, `hash_signal_slots()` |
| 8. Prover dispatch | New `Prover::realtime_run()`, `run_realtime_prover()`, `Raiko::realtime_prove()` |
| 9. Aggregation | **Removed** -- no aggregation for real-time (one proposal per proof) |
| 10. Output | `Proof` struct reused; optional `RealTimeProofResponse` wraps proof + hashes |

### Key Architecture Difference

In Pacaya, Raiko fetched `Proposed` events from L1 to know what to prove. In real-time mode, **there is no on-chain event to fetch** because the proof must exist *before* the proposal. The caller (Catalyst) provides all data directly in the proof request.

---

## 7. Driver Changes

The driver (taiko-client) was modularized to support running a single fork:

### New CLI Flags
```
--fork realtime
--realtimeInbox <contract_address>
```

### Fork Modularization

Previously, the driver needed both Pacaya and Shasta deployed to operate. The real-time fork modularization allows the driver to work with **only the RealTime fork**, without requiring legacy inbox contracts.

### Event Processing

The driver now watches for `ProposedAndProved` events (single event) instead of separate `Proposed` and `Proved` events from the Pacaya model.

---

## 8. Deployment

### Deployment Script

New script: `deploy_real_time_surge_l1.sh`
- Location: `packages/protocol/script/layer1/surge/deploy_real_time_surge_l1.sh`
- Uses Foundry's `DeployRealTimeSurgeL1.s.sol`

### Key Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `ZISK_PROGRAM_VKEY` | Trusted program verification key (bytes32, packed uint64[4] big-endian) | Required |
| `NUM_PROOFS_THRESHOLD` | Minimum distinct proofs required | 1 |
| `BASEFEE_SHARING_PCTG` | Base fee sharing percentage | 75 (devnet) |
| `GENESIS_BLOCK_HASH` | Last finalized L2 block hash to activate inbox | Required |
| `BLOCK_GAS_LIMIT` | L2 block gas limit | 200,000,000 |
| `BROADCAST` | Whether to broadcast transactions | Flag |
| `VERIFY` | Whether to verify contracts on explorer | Flag |

### Driver Startup

```bash
taiko-client driver \
    --fork realtime \
    --realtimeInbox ${SHASTA_SURGE_INBOX} \
    --taikoAnchor ${TAIKO_ANCHOR} \
    --l1.ws ${L1_ENDPOINT_WS} \
    --l2.ws ws://l2-nethermind-execution-client:${L2_WS_PORT} \
    --l1.beacon ${L1_BEACON_HTTP} \
    --l2.auth http://l2-nethermind-execution-client:${L2_ENGINE_API_PORT} \
    --preconfirmation.whitelist ${SHASTA_PRECONF_WHITELIST} \
    --jwtSecret /tmp/jwt/jwtsecret \
    --p2p.sequencer.key=${OPERATOR_PRIVATE_KEY} \
    # ... additional P2P and metrics flags
```

### Infrastructure Components

For a full real-time deployment:
- L1 node (e.g., Gnosis mainnet, Hoodi testnet, or local via Kurtosis)
- L2 execution client (NMC or Alethia-Reth)
- Driver (taiko-client with `--fork realtime`)
- Raiko prover (with GPU, Zisk backend)
- Catalyst orchestrator
- Optional: Explorer (BlockScout), Bridge UI, DEX UI

### Current Production Deployment (Gnosis)

- **Chain:** `surge_dev`, chain ID 763374
- **L1:** Gnosis mainnet (chain ID 100)
- **Hard forks active:** ONTAKE, PACAYA, REALTIME (all from block 1)
- **Prover:** Zisk on RTX 5090 GPU
- **DNS:** `*.realtime.surge.wtf` (rpc, explorer, bridge, synccomposedex)
- **Infra:** Migrating from VM to production Kubernetes (ArgoCD)

---

## 9. Performance

### Proof Generation Times

| Setup | Time | Notes |
|-------|------|-------|
| Zisk, 1x L40 GPU | ~40s | STARK+SNARK, no aggregation |
| Zisk, 2x L40 GPU | ~25s | STARK+SNARK |
| Zisk, 3x L40 GPU | ~22s | STARK+SNARK |
| Zisk, 4x L40 GPU | ~20s | STARK+SNARK |
| Zisk, old cluster | 14-17s | Consistent on deployed UI (Mar 25) |
| Zisk, RTX 5090 | **~10-11.2s** | End-to-end from Catalyst request to proof returned |

### Comparison with Previous Provers

| Prover | Time | Notes |
|--------|------|-------|
| SP1 (batch, no agg) | ~1m 15s | Single GPU only (CUDA Docker limitation) |
| RISC0 (batch, no agg) | ~12+ min | Unstable, sometimes fails silently |
| Zisk (real-time) | **~10-17s** | GPU-scalable, stable for most transactions |

### Known Issues

- **Zisk intermittent failures:** Random failures, especially on bridge-related transactions. Suspected keccak256 issue. The Zisk team acknowledges instability in their GitHub.
- **SP1 single-GPU limitation:** CUDA prover Docker image only utilizes GPU 0.
- **Build issue on RTX 5090:** Parallel cargo build of Zisk can fail on `lib-float`; workaround: `CARGO_BUILD_JOBS=1`.

---

## 10. Cross-Chain Composability & L1SLOAD

### Signal Slots

Real-time proving introduces **signal slots** -- a mechanism for relaying L1 state to L2 within the same block proposal:

1. Caller specifies `signalSlots[]` (L1 signal slot hashes) in the proposal
2. Each slot is verified on L1 via `isSignalSent()`
3. Slots are hashed into the proposal and included in the ZK proof
4. On L2, signals are relayed through `anchorV4WithSignalSlots` in the anchor tx
5. L2 contracts can read these signals immediately

This enables **synchronous cross-chain composability** -- L2 can trustlessly read L1 state that was just proven.

### L1SLOAD

L1SLOAD is a precompile/opcode that allows L2 contracts to **read L1 storage slots directly**:

- Implemented in NMC (Nethermind Client): [PR #9030](https://github.com/NethermindEth/nethermind/pull/9030)
- Implemented in Alethia-Reth: [PR #11](https://github.com/NethermindEth/alethia-reth/pull/11)
- Implemented in Raiko: [PR #50](https://github.com/NethermindEth/raiko/pull/50)
- Integration tests: [PR #271](https://github.com/NethermindEth/surge-taiko-mono/pull/271)

**Design:** Raiko walks from the anchor block (trusted state root) in whichever direction the L1SLOAD target requires -- forward if the target is newer, backward if older.

### SyncCompose DEX Demo

A cross-chain DEX demo ("SyncComposeDex") was deployed to showcase real-time proving + L1SLOAD:
- Deployed on Gnosis mainnet as L1
- Supports xDAI/USDC swaps
- Real-time UI cues (e.g., "Generating ZK Proof") powered by Catalyst RPC endpoints
- Full end-to-end flow: swap → proof generation (~10-17s) → finalized on L1
- DNS: `synccomposedex.realtime.surge.wtf`

---

## 11. Key Repositories & Branches

| Component | Repo | Branch |
|-----------|------|--------|
| Protocol + Driver | [NethermindEth/surge-taiko-mono](https://github.com/NethermindEth/surge-taiko-mono) | `surge-alethia-real-time-driver` / `surge-alethia-real-time-inbox` |
| Raiko (Prover) | [NethermindEth/raiko](https://github.com/NethermindEth/raiko) | `surge-alethia-real-time-proving` |
| Alethia-Reth | [NethermindEth/alethia-reth](https://github.com/NethermindEth/alethia-reth) | `real-time-proving-migration` |
| NMC | [NethermindEth/nethermind](https://github.com/NethermindEth/nethermind) | `feat/surge-real-time-poc` |
| Devnet Scripts | [NethermindEth/simple-surge-node](https://github.com/NethermindEth/simple-surge-node) | `shasta-poc` |

### Key PRs

| PR | Description |
|----|-------------|
| [raiko#52](https://github.com/NethermindEth/raiko/pull/52) | Raiko real-time proving changes |
| [alethia-reth#12](https://github.com/NethermindEth/alethia-reth/pull/12) | Alethia-Reth real-time proving |
| [surge-taiko-mono#269](https://github.com/NethermindEth/surge-taiko-mono/pull/269) | Driver migration to real-time fork |
| [nethermind#9030](https://github.com/NethermindEth/nethermind/pull/9030) | L1SLOAD in NMC |
| [alethia-reth#11](https://github.com/NethermindEth/alethia-reth/pull/11) | L1SLOAD in Alethia-Reth |
| [raiko#50](https://github.com/NethermindEth/raiko/pull/50) | L1SLOAD in Raiko |

### Migration Documents

Read in this order for full context:
1. [Protocol contracts migration](https://github.com/NethermindEth/alethia-reth/blob/real-time-proving-migration/PROTOCOL_MIGRATION_REAL_TIME_FORK.md)
2. [Raiko/Proving migration](https://github.com/NethermindEth/alethia-reth/blob/real-time-proving-migration/PROVING_MIGRATION.md)
3. [Alethia-Reth migration](https://github.com/NethermindEth/alethia-reth/blob/real-time-proving-migration/ALETHIA_RETH_MIGRATION.md)
4. [Driver/Inbox migration](https://github.com/NethermindEth/surge-taiko-mono/blob/surge-alethia-real-time-driver/REAL_TIME_INBOX_MIGRATION.md)

---

## 12. References

### Slack Threads

| Date | Topic | Channel | Timestamp |
|------|-------|---------|-----------|
| 2026-03-05 | Real-time proving PRs announcement | #project-surge-rollup | 1772695544.661419 |
| 2026-03-25 | SyncCompose DEX UI deployed, 14-17s proofs | #project-surge-rollup | 1774449474.177289 |
| 2026-03-26 | Pacaya prod infra to be stopped | #project-surge-rollup | 1774513508.324649 |

### Timeline

| Date | Milestone |
|------|-----------|
| 2026-03-05 | Anshu opens 4 PRs across Protocol, Driver, Raiko, Alethia-Reth |
| 2026-03-09 | Foundational PRs merged by Shura |
| 2026-03-16 | Catalyst and Driver working end-to-end; Raiko Zisk benchmarks (20-40s) |
| 2026-03-19 | Devnet deployment; proving time 10-15s confirmed |
| 2026-03-21 | **First successful end-to-end demo** (after 7-hour war room) |
| 2026-03-21 | Gnosis deployment begins |
| 2026-03-24 | Full end-to-end flow recorded; L1SLOAD demo recorded |
| 2026-03-25 | SyncCompose DEX UI deployed publicly; 14-17s consistent proof times |
| 2026-03-25 | RTX 5090 prover achieves ~10-11.2s proof times |
| 2026-03-26 | DNS setup for realtime.surge.wtf; old Pacaya infra being decommissioned |

### Team

| Person | Contribution |
|--------|-------------|
| Anshu Jalan | Lead architect; Protocol, Driver, Raiko, Alethia-Reth, Catalyst changes |
| Shura Fedorovskyi | Prover expert; Zisk/SP1/RISC0 integration, GPU benchmarking |
| Ahmad Mazen Bitar | Engineering lead; reviews, GPU allocation, infra decisions |
| Justin Chan | DevOps/infra; VM provisioning, deployment, UI deployment |
| Nurbakyt Madibek | L1SLOAD implementation across NMC, Raiko, Alethia-Reth; Driver review |
| David Leonardi | Architecture oversight |
| Michael Vasylenko | Infrastructure/monitoring; devnet CI/CD |
