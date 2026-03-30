---
sidebar_position: 2
title: Cross-Chain Composability
---

# Surge Synchronous Composability

> How Surge enables atomic cross-chain execution within a single L1 block.

## Table of Contents

1. [Overview](#overview)
2. [Key Concepts](#key-concepts)
3. [System Architecture](#system-architecture)
4. [The Swap: End-to-End Example](#the-swap-end-to-end-example)
5. [Deep Dive: How Each Component Works](#deep-dive-how-each-component-works)
6. [The Multicall: Anatomy of a Single Transaction](#the-multicall-anatomy-of-a-single-transaction)
7. [Signal Flow: The Backbone of Composability](#signal-flow-the-backbone-of-composability)
8. [Contract Reference](#contract-reference)

---

## Overview

Traditional rollups suffer from **asynchronous composability**: a user action on L1 that triggers L2 execution (or vice versa) requires multiple blocks, waiting periods, and separate proof submissions. This makes cross-chain DeFi clunky. A swap that touches both L1 and L2 can take minutes to hours.

**Surge eliminates this delay entirely.** Through real-time proving and a builder (Catalyst) that orchestrates L1 and L2 execution simultaneously, Surge achieves **synchronous composability**. A user's L1 action, L2 execution, and L1 settlement all happen atomically within a single L1 block.

### What this means in practice

A user swapping ETH for USDC on L1, where the actual swap happens on an L2 DEX, receives their USDC **in the same L1 block** as their swap initiation. No waiting. No bridging delays. No separate claim transactions.

---

## Key Concepts

### Terminology

| Term            | Definition                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **L2 Call**     | A call to an L2 contract initiated from L1 (e.g., L1 bridge message destined for L2)                                                             |
| **L1 Call**     | A call to an L1 contract initiated from L2 (e.g., L2 swap completion triggering L1 token release)                                                |
| **Signal Slot** | A storage slot in the SignalService that records a cross-chain message. Computed as `keccak256("SIGNAL", chainId, app, signal)`                  |
| **Fast Signal** | An L1 signal slot that the builder injects into the L2 anchor transaction, bypassing the need for a merkle proof                                 |
| **SafeOp**      | A signed operation bundle (target + value + calldata) executed by the user's Safe Wallet                                                         |
| **Catalyst**    | The builder that orchestrates the entire synchronous flow. Receives SafeOps, simulates L2 execution, generates proofs, and submits the multicall |
| **Raiko**       | The real-time ZK prover that generates validity proofs for L2 blocks                                                                             |
| **Multicall**   | The single L1 transaction that atomically bundles: SafeOp execution + L2 proposal/proof + L1 call execution                                      |

### The Core Innovation

In traditional rollups:

```
L1 tx (block N) → wait → L2 block proposed (block N+X) → wait → L2 proven (block N+Y) → L1 settlement (block N+Z)
```

In Surge:

```
Single L1 tx (block N): SafeOp + propose(L2 block + proof) + L1 Calls → done
```

---

## System Architecture

```
                         ┌─────────────────────────────────────────────────────────┐
                         │                    L1 (Ethereum)                        │
                         │                                                         │
  User ──sign──► Safe Wallet ──► L1 Vault ──► Bridge ──► SignalService             │
                         │                                         │               │
                         │              RealTimeInbox.propose() ◄──┘               │
                         │                │         │                              │
                         │     verify signal slots  save checkpoint                │
                         │                │                                        │
                         │     Bridge.processMessage() ◄── (L1 Calls from L2)      │
                         │         │                                               │
                         │    L1 Vault.onMessageInvocation()                       │
                         │         │                                               │
                         │    USDC transferred to user                             │
                         └─────────────────────────────────────────────────────────┘
                                          ▲                    │
                                          │ ZK proof           │ signal slots
                                          │                    ▼
                         ┌─────────────────────────────────────────────────────────┐
                         │                     L2 (Surge)                          │
                         │                                                         │
                         │  Anchor(checkpoint, signalSlots)                        │
                         │      │                                                  │
                         │      ▼                                                  │
                         │  L2 SignalService.setSignalsReceived() ← fast signals   │
                         │      │                                                  │
                         │      ▼                                                  │
                         │  L2 Bridge.processMessage() ← (now signal is "received")│
                         │      │                                                  │
                         │      ▼                                                  │
                         │  L2 Vault → SimpleDEX.swapETHForToken()                 │
                         │      │                                                  │
                         │      ▼                                                  │
                         │  L2 Bridge.sendMessage() → emits L1 Call signal         │
                         └─────────────────────────────────────────────────────────┘
                                          ▲
                                          │ simulate + build block
                                          │
                         ┌─────────────────────────────────────────────────────────┐
                         │                  Builder (Catalyst)                     │
                         │                                                         │
                         │  1. Receive SafeOps via surge_sendUserOp RPC            │
                         │  2. Execute SafeOps on L1 → capture emitted signals     │
                         │  3. Simulate L2 block with fast signals in anchor       │
                         │  4. Capture L2→L1 signals (L1 Calls)                    │
                         │  5. Prove L2 block via Raiko                            │
                         │  6. Bundle: SafeOp + propose(proof) + L1 Calls          │
                         │  7. Submit as single multicall to L1                    │
                         └─────────────────────────────────────────────────────────┘
```

---

## The Swap: End-to-End Example

Let's trace an **ETH → USDC** swap through the entire system.

### Actors

- **Alice**: User who wants to swap 1 ETH for USDC
- **Safe Wallet**: Alice's smart contract wallet on L1
- **L1 Vault**: Holds canonical USDC reserves on L1
- **L2 Vault**: Handles swap execution on L2
- **SimpleDEX**: AMM on L2 with ETH/USDC liquidity
- **Catalyst**: The builder orchestrating everything

### The Flow

#### Phase 1: Alice Signs a SafeOp

Alice connects her wallet to the cross-chain DEX UI. She wants to swap 1 ETH for USDC.

The UI builds a **SafeOp**, a signed intent that will be executed by her Safe Wallet:

```typescript
// Single SafeOp for ETH → USDC swap
{
  target: L1_VAULT_ADDRESS,
  value: 1 ether,
  data: encodeFunctionData("swapETHForToken", [minUSDCOut, recipient])
}
```

Alice signs this SafeOp using EIP-712 typed data. The signature proves she authorized this operation. The signed SafeOp is sent to the **Catalyst builder** via `surge_sendUserOp` JSON-RPC.

> **Important**: Alice never submits an L1 transaction herself. The builder pays for gas and submits everything.

#### Phase 2: Catalyst Executes the SafeOp on L1

The builder receives Alice's signed SafeOp and begins orchestrating:

**Step 1 - Execute SafeOp on L1**: The builder calls `Safe.execTransaction()` which:

1. Verifies Alice's EIP-712 signature
2. Calls `L1Vault.swapETHForToken{value: 1 ETH}(minUSDCOut, recipient)`
3. The L1 Vault sends a bridge message to the L2 Vault: `Bridge.sendMessage()`
4. The Bridge calls `SignalService.sendSignal(msgHash)`, which writes to a **signal slot** on L1

At this point, a **signal slot** on L1 now contains the message hash. This slot is the key to everything that follows.

#### Phase 3: Catalyst Builds the L2 Block

The builder knows which signal was emitted (it just executed the SafeOp). It now:

1. **Reads the signal slot** from L1 state
2. **Constructs an L2 block** where the anchor transaction includes this signal slot as a "fast signal"
3. **Simulates L2 execution** to determine what happens:

Inside the simulated L2 block:

- `Anchor.anchorV4WithSignalSlots(checkpoint, [signalSlot])` is the first transaction
- This calls `SignalService.setSignalsReceived([signalSlot])`, marking the L1 message as "received" on L2 **without a merkle proof**
- `Bridge.processMessage()` can now execute because the signal is marked as received
- The bridge invokes `L2Vault.onMessageInvocation()` with the swap data
- The L2 Vault calls `SimpleDEX.swapETHForToken{value: 1 ETH}(minUSDCOut)` (the actual AMM swap)
- The L2 Vault sends a **completion message** back to L1: `Bridge.sendMessage()` containing `(SWAP_ETH_TO_TOKEN, recipient, tokenAmount)`
- This emits a new signal on L2, the **L1 Call**

The builder now has:

- The constructed L2 block (as a blob)
- The L2 state root after execution
- The L2→L1 signal (the completion message)

#### Phase 4: Real-Time Proving via Raiko

The builder sends the L2 block to **Raiko**, which generates a ZK validity proof. The proof attests that:

- Starting from `lastFinalizedBlockHash` (the previous L2 chain head)
- Executing the proposed L2 block (with the given signal slots in the anchor)
- Results in the claimed checkpoint (block hash + state root)

This proof is generated in real-time, fast enough to be included in the same L1 block.

#### Phase 5: The Atomic Multicall

The builder now has everything needed. It constructs a **single L1 transaction** (multicall) with three calls:

```
Multicall Transaction:
├── Call 1: Safe.execTransaction(safeOp, signature)
│   └── Executes Alice's swap → emits L1 signal (L2 Call)
│
├── Call 2: RealTimeInbox.propose(data, checkpoint, proof)
│   ├── Verifies signal slots exist on L1 (from Call 1)
│   ├── Verifies ZK proof from Raiko
│   ├── Saves checkpoint to SignalService
│   └── Updates lastFinalizedBlockHash
│
└── Call 3: Bridge.processMessage(completionMessage, proof=[])
    ├── Checks signal received (proof=empty → checks _receivedSignals mapping)
    ├── Signal was set by propose() via setSignalsReceived()
    ├── Invokes L1Vault.onMessageInvocation()
    └── L1 Vault transfers USDC to Alice
```

**This entire multicall executes atomically in a single L1 block.**

#### Result

Alice receives USDC on L1 in the same block where her SafeOp was executed. The L2 DEX swap, L2 proof generation, and L1 settlement all happened within that single block. From Alice's perspective, it's indistinguishable from a native L1 swap, except the liquidity and pricing came from L2.

---

## Deep Dive: How Each Component Works

### Safe Wallet & SafeOps

Users interact with Surge through **Safe Wallets** — [Safe\{Wallet\}](https://safe.global/) smart contract accounts that support gasless, builder-executed transactions.

**How it works:**

- Each user has a Safe Wallet on L1 (their on-chain identity)
- Users sign SafeOps using EIP-712 typed data, authorizing the builder to execute transactions on their behalf
- The Safe Wallet verifies the signature and executes the operation via `execTransaction()`
- Can hold ETH and tokens like any Safe

**Why Safe Wallets instead of regular transactions?**

The builder needs to control the ordering and atomicity of all calls within the multicall. If the user submitted their own L1 transaction, it would land in a separate block or position, breaking the synchronous guarantee. SafeOps let the builder include the user's intent exactly where it needs to be in the multicall.

### Signal Service & Signal Slots

The **SignalService** is the backbone of cross-chain communication.

**Sending a signal** (`SignalService.sol:sendSignal`):

```solidity
function sendSignal(bytes32 _signal) external returns (bytes32 slot_) {
    slot_ = keccak256(abi.encodePacked("SIGNAL", block.chainid, msg.sender, _signal));
    assembly { sstore(slot_, _signal) }
    emit SignalSent(msg.sender, _signal, slot_, _signal);
}
```

A signal is simply a storage write at a deterministic slot. The slot is derived from `(chainId, sender, signal)`.

**Verifying a signal was received** (`SignalService.sol:_verifySignalReceived`):

There are two paths for verification:

1. **Merkle proof path**: Provide a storage proof against a known state root (traditional, slow)
2. **Fast path (empty proof)**: Check the `_receivedSignals[slot]` mapping directly

```solidity
if (_proof.length == 0) {
    require(_receivedSignals[slot], SS_SIGNAL_NOT_RECEIVED());
    return;
}
// ... else do full merkle verification
```

The fast path is what enables synchronous composability. The authorized syncer (Inbox on L1, Anchor on L2) can set signals as received directly, bypassing merkle proofs.

**Setting fast signals** (`SignalService.sol:setSignalsReceived`):

```solidity
function setSignalsReceived(bytes32[] calldata _signalSlots) external {
    if (msg.sender != _authorizedSyncer) revert SS_UNAUTHORIZED();
    for (uint256 i = 0; i < _signalSlots.length; i++) {
        _receivedSignals[_signalSlots[i]] = true;
    }
}
```

Only the authorized syncer can call this. On L1, it's the `RealTimeInbox`. On L2, it's the `Anchor`.

### Real-Time Inbox

The **RealTimeInbox** (`contracts/layer1/core/impl/RealTimeInbox.sol`) combines proposal and proof into a single atomic operation.

```solidity
function propose(
    bytes calldata _data,
    ICheckpointStore.Checkpoint calldata _checkpoint,
    bytes calldata _proof
) external nonReentrant {
    // 1. Build proposal from input data
    (bytes32 proposalHash, Proposal memory proposal, bytes32[] memory signalSlots)
        = _buildProposal(_data);

    // 2. Verify signal slots exist on L1 SignalService
    //    (these are the L2 Calls, messages sent from L1 to L2)
    _verifySignalSlots(signalSlots);

    // 3. Verify ZK proof and finalize
    _verifyAndFinalize(proposalHash, prevFinalizedBlockHash, _checkpoint, _proof);
}
```

The `ProposeInput` includes:

- **blobReference**: Points to the L2 block data (as an EIP-4844 blob)
- **signalSlots**: L1 signal slots to relay to L2 as fast signals
- **maxAnchorBlockNumber**: L1 block for anchor reference

The `Commitment` that gets proven:

```solidity
struct Commitment {
    bytes32 proposalHash;           // What was proposed
    bytes32 lastFinalizedBlockHash; // Starting state
    Checkpoint checkpoint;          // Resulting state (blockHash + stateRoot)
}
```

### Anchor Contract (L2)

The **Anchor** (`contracts/layer2/core/Anchor.sol`) is the L2 system contract that syncs L1 state into L2.

```solidity
function anchorV4WithSignalSlots(
    ICheckpointStore.Checkpoint calldata _checkpoint,
    bytes32[] calldata _signalSlots
) external onlyValidSender nonReentrant {
    // Save L1 checkpoint data
    _saveCheckpointBlock(_checkpoint.blockNumber, _checkpoint.blockHash, _checkpoint.stateRoot);

    // Set L1 signal slots as received on L2 (fast signals!)
    if (_signalSlots.length > 0) {
        ISignalService(address(checkpointStore)).setSignalsReceived(_signalSlots);
    }
}
```

This is the critical link: signal slots from L1 are injected into L2 via the anchor, making L1 messages instantly "received" on L2 without merkle proofs.

### Bridge

The **Bridge** (`contracts/shared/bridge/Bridge.sol`) handles cross-chain message passing.

**Sending** (e.g., L1→L2):

```solidity
function sendMessage(Message calldata _message) external payable returns (bytes32 msgHash_) {
    // ... validation ...
    msgHash_ = hashMessage(message_);
    emit MessageSent(msgHash_, message_);
    signalService.sendSignal(msgHash_);  // <-- writes to signal slot
}
```

**Processing** (e.g., on L2 after signal is received):

```solidity
function processMessage(Message calldata _message, bytes calldata _proof) external {
    // Prove signal was received (empty proof → check _receivedSignals mapping)
    _proveSignalReceived(signalService, msgHash, _message.srcChainId, _proof);

    // Invoke the target contract
    _invokeMessageCall(_message, msgHash, gasLimit, isRelayer);
}
```

When `_proof` is empty, the bridge checks `_receivedSignals[slot]` directly. This is set by the anchor's fast signal injection, completing the synchronous loop.

### Cross-Chain DEX Contracts

**L1 Vault** (`CrossChainSwapVaultL1.sol`):

- Holds canonical USDC on L1
- Receives swap requests, sends bridge messages to L2
- Receives swap completions from L2, releases USDC to users

**L2 Vault** (`CrossChainSwapVaultL2.sol`):

- Receives bridge messages from L1
- Executes swaps on the SimpleDEX
- Sends completion messages back to L1

**SimpleDEX** (`SimpleDEX.sol`):

- Constant-product AMM (x \* y = k) on L2
- Provides ETH/USDC liquidity

---

## The Multicall: Anatomy of a Single Transaction

The builder's multicall is the culmination of the synchronous composability system. Here's the exact sequence for an ETH→USDC swap:

### Call 1: SafeOp Execution (the "L2 Call")

```
Safe.execTransaction(
  to: L1Vault, value: 1 ETH, data: swapETHForToken(minOut, recipient),
  signature
)
```

**What happens inside:**

1. `L1Vault.swapETHForToken()` encodes swap data and calls `Bridge.sendMessage()`
2. Bridge computes `msgHash = hash(message)` and calls `SignalService.sendSignal(msgHash)`
3. SignalService writes `msgHash` to slot `keccak256("SIGNAL", l1ChainId, bridgeAddr, msgHash)`

**Output:** A signal slot now exists on L1 containing the swap message hash.

### Call 2: propose() (L2 Block + Proof)

```
RealTimeInbox.propose(
  encode({ blobReference, signalSlots: [swapSignalSlot], maxAnchorBlockNumber }),
  checkpoint: { blockNumber, blockHash, stateRoot },
  proof: raikoZKProof
)
```

**What happens inside:**

1. `_verifySignalSlots()` checks that each signal slot in the proposal was actually sent on L1 (from Call 1)
2. `_buildProposal()` constructs the proposal hash including the signal slots hash
3. `_verifyAndFinalize()`:
   - Builds a `Commitment(proposalHash, lastFinalizedBlockHash, checkpoint)`
   - Verifies the ZK proof against this commitment via `SurgeVerifier`
   - Calls `SignalService.saveCheckpoint()` to persist the L2 state
   - Updates `lastFinalizedBlockHash` to the new chain head

**The L2 block that was proven contains:**

- An anchor transaction that calls `anchorV4WithSignalSlots(checkpoint, signalSlots)`
  - This sets the swap signal as "received" on the L2 SignalService
- A `Bridge.processMessage()` call that:
  - Verifies the signal (empty proof → checks `_receivedSignals` → true!)
  - Invokes `L2Vault.onMessageInvocation()` with the swap data
  - L2 Vault executes the DEX swap: `SimpleDEX.swapETHForToken()`
  - L2 Vault sends completion message back: `Bridge.sendMessage()` (L1 Call)

**Output:** L2 state is finalized on L1. The L2→L1 completion signal becomes provable.

### Call 3: L1 Call Execution

```
Bridge.processMessage(completionMessage, proof=[])
```

**What happens inside:**

1. Bridge calls `SignalService.proveSignalReceived()` with empty proof
2. Empty proof → checks `_receivedSignals[slot]`
3. This slot was set by `RealTimeInbox` which called `SignalService.setSignalsReceived()` during `propose()` in Call 2
4. Signal is verified! Bridge invokes the target:
   - `L1Vault.onMessageInvocation(data)`
   - Decodes: `(SWAP_ETH_TO_TOKEN, recipient, tokenAmount)`
   - `USDC.transfer(recipient, tokenAmount)`

**Output:** Alice receives her USDC on L1.

---

## Signal Flow: The Backbone of Composability

The entire system revolves around how signals flow between L1 and L2. Here's the complete signal lifecycle:

### L1 → L2 Signal Flow (L2 Calls)

```
1. L1 Contract calls Bridge.sendMessage()
2. Bridge calls SignalService.sendSignal(msgHash)
3. Signal slot written: storage[keccak256("SIGNAL", chainId, bridge, msgHash)] = msgHash
4. Builder reads this signal slot
5. Builder includes signal slot in ProposeInput.signalSlots
6. RealTimeInbox.propose() verifies slot exists (isSignalSent)
7. L2 block's anchor calls setSignalsReceived([slot]) on L2 SignalService
8. L2 Bridge can now processMessage() with empty proof (fast path)
```

### L2 → L1 Signal Flow (L1 Calls)

```
1. L2 Contract calls Bridge.sendMessage() (inside proven L2 block)
2. L2 Bridge calls L2 SignalService.sendSignal(msgHash)
3. L2 state root contains this signal
4. RealTimeInbox.propose() saves checkpoint with this state root
5. Builder knows the L2 signal exists (it simulated the block)
6. Builder includes Bridge.processMessage() as Call 3 in the multicall
7. L1 Bridge verifies signal via the freshly-saved checkpoint
8. L1 target contract is invoked
```

### Why "Fast Signals" Are Safe

Fast signals bypass merkle proofs, but they are still secured by the ZK validity proof:

1. The builder **cannot fabricate signals**. `_verifySignalSlots()` in the inbox checks that each signal slot was actually written on L1 before including it in the proposal.

2. The builder **cannot fake L2 execution**. The ZK proof verifies that the L2 block, when executed with the given signal slots, produces the claimed state root. If the builder includes a signal slot that wasn't actually set in the anchor, the proof will fail.

3. The **checkpoint is only saved after proof verification**. L1 Calls (Call 3) can only succeed if the proposal was proven valid.

4. The entire multicall is **atomic**. If any call fails, the entire transaction reverts. No partial state corruption.

---

## Contract Reference

| Contract                  | Chain   | Purpose                                                  |
| ------------------------- | ------- | -------------------------------------------------------- |
| `Safe Wallet`             | L1      | Per-user smart contract wallet, executes signed SafeOps  |
| `CrossChainSwapVaultL1`   | L1      | Holds USDC reserves, initiates/settles cross-chain swaps |
| `Bridge`                  | L1 & L2 | Cross-chain message passing via signal service           |
| `SignalService`           | L1 & L2 | Signal storage, verification, and fast signal injection  |
| `RealTimeInbox`           | L1      | Atomic propose + prove for L2 blocks                     |
| `Anchor`                  | L2      | Syncs L1 state into L2, injects fast signals             |
| `CrossChainSwapVaultL2`   | L2      | Receives bridge messages, executes DEX swaps             |
| `SimpleDEX`               | L2      | AMM providing swap liquidity on L2                       |
| `SurgeVerifier`           | L1      | Verifies ZK proofs from Raiko                            |

### Key File Paths

```
contracts/
├── layer1/
│   ├── core/
│   │   ├── impl/RealTimeInbox.sol
│   │   └── iface/IRealTimeInbox.sol
│   └── surge/cross-chain-dex/
│       └── CrossChainSwapVaultL1.sol
├── layer2/
│   ├── core/Anchor.sol
│   └── surge/cross-chain-dex/
│       ├── CrossChainSwapVaultL2.sol
│       └── SimpleDEX.sol
└── shared/
    ├── bridge/Bridge.sol
    └── signal/SignalService.sol
```
