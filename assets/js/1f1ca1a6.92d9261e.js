"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[325],{3800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"about/architecture","title":"Surge Architecture","description":"Surge Architecture","source":"@site/docs/about/architecture.md","sourceDirName":"about","slug":"/about/architecture","permalink":"/docs/about/architecture","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/surge-docs/tree/main/docs/about/architecture.md","tags":[],"version":"current","lastUpdatedAt":1744123307000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Surge Architecture"},"sidebar":"tutorialSidebar","previous":{"title":"Surge & Nethermind Client","permalink":"/docs/about/nethermind"},"next":{"title":"GigaGas","permalink":"/docs/about/gigagas"}}');var i=n(4848),o=n(8453);const s={sidebar_position:4,title:"Surge Architecture"},a="Surge Architecture",c={},l=[{value:"Purpose of Each Component",id:"purpose-of-each-component",level:2},{value:"Components of the Taiko Stack",id:"components-of-the-taiko-stack",level:3},{value:"Proposing Flow",id:"proposing-flow",level:2},{value:"Proving Flow",id:"proving-flow",level:2},{value:"Chain Flow",id:"chain-flow",level:2},{value:"How Surge Differs from the Taiko Stack",id:"how-surge-differs-from-the-taiko-stack",level:2},{value:"Further Exploration",id:"further-exploration",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"surge-architecture",children:"Surge Architecture"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Surge Architecture",src:n(1232).A+"",width:"9864",height:"6002"})}),"\n",(0,i.jsx)(t.h2,{id:"purpose-of-each-component",children:"Purpose of Each Component"}),"\n",(0,i.jsx)(t.p,{children:"Surge\u2019s architecture is composed of several key components, each serving a specific function:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://github.com/NethermindEth/nethermind",children:"Nethermind Execution Client (NMC):"})})," A high-performance Ethereum client that delivers ",(0,i.jsx)(t.a,{href:"/docs/about/gigagas",children:"GigaGas performance"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Taiko Client:"})," Manages the consensus layer of the rollup. ",(0,i.jsx)(t.a,{href:"https://docs.taiko.xyz/taiko-alethia-protocol/protocol-architecture/taiko-alethia-nodes#consensus-layer-taiko-client",children:"Taiko Documentation"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"components-of-the-taiko-stack",children:"Components of the Taiko Stack"}),"\n",(0,i.jsx)(t.p,{children:"The Taiko Client consists of several sub-components:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Taiko Proposer:"})," Proposes new blocks to the rollup."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Taiko Prover:"})," Generates state transition proofs for the rollup."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Taiko Driver:"})," Follows and monitors the rollup\u2019s state transitions."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"proposing-flow",children:"Proposing Flow"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Proposing Flow",src:n(8023).A+"",width:"6302",height:"3164"})}),"\n",(0,i.jsx)(t.p,{children:"The proposing flow diagram illustrates how new blocks are proposed in Surge. The process begins with a proposer submitting a block, which includes transactions and state updates. The block is then validated by the execution client to ensure it adheres to the protocol rules. This ensures that only valid blocks are added to the rollup chain."}),"\n",(0,i.jsx)(t.h2,{id:"proving-flow",children:"Proving Flow"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Proving Flow",src:n(2555).A+"",width:"13154",height:"5064"})}),"\n",(0,i.jsx)(t.p,{children:"The proving flow diagram shows how state transition proofs are generated and verified. Surge employs a multi-prover system where at least two out of three independent proving systems (SGX, SP1, and Risc0) must agree on the validity of a state transition. This ensures trustless and secure scaling through zero-knowledge proofs."}),"\n",(0,i.jsx)(t.h2,{id:"chain-flow",children:"Chain Flow"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Chain Flow",src:n(4003).A+"",width:"8528",height:"3164"})}),"\n",(0,i.jsx)(t.p,{children:"The chain flow diagram provides an overview of how the rollup chain interacts with the Ethereum mainnet. Transactions are executed on the rollup, and the resulting state roots are periodically submitted to the Ethereum mainnet for finality. This ensures that the rollup inherits Ethereum's security guarantees while maintaining high throughput."}),"\n",(0,i.jsx)(t.h2,{id:"how-surge-differs-from-the-taiko-stack",children:"How Surge Differs from the Taiko Stack"}),"\n",(0,i.jsx)(t.p,{children:"Surge has customized aspects of the Taiko architecture to enhance performance and remove any reliance on new tokens:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Token-Free Design:"})," Surge removes token dependencies, allowing the use of Ether as a bond for block proposals."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Execution Client Upgrade:"})," Replaced TaikoGeth with the Nethermind Execution Client (NMC) to achieve better performance. ",(0,i.jsx)(t.a,{href:"https://github.com/NethermindEth/nethermind",children:"NMC Documentation"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Time-Locked Owner:"})," Modified the multisig implementation to feature a 45-day timelock, aligning with Stage 2 requirements by L2Beat."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Verification Streak Checks:"})," Owner operations via the multisig are blocked if there has been a liveness disruption of 7 days or more within the past 45 days."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Disabled Pausing:"})," The owner cannot pause the protocol or peripheral contracts."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"2/3 Proof Verifier:"})," There are three proof systems (SGX, SP1, and Risc0). At least two of these must agree on a state transition for it to be accepted."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"No Contestation Window:"})," As Surge employs a single ZK approach (no optimistic fallback), it does not require a contestation window. This design choice makes Surge a pure ZK-Rollup rather than an Optimistic Rollup."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"further-exploration",children:"Further Exploration"}),"\n",(0,i.jsx)(t.p,{children:"To deepen your understanding and explore Surge\u2019s architecture in a practical environment, check the detailed guide on deploying and running your own local Surge devnet:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/guides/running-surge",children:(0,i.jsx)(t.strong,{children:"Deploy and run your own Surge devnet \u2192"})})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1232:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Diagram-39e493b5ac18405538f24d7b301bb01f.png"},4003:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/chain-flow-4d0a27a7aec9cf6490f432eddbc3504a.png"},8023:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/proposing-flow-ed806cfd9bbae67540a5e1791657fc4c.png"},2555:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/proving-flow-342775d865ca123eafe41cda47ea51d1.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);