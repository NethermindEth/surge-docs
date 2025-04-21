---
sidebar_position: 5
title: Gigagas
---

# Gigagas in Surge

Surge Rollup is built on the Nethermind client, chosen for its proven performance at gigagas-scale throughput. Compatible across based, optimistic, and custom EVM rollups, it enables fast, reliable execution without compromise. [Learn more about Nethermind Execution Client](https://github.com/NethermindEth/nethermind).

## What is Gigagas?

If you’re new to Gigagas, think of it as a way to measure how fast an Ethereum client can process transactions. Ethereum transactions consume "gas", a unit that represents the computational effort required to execute operations. Gigagas (GPS) measures how many millions of gas units a client can process per second. 

For example:
- A client processing **1 Gigagas per second** can handle transactions consuming 1 million gas units in one second.
- Higher Gigagas performance means faster transaction processing, better scalability, and lower costs for users.


## What Makes Gigagas Important?

Gigagas is critical for evaluating the performance of rollups and execution clients. A higher Gigagas score means:

- **Faster Transactions:** More transactions can be processed in less time.
- **Scalability:** The system can handle a growing number of users and applications without performance degradation.
- **Cost Efficiency:** Improved processing speeds can lead to lower transaction fees for users.

![Base-Mainnet Validation Throughput](./images/gigagas-throughput.png)

The graph above demonstrates the performance of the Nethermind Execution Client, achieving gigagas-scale throughput. It highlights the client’s ability to process over 1000 MGas/s, far exceeding the Ethereum mainnet target of 1.25 MGas/s and the base mainnet target of 15 MGas/s.

## How Gigagas is Implemented in Surge

Surge leverages the Nethermind Execution Client to achieve Gigagas performance. Here’s how it works:

1. **Optimized Execution Engine:** The Nethermind Execution Client is designed to process transactions with minimal latency, ensuring high throughput.
2. **Efficient Gas Accounting:** The client implements advanced gas accounting mechanisms to maximize the number of transactions processed per second.
3. **Parallel Processing:** By utilizing multi-threading and parallel processing techniques, the client can handle multiple transactions simultaneously, further boosting performance.

## Why Gigagas Matters for Surge Users

For users of Surge, Gigagas translates to a seamless and efficient experience. Whether you are deploying smart contracts, interacting with decentralized applications, or simply transferring Ether, the high Gigagas performance ensures:

- **Quick Confirmation Times:** Transactions are confirmed faster, reducing wait times.
- **Reliable Performance:** Even during periods of high network activity, Surge maintains consistent performance.
- **Future-Proof Scalability:** As the Ethereum ecosystem grows, Surge is well-equipped to handle increased demand.
