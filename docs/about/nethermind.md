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

:::note
Surge also supports [Alethia-Reth](https://github.com/NethermindEth/alethia-reth) as an alternative L2 execution client, which also implements real-time proving.
:::
