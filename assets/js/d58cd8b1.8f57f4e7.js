"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[906],{1373:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=r(4848),t=r(8453),s=r(1470),l=r(9365);const a={sidebar_position:4},o="Deploy Protocols on L2",c={id:"Guides/deploy-l2-protocols",title:"Deploy Protocols on L2",description:"This guide explains how to deploy and configure the bridge and signal service protocols on L2.",source:"@site/docs/Guides/deploy-l2-protocols.mdx",sourceDirName:"Guides",slug:"/Guides/deploy-l2-protocols",permalink:"/docs/Guides/deploy-l2-protocols",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/deploy-l2-protocols.mdx",tags:[],version:"current",lastUpdatedAt:1737611289e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deploy L2",permalink:"/docs/Guides/deploy-l2"},next:{title:"Deploy Relayer",permalink:"/docs/Guides/deploy-relay"}},d={},u=[{value:"Bridge Configuration",id:"bridge-configuration",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Set Environment Variables",id:"set-environment-variables",level:3},{value:"Bridge Setup Script",id:"bridge-setup-script",level:3},{value:"Signal Service Configuration",id:"signal-service-configuration",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Set Environment Variables",id:"set-environment-variables-1",level:3},{value:"Signal Service Setup Script",id:"signal-service-setup-script",level:3},{value:"Signal Service Configuration",id:"signal-service-configuration-1",level:3},{value:"Prerequisites",id:"prerequisites-2",level:4},{value:"Set Environment Variables",id:"set-environment-variables-2",level:3},{value:"ERC20 Vault Setup Script",id:"erc20-vault-setup-script",level:3},{value:"Verification Steps",id:"verification-steps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deploy-protocols-on-l2",children:"Deploy Protocols on L2"})}),"\n",(0,i.jsx)(n.p,{children:"This guide explains how to deploy and configure the bridge and signal service protocols on L2."}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(l.A,{value:"bridge",label:"1. Configure Bridge",default:!0,children:[(0,i.jsx)(n.h3,{id:"bridge-configuration",children:"Bridge Configuration"}),(0,i.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 Chain ID (3151908)"}),"\n",(0,i.jsxs)(n.li,{children:["L1_BRIDGE: ",(0,i.jsx)(n.code,{children:"0x63e6DDE6763C3466C7b45Be880f7eE5dC2ca3E25"})]}),"\n",(0,i.jsxs)(n.li,{children:["L2_SHARED_ADDRESS_MANAGER: ",(0,i.jsx)(n.code,{children:"0x7633740000000000000000000000000000000006"})]}),"\n",(0,i.jsx)(n.li,{children:"L2 Prefunded Account private key"}),"\n",(0,i.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),(0,i.jsx)(n.h3,{id:"set-environment-variables",children:"Set Environment Variables"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export FOUNDRY_PROFILE=layer1\nexport DOMAIN=3151908\nexport ADDRESS=0x63e6DDE6763C3466C7b45Be880f7eE5dC2ca3E25\nexport NAME=0x6272696467650000000000000000000000000000000000000000000000000000\nexport PROXY_ADDRESS=0x7633740000000000000000000000000000000006\nexport PRIVATE_KEY=0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31\nexport L2_RPC_URL=https://placeholder:8547\n"})}),(0,i.jsx)(n.h3,{id:"bridge-setup-script",children:"Bridge Setup Script"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run \\\n-e FOUNDRY_PROFILE=${FOUNDRY_PROFILE} \\\n-e DOMAIN=${DOMAIN} \\\n-e ADDRESS=${ADDRESS} \\\n-e NAME=${NAME} \\\n-e PROXY_ADDRESS=${PROXY_ADDRESS} \\\n-e PRIVATE_KEY=${PRIVATE_KEY} \\\nnethsurge/taiko-contract:surge-devnet \\\nforge script ./script/shared/SetAddress.s.sol \\\n--private-key ${PRIVATE_KEY} \\\n--fork-url ${L2_RPC_URL} \\\n--broadcast -vvv\n"})})]}),(0,i.jsxs)(l.A,{value:"signal",label:"2. Configure Signal Service",children:[(0,i.jsx)(n.h3,{id:"signal-service-configuration",children:"Signal Service Configuration"}),(0,i.jsx)(n.h4,{id:"prerequisites-1",children:"Prerequisites"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 Chain ID (3151908)"}),"\n",(0,i.jsxs)(n.li,{children:["L1_SIGNAL_SERVICE: ",(0,i.jsx)(n.code,{children:"0x72ae2643518179cF01bcA3278a37ceAD408DE8b2"})]}),"\n",(0,i.jsxs)(n.li,{children:["L2_SHARED_ADDRESS_MANAGER: ",(0,i.jsx)(n.code,{children:"0x7633740000000000000000000000000000000006"})]}),"\n",(0,i.jsx)(n.li,{children:"L2 Prefunded Account private key"}),"\n",(0,i.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),(0,i.jsx)(n.h3,{id:"set-environment-variables-1",children:"Set Environment Variables"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export FOUNDRY_PROFILE=layer1\nexport DOMAIN=3151908\nexport ADDRESS=0x72ae2643518179cF01bcA3278a37ceAD408DE8b2\nexport NAME=0x7369676e616c5f73657276696365000000000000000000000000000000000000\nexport PROXY_ADDRESS=0x7633740000000000000000000000000000000006\nexport PRIVATE_KEY=0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31\nexport L2_RPC_URL=https://placeholder:8547\n"})}),(0,i.jsx)(n.h3,{id:"signal-service-setup-script",children:"Signal Service Setup Script"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run \\\n-e FOUNDRY_PROFILE=${FOUNDRY_PROFILE} \\\n-e DOMAIN=${DOMAIN} \\\n-e ADDRESS=${ADDRESS} \\\n-e NAME=${NAME} \\\n-e PROXY_ADDRESS=${PROXY_ADDRESS} \\\n-e PRIVATE_KEY=${PRIVATE_KEY} \\\nnethsurge/taiko-contract:surge-devnet \\\nforge script ./script/shared/SetAddress.s.sol \\\n--private-key ${PRIVATE_KEY} \\\n--fork-url ${L2_RPC_URL} \\\n--broadcast -vvv\n"})})]}),(0,i.jsxs)(l.A,{value:"erc20",label:"3. Configure ERC20 Vault",children:[(0,i.jsx)(n.h3,{id:"signal-service-configuration-1",children:"Signal Service Configuration"}),(0,i.jsx)(n.h4,{id:"prerequisites-2",children:"Prerequisites"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 Chain ID (3151908)"}),"\n",(0,i.jsxs)(n.li,{children:["L1_ERC20_VAULT: ",(0,i.jsx)(n.code,{children:"0xEE0fCB8E5cCAD0b4197BAabd633333886f5C364d"})]}),"\n",(0,i.jsxs)(n.li,{children:["L2_SHARED_ADDRESS_MANAGER: ",(0,i.jsx)(n.code,{children:"0x7633740000000000000000000000000000000006"})]}),"\n",(0,i.jsx)(n.li,{children:"L2 Prefunded Account private key"}),"\n",(0,i.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),(0,i.jsx)(n.h3,{id:"set-environment-variables-2",children:"Set Environment Variables"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export FOUNDRY_PROFILE=layer1\nexport DOMAIN=3151908\nexport ADDRESS=0xEE0fCB8E5cCAD0b4197BAabd633333886f5C364d\nexport NAME=0x65726332305f7661756c74000000000000000000000000000000000000000000\nexport PROXY_ADDRESS=0x7633740000000000000000000000000000000006\nexport PRIVATE_KEY=0xbcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31\nexport L2_RPC_URL=https://placeholder:8547\n"})}),(0,i.jsx)(n.h3,{id:"erc20-vault-setup-script",children:"ERC20 Vault Setup Script"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run \\\n-e FOUNDRY_PROFILE=${FOUNDRY_PROFILE} \\\n-e DOMAIN=${DOMAIN} \\\n-e ADDRESS=${ADDRESS} \\\n-e NAME=${NAME} \\\n-e PROXY_ADDRESS=${PROXY_ADDRESS} \\\n-e PRIVATE_KEY=${PRIVATE_KEY} \\\nnethsurge/taiko-contract:surge-devnet \\\nforge script ./script/shared/SetAddress.s.sol \\\n--private-key ${PRIVATE_KEY} \\\n--fork-url ${L2_RPC_URL} \\\n--broadcast -vvv\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"verification-steps",children:"Verification Steps"}),"\n",(0,i.jsx)(n.p,{children:"After deploying both protocols:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Verify Bridge Setup"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm the bridge address is correctly set"}),"\n",(0,i.jsx)(n.li,{children:"Check transaction confirmation on L2"}),"\n",(0,i.jsx)(n.li,{children:"Verify the bridge contract is accessible"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Verify Signal Service Setup"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm the signal service address is correctly set"}),"\n",(0,i.jsx)(n.li,{children:"Check transaction confirmation on L2"}),"\n",(0,i.jsx)(n.li,{children:"Verify the signal service contract is accessible"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Verify ERC20 Vault Setup"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm the ERC20 vault address is correctly set"}),"\n",(0,i.jsx)(n.li,{children:"Check transaction confirmation on L2"}),"\n",(0,i.jsx)(n.li,{children:"Verify the ERC20 vault contract is accessible"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Important Note",type:"warning",children:(0,i.jsx)(n.p,{children:"Ensure you have sufficient funds in your L2 account before deploying these protocols, as each transaction will require gas fees."})}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"If you encounter issues during deployment:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Check Connectivity"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify L2 RPC endpoint is accessible"}),"\n",(0,i.jsx)(n.li,{children:"Ensure network connectivity is stable"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Account Issues"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Confirm account has sufficient funds"}),"\n",(0,i.jsx)(n.li,{children:"Verify private key is correct"}),"\n",(0,i.jsx)(n.li,{children:"Check account permissions"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Contract Interactions"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify contract addresses are correct"}),"\n",(0,i.jsx)(n.li,{children:"Check that ABI matches the deployed contracts"}),"\n",(0,i.jsx)(n.li,{children:"Ensure gas limits are sufficient"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var i=r(4164);const t={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(t.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>R});var i=r(6540),t=r(4164),s=r(3104),l=r(6347),a=r(205),o=r(7485),c=r(1682),d=r(679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=h(e),[l,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:r,groupId:t}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(r);return[t,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function E(e){let{className:n,block:r,selectedValue:i,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),t=a[r].value;t!==i&&(c(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function S(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(E,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function R(e){const n=(0,v.A)();return(0,g.jsx)(S,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(6540);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);