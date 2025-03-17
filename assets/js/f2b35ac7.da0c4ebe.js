"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[766],{464:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var n=i(4848),o=i(8453);const r={sidebar_position:1},s="Surge Architecture",a={id:"About/architecture",title:"Surge Architecture",description:"Surge Architecture",source:"@site/docs/About/architecture.md",sourceDirName:"About",slug:"/About/architecture",permalink:"/docs/About/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/About/architecture.md",tags:[],version:"current",lastUpdatedAt:1742213692e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction to Surge",permalink:"/docs/intro"},next:{title:"Getting Started",permalink:"/docs/Guides/running-surge/"}},c={},h=[{value:"What is the purpose of these components?",id:"what-is-the-purpose-of-these-components",level:2},{value:"Components of Taiko Stack",id:"components-of-taiko-stack",level:3},{value:"How is Surge different from the Taiko Stack",id:"how-is-surge-different-from-the-taiko-stack",level:2},{value:"Goals",id:"goals",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"surge-architecture",children:"Surge Architecture"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Surge Architecture",src:i(5254).A+"",width:"4120",height:"3224"})}),"\n",(0,n.jsx)(t.h2,{id:"what-is-the-purpose-of-these-components",children:"What is the purpose of these components?"}),"\n",(0,n.jsx)(t.p,{children:"Each of the components in our architecture serves a specific purpose:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Nethermind Execution Client (NMC): A high-performance Ethereum client that handles the execution with Gigagas performance (",(0,n.jsx)(t.a,{href:"https://github.com/NethermindEth/nethermind",children:"NMC documentation"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Taiko Client: Handles the consensus layer (",(0,n.jsx)(t.a,{href:"https://docs.taiko.xyz/taiko-alethia-protocol/protocol-architecture/taiko-alethia-nodes#consensus-layer-taiko-client",children:"Taiko documentation"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"components-of-taiko-stack",children:"Components of Taiko Stack"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Taiko Prover: Part of the Taiko Client, generates proofs for the rollup [\n(",(0,n.jsx)(t.a,{href:"https://github.com/taiko-eth/taiko",children:"Taiko documentation"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Taiko Driver: Part of the Taiko Client, handles the rollup (",(0,n.jsx)(t.a,{href:"https://github.com/taiko-eth/taiko",children:"Taiko documentation"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Taiko Proposer: Part of the Taiko Client, proposes the rollup (",(0,n.jsx)(t.a,{href:"https://github.com/taiko-eth/taiko",children:"Taiko documentation"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-is-surge-different-from-the-taiko-stack",children:"How is Surge different from the Taiko Stack"}),"\n",(0,n.jsxs)(t.p,{children:["We customized the implementation of the Taiko stack to remove token dependencies and provide a more secure and transparent experience.\nPerformance improevements were made by swapping out the execution client from TaikoGeth to using the NMC [(NMC documentation) ",(0,n.jsx)(t.a,{href:"https://github.com/NethermindEth/nethermind",children:"https://github.com/NethermindEth/nethermind"}),"]."]}),"\n",(0,n.jsx)(t.p,{children:"Time-Locked owner: We modified the multisig implementation to have a 45 day timelock to be compliant with Stage2 requirements set forth by L2Beat"}),"\n",(0,n.jsx)(t.p,{children:"Verification Streak checks: Owner operations from the multisig are blocked, if there has been a liveness disruption for a period of 7 days or more in the last 45 days."}),"\n",(0,n.jsx)(t.p,{children:"Disabled pausing of protocol and peripheral contracts: The owner cannot pause the protocol"}),"\n",(0,n.jsx)(t.p,{children:"2/3 proof verifier as the sole proof verifier: We have three proof systems: SGX, SP1, Risc0. At least 2 of 3 of the provers must agree on a state transition for the transition to be accepted."}),"\n",(0,n.jsx)(t.h2,{id:"goals",children:"Goals"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Be Stage 2 from launch"}),"\n",(0,n.jsx)(t.li,{children:"Provide Gigagas performance"}),"\n",(0,n.jsx)(t.li,{children:"Be maximally ethereum aligned by being based"}),"\n",(0,n.jsx)(t.li,{children:"Enable seamless composability with L1 and other rollups"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},5254:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/Surge-Architecture-5e5e951845b187b53203161a18697bb6.svg"},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>a});var n=i(6540);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);