---
title: Connecting to an Existing Surge Network
sidebar_position: 2
---

# Connecting to an Existing Surge Network

If you want to **join an already-running Surge network** (e.g., a public testnet like “hoodi” or a future mainnet), follow the documentation below.

## Overview

- **No need to deploy L1 or L2 locally.**
- Choose your node type or role, then configure accordingly.

## Roles

### Full/Light Client
- Synchronize with the existing network.
- Access block data and transaction history using the network’s RPC endpoints.

### Prover
- Generate cryptographic proofs (requires SGX if specified by Surge).
- Point your Prover at the network configuration (RPC endpoints, chain ID, etc.).

### Proposer
- Propose new blocks on the existing network.
- Ensure you have the correct credentials and configurations (some networks may have access restrictions).

## Configuration Steps

1. **Get the Network Information**
    - Obtain chain IDs, RPC endpoints, and any specific network parameters from the Surge documentation or community channels.

2. **Set Up Your Node**
    - Install the necessary software (Docker, Git, etc.) if you haven’t already.
    - Configure the node with the provided network details (RPC URLs, chain IDs, etc.).

3. **Run and Monitor**
    - Start the node, Prover, or Proposer.
    - Use logs and system metrics to ensure everything runs smoothly.

## Next Steps

- **[Join Our Discord](https://discord.gg/nethermind)**  
  Stay up to date with announcements, get support, and find more detailed network information.

- **[View the Source Code](https://github.com/NethermindEth)**  
  Contribute to Surge or explore how the network is structured.

- Look for specific testnet guides (e.g., “hoodi”) in the documentation for additional details like faucets, block explorers, and best practices.
