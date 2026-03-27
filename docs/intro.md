---
sidebar_position: 1
title: Introduction to Surge
---

# Introduction to Surge

Surge is a [based rollup](./about/based-rollups.md) with real-time proving, built on a modified
[Taiko stack](https://taiko.xyz/). It's developed by [Nethermind](https://nethermind.io) as a research and
experimentation platform.

Two things define Surge. First, it's **based** -- Ethereum's validators handle transaction ordering, not a centralized
sequencer. Second, it has **real-time proving** -- ZK proofs are generated **within seconds** of block production and
submitted together with the block proposal in a single transaction, so blocks finalize on L1 the moment they're
proposed. On top of that, Surge has
[Stage 2 security](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe#:~:text=Stage%202%20%E2%80%94%20No,from%20governance%20attacks.)
from day one, [Gigagas](./about/gigagas.md)-level throughput via
the [Nethermind Execution Client](https://github.com/NethermindEth/nethermind) (NMC), and cross-chain composability
through L1SLOAD.

## What Makes Surge Unique?

- **Based Rollup:** No centralized sequencer. Ethereum's validators handle L2 transaction ordering through the same
  permissionless block-building pipeline as L1. See [Based Rollups](./about/based-rollups.md).
- **Real-Time Proving:** ZK proofs are generated in ~10-17 seconds and included with the block proposal in one
  transaction. No proving windows, no bonds -- blocks finalize on L1 as soon as they're proposed.
  See [Real-Time Proving](./about/real-time-proving.md).
- **Stage 2 from Day 1:** Surge ships with L2Beat's
  [Stage 2](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe)
  security -- 45-day exit window, no emergency powers, no governance token.
- **Tokenless:** Just ETH for gas. No L2 token, no token-related governance overhead.
- **Gigagas Throughput:** The [Nethermind Client](https://github.com/NethermindEth/nethermind) already
  [demonstrated Gigagas performance](https://github.com/NethermindEth/nethermind/releases/tag/1.30.0) on mainnet.
  Surge gets the same engine. See [Gigagas](./about/gigagas.md).
- **Cross-Chain Composability:** L2 contracts can read L1 storage directly via L1SLOAD. L1 signals get relayed
  to L2 through signal slots in the anchor transaction. See [Cross-Chain Composability](./about/synchronous-composability.md).
- **Open Source:** All [code](https://github.com/NethermindEth/surge) is open source. Fork it, run it, modify it.

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

- **Builders** who want to experiment with cross-chain apps using L1SLOAD and real-time proving.
- **Researchers** working on rollup performance, protocol design, or new proof systems. Surge is a clean slate
  for testing ideas without backwards-compatibility baggage.

## Roadmap and Vision

Surge represents one component of Nethermind's broader rollup roadmap, which includes:

- **Surge Rollup Template:** The rollup itself -- based sequencing + real-time proving + [Gigagas](./about/gigagas.md) throughput.
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
