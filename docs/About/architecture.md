---
sidebar_position: 4
title: Surge Architecture
---

# Surge Architecture

![Surge Architecture](/img/Surge-Architecture.svg)

## What is the purpose of these components?

Each of the components in our architecture serves a specific purpose:

- Nethermind Execution Client (NMC): A high-performance Ethereum client that handles the execution with Gigagas performance ([NMC documentation](https://github.com/NethermindEth/nethermind))

- Taiko Client: Handles the consensus layer ([Taiko documentation](https://docs.taiko.xyz/taiko-alethia-protocol/protocol-architecture/taiko-alethia-nodes#consensus-layer-taiko-client))

### Components of Taiko Stack

- Taiko Prover: Part of the Taiko Client, generates state transition proofs for the rollup

- Taiko Driver: Part of the Taiko Client, handles following the rollup

- Taiko Proposer: Part of the Taiko Client, proposes new blocks to the rollup

## How is Surge different from the Taiko Stack

We customized the implementation of the Taiko stack to remove token dependencies and allowed utilizing Ether for use as a bond in block proposal.

Performance improevements were made by swapping out the execution client from TaikoGeth to using the NMC [(NMC documentation) https://github.com/NethermindEth/nethermind].

Time-Locked owner: We modified the multisig implementation to have a 45 day timelock to be compliant with Stage2 requirements set forth by L2Beat

Verification Streak checks: Owner operations from the multisig are blocked, if there has been a liveness disruption for a period of 7 days or more in the last 45 days.

Disabled pausing of protocol and peripheral contracts: The owner cannot pause the protocol

2/3 proof verifier as the sole proof verifier: We have three proof systems: SGX, SP1, Risc0. At least 2 of 3 of the provers must agree on a state transition for the transition to be accepted.

Disabled contestation window as we only have one proving system and no other tiers. This makes Surge a ZkRollup and not an Optimistic one.