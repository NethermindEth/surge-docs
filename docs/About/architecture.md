---
sidebar_position: 1
---

# Surge Architecture

![Surge Architecture](/img/Surge-Architecture.svg)

## What is the purpose of these components?

Each of the components in our architecture serves a specific purpose:

- Fast Composability solution (Coming soon): A component that allows for fast withdrawals to L1 ([Coming soon, research can be found here](https://ethresear.ch/t/fast-and-slow-l2-l1-withdrawals/21161/2))

- Nethermind Execution Client (NMC): A high-performance Ethereum client that handles the execution with Gigagas performance ([NMC documentation](https://github.com/NethermindEth/nethermind))

- Taiko Client: Handles the consensus layer ([Taiko documentation](https://docs.taiko.xyz/taiko-alethia-protocol/protocol-architecture/taiko-alethia-nodes#consensus-layer-taiko-client))

- Taiko Prover: Part of the Taiko Client, generates proofs for the rollup [
  ([Taiko documentation](https://github.com/taiko-eth/taiko))

- Taiko Driver: Part of the Taiko Client, handles the rollup ([Taiko documentation](https://github.com/taiko-eth/taiko))

- Taiko Proposer: Part of the Taiko Client, proposes the rollup ([Taiko documentation]( https://github.com/taiko-eth/taiko))

## How is Surge different from the Taiko Stack

We customized the implementation of the Taiko stack to remove token dependencies and provide a more secure and transparent experience.
Performance improevements were made by swapping out the execution client from TaikoGeth to using the NMC [(NMC documentation) https://github.com/NethermindEth/nethermind].

Time-Locked owner: We modified the multisig implementation to have a 45 day timelock to be compliant with Stage2 requirements set forth by L2Beat

Verification Streack checks: Owner operations from the multisig are blocked, if there has been a liveness disruption for a period of 7 days or more in the last 45 days.

Disabled pausing of protocol and peripheral contracts: The owner cannot pause the protocol

2/3 proof verifier as the sole proof verifier: We have three proof systems: SGX, SP1, Risc0. At least 2 of 3 of the provers must agree on a state transition for the transition to be accepted.

## Goals

- Be Stage 2 from launch
- Provide Gigagas performance
- Be maximally ethereum aligned by being based
- Enable seamless composability with L1 and other rollups once we enable our composiability solution
