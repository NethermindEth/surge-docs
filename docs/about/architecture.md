---
sidebar_position: 4
title: Surge Architecture
---

# Surge Architecture

![Surge Architecture](./images/Diagram.png)

## Purpose of Each Component

Surge’s architecture is composed of several key components, each serving a specific function:

- **Nethermind Execution Client (NMC):** A high-performance Ethereum client that delivers GigaGas performance. [NMC Documentation](https://github.com/NethermindEth/nethermind).

- **Taiko Client:** Manages the consensus layer of the rollup. [Taiko Documentation](https://docs.taiko.xyz/taiko-alethia-protocol/protocol-architecture/taiko-alethia-nodes#consensus-layer-taiko-client).

### Components of the Taiko Stack

The Taiko Client consists of several sub-components:

- **Taiko Prover:** Generates state transition proofs for the rollup.
- **Taiko Driver:** Follows and monitors the rollup’s state transitions.
- **Taiko Proposer:** Proposes new blocks to the rollup.

## How Surge Differs from the Taiko Stack

Surge has customized aspects of the Taiko architecture to enhance performance and remove any reliance on new tokens:

1. **Token-Free Design:** Surge removes token dependencies, allowing the use of Ether as a bond for block proposals.
2. **Execution Client Upgrade:** Replaced TaikoGeth with the Nethermind Execution Client (NMC) to achieve better performance. [NMC Documentation](https://github.com/NethermindEth/nethermind).
3. **Time-Locked Owner:** Modified the multisig implementation to feature a 45-day timelock, aligning with Stage 2 requirements by L2Beat.
4. **Verification Streak Checks:** Owner operations via the multisig are blocked if there has been a liveness disruption of 7 days or more within the past 45 days.
5. **Disabled Pausing:** The owner cannot pause the protocol or peripheral contracts.
6. **2/3 Proof Verifier:** There are three proof systems (SGX, SP1, and Risc0). At least two of these must agree on a state transition for it to be accepted.
7. **No Contestation Window:** As Surge employs a single ZK approach (no optimistic fallback), it does not require a contestation window. This design choice makes Surge a pure ZK-Rollup rather than an Optimistic Rollup.

## Further Exploration

To deepen your understanding and explore Surge’s architecture in a practical environment, check the detailed guide on deploying and running your own local Surge devnet:

[**Deploy and run your own Surge devnet →**](/docs/guides/running-surge)
