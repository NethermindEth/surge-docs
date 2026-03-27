---
sidebar_position: 3
title: Real-Time Proving
---

# Real-Time Proving

## What Is Real-Time Proving?

In Surge, **ZK proofs are generated within seconds of block production** and included with the block proposal in a single transaction. Instead of proposing a block and proving it later (within a proving window), the proof goes out together with the proposal:

```
propose(block_data, l2_state_checkpoint, proof)  →  verified + finalized in one call
```

This means:

- **No proving windows** -- proofs are not deferred
- **No bonds** -- no economic security against late proofs needed
- **Instant finality** -- the block is proven the moment it is proposed on L1
- **One proof per proposal** -- each block is individually proven

## Why Real-Time Proving?

### The Previous Model (Two-Phase Proving)

Earlier rollup designs, including Surge's previous fork, used a two-phase approach:

1. **Propose** -- submit the block data to L1
2. **Prove** -- submit a proof within a window (e.g., 24 hours)

This needed a lot of on-chain machinery to manage:

| Component          | Purpose                                                  |
| ------------------ | -------------------------------------------------------- |
| Ring buffer        | Store pending proposals awaiting proof                   |
| Bonds              | Economic stake against proof liveness (e.g., 10,000 ETH) |
| Proving windows    | Time limits for proof submission                         |
| Contestation       | Mechanism to challenge incorrect proofs                  |
| Prover whitelist   | Access control for who can prove                         |
| Multi-prover model | 2-of-3 agreement across SGX, SP1, RISC0                  |
| Batch proving      | Prove multiple proposals in one proof                    |

### The Real-Time Model

Real-time proving gets rid of all of this. Proof generation is now fast enough (~10-17 seconds) to just include the proof with the proposal:

| Aspect          | Two-Phase (Pacaya)            | Real-Time                              |
| --------------- | ----------------------------- | -------------------------------------- |
| Proposal        | Propose first, prove later    | Propose + prove atomically             |
| Proving window  | Up to 24 hours                | None (immediate)                       |
| Bonds           | Required                      | Removed                                |
| On-chain config | 17 fields                     | 3 fields                               |
| On-chain state  | Multiple slots (ring buffer)  | Single slot (`lastFinalizedBlockHash`) |
| Prover model    | 2-of-3 multi-prover           | Single Zisk GPU prover                 |
| Batch proving   | Supported                     | Removed (one proof per block)          |
| Finality        | Delayed until proof submitted | Instant on proposal                    |

## Protocol Simplification

The `RealTimeInbox` contract replaces the old multi-contract setup with a single contract and very little on-chain state:

**Configuration** -- reduced from 17 to 3 fields:

- `proofVerifier` -- address of the ZK verifier contract
- `signalService` -- address for cross-chain signal relay
- `basefeeSharingPctg` -- base fee sharing percentage

**State** -- single storage slot:

- `bytes32 lastFinalizedBlockHash` -- hash of the last finalized L2 block

**Events** -- single event:

- `ProposedAndProved(proposalHash, lastFinalizedBlockHash, checkpoint, signalSlots)`

## Proof Performance

Proof generation time depends on GPU hardware:

| GPU            | Proof Time  | Notes              |
| -------------- | ----------- | ------------------ |
| 1x L40         | ~40s        | Single GPU         |
| 2x L40         | ~25s        |                    |
| 4x L40         | ~20s        |                    |
| L40s cluster   | ~13-14s     | Production cluster |
| RTX 5090       | **~10-11s** | Current fastest    |

These are end-to-end times including both STARK and SNARK phases. There's no aggregation step since each proof covers exactly one block.

## Further Reading

- [Surge Architecture](./architecture) -- how all components fit together
- [Cross-Chain Composability](./synchronous-composability) -- signal slots and synchronous composability enabled by real-time proving
- [Zisk Prover Setup](../guides/running-surge/provers) -- run the prover yourself
