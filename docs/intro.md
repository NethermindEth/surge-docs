---
sidebar_position: 1
title: Introduction to Surge
---

# Introduction to Surge

Surge is a [based rollup](https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016) template built on the [Taiko stack](https://taiko.xyz/). It adopts the [Stage 2 security framework](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe) and relies on Ethereum’s validators — rather than a centralized sequencer — for transaction ordering. This approach ensures robust decentralization and censorship resistance, aligning with Ethereum’s core principles and security guarantees.

## What Makes Surge Unique?

- **Maximally Ethereum-Aligned:** Uses Ether (ETH) for gas and bonds, avoiding the need for an L2 governance token.
- **Aiming for Gigagas Throughput:** Leverages the Nethermind Client (NMC) for high-speed performance. [NMC](https://github.com/NethermindEth/nethermind/releases/tag/1.30.0) has already demonstrated gigagas capabilities.
- **ZK Proving System:** Leverages zero-knowledge proofs for trustless scaling.
- **Stage 2 Security:** Adheres to rigorous security standards to protect users and funds.
- **Censorship Resistance:** Transaction ordering is handled by Ethereum validators, removing centralized sequencer risk.
- **Open Source & Replicable:** The [infrastructure and code](https://github.com/NethermindEth/surge) are fully open source, allowing the community to maintain or fork Surge at any time.
- **45-Day Timelock:** Owner multisig actions require a 45-day notice, giving users ample time to react if needed.

## Goals & Non-Goals

**Goals**
- Advance the Rollup-Centric Roadmap through engineering and research
- Preserve Ethereum’s censorship resistance
- Enable seamless L1 and cross-rollup composability

**Non-Goals**
- Capturing users & revenue
  - Surge follows a *zero-users* approach, focusing on agents, builders, and developers who want to explore the boundaries of Ethereum — rather than aiming for immediate mass adoption.
- Competing directly with other rollups

## A Rollup Template for the Future

By showcasing how to remove centralized sequencer risks and eliminate L2 governance, Surge sets an example for decentralized rollup design. Its focus on high performance, open-source collaboration, and minimal overhead paves the way for a more sustainable Ethereum ecosystem:

- **For Developers:** A reliable testing ground for censorship-resistant dApps.
- **For Builders:** An optimized environment for fast L2 block building.
- **For Users:** A rollup that stays true to Ethereum’s ethos of trustlessness and decentralization.

## Getting Started

- **Learn More:** Visit the *About* section for details on Surge’s architecture and design choices.
- **Guides:** Explore the *Guides* section to deploy your own dApp or operate a Surge rollup.
- **Current Testnet:**
    - Bridge UI: [bridge.holesky.surge.wtf](https://bridge.holesky.surge.wtf/)
    - Explorer: [explorer.holesky.surge.wtf](https://explorer.holesky.surge.wtf/)
    - RPC URL: [l2-rpc.surge.staging-nethermind.xyz](https://l2-rpc.surge.staging-nethermind.xyz/)

Surge is continually evolving. By taking part in its testnet, you can experience firsthand how a truly decentralized rollup — rooted in Ethereum’s security and designed for long-term sustainability — can shape the future of Layer 2 solutions.
