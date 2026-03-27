---
sidebar_position: 0
title: "Components & Repositories"
---

# Components & Repositories

Overview of every component in the Surge stack, what it does, where the code lives, and which branch to use.

## Component Diagram

```
User --(UserOps)----> Catalyst --(proof req)----> Raiko/Zisk
                          |                           |
                    simulate L1+L2                GPU proving
                          |                        (~10-17s)
                          v                           |
                    Multicall to L1 <-----------------+
                    +------+-------+
                    |  propose()   |----> RealTimeInbox (L1)
                    +--------------+           |
                          v                    v
                    Driver <---- ProposedAndProved event
                       |
                    NMC / Alethia-Reth (L2 execution)
```

## Off-Chain Components

### surge-taiko-mono

Monorepo for protocol contracts (`RealTimeInbox`, `SurgeVerifier`, `Bridge`, `SignalService`, `Anchor`) and the Driver (`taiko-client`).

- **Branches**: `surge-alethia-real-time-driver`, `surge-alethia-real-time-inbox`
- **Key paths**: `packages/protocol/`, `packages/taiko-client/`

### simple-surge-node

Deployment scripts and orchestration.

- **Branch**: `shasta-poc`
- Contains `deploy-surge-full.sh` (the main deployment script), `.env.devnet`, docker-compose files
- Handles everything from protocol deployment to genesis creation to L2 stack startup

### raiko

ZK prover server. Receives proof requests from Catalyst, delegates to the Zisk zkVM backend, returns validity proofs.

- **Branch**: `surge-alethia-real-time-proving`
- **Key endpoint**: `POST /v3/proof/batch/realtime`
- Requires CUDA-capable GPU

### alethia-reth

Alternative L2 execution client (Nethermind's fork of reth with Taiko support). Implements the RealTime hardfork (`TaikoHardfork::RealTime`, `TaikoSpecId::REALTIME = 4`), including `anchorV4WithSignalSlots` and signal slot handling.

- **Branch**: `real-time-proving-migration`

### nethermind

Primary L2 execution client. High-performance .NET client with L1SLOAD (RIP-7728) support.

- **Branch**: `feat/surge-real-time-poc`

### Catalyst

Builder/orchestrator. Receives UserOps via `surge_sendUserOp` RPC, simulates L1+L2 execution, requests proofs from Raiko, and submits the atomic multicall to L1. The central coordination point for synchronous composability.

- **Repo**: [github.com/NethermindEth/Catalyst](https://github.com/NethermindEth/Catalyst)
- **Branch**: `surge-real-time-proving`

### Zisk

GPU-accelerated zkVM used by Raiko as the proving backend. Re-executes L2 blocks inside a ZK circuit and generates STARK+SNARK proofs. Maintained by the Zisk team (external).

## On-Chain Contracts

### L1

| Contract | Purpose |
|----------|---------|
| `RealTimeInbox` | Permissionless block proposing with atomic prove-and-propose |
| `SurgeVerifier` | Proof verification router (+ `ZiskVerifier`, `SP1Verifier`, `RISC0Verifier`) |
| `SignalService` | Cross-chain message passing |
| `Bridge` | Asset bridging between L1 and L2 |
| `ERC20Vault` / `ERC721Vault` / `ERC1155Vault` | Token vaults for bridged assets |
| `UserOpsSubmitter` + `Factory` | UserOp submission and deployer |

### L2

| Contract | Purpose |
|----------|---------|
| `Anchor` | Anchors L1 state on L2 (golden touch address) |
| `SignalService` | Cross-chain message passing (L2 side) |
| `Bridge` | Asset bridging (L2 side) |

## Key PRs

| PR | Description |
|----|-------------|
| [raiko#52](https://github.com/NethermindEth/raiko/pull/52) | Real-time proving support in Raiko |
| [alethia-reth#12](https://github.com/NethermindEth/alethia-reth/pull/12) | RealTime hardfork in Alethia-Reth |
| [surge-taiko-mono#269](https://github.com/NethermindEth/surge-taiko-mono/pull/269) | Protocol changes for real-time proving |

## Branch Strategy

Surge is under active development. Components use feature branches, not tagged releases. The branches listed above represent the latest working state.
