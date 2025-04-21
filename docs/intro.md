---
sidebar_position: 1
title: Introduction to Surge
---

# Introduction to Surge

Surge is a high-performance, [based rollup](https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016)
template built on a modified [Taiko stack](https://taiko.xyz/) that embodies Ethereum's principles of decentralization,
security, and censorship resistance. Developed by [Nethermind](https://nethermind.io) as a research and experimentation
platform, Surge demonstrates what's possible when rollups maximize both performance and trustlessness without
compromising on security.

Surge stands out by adopting
a [Stage 2 security framework](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe#:~:text=Stage%202%20%E2%80%94%20No,from%20governance%20attacks.)
from the very beginning, leveraging Ethereum validators rather than a centralized sequencer for transaction ordering,
and aiming for [Gigagas](./about/gigagas.md) throughput through
the [Nethermind Execution Client](https://github.com/NethermindEth/nethermind) (NMC). Surge uses ETH for gas and bonds,
avoiding the need for an L2 governance token. Together, these design decisions ensure robust decentralization and
censorship resistance while maintaining alignment with Ethereum's core principles.

## What Makes Surge Unique?

- **Based Architecture:** Surge relies on Ethereum's validators for transaction ordering. This design inherits
  Ethereum's security guarantees and censorship resistance directly, making Surge as decentralized as Ethereum itself.
- **Stage 2 Security Framework:** From inception, Surge implements L2Beat's most rigorous security stage (Stage 2),
  featuring a 45-day exit window, no emergency powers, and strictly limited governance capabilities.
- **Tokenless:** Uses Ether (ETH) for gas and bonds, avoiding the need for an L2 governance token and the misaligned
  incentives that often accompany them.
- **Gigagas Performance:** Leveraging Nethermind Client's already demonstrated [Gigagas](./about/gigagas.md) ability (as
  showcased in [Nethermind Client v1.30.0](https://github.com/NethermindEth/nethermind/releases/tag/1.30.0)), Surge
  achieves extraordinary throughput capabilities that scale far
  beyond traditional execution environments. For more details, see the [Gigagas documentation](./about/gigagas.md).
- **Multi-Prover Proof System:** Employs zero-knowledge proofs for trustless scaling with a 2/3 multi-prover security
  model requiring agreement from at least two of three independent proving systems, one of which must be a ZK proof
  system.
- **Open Source & Replicable:** The [infrastructure and code](https://github.com/NethermindEth/surge) are fully open
  source, allowing the community to maintain or fork Surge at any time.

## Research-Focused Approach

Surge is *not designed to compete with existing rollups* for users or market share. Instead, it serves as a:

1. **Technical Showcase:** Demonstrating [Nethermind](https://www.nethermind.io/)'s capabilities in client optimization
   and rollup design.
2. **Experimentation Platform:** Exploring the boundaries of rollup performance, transaction throughput, and
   implementation flexibility while maintaining maximum security and decentralization.
3. **Reference Implementation:** Providing the community with an open-source, fully-featured rollup template that
   prioritizes
   Ethereum's core values, censorship resistance, and cross-rollup composability.

This approach reflects [Nethermind](https://www.nethermind.io/)'s commitment to advancing
the [rollup-centric roadmap](https://vitalik.eth.limo/general/2024/10/17/futures2.html) through practical research
rather than market competition, focusing on seamless L1 and cross-rollup composability to create a more interconnected
Ethereum ecosystem.

### Who is Surge For?

Surge is designed with a clear and focused audience in mind — one that reflects its role as a research and development
platform rather than a mass-market product. Unlike traditional rollups that chase user adoption, Surge is purpose-built
for experimentation, technical exploration, and pushing the boundaries of what’s possible on Ethereum.

- **Builders:** Block builders and MEV searchers exploring cross-layer opportunities enabled by Surge’s based
  architecture. By aligning economic incentives with Ethereum’s validators, Surge unlocks new mechanisms for value
  extraction and redistribution across the ecosystem.
- **Researchers:** Technical teams working on rollup optimizations, novel protocol designs, and high-performance
  applications. Surge provides a clean-slate environment for implementing and testing new ideas without the overhead of
  backwards compatibility or user disruption.

By focusing on technical constituencies — not end-users — Surge enables rapid iteration and deep innovation. It serves
as a proving ground for ideas that can ultimately benefit the entire Ethereum ecosystem, without being constrained by
commercial product demands or mainstream usability expectations.

## Roadmap and Vision

Surge represents one component of Nethermind's broader rollup roadmap, which includes:

- **Surge Rollup Template:** The core based rollup platform with [Gigagas](./about/gigagas.md) capabilities.
- **Surge Power-Ups:** Open-source plugins that can enhance any based rollup with preconfirmations, optimized proving,
  advanced block building, and seamless layer composability.

Together, these initiatives aim to advance the state of rollup technology while maintaining alignment with Ethereum's
values of decentralization, security, and permissionlessness.

## Getting Started

Surge is continually evolving. By taking part in its testnet, you can experience firsthand how a truly decentralized
rollup — rooted in Ethereum’s security and designed for long-term sustainability — can shape the future of Layer 2
solutions.

- **Learn More:** Visit the [About section](./about) for details on Surge’s architecture and design choices.
- **Explore the Code:** Check out [Surge’s GitHub repository](https://github.com/NethermindEth/surge) to dive into the
  open-source codebase.
- **Guides:** Explore the [Guides section](./guides) to operate a Surge rollup or deploy your own dApp.
- **Current Testnet:**
    - Bridge UI: [https://bridge.hoodi.surge.wtf](https://bridge.hoodi.surge.wtf/)
    - Explorer: [https://explorer.hoodi.surge.wtf](https://explorer.hoodi.surge.wtf/)
    - RPC URL: [https://l2-rpc.hoodi.surge.wtf](https://l2-rpc.hoodi.surge.wtf/)

Researchers, developers, and ecosystem participants are invited to explore Surge as an example of what truly
decentralized, high-performance rollups can achieve.
