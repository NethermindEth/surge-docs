---
sidebar_position: 4
title: Surge & Nethermind Client
---

# Surge & Nethermind Client

Surge leverages [Nethermind Client](https://www.nethermind.io/nethermind-client) as its primary Ethereum execution client. Nethermind Client is a high-performance client designed for speed, efficiency, and reliability – all essential qualities for any rollup aiming to process transactions at scale.

## Benefits for Surge

By integrating Nethermind Client, Surge achieves:

### Faster Block Execution

Transactions confirm faster due to Nethermind Client’s streamlined execution approach. This leads to improved user experiences and lower latency for dApps built on Surge.

### Optimized Resource Usage

Nethermind Client’s low-overhead design allows Surge to process more transactions without incurring higher execution costs. This efficiency is crucial for maintaining a decentralized and cost-effective rollup.

### L1SLOAD Support

Nethermind Client supports L1SLOAD, a precompile that lets L2 contracts read L1 storage slots directly. With real-time proving, this means L2 can access up-to-date L1 state within seconds. See [Cross-Chain Composability](./synchronous-composability) for details.

:::note
Surge also supports [Alethia-Reth](https://github.com/NethermindEth/alethia-reth) as an alternative L2 execution client, which also implements L1SLOAD and the RealTime hardfork.
:::
