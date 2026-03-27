---
sidebar_position: 1
title: Surge Architecture
---

# Surge Architecture Overview

> How the off-chain and on-chain entities interact to deliver real-time proving and synchronous composability.

## Table of Contents

1. [Entities](#entities)
2. [Off-Chain Pipeline](#off-chain-pipeline)
3. [On-Chain Contracts](#on-chain-contracts)
4. [Block Lifecycle](#block-lifecycle)
5. [Signal Relay Mechanism](#signal-relay-mechanism)
6. [Reorgs and Recovery](#reorgs-and-recovery)

---

## Entities

### Off-Chain

| Entity                 | Role                                                                                                                                                                                                                   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **User**               | Signs UserOps (intent bundles) and sends them to the builder. Never submits L1 transactions directly.                                                                                                                  |
| **Catalyst (Builder)** | Receives UserOps, simulates L2 execution, requests proofs, and submits the final multicall to L1. The central orchestrator.                                                                                            |
| **Raiko (Prover)**     | Receives block proving requests from Catalyst. Delegates proof generation to the zkVM and returns validity proofs.                                                                                                     |
| **Zisk (zkVM)**        | The zero-knowledge virtual machine that Raiko uses under the hood to generate ZK validity proofs for L2 blocks.                                                                                                        |
| **Driver (L2 Node)**   | The L2 execution client. Receives preconfirmed blocks from Catalyst, executes them, and resyncs its canonical chain when proposals are submitted to L1. Reorgs out blocks that cannot be proven or have stale anchors. |

### On-Chain (L1)

| Contract               | Role                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **RealTimeInbox**      | The L1 entry point for proposals. Accepts `propose(data, checkpoint, proof)` calls that atomically submit an L2 block, verify its proof, and finalize state. |
| **SurgeVerifier**      | Routes proof verification to the correct internal verifier (Zisk, SP1, RISC0). Supports multi-proof thresholds.                                              |
| **SignalService (L1)** | Stores cross-chain signals as deterministic storage slots. Manages checkpoints. The authorized syncer is the RealTimeInbox.                                  |
| **Bridge (L1)**        | Sends and processes cross-chain messages. Sends messages by writing signal slots; processes messages by verifying signal receipt.                            |

### On-Chain (L2)

| Contract               | Role                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Anchor**             | The L2 system contract executed as the first transaction in every block. Syncs L1 checkpoints and injects fast signal slots. The authorized syncer for L2 SignalService. |
| **SignalService (L2)** | Stores L2 signals and receives fast signals from the Anchor. Enables proof-free verification for builder-injected signals.                                               |
| **Bridge (L2)**        | Processes inbound L1 messages (proof-free via fast signals injected by Anchor) and sends outbound L2 messages that become L1 Calls (proven via merkle proofs on L1).     |

---

## System Overview

Before diving into the pipeline details, here's how the layers connect:

```
┌─────────────────── L1 (Ethereum / Gnosis) ──────────────────┐
│                                                               │
│  Multicall tx (atomic):                                       │
│    Call 1: UserOpsSubmitter.executeBatch()                     │
│    Call 2: RealTimeInbox.propose(data, checkpoint, proof)     │
│    Call 3: Bridge.processMessage() (L1 Calls)                 │
│                                                               │
│  Contracts: RealTimeInbox, SurgeVerifier, SignalService,      │
│             Bridge, UserOpsSubmitter                           │
│  Repo: surge-taiko-mono/packages/protocol/                    │
└───────────────────────────┬───────────────────────────────────┘
                            │ ProposedAndProved event
                            ▼
┌─────────────────── L2 (Surge) ──────────────────────────────┐
│                                                               │
│  Execution: Nethermind (NMC) or Alethia-Reth                  │
│  Consensus: Driver (taiko-client --fork realtime)             │
│  System tx: anchorV4WithSignalSlots(checkpoint, signalSlots)  │
│                                                               │
│  Repos: nethermind, alethia-reth, surge-taiko-mono            │
└───────────────────────────────────────────────────────────────┘
                            ▲
                            │ preconf blocks + proof requests
┌─────────────────── Off-Chain ───────────────────────────────┐
│                                                               │
│  Catalyst (Builder): receives UserOps via surge_sendUserOp    │
│    RPC, simulates L1+L2, requests proof, builds multicall     │
│  Raiko (Prover): generates ZK proofs via Zisk GPU backend     │
│    API: POST /v3/proof/batch/realtime                         │
│                                                               │
│  Repos: Catalyst, raiko                                       │
└───────────────────────────────────────────────────────────────┘
```

For the full list of components and repositories, see [Components & Repositories](./components).

---

## Off-Chain Pipeline

The off-chain pipeline is the sequence of steps that happen before anything lands on L1.

### Step 1: User Submits Intent

The user signs a batch of `UserOp` structs using EIP-712 typed data and sends them to Catalyst via the `surge_sendUserOp` JSON-RPC method.

```
User ---(signed UserOps)---> Catalyst
```

The user never interacts with L1 directly. Catalyst pays gas and controls transaction ordering.

### Step 2: Catalyst Simulates Execution

Catalyst performs an execution simulation to determine the full effects of including this UserOp:

1. **Execute the UserOp against L1 state** to determine which signal slots are emitted (these are the L2 Calls).
2. **Build an L2 block** that includes:
   - An anchor transaction with the emitted signal slots as fast signals
   - Bridge message processing transactions (now possible because signals are marked as received)
   - Any resulting L2 application logic
3. **Capture L2 output signals** emitted during execution (these are the L1 Calls).

After simulation, Catalyst knows the full L2 state root and all cross-chain effects.

### Step 3: Catalyst Preconfs to Driver

Catalyst sends the constructed L2 block to the Driver as a **preconfirmation**. The Driver tentatively executes the block and extends its local chain. This gives users and applications soft confirmation before the block is proven and submitted to L1.

```
Catalyst ---(preconf block)---> Driver ---(tentative execution)---> local chain tip
```

The Driver treats preconfirmed blocks as speculative. They become canonical only after L1 submission.

### Step 4: Raiko Proves the Block

Catalyst sends a proving request to Raiko containing the L2 block data and the expected commitment.

```
Catalyst ---(prove request)---> Raiko ---(zkVM execution)---> Zisk
                                  |
                                  <---(ZK validity proof)---
```

The **Commitment** that gets proven binds three things together:

- `proposalHash`: the hash of the proposed L2 block (including signal slots)
- `lastFinalizedBlockHash`: the starting L2 state (chain head before this block)
- `checkpoint`: the resulting L2 state (block hash + state root after execution)

Raiko delegates the actual proof computation to **Zisk**, the zkVM. Zisk re-executes the L2 block inside the ZK circuit and produces a cryptographic proof that the claimed state transition is valid.

### Step 5: Catalyst Submits the Multicall

With the proof in hand, Catalyst constructs a single L1 transaction (multicall) containing three sequential calls:

```
L1 Transaction (Multicall):
  Call 1: UserOp execution       (emits L1 signal slots, the L2 Calls)
  Call 2: RealTimeInbox.propose  (verifies slots, verifies proof, saves L2 checkpoint)
  Call 3: L1 Call execution      (proves L2 signals via storage proofs against the saved checkpoint)
```

This transaction is submitted to L1. All three calls succeed or fail atomically.

### Step 6: Driver Resyncs

When the proposal lands on L1, the Driver observes the `ProposedAndProved` event and resyncs:

- If the submitted block matches the preconfirmed block, the Driver simply marks it as finalized.
- If the preconfirmed chain diverged (e.g., a different proposal was submitted), the Driver **reorgs** back to the last finalized state and replays from the submitted proposal.

```
Driver: observes L1 event --> if match: finalize | if diverged: reorg + replay
```

---

## On-Chain Contracts

### RealTimeInbox

The core L1 contract. Its `propose()` function performs three operations atomically:

1. **Build proposal**: Decode the `ProposeInput`, validate the anchor block reference, verify that all signal slots exist on L1 (`isSignalSent`), and hash everything into a `proposalHash`.

2. **Verify proof**: Construct a `Commitment` from the proposal hash, the previous finalized block hash, and the new checkpoint. Pass this to `SurgeVerifier.verifyProof()`.

3. **Finalize state**: Save the checkpoint to SignalService (making L2 state root available on L1), update `lastFinalizedBlockHash`, and emit `ProposedAndProved`.

The checkpoint saved during `propose()` makes the L2 state root available on L1. Catalyst then builds ETH storage proofs (merkle proofs) against this freshly-saved state root to prove L2-originated signals exist, enabling Call 3 (L1 Call execution) within the same transaction.

### SurgeVerifier

A routing layer that supports multiple proof systems simultaneously:

- **Zisk** (bit flag `ZISK_RETH = 0b00000100`): the primary zkVM
- **SP1** (bit flag `SP1_RETH = 0b00000010`): alternative proof system
- **RISC0** (bit flag `RISC0_RETH = 0b00000001`): alternative proof system

Each proof submission contains `SubProof[]` entries, each specifying a proof type flag and proof data. The verifier routes each sub-proof to the correct internal verifier contract.

A configurable `numProofsThreshold` can require multiple independent proof systems to agree before finalization (multi-proof security).

### SignalService

Deployed on both L1 and L2 with identical logic but different authorized syncers.

**Core operations:**

- `sendSignal(signal)`: Writes `signal` to a deterministic storage slot `keccak256("SIGNAL", chainId, sender, signal)`. Used by the Bridge when sending messages.

- `setSignalsReceived(slots[])`: Marks signal slots as received in the `_receivedSignals` mapping. Only callable by the authorized syncer (Anchor on L2). This is the "fast signal" path used for L1-to-L2 message relay.

- `proveSignalReceived(chainId, app, signal, proof)`: Verifies a signal was sent on a remote chain. If `proof` is empty, checks `_receivedSignals` directly (fast path). Otherwise, performs full merkle verification against a saved checkpoint.

- `saveCheckpoint(checkpoint)`: Persists an L2 checkpoint (block number, block hash, state root). Only callable by the authorized syncer.

### Bridge

Deployed on both L1 and L2. Handles message lifecycle:

- `sendMessage()`: Hashes the message, emits `MessageSent`, and calls `SignalService.sendSignal(msgHash)`.
- `processMessage()`: Verifies the message signal was received on the local chain (via `proveSignalReceived`), then invokes the target contract via `onMessageInvocation()`.

The Bridge is the user-facing abstraction. Application contracts interact with the Bridge, which uses SignalService under the hood.

### Anchor

The L2 system contract. Executed by the `GOLDEN_TOUCH_ADDRESS` as the first transaction in every L2 block.

- `anchorV4WithSignalSlots(checkpoint, signalSlots)`: Saves an L1 checkpoint to the L2 SignalService and injects fast signal slots. This is the function used in real-time proving mode.

The anchor is what connects L1 state to L2. By injecting signal slots, it makes L1 bridge messages instantly processable on L2 without waiting for merkle proofs.

---

## Block Lifecycle

```
1. UserOp received
   User signs ops --> Catalyst receives via surge_sendUserOp

2. Simulation
   Catalyst executes UserOp on L1 (simulation)
   Catalyst builds L2 block with fast signals in anchor
   Catalyst simulates L2 execution, captures output signals

3. Preconfirmation
   Catalyst sends block to Driver as preconf
   Driver tentatively executes and extends local chain

4. Proving
   Catalyst sends block to Raiko
   Raiko delegates to Zisk (zkVM)
   Zisk generates ZK validity proof
   Proof returned to Catalyst

5. Submission
   Catalyst builds multicall:
     - Call 1: Execute UserOps on L1 (emit L2 Call signals)
     - Call 2: RealTimeInbox.propose() (verify proof, save L2 checkpoint to L1)
     - Call 3: Execute L1 Calls (prove L2 signals via storage proofs against saved checkpoint)
   Multicall submitted atomically to L1

6. Finalization
   Driver observes ProposedAndProved event on L1
   If preconf matches: mark as finalized
   If preconf diverges: reorg to last finalized, replay from submitted proposal
```

---

## Signal Relay Mechanism

Signals are the primitive that enables cross-chain communication. Every bridge message becomes a signal slot.

### L1 to L2 (L2 Calls)

```
L1 Bridge.sendMessage()
  --> L1 SignalService.sendSignal(msgHash)
  --> signal slot written to L1 storage

Catalyst reads the signal slot from L1 state

RealTimeInbox.propose() verifies slot exists (isSignalSent)
  --> signal slot included in ProposeInput.signalSlots
  --> slot hash becomes part of the proposal (proven by ZK proof)

L2 Anchor.anchorV4WithSignalSlots()
  --> L2 SignalService.setSignalsReceived([slot])
  --> signal marked as "received" on L2

L2 Bridge.processMessage(msg, proof=[])
  --> proof is empty, checks _receivedSignals mapping
  --> signal found, message processed
  --> target contract invoked via onMessageInvocation()
```

### L2 to L1 (L1 Calls)

```
L2 Bridge.sendMessage()
  --> L2 SignalService.sendSignal(msgHash)
  --> signal exists in L2 state root

RealTimeInbox.propose() saves checkpoint containing L2 state root
  --> L2 state root now available on L1 via SignalService.saveCheckpoint()

Catalyst builds ETH storage proofs against the saved L2 state root
  --> proves the L2 signal slot exists in L2 SignalService storage

L1 Bridge.processMessage(msg, proof=storageProof)
  --> SignalService.proveSignalReceived() with merkle proof
  --> proof verified against the checkpoint's L2 state root
  --> signal confirmed, message processed
  --> target contract invoked via onMessageInvocation()
```

### Why Fast Signals Are Secure

Fast signals skip merkle proofs but remain secured by the ZK validity proof:

1. **L1 signals cannot be fabricated.** `_verifySignalSlots()` checks that each slot was actually written on L1 before accepting the proposal.

2. **L2 execution cannot be faked.** The ZK proof verifies that executing the L2 block (with the given anchor signal slots) produces the claimed state root.

3. **State is only committed after proof verification.** The checkpoint is saved and `lastFinalizedBlockHash` is updated only after the proof passes.

4. **The multicall is atomic.** If any call fails, the entire transaction reverts.

---

## Reorgs and Recovery

The Driver maintains a speculative chain built from Catalyst's preconfirmations. This chain can diverge from what actually gets submitted to L1.

### When Reorgs Happen

- **Unprovable blocks**: If Raiko/Zisk cannot generate a valid proof for a preconfirmed block (e.g., due to a bug or invalid state transition), the block cannot be submitted. The Driver reorgs it out.

- **Stale anchors**: Each proposal references an L1 anchor block via `maxAnchorBlockNumber`. The inbox verifies `blockhash(maxAnchorBlockNumber) != 0`, which fails for blocks older than 256 L1 blocks. If the builder takes too long to submit, the anchor becomes stale and the proposal is rejected. The Driver reorgs.

- **Competing submissions**: If a different proposal for the same slot is submitted by another builder, the Driver reorgs its preconfirmed chain back to the last finalized state and replays from the winning proposal.

### Recovery Flow

```
Driver detects divergence (L1 submission != preconfirmed chain)
  --> Revert to lastFinalizedBlockHash
  --> Re-derive chain from the ProposedAndProved event
  --> Apply the submitted L2 block
  --> Resume accepting new preconfs from Catalyst
```

The key invariant: the Driver's canonical chain always matches what was proven and submitted to L1. Preconfirmed blocks are speculative optimism, not commitment.
