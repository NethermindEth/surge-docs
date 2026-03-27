---
sidebar_position: 3
title: Deploy Your DApp on Surge
---

# Deploy Your DApp on Surge

This guide walks you through deploying your decentralized application (DApp) on Surge.

## Prerequisites

Before deploying your DApp, ensure you have the following:

- **ETH on L1**: Get ETH on the L1 network that Surge is deployed on (e.g., Gnosis mainnet for the current live deployment).
- **Surge L2 RPC**: Connect your wallet to Surge L2 using the RPC
  endpoint: [https://rpc.realtime.surge.wtf](https://rpc.realtime.surge.wtf/).
- **Surge L2 Block Explorer**: Monitor transactions
  on: [https://explorer.realtime.surge.wtf](https://explorer.realtime.surge.wtf/)

## Bridge ETH to Surge

To bridge ETH from L1 to L2:

1. Visit the [Bridge UI](https://bridge.realtime.surge.wtf).
2. Initiate a transfer of ETH from L1 to L2.
3. Monitor your transaction using the [Explorer](https://explorer.realtime.surge.wtf/).

> **Note:** The relayer will automatically claim your bridged ETH within one minute of confirmation, under default settings.

## Deploy Your DApp

Once you've received your ETH on L2:

1. Deploy your DApp as you would on any other EVM-compatible network.
2. No changes to your DApp's code are required.

### L1SLOAD Support

Surge supports L1SLOAD, a precompile that lets your L2 contracts **read L1 storage slots directly**. Your L2 contracts can access L1 state without trusting a bridge or oracle. See [Cross-Chain Composability](/docs/about/synchronous-composability) for details.

## Feature Set

Surge uses the **RealTime** execution fork, which is EVM-compatible with additional capabilities:

- Standard EVM opcodes and precompiles
- L1SLOAD precompile for cross-chain state reads
- Signal slots for L1-to-L2 message relay

## Troubleshooting

If you encounter any issues, check out our [Troubleshooting Guide](/docs/troubleshooting).
