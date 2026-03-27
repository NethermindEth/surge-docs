---
sidebar_position: 4
title: Surge & Nethermind Client
---

# Surge & Nethermind Client

Surge uses [Nethermind Client](https://www.nethermind.io/nethermind-client) as its primary L2 execution client. Nethermind is a high-performance .NET Ethereum client optimized for speed and low resource overhead.

## Why Nethermind?

### Fast Block Execution

Nethermind's execution engine processes transactions quickly, which directly translates to lower latency for L2 blocks. This matters for real-time proving, where the prover needs to re-execute blocks inside a ZK circuit -- faster execution means faster proofs.

### Low Resource Overhead

The client's memory and CPU efficiency means Surge can process more transactions per block without needing oversized infrastructure.

### L1SLOAD Support

Nethermind implements the L1SLOAD precompile (RIP-7728), which allows L2 contracts to read L1 storage slots directly. This is a key building block for cross-chain composability. See [Cross-Chain Composability](./synchronous-composability) for details.

:::note
Surge also supports [Alethia-Reth](https://github.com/NethermindEth/alethia-reth) as an alternative L2 execution client, which implements the RealTime hardfork (`TaikoHardfork::RealTime`).
:::
