---
title: Run L1
sidebar_position: 1
---

This guide will help you set up an L1 node [on the Hoodi testnet](https://github.com/eth-clients/hoodi). A Surge node
requires an L1 node to interact with the network. You can either run your own L1 node
using [Sedge](https://docs.sedge.nethermind.io/docs/quickstart/complete-guide), a convenient tool created by Nethermind,
or connect to a public RPC endpoint.

## Why do I need an L1 Node?

Surge L2 node requires an L1 node to:

- Provide data availability needed by Surge nodes to validate transactions.
- Submit transactions to Layer 1, ensuring they are properly propagated and recorded.
- Facilitate secure and efficient communication between Layer 2 and Layer 1.

## Choosing Your Option

You have two main options:

1. Launch your own L1 node (recommended)
2. Use a public RPC endpoint

### Advantages & Disadvantages

| Option                        | Advantages                                                          | Disadvantages                                                              |
|-------------------------------|---------------------------------------------------------------------|----------------------------------------------------------------------------|
| **Own L1 Node (Recommended)** | Higher security, reliability, and control. Better decentralization. | Requires initial setup effort and ongoing maintenance.                     |
| **Public RPC Endpoint**       | Quick setup, no maintenance required.                               | Lower control, potential downtime, reliance on third-party infrastructure. |

## Option 1: Launching Your Own L1 Node Using Sedge (Recommended)

We recommend using [Sedge](https://docs.sedge.nethermind.io/docs/quickstart/complete-guide), a convenient tool created
by Nethermind, to quickly and easily set up your Hoodi node.

### Step-by-Step Guide:

#### Step 1: Install Sedge

```bash
curl -L https://github.com/NethermindEth/sedge/releases/download/v<VERSION>/sedge-v<VERSION>-<OS>-<ARCH> --output sedge
chmod +x sedge
cp sedge /usr/local/bin/sedge
```

Verify installation:

```bash
sedge --version
```

#### Step 2: Configure a Hoodi Node with Sedge

Run the following command to generate a setup of your node:

```bash
sedge generate full-node --no-validator --network=hoodi
```

This command will generate a setup of a full node without a validator node. For detailed network configuration and
additional
options, see [Hoodi Network Setup](https://docs.sedge.nethermind.io/docs/networks/hoodi).

#### Step 3: Run Your Node

Run the following command to start your node:

```bash
sedge run
```

#### Step 4: Check Your Node Status

To verify your node is running correctly:

```bash
sedge logs
```

You should see logs confirming block synchronization.

And to confirm your L1 node is running and in sync, you can query its JSON-RPC interface using the following commands:

1. Check Latest Block Number
    ```bash
   curl -X POST \
   -H "Content-Type: application/json" \
   --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
   http://127.0.0.1:8545
   ```
   This returns the latest block number your node has processed (in hex). Compare it with the current block number on
   the [Hoodi block explorer](https://hoodi.etherscan.io/) to verify it's in sync.

2. Check Sync Status
    ```bash
   curl -X POST \
   -H "Content-Type: application/json" \
   --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' \
   http://127.0.0.1:8545
   ```

   If the result is false, your node is fully synced. If it returns an object, the node is still syncing and will show
   current progress.

## Option 2: Using Public RPC Endpoint

If you prefer quick setup without node management, use the public RPC endpoint: https://hoodi.ethpandaops.io/.

Include the RPC endpoint in your Surge node configuration.

## Next Steps

Now that you've set up your Hoodi L1 node or connected to a public RPC, proceed with configuring and running your Surge
node. Check our [Surge node setup guide](./run-l2) for detailed instructions.

