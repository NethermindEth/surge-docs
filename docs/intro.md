---
sidebar_position: 1
title: Introduction to Surge
---

# Introduction to Surge

Surge is a ZK rollup with real-time proving, built on a modified
[Taiko stack](https://taiko.xyz/). It's developed by [Nethermind](https://nethermind.io) as a research and
experimentation platform.

What defines Surge: **real-time proving** -- ZK proofs are generated within seconds of block production and
submitted atomically with the block proposal in a single L1 transaction. Blocks finalize on L1 the moment
they're proposed. No proving windows, no bonds, no waiting. On top of that, Surge achieves
**synchronous composability** -- L1 and L2 actions execute atomically within a single L1 block -- and ships
with [Stage 2 security](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe#:~:text=Stage%202%20%E2%80%94%20No,from%20governance%20attacks.)
from day one.

## What Makes Surge Unique?

- **Real-Time Proving:** ZK proofs are generated in ~10-17 seconds and included with the block proposal in one
  transaction. No proving windows, no bonds -- blocks finalize on L1 as soon as they're proposed.
  See [Real-Time Proving](./about/real-time-proving.md).
- **Synchronous Composability:** L1 and L2 actions happen atomically within a single L1 block. A user can
  initiate a swap on L1, have it execute on an L2 DEX, and receive the result back on L1 -- all in one
  transaction. Powered by signal slots, fast signals, and the builder's multicall pattern.
  See [Cross-Chain Composability](./about/synchronous-composability.md).
- **Permissionless Proposing:** Anyone can submit L2 blocks via `RealTimeInbox.propose()`. No centralized
  sequencer, no whitelisted proposers. See [Architecture](./about/architecture.md).
- **Stage 2 from Day 1:** Surge ships with L2Beat's
  [Stage 2](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe)
  security -- 45-day exit window, no emergency powers, no governance token.
- **Tokenless:** Just ETH for gas. No L2 token, no token-related governance overhead.
- **Nethermind Execution Client:** Surge runs on the high-performance
  [Nethermind Client](https://github.com/NethermindEth/nethermind) for fast block execution and low overhead.
  See [Nethermind Client](./about/nethermind.md).
- **Open Source:** All [code](https://github.com/NethermindEth/surge) is open source. Fork it, run it, modify it.

## How It Works

Surge's architecture centers on a few key components:

```
User ──(signed UserOps)──► Catalyst (Builder)
                               │
                     simulate L1+L2 execution
                               │
                     request proof from Raiko/Zisk (~10-17s)
                               │
                     bundle everything into one L1 tx:
                     ┌─────────┴──────────┐
                     │     Multicall       │
                     │  1. Execute UserOps │
                     │  2. Propose + Prove │
                     │  3. Settle L1 Calls │
                     └─────────────────────┘
                               │
                     L2 block finalized on L1
```

- **Catalyst (Builder)** orchestrates the entire flow: receives user intents (UserOps), simulates L1 and L2
  execution, requests ZK proofs, and submits everything as a single atomic multicall to L1.
- **Raiko + Zisk** generate ZK validity proofs in real time. Zisk (the zkVM) re-executes L2 blocks inside a ZK
  circuit and produces proofs in ~10-17 seconds.
- **RealTimeInbox** is the L1 contract that atomically verifies the proof, saves the L2 state checkpoint, and
  finalizes the block -- all in `propose()`.
- **Signal slots** and the **Anchor** contract relay cross-chain messages without merkle proofs, making
  synchronous composability possible.

For the full picture, see [Architecture](./about/architecture.md).

## Research-Focused Approach

Surge is _not designed to compete with existing rollups_ for users or market share. It's a:

1. **Technical showcase** for [Nethermind](https://www.nethermind.io/)'s execution client and rollup engineering.
2. **Experimentation platform** for pushing rollup performance, throughput, and new protocol ideas.
3. **Reference implementation** -- a fully open-source rollup template that other teams can learn from or fork.

This fits into [Nethermind](https://www.nethermind.io/)'s broader work on
the [rollup-centric roadmap](https://vitalik.eth.limo/general/2024/10/17/futures2.html) -- practical research,
not market competition.

### Who is Surge For?

Surge is built for technical users, not end consumers.

- **Builders** who want to experiment with cross-chain apps using real-time proving and synchronous composability.
- **Researchers** working on rollup performance, protocol design, or new proof systems. Surge is a clean slate
  for testing ideas without backwards-compatibility baggage.

## Roadmap and Vision

Surge represents one component of Nethermind's broader rollup roadmap, which includes:

- **Surge Rollup Template:** The rollup itself -- real-time proving + synchronous composability + high
  throughput via the Nethermind Client.
- **Surge Power-Ups:** Open-source plugins for preconfirmations, optimized proving, block building, and L1-L2
  composability. Designed to work with any rollup, not just Surge.

## Getting Started

- [About section](./about) -- architecture, design choices, how things work under the hood.
- [GitHub](https://github.com/NethermindEth/surge) -- all the code.
- [Guides](./guides) -- run your own devnet or deploy a dApp.
- **Live deployment:**
  - Bridge: [bridge.realtime.surge.wtf](https://bridge.realtime.surge.wtf/)
  - Explorer: [explorer.realtime.surge.wtf](https://explorer.realtime.surge.wtf/)
  - RPC: [rpc.realtime.surge.wtf](https://rpc.realtime.surge.wtf/)
  - SyncCompose DEX: [synccomposedex.realtime.surge.wtf](https://synccomposedex.realtime.surge.wtf/)

## Component Versions

When following the guides and documentation, please use the following versions of Surge components and services:

- **simple-surge-node:** [v25.1.2](https://github.com/NethermindEth/simple-surge-node/releases/tag/v25.1.2)
- **nethermind:** Any [latest stable release](https://github.com/nethermindeth/nethermind/releases)
- **alethia-reth:** See the [alethia-reth repository](https://github.com/NethermindEth/alethia-reth) for the latest real-time proving branch
- **surge-taiko-mono:** [v25.1.2](https://github.com/NethermindEth/surge-taiko-mono/releases/tag/v25.1.2)
- **raiko:** See the [raiko repository](https://github.com/NethermindEth/raiko) (`surge-alethia-real-time-proving` branch)

These versions are tested and verified to work together for the current deployment.
