---
sidebar_position: 1
title: Introduction to Surge
---

# Introduction to Surge

Surge is a high-performance, [based rollup](https://ethresear.ch/t/based-rollups-superpowers-from-l1-sequencing/15016) template built on a modified [Taiko stack](https://taiko.xyz/) that embodies Ethereum's principles of decentralization, security, and censorship resistance. Developed by [Nethermind](https://github.com/NethermindEth) as a research and experimentation platform, Surge demonstrates what's possible when rollups maximize both performance and trustlessness without compromising on security.

Surge stands out by adopting a [Stage 2 security framework](https://medium.com/l2beat/introducing-stages-a-framework-to-evaluate-rollups-maturity-d290bb22befe#:~:text=Stage%202%20%E2%80%94%20No,from%20governance%20attacks.) from the very beginning, leveraging Ethereum validators rather than a centralized sequencer for transaction ordering, and aiming for gigagas throughput through the [Nethermind Execution Client](https://github.com/NethermindEth/nethermind) (NMC). Surge uses ETH for gas and bonds, avoiding the need for an L2 governance token. This approach ensures robust decentralization and censorship resistance while maintaining alignment with Ethereum's core principles.

## What Makes Surge Unique?

- **Based Architecture:** Surge removes the centralized sequencer entirely, relying on Ethereum's validators for transaction ordering. This design inherits Ethereum's security guarantees and censorship resistance directly, making Surge as decentralized as Ethereum itself.
- **Stage 2 Security Framework:** From inception, Surge implements L2Beat's most rigorous security stage (Stage 2), featuring a 45-day exit window, no emergency powers, and strictly limited governance capabilities.
- **Maximally Ethereum-Aligned:** Uses Ether (ETH) for gas and bonds, avoiding the need for an L2 governance token and the misaligned incentives that often accompany them.
- **Gigagas Performance:** Leveraging [NMC](https://github.com/NethermindEth/nethermind/releases/tag/1.30.0)'s already demonstrated gigagas ability, Surge achieves extraordinary throughput capabilities that scale far beyond traditional execution environments.
- **ZK Proving System:** Employs zero-knowledge proofs for trustless scaling with a 2/3 multi-prover security model requiring agreement from at least two of three independent proving systems.
- **Open Source & Replicable:** The [infrastructure and code](https://github.com/NethermindEth/surge) are fully open source, allowing the community to maintain or fork Surge at any time.

## Research-Focused Approach
Surge is *not designed to compete with existing rollups* for users or market share. Instead, it serves as:

1. **Technical Showcase:** Demonstrating [Nethermind](https://www.nethermind.io/)'s capabilities in client optimization and rollup design.
2. **Experimentation Platform:** Exploring the boundaries of rollup performance, transaction throughput, and implementation flexibility while maintaining maximum security and decentralization without any compromises.
3. **Reference Implementation:** Providing the community with an open-source, fully-featured rollup that prioritizes Ethereum's core values, censorship resistance, and cross-rollup composability.

This approach reflects[Nethermind](https://www.nethermind.io/)'s commitment to advancing the [rollup-centric roadmap](https://vitalik.eth.limo/general/2024/10/17/futures2.html) through practical research rather than market competition, focusing on seamless L1 and cross-rollup composability to create a more interconnected Ethereum ecosystem.

## The "Zero-Users" Philosophy
Surge adopts a *deliberate zero-users* approach, fundamentally different from traditional rollups seeking mass adoption. This philosophical stance allows Surge to prioritize innovation. The zero-users approach focuses on three key audiences:

- **Agents:** Autonomous systems that can leverage Surge's high-throughput, deterministic execution environment. These include programmatic systems that benefit from the predictable, high-performance computing environment that Surge provides.
- **Builders:** Block builders and MEV searchers exploring cross-layer opportunities made possible by Surge's based architecture. By aligning economic incentives with Ethereum's validators, Surge creates new possibilities for extracting and redistributing value across the ecosystem in more efficient ways.
- **Researchers:** Technical teams researching rollup optimizations, protocol designs, and high-performance applications that push Ethereum's boundaries. These developers can use Surge as a playground for implementing and testing innovative ideas without worrying about disrupting an established user base.

This deliberate focus on technical constituencies rather than end-users allows Surge to prioritize rapid iteration, technical innovation, and experimental designs without the constraints of maintaining backward compatibility or catering to non-technical users. By embracing this philosophy, Surge can serve as a true research and development platform that advances the entire Ethereum ecosystem through technical exploration rather than commercial competition.

## Roadmap and Vision
Surge represents one component of Nethermind's broader rollup roadmap, which includes:

- **Surge Rollup:** The core based rollup platform with gigagas capabilities.
- **Surge Power-Ups:** Open-source plugins that can enhance any based rollup with preconfirmations, optimized proving, advanced block building, and seamless layer composability.

Together, these initiatives aim to advance the state of rollup technology while maintaining alignment with Ethereum's values of decentralization, security, and permissionlessness.
## Getting Started
Surge is continually evolving. By taking part in its testnet, you can experience firsthand how a truly decentralized rollup — rooted in Ethereum’s security and designed for long-term sustainability — can shape the future of Layer 2 solutions.

- **Learn More:** Visit the *About* section for details on Surge’s architecture and design choices.
- **Explore the Code:** Check out [Surge’s GitHub repository](https://github.com/NethermindEth/surge) to dive into the open-source codebase.
- **Guides:** Explore the *Guides* section to deploy your own dApp or operate a Surge rollup.
- **Current Testnet:**
  - Bridge UI: [bridge.holesky.surge.wtf](https://bridge.holesky.surge.wtf/)
  - Explorer: [explorer.holesky.surge.wtf](https://explorer.holesky.surge.wtf/)
  - RPC URL: [l2-rpc.surge.staging-nethermind.xyz](https://l2-rpc.surge.staging-nethermind.xyz/)

Researchers, developers, and ecosystem participants are invited to explore Surge as an example of what truly decentralized, high-performance rollups can achieve.