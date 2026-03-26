---
sidebar_position: 4
title: Surge Architecture
---

# Surge Architecture

## System Overview

Everything in Surge's architecture is built around **real-time proving**: block production, ZK proof generation, and L1 finalization all happen in one pipeline.

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                              L1 (Ethereum / Gnosis)                           │
│                                                                                │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────────────┐  │
│  │  L1 Execution    │    │  L1 Consensus    │    │    RealTimeInbox        │  │
│  │  Client           │    │  Client           │    │    (Surge L1 Contract)  │  │
│  └────────┬─────────┘    └────────┬─────────┘    └────────────┬─────────────┘  │
│           │                       │                            │                │
└───────────┼───────────────────────┼────────────────────────────┼────────────────┘
            │                       │                            ▲
            │ state data            │ beacon data                │ propose(data,
            │                       │                            │  checkpoint,
            ▼                       ▼                            │  proof)
┌────────────────────────────────────────────────────────────────┼────────────────┐
│                              Surge L2 Stack                    │                │
│                                                                │                │
│  ┌──────────────────┐    ┌──────────────────┐    ┌────────────┴─────────────┐  │
│  │  L2 Execution    │───>│    Catalyst       │───>│      Raiko               │  │
│  │  Client (NMC /   │    │  (Orchestrator)   │    │    (ZK Prover / Zisk)    │  │
│  │  Alethia-Reth)   │    └──────────────────┘    └──────────────────────────┘  │
│  └────────▲─────────┘                                                          │
│           │                                                                    │
│  ┌────────┴─────────┐                                                          │
│  │    Driver         │    Syncs L2 from L1 events                              │
│  │  (taiko-client)   │    (--fork realtime)                                    │
│  └──────────────────┘                                                          │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

## Components

### L2 Execution Client

The L2 execution client processes blocks with the `RealTime` hardfork rules. Two clients are supported:

- **[Nethermind Execution Client (NMC)](https://github.com/NethermindEth/nethermind):** The primary client, with [Gigagas](./gigagas.md) throughput and L1SLOAD support.
- **[Alethia-Reth](https://github.com/NethermindEth/alethia-reth):** Rust-based alternative, also supports L1SLOAD and the `RealTime` hardfork.

Both clients implement the `anchorV4WithSignalSlots` anchor transaction format, which carries L1 state commitments and signal slot data in every L2 block.

### Catalyst (Orchestrator)

Catalyst ties the proving pipeline together:
1. Receives new L2 blocks from the execution client
2. Constructs a `RealTimeProofRequest` with block data, signal slots, and anchor information
3. Sends the request to Raiko for proof generation
4. Submits the atomic `propose()` transaction to the L1 `RealTimeInbox` contract
5. Provides real-time status to connected UIs (e.g., "Generating ZK Proof")

### Raiko (ZK Prover)

[Raiko](https://github.com/NethermindEth/raiko) generates ZK proofs using the **Zisk** GPU backend:

- **Endpoint:** `POST /v3/proof/batch/realtime`
- **Proof time:** ~10-17 seconds depending on GPU hardware
- **One proof per block** -- no aggregation pipeline needed
- Constructs the proposal locally from data provided by Catalyst (no on-chain event fetch)
- Outputs a `RealTimeProofResponse` containing the proof, proposal hash, commitment hash, and checkpoint

### RealTimeInbox (L1 Contract)

The L1 contract that receives proposals and verifies proofs:

```
propose(data, checkpoint, proof)
  → verify ZK proof
  → update lastFinalizedBlockHash
  → relay signal slots
  → emit ProposedAndProved event
```

On-chain state is minimal: a single `bytes32 lastFinalizedBlockHash` slot.

See [Real-Time Proving](./real-time-proving) for the full protocol specification.

### Driver (taiko-client)

The [Driver](https://github.com/NethermindEth/surge-taiko-mono) keeps L2 in sync by watching L1 events:

- Runs with `--fork realtime --realtimeInbox <address>`
- Watches for `ProposedAndProved` events on the `RealTimeInbox`
- Modularized fork support -- can operate with only the RealTime fork, without legacy Pacaya/Shasta contracts
- Supports P2P sync for faster chain synchronization

## Real-Time Proving Flow

Here's what happens from block production to L1 finality:

```
  L2 Block Produced
        │
        ▼
  Catalyst constructs proof request
  (block data + signal slots + anchor info)
        │
        ▼
  Raiko generates ZK proof via Zisk
  (~10-17 seconds on GPU)
        │
        ▼
  Catalyst calls RealTimeInbox.propose()
  (data + checkpoint + proof in one tx)
        │
        ▼
  L1 verifies proof, updates state, emits event
        │
        ▼
  Block is FINALIZED on L1
        │
        ▼
  Driver picks up ProposedAndProved event
  and advances L2 state
```

Key difference from previous architecture: there is **no separate proving step**. The proof is generated before the proposal and submitted together atomically.

## How Surge Differs from the Taiko Stack

Surge modifies the Taiko stack in these ways:

1. **Token-Free Design:** Surge removes token dependencies. ETH is used for gas.
2. **Execution Client Upgrade:** Replaced TaikoGeth with the Nethermind Execution Client (NMC) and added Alethia-Reth support.
3. **Real-Time Proving:** Replaced the two-phase propose-then-prove model with atomic real-time proving. No bonds, no proving windows, no contestation.
4. **Time-Locked Owner:** Modified the multisig implementation to feature a 45-day timelock, aligning with Stage 2 requirements by L2Beat.
5. **Verification Streak Checks:** Owner operations via the multisig are blocked if there has been a liveness disruption of 7 days or more within the past 45 days.
6. **Disabled Pausing:** The owner cannot pause the protocol or peripheral contracts.
7. **Zisk ZK Prover:** Uses a single GPU-accelerated Zisk prover for real-time proof generation, replacing the previous 2-of-3 multi-prover model (SGX, SP1, RISC0).
8. **Cross-Chain Composability:** Signal slots and L1SLOAD enable L2 contracts to read L1 state synchronously.

## Further Exploration

Want to try it yourself? Check the guide on running your own local Surge devnet:

[**Deploy and run your own Surge devnet →**](/docs/guides/running-surge)
