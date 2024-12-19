"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[906],{1373:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(4848),s=r(8453),i=r(1470),a=r(9365);const o={sidebar_position:4},l="Deploy Protocols on L2",c={id:"Guides/deploy-l2-protocols",title:"Deploy Protocols on L2",description:"This guide explains how to deploy and configure the bridge and signal service protocols on L2.",source:"@site/docs/Guides/deploy-l2-protocols.mdx",sourceDirName:"Guides",slug:"/Guides/deploy-l2-protocols",permalink:"/docs/Guides/deploy-l2-protocols",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/deploy-l2-protocols.mdx",tags:[],version:"current",lastUpdatedAt:1734623003e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deploy L2",permalink:"/docs/Guides/deploy-l2"},next:{title:"Deploy Relayer",permalink:"/docs/Guides/deploy-relay"}},d={},u=[{value:"Bridge Configuration",id:"bridge-configuration",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Bridge Setup",id:"bridge-setup",level:4},{value:"Signal Service Configuration",id:"signal-service-configuration",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Signal Service Setup",id:"signal-service-setup",level:4},{value:"Verification Steps",id:"verification-steps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-protocols-on-l2",children:"Deploy Protocols on L2"})}),"\n",(0,t.jsx)(n.p,{children:"This guide explains how to deploy and configure the bridge and signal service protocols on L2."}),"\n",(0,t.jsxs)(i.A,{children:[(0,t.jsxs)(a.A,{value:"bridge",label:"1. Configure Bridge",default:!0,children:[(0,t.jsx)(n.h3,{id:"bridge-configuration",children:"Bridge Configuration"}),(0,t.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L1 Chain ID (3151908)"}),"\n",(0,t.jsxs)(n.li,{children:["L1_BRIDGE: ",(0,t.jsx)(n.code,{children:"0x72bCbB3f339aF622c28a26488Eed9097a2977404"})]}),"\n",(0,t.jsxs)(n.li,{children:["L2_SHARED_ADDRESS_MANAGER: ",(0,t.jsx)(n.code,{children:"0x7633740000000000000000000000000000000006"})]}),"\n",(0,t.jsxs)(n.li,{children:["L2 Prefunded Account private key ",(0,t.jsx)(n.code,{children:"0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31"})]}),"\n",(0,t.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),(0,t.jsx)(n.p,{children:"Example environment variables:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export L1_CHAIN_ID=3151908\nexport L1_BRIDGE=0x72bCbB3f339aF622c28a26488Eed9097a2977404\nexport L2_SHARED_ADDRESS_MANAGER=0x7633740000000000000000000000000000000006\nexport L2_PREFUNDED_ACCOUNT_PRIVATE_KEY=0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31\nexport L2_RPC_URL=http://1.2.3.4:8547\n"})}),(0,t.jsx)(n.admonition,{title:"Environment Variables",type:"tip",children:(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"L2_RPC_URL"})," with the URL of your L2 RPC endpoint. Modify rest variables as needed."]})}),(0,t.jsx)(n.h4,{id:"bridge-setup",children:"Bridge Setup"}),(0,t.jsx)(n.p,{children:"Choose between running a Docker container or a Node script."}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Docker",label:"Docker container",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run --rm \\\n-e FOUNDRY_PROFILE=layer1 \\\n-e DOMAIN=$L1_CHAIN_ID \\\n-e ADDRESS=$L1_BRIDGE \\\n-e NAME=0x6272696467650000000000000000000000000000000000000000000000000000 \\\n-e PROXY_ADDRESS=$L2_SHARED_ADDRESS_MANAGER \\\n-e FORK_URL=$L2_RPC_URL \\\n-e PRIVATE_KEY=$L2_PREFUNDED_ACCOUNT_PRIVATE_KEY \\\n-e FORGE_FLAGS="--broadcast -vvv" \\\nnethsurge/protocol:devnet sh -c \'forge script ./script/shared/SetAddress.s.sol --fork-url "$FORK_URL" $FORGE_FLAGS\'\n'})})}),(0,t.jsx)(a.A,{value:"script",label:"Node script",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\n\n// Configuration\nconst RPC_URL = $L2_RPC_URL;\nconst PRIVATE_KEY = $L2_PREFUNDED_ACCOUNT_PRIVATE_KEY;\nconst CONTRACT_ADDRESS = $L2_SHARED_ADDRESS_MANAGER;\n\n// Contract ABI (Application Binary Interface)\nconst contractABI = [{\n    "inputs": [\n        { "internalType": "uint64", "name": "_chainId", "type": "uint64" },\n        { "internalType": "bytes32", "name": "_name", "type": "bytes32" },\n        { "internalType": "address", "name": "_newAddress", "type": "address" }\n    ],\n    "name": "setAddress",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n}];\n\nasync function main() {\n    // Initialize provider and wallet\n    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);\n    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);\n\n    // Create contract instance\n    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, wallet);\n\n    // Prepare parameters\n    const chainId = $L1_CHAIN_ID;\n    const name = ethers.utils.formatBytes32String("bridge");\n    const newAddress = $L1_BRIDGE;\n\n    try {\n        // Send transaction\n        const tx = await contract.setAddress(chainId, name, newAddress);\n        console.log("Transaction hash:", tx.hash);\n\n        // Wait for confirmation\n        const receipt = await tx.wait();\n        console.log("Transaction confirmed in block:", receipt.blockNumber);\n    } catch (error) {\n        console.error("Error calling setAddress:", error);\n    }\n}\n\nmain();\n'})})})]})]}),(0,t.jsxs)(a.A,{value:"signal",label:"2. Configure Signal Service",children:[(0,t.jsx)(n.h3,{id:"signal-service-configuration",children:"Signal Service Configuration"}),(0,t.jsx)(n.h4,{id:"prerequisites-1",children:"Prerequisites"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"L1 Chain ID (3151908)"}),"\n",(0,t.jsxs)(n.li,{children:["L1_SIGNAL_SERVICE: ",(0,t.jsx)(n.code,{children:"0x00c042C4D5D913277CE16611a2ce6e9003554aD5"})]}),"\n",(0,t.jsxs)(n.li,{children:["L2_SHARED_ADDRESS_MANAGER: ",(0,t.jsx)(n.code,{children:"0x7633740000000000000000000000000000000006"})]}),"\n",(0,t.jsxs)(n.li,{children:["L2 Prefunded Account private key ",(0,t.jsx)(n.code,{children:"0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31"})]}),"\n",(0,t.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),(0,t.jsx)(n.p,{children:"Example environment variables:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export L1_CHAIN_ID=3151908\nexport L1_SIGNAL_SERVICE=0x00c042C4D5D913277CE16611a2ce6e9003554aD5\nexport L2_SHARED_ADDRESS_MANAGER=0x7633740000000000000000000000000000000006\nexport L2_PREFUNDED_ACCOUNT_PRIVATE_KEY=0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31\nexport L2_RPC_URL=http://1.2.3.4:8547\n"})}),(0,t.jsx)(n.admonition,{title:"Environment Variables",type:"tip",children:(0,t.jsxs)(n.p,{children:["Replace ",(0,t.jsx)(n.code,{children:"L2_RPC_URL"})," with the URL of your L2 RPC endpoint. Modify rest variables as needed."]})}),(0,t.jsx)(n.h4,{id:"signal-service-setup",children:"Signal Service Setup"}),(0,t.jsx)(n.p,{children:"Choose between running a Docker container or a Node script."}),(0,t.jsxs)(i.A,{children:[(0,t.jsx)(a.A,{value:"Docker",label:"Docker container",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run --rm \\\n-e FOUNDRY_PROFILE=layer1 \\\n-e DOMAIN=$L1_CHAIN_ID \\\n-e ADDRESS=$L1_SIGNAL_SERVICE \\\n-e NAME=0x7369676e616c5f73657276696365000000000000000000000000000000000000 \\\n-e PROXY_ADDRESS=$L2_SHARED_ADDRESS_MANAGER \\\n-e FORK_URL=$L2_RPC_URL \\\n-e PRIVATE_KEY=$L2_PREFUNDED_ACCOUNT_PRIVATE_KEY \\\n-e FORGE_FLAGS="--broadcast -vvv" \\\nnethsurge/protocol:devnet sh -c \'forge script ./script/shared/SetAddress.s.sol --fork-url "$FORK_URL" $FORGE_FLAGS\'\n'})})}),(0,t.jsx)(a.A,{value:"script",label:"Node script",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const { ethers } = require("ethers");\n\n// Configuration\nconst RPC_URL = $L2_RPC_URL;\nconst PRIVATE_KEY = $L2_PREFUNDED_ACCOUNT_PRIVATE_KEY;\nconst CONTRACT_ADDRESS = $L2_SHARED_ADDRESS_MANAGER;\n\n// Contract ABI (Application Binary Interface)\nconst contractABI = [{\n    "inputs": [\n        { "internalType": "uint64", "name": "_chainId", "type": "uint64" },\n        { "internalType": "bytes32", "name": "_name", "type": "bytes32" },\n        { "internalType": "address", "name": "_newAddress", "type": "address" }\n    ],\n    "name": "setAddress",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n}];\n\nasync function main() {\n    // Initialize provider and wallet\n    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);\n    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);\n\n    // Create contract instance\n    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, wallet);\n\n    // Prepare parameters\n    const chainId = $L1_CHAIN_ID;\n    const name = ethers.utils.formatBytes32String("signal_service");\n    const newAddress = $L1_SIGNAL_SERVICE;\n\n    try {\n        // Send transaction\n        const tx = await contract.setAddress(chainId, name, newAddress);\n        console.log("Transaction hash:", tx.hash);\n\n        // Wait for confirmation\n        const receipt = await tx.wait();\n        console.log("Transaction confirmed in block:", receipt.blockNumber);\n    } catch (error) {\n        console.error("Error calling setAddress:", error);\n    }\n}\n\nmain();\n'})})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"verification-steps",children:"Verification Steps"}),"\n",(0,t.jsx)(n.p,{children:"After deploying both protocols:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Verify Bridge Setup"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Confirm the bridge address is correctly set"}),"\n",(0,t.jsx)(n.li,{children:"Check transaction confirmation on L2"}),"\n",(0,t.jsx)(n.li,{children:"Verify the bridge contract is accessible"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Verify Signal Service Setup"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Confirm the signal service address is correctly set"}),"\n",(0,t.jsx)(n.li,{children:"Check transaction confirmation on L2"}),"\n",(0,t.jsx)(n.li,{children:"Verify the signal service contract is accessible"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Important Note",type:"warning",children:(0,t.jsx)(n.p,{children:"Ensure you have sufficient funds in your L2 account before deploying these protocols, as each transaction will require gas fees."})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter issues during deployment:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Check Connectivity"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify L2 RPC endpoint is accessible"}),"\n",(0,t.jsx)(n.li,{children:"Ensure network connectivity is stable"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Account Issues"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Confirm account has sufficient funds"}),"\n",(0,t.jsx)(n.li,{children:"Verify private key is correct"}),"\n",(0,t.jsx)(n.li,{children:"Check account permissions"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Contract Interactions"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify contract addresses are correct"}),"\n",(0,t.jsx)(n.li,{children:"Check that ABI matches the deployed contracts"}),"\n",(0,t.jsx)(n.li,{children:"Ensure gas limits are sufficient"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var i=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>g});var t=r(6540),s=r(4164),i=r(3104),a=r(6347),o=r(205),l=r(7485),c=r(1682),d=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,i=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:r,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),_=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{_&&l(_)}),[_]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=r(2303);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=r(4848);function m(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),s=o[r].value;s!==t&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",_.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function R(e){let{lazy:n,children:r,selectedValue:i}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,A.jsxs)("div",{className:(0,s.A)("tabs-container",_.tabList),children:[(0,A.jsx)(m,{...n,...e}),(0,A.jsx)(R,{...n,...e})]})}function g(e){const n=(0,b.A)();return(0,A.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);