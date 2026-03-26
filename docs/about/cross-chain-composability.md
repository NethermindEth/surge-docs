---
sidebar_position: 6
title: Cross-Chain Composability
---

# Cross-Chain Composability

Surge lets L2 contracts **read L1 state directly** through two mechanisms: **signal slots** and **L1SLOAD**. Both work because of real-time proving -- proofs are generated in seconds and cover the latest L1 state, so L2 always has a recent, proven view of L1.

## Signal Slots

Signal slots relay L1 signals to L2 within the same block proposal.

### How It Works

```
  L1                                         L2
  ┌──────────────┐                          ┌──────────────────────┐
  │ Contract A   │                          │ anchorV4WithSignal   │
  │ sends signal │──┐                       │ Slots(...)           │
  └──────────────┘  │                       │                      │
                    │  signalSlots[]        │  → signals available │
                    ├─────────────────────> │    to L2 contracts   │
                    │  included in          │    in same block     │
  ┌──────────────┐  │  proposal + proof     └──────────────────────┘
  │ isSignalSent │──┘
  │ (verified)   │
  └──────────────┘
```

1. The proposer specifies `signalSlots[]` (L1 signal slot hashes) in the block proposal
2. Each slot is verified on L1 via `isSignalSent()` before inclusion
3. The signal slots are hashed into the proposal and covered by the ZK proof
4. On L2, signals are relayed through the `anchorV4WithSignalSlots` anchor transaction (first tx in every L2 block)
5. L2 contracts can read these signals immediately in the same block

### Use Cases

- **Bridge finality:** L1 deposit signals are available on L2 within the same proof cycle
- **Cross-chain messaging:** L1 contract state changes are reflected on L2 in near real-time
- **Governance relay:** L1 governance decisions can be enforced on L2 without delay

## L1SLOAD

L1SLOAD is a precompile that lets L2 contracts **read L1 storage slots directly**.

### How It Works

```solidity
// On L2, read the balance of an L1 token contract
bytes32 balance = L1SLOAD(l1TokenAddress, balanceSlot);
```

Under the hood:
1. The L2 execution client receives the L1SLOAD call during block execution
2. The anchor transaction in the L2 block includes the L1 state root (from the anchor block)
3. The execution client resolves the storage read against this trusted L1 state
4. Raiko (the prover) verifies the L1 state access as part of the ZK proof, walking from the anchor block to the target block

### Design

Raiko uses the **anchor block** as the trust root (its state root is included in every L2 block's anchor transaction). From this anchor:
- If the L1SLOAD target is a **newer** block: Raiko walks **forward** from the anchor
- If the L1SLOAD target is an **older** block: Raiko walks **backward** from the anchor

Either way, the anchor block is the trusted starting point, and the L1 state read gets verified inside the ZK proof.

### Implementation

L1SLOAD is implemented across the full stack:
- **NMC (Nethermind Client):** Handles L1SLOAD during block execution
- **Alethia-Reth:** Handles L1SLOAD during block execution
- **Raiko:** Verifies L1 state access within the ZK proof

## SyncCompose DEX Demo

The SyncCompose DEX is a working demo that shows cross-chain composability in action:

- **Cross-chain token swaps** between L1 (Gnosis) and L2 (Surge) assets
- **Real-time proof status** shown in the UI (e.g., "Generating ZK Proof")
- **End-to-end flow:** swap initiation → proof generation (~10-17s) → finalized on L1
- Available at [synccomposedex.realtime.surge.wtf](https://synccomposedex.realtime.surge.wtf)

## Further Reading

- [Real-Time Proving](./real-time-proving) -- the proving model that makes cross-chain composability practical
- [Surge Architecture](./architecture) -- how the components fit together
