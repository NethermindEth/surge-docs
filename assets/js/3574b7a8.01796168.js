"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[3736],{3269:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/running-surge/deploy-l1","title":"Deploy L1","description":"In blockchain technology, a Layer 1 network refers to the base protocol, such as Ethereum or Bitcoin, that operates independently to process and finalize transactions. For the Surge development network, establishing an L1 environment is essential because it serves as the foundational layer where the Taiko protocol is deployed. This setup is crucial for launching and operating the Surge Layer 2 network, as L2 solutions rely on L1 for security and consensus.","source":"@site/docs/guides/running-surge/deploy-l1.mdx","sourceDirName":"guides/running-surge","slug":"/guides/running-surge/deploy-l1","permalink":"/docs/guides/running-surge/deploy-l1","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/surge-docs/tree/main/docs/guides/running-surge/deploy-l1.mdx","tags":[],"version":"current","lastUpdatedAt":1745080030000,"sidebarPosition":1,"frontMatter":{"title":"Deploy L1","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Run your own Surge Devnet","permalink":"/docs/guides/running-surge/"},"next":{"title":"Deploy Protocols on L1","permalink":"/docs/guides/running-surge/deploy-l1-protocols"}}');var i=s(4848),r=s(8453);const o={title:"Deploy L1",sidebar_position:1},l="Deploy L1",a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Install Kurtosis",id:"1-install-kurtosis",level:3},{value:"2. Clone Repository",id:"2-clone-repository",level:3},{value:"Deploy the L1 Network",id:"deploy-the-l1-network",level:2},{value:"Verify Your Deployment",id:"verify-your-deployment",level:2},{value:"Verify the Execution Layer",id:"verify-the-execution-layer",level:3},{value:"Verify the Consensus Layer",id:"verify-the-consensus-layer",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deploy-l1",children:"Deploy L1"})}),"\n",(0,i.jsx)(n.p,{children:"In blockchain technology, a Layer 1 network refers to the base protocol, such as Ethereum or Bitcoin, that operates independently to process and finalize transactions. For the Surge development network, establishing an L1 environment is essential because it serves as the foundational layer where the Taiko protocol is deployed. This setup is crucial for launching and operating the Surge Layer 2 network, as L2 solutions rely on L1 for security and consensus."}),"\n",(0,i.jsx)(n.p,{children:"This guide explains how to deploy an L1 development network using Kurtosis. By the end, you'll have a fully functional L1 environment running within a Kurtosis enclave, providing the necessary infrastructure for Surge's L2 deployment."}),"\n",(0,i.jsxs)(n.p,{children:["For a comprehensive understanding of how L1 integrates into Surge's architecture, refer to the ",(0,i.jsx)(n.a,{href:"/docs/about/architecture",children:"Surge Architecture documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.h3,{id:"1-install-kurtosis",children:"1. Install Kurtosis"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Kurtosis is a tool that simplifies the development and testing of distributed systems by orchestrating complex, containerized environments using Docker."})}),"\n",(0,i.jsx)(n.p,{children:"First, install Kurtosis by following the official guide:"}),"\n",(0,i.jsx)("div",{className:"flex justify-center my-8",children:(0,i.jsx)("a",{className:"button button--primary button--lg",href:"https://docs.kurtosis.com/install",target:"_blank",rel:"noopener noreferrer",children:(0,i.jsx)(n.p,{children:"Kurtosis Installation Guide \u2197"})})}),"\n",(0,i.jsx)(n.p,{children:"After installation, verify Kurtosis is correctly installed by checking the engine status:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kurtosis engine status\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see output similar to:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"A Kurtosis engine is running with the following info:\nVersion:   1.6.0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-clone-repository",children:"2. Clone Repository"}),"\n",(0,i.jsxs)(n.p,{children:["Next, clone the ",(0,i.jsx)(n.code,{children:"surge-devnet-package"})," repository and navigate into the directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/surge-devnet-package.git\ncd surge-devnet-package\n"})}),"\n",(0,i.jsx)(n.h2,{id:"deploy-the-l1-network",children:"Deploy the L1 Network"}),"\n",(0,i.jsx)(n.p,{children:"Once you've installed Kurtosis and cloned the repository, deploy the L1 network with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kurtosis run --enclave surge-devnet . --args-file network_params.yaml --production\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This command not only deploys the L1 network but also automatically deploys the Taiko protocol on L1. Monitor your terminal output for details on the deployment progress."})}),"\n",(0,i.jsx)(n.h2,{id:"verify-your-deployment",children:"Verify Your Deployment"}),"\n",(0,i.jsx)(n.p,{children:"After deployment, verify that your environment is correctly set up by inspecting the Kurtosis enclave:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kurtosis enclave inspect surge-devnet\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should see a list of active services confirming that both the L1 network and the Taiko protocol have been successfully deployed."}),"\n",(0,i.jsx)(n.h3,{id:"verify-the-execution-layer",children:"Verify the Execution Layer"}),"\n",(0,i.jsxs)(n.p,{children:["Check if the Execution Layer is running correctly by sending a simple ",(0,i.jsx)(n.a,{href:"https://www.quicknode.com/docs/ethereum/web3_clientVersion",children:(0,i.jsx)(n.code,{children:"web3_clientVersion"})})," JSON-RPC request:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n     --data \'{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}\' \\\n     http://127.0.0.1:32002\n'})}),"\n",(0,i.jsx)(n.p,{children:"A successful response should look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": "Nethermind/v1.31.0-unstable+fd87ddb6/linux-x64/dotnet9.0.2",\n  "id": 1\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This indicates the Execution Layer is correctly initialized and running."}),"\n",(0,i.jsx)(n.h3,{id:"verify-the-consensus-layer",children:"Verify the Consensus Layer"}),"\n",(0,i.jsx)(n.p,{children:"Check the Consensus Layer's syncing status by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl http://127.0.0.1:33001/eth/v1/node/syncing\n"})}),"\n",(0,i.jsx)(n.p,{children:"A successful response should resemble:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "is_syncing": false,\n    "is_optimistic": false,\n    "el_offline": false,\n    "head_slot": "28046",\n    "sync_distance": "0"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This confirms the Consensus Layer is successfully running and synchronized."}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"If you encounter any issues:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Confirm that the ",(0,i.jsx)(n.code,{children:"network_params.yaml"})," file is present in the ",(0,i.jsx)(n.code,{children:"surge-devnet-package"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Verify that Kurtosis is properly installed and running with the correct version (",(0,i.jsx)(n.code,{children:"kurtosis engine status"}),")."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);