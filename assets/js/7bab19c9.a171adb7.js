"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[599],{3693:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=r(4848),s=r(8453),l=r(1470),t=r(9365);const o={sidebar_position:8},c="Deploy Bridge UI",a={id:"Guides/deploy-bridge-ui",title:"Deploy Bridge UI",description:"This guide walks you through deploying the Surge Bridge UI, including all necessary configurations and services.",source:"@site/docs/Guides/deploy-bridge-ui.mdx",sourceDirName:"Guides",slug:"/Guides/deploy-bridge-ui",permalink:"/docs/Guides/deploy-bridge-ui",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/deploy-bridge-ui.mdx",tags:[],version:"current",lastUpdatedAt:1741963185e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Deploy Relayer",permalink:"/docs/Guides/deploy-relayer"},next:{title:"Troubleshooting",permalink:"/docs/Troubleshooting/"}},d={},u=[{value:"1. Clone Repository",id:"1-clone-repository",level:2},{value:"2. Switch to the Correct Branch",id:"2-switch-to-the-correct-branch",level:3},{value:"3. SSL Certificate Setup",id:"3-ssl-certificate-setup",level:2},{value:"4. Configure Nginx Reverse Proxy",id:"4-configure-nginx-reverse-proxy",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"5. Configure Components",id:"5-configure-components",level:2},{value:"Configuration Files Setup",id:"configuration-files-setup",level:3},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Prerequisites",id:"prerequisites-2",level:4},{value:"Prerequisites",id:"prerequisites-3",level:4},{value:"6. Deploy Services",id:"6-deploy-services",level:2},{value:"Verification Steps",id:"verification-steps",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deploy-bridge-ui",children:"Deploy Bridge UI"})}),"\n",(0,i.jsx)(n.p,{children:"This guide walks you through deploying the Surge Bridge UI, including all necessary configurations and services."}),"\n",(0,i.jsx)(n.h2,{id:"1-clone-repository",children:"1. Clone Repository"}),"\n",(0,i.jsx)(n.p,{children:"First, clone the Surge Taiko Mono repository and navigate to the directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/surge-taiko-mono.git\n\ncd surge-taiko-mono\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-switch-to-the-correct-branch",children:"2. Switch to the Correct Branch"}),"\n",(0,i.jsxs)(n.p,{children:["Checkout the ",(0,i.jsx)(n.code,{children:"surge/devnet"})," branch:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout surge/devnet\n"})}),"\n",(0,i.jsx)(n.h2,{id:"3-ssl-certificate-setup",children:"3. SSL Certificate Setup"}),"\n",(0,i.jsx)(n.p,{children:"Navigate to the bridge-ui package and generate SSL certificates for nginx:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd packages/bridge-ui\n\ncd ./nginx\nchmod +x ./generate-certs.sh\n./generate-certs.sh\n"})}),"\n",(0,i.jsx)(n.h2,{id:"4-configure-nginx-reverse-proxy",children:"4. Configure Nginx Reverse Proxy"}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 RPC URL"}),"\n",(0,i.jsx)(n.li,{children:"L1 Blockscout URL"}),"\n",(0,i.jsx)(n.li,{children:"L1 to L2 Relayer URL"}),"\n",(0,i.jsx)(n.li,{children:"L2 RPC URL"}),"\n",(0,i.jsx)(n.li,{children:"L2 Blockscout URL"}),"\n",(0,i.jsx)(n.li,{children:"L2 to L1 Relayer URL"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Update the nginx configuration file ",(0,i.jsx)(n.code,{children:"./nginx/nginx.conf"})," with your specific URLs and endpoints."]}),"\n",(0,i.jsx)(n.p,{children:"Example configuration part:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"# L1 RPC endpoint\nlocation /l1-rpc/ {\n    proxy_pass http://placeholder:32002/;\n    proxy_http_version 1.1;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n}\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"5-configure-components",children:"5. Configure Components"}),"\n",(0,i.jsx)(n.h3,{id:"configuration-files-setup",children:"Configuration Files Setup"}),"\n",(0,i.jsx)(n.p,{children:"You'll need to configure several JSON files before deployment. Each has specific requirements:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The ULRs specified in the configuration files must use HTTPS."})}),"\n",(0,i.jsxs)(l.A,{children:[(0,i.jsxs)(t.A,{value:"bridges",label:"Bridges",default:!0,children:[(0,i.jsx)(n.h4,{id:"prerequisites-1",children:"Prerequisites"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 Chain ID"}),"\n",(0,i.jsx)(n.li,{children:"L1 Contract Addresses:"}),"\n",(0,i.jsx)(n.li,{children:"L1_BRIDGE"}),"\n",(0,i.jsx)(n.li,{children:"L1_ERC20_VAULT"}),"\n",(0,i.jsx)(n.li,{children:"L1_ERC721_VAULT"}),"\n",(0,i.jsx)(n.li,{children:"L1_ERC1155_VAULT"}),"\n",(0,i.jsx)(n.li,{children:"L1_SIGNAL_SERVICE"}),"\n",(0,i.jsx)(n.li,{children:"L2 Chain ID"}),"\n",(0,i.jsx)(n.li,{children:"L2 Contract Addresses:"}),"\n",(0,i.jsx)(n.li,{children:"L2_BRIDGE"}),"\n",(0,i.jsx)(n.li,{children:"L2_ERC20_VAULT"}),"\n",(0,i.jsx)(n.li,{children:"L2_ERC721_VAULT"}),"\n",(0,i.jsx)(n.li,{children:"L2_ERC1155_VAULT"}),"\n",(0,i.jsx)(n.li,{children:"L2_SIGNAL_SERVICE"}),"\n"]}),(0,i.jsxs)(n.p,{children:["Path: ",(0,i.jsx)(n.code,{children:"./config/configuredBridges.json"})]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The file contains default addresses used in the tutorial. Replace if necessary."})})]}),(0,i.jsxs)(t.A,{value:"chains",label:"Chains",children:[(0,i.jsx)(n.h4,{id:"prerequisites-2",children:"Prerequisites"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 Chain ID"}),"\n",(0,i.jsx)(n.li,{children:"L1 RPC URL"}),"\n",(0,i.jsx)(n.li,{children:"L2 Chain ID"}),"\n",(0,i.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),(0,i.jsxs)(n.p,{children:["Path: ",(0,i.jsx)(n.code,{children:"./config/configuredChains.json"})]}),(0,i.jsxs)(n.p,{children:["Modify ",(0,i.jsx)(n.code,{children:"rpcUrls"})," fields to point to the alias specified in the nginx configuration."]}),(0,i.jsx)(n.p,{children:"Example configuration parts:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"3151908": {\n    "name": "Kurtosis",\n    "type": "L1",\n    "icon": "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",\n    "rpcUrls": {\n        "default": {\n            "http": [\n            "https://placeholder/l1-rpc/"\n            ]\n        }\n    },\n\n    ...\n}\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"763374": {\n    "name": "Taiko",\n    "type": "L2",\n    "icon": "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",\n    "rpcUrls": {\n        "default": {\n            "http": [\n                "https://placeholder/l2-rpc/"\n            ]\n        }\n    },\n\n    ...\n}\n'})})]}),(0,i.jsxs)(t.A,{value:"relayer",label:"Relayer",children:[(0,i.jsx)(n.h4,{id:"prerequisites-3",children:"Prerequisites"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"L1 Chain ID"}),"\n",(0,i.jsx)(n.li,{children:"L1 to L2 Relayer URL"}),"\n",(0,i.jsx)(n.li,{children:"L2 Chain ID"}),"\n",(0,i.jsx)(n.li,{children:"L2 to L1 Relayer URL"}),"\n"]}),(0,i.jsxs)(n.p,{children:["Path: ",(0,i.jsx)(n.code,{children:"./config/configuredRelayer.json"})]}),(0,i.jsx)(n.p,{children:"Example configuration:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "configuredRelayer": [\n        {\n        "chainIds": [3151908, 763374],\n        "url": "https://placeholder/l1-relayer/"\n        },\n        {\n        "chainIds": [763374, 3151908],\n        "url": "https://placeholder/l2-relayer/"\n        }\n    ]\n}\n\n'})})]}),(0,i.jsxs)(t.A,{value:"other",label:"Additional Configs",children:[(0,i.jsx)(n.p,{children:"These files also need to be configured:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"./config/configuredCustomTokens.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"./config/configuredEventIndexer.json"})}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"These files may require minimal or no modification depending on your deployment needs."})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"6-deploy-services",children:"6. Deploy Services"}),"\n",(0,i.jsx)(n.p,{children:"Deploy the Bridge UI and nginx services:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Start Bridge UI\ndocker compose --profile bridge-ui up -d --build\n\n# Start Nginx\ndocker compose --profile nginx up -d\n"})}),"\n",(0,i.jsx)(n.h2,{id:"verification-steps",children:"Verification Steps"}),"\n",(0,i.jsx)(n.p,{children:"After deployment, verify:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Bridge UI Accessibility"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check if the UI is accessible via the configured domain"}),"\n",(0,i.jsx)(n.li,{children:"Verify SSL certificate is working properly"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Component Connectivity"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify connection to L1 and L2 networks"}),"\n",(0,i.jsx)(n.li,{children:"Check relayer connectivity"}),"\n",(0,i.jsx)(n.li,{children:"Confirm Blockscout integration"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Service Health"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Check running containers\ndocker compose ps\n\n# View Bridge UI logs\ndocker compose logs bridge-ui -f\n\n# View Nginx logs\ndocker compose logs nginx -f\n"})}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"UI Access Issues"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check nginx configuration"}),"\n",(0,i.jsx)(n.li,{children:"Verify SSL certificate setup"}),"\n",(0,i.jsx)(n.li,{children:"Confirm port mappings"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Network Connectivity"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify RPC endpoints"}),"\n",(0,i.jsx)(n.li,{children:"Check relayer connections"}),"\n",(0,i.jsx)(n.li,{children:"Confirm blockchain network access"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Configuration Problems"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Validate JSON syntax in config files"}),"\n",(0,i.jsx)(n.li,{children:"Verify contract addresses"}),"\n",(0,i.jsx)(n.li,{children:"Check chain IDs match your network"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Make sure all URLs in the nginx configuration are accessible and properly secured before deployment."})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>t});r(6540);var i=r(4164);const s={tabItem:"tabItem_Ymn6"};var l=r(4848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,t),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>L});var i=r(6540),s=r(4164),l=r(3104),t=r(6347),o=r(205),c=r(7485),a=r(1682),d=r(679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:s}}=e;return{value:n,label:r,attributes:i,default:s}}))}(r);return function(e){const n=(0,a.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const s=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,i.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[t,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:l}))),[a,u]=x({queryString:r,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,d.Dv)(r);return[s,(0,i.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),j=(()=>{const e=a??g;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=r(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(4848);function y(e){let{className:n,block:r,selectedValue:i,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=o[r].value;s!==i&&(a(n),t(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:l}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function v(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,m.jsx)(y,{...n,...e}),(0,m.jsx)(b,{...n,...e})]})}function L(e){const n=(0,f.A)();return(0,m.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var i=r(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);