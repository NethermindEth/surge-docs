"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[285],{9477:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(4848),o=r(8453),s=r(1470),l=r(9365);const i={sidebar_position:5},a="Deploy L2",c={id:"Guides/deploy-l2",title:"Deploy L2",description:"This guide walks you through the process of deploying the L2 network components using Simple Surge Node.",source:"@site/docs/Guides/deploy-l2.mdx",sourceDirName:"Guides",slug:"/Guides/deploy-l2",permalink:"/docs/Guides/deploy-l2",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/deploy-l2.mdx",tags:[],version:"current",lastUpdatedAt:1741963185e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploy Protocols on L1",permalink:"/docs/Guides/deploy-l1-protocols"},next:{title:"Deploy Protocols on L2",permalink:"/docs/Guides/deploy-l2-protocols"}},u={},d=[{value:"Setup Process",id:"setup-process",level:2},{value:"1. Clone Repository",id:"1-clone-repository",level:3},{value:"2. Switch to the Correct Branch",id:"2-switch-to-the-correct-branch",level:3},{value:"3. Configure Environment",id:"3-configure-environment",level:3},{value:"4. Start Components",id:"4-start-components",level:3},{value:"Verification",id:"verification",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-l2",children:"Deploy L2"})}),"\n",(0,t.jsx)(n.p,{children:"This guide walks you through the process of deploying the L2 network components using Simple Surge Node."}),"\n",(0,t.jsx)(n.h2,{id:"setup-process",children:"Setup Process"}),"\n",(0,t.jsx)(n.h3,{id:"1-clone-repository",children:"1. Clone Repository"}),"\n",(0,t.jsx)(n.p,{children:"First, clone the Simple Surge Node repository and navigate to the directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/simple-surge-node.git\n\ncd simple-surge-node\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-switch-to-the-correct-branch",children:"2. Switch to the Correct Branch"}),"\n",(0,t.jsxs)(n.p,{children:["Checkout the ",(0,t.jsx)(n.code,{children:"surge/devnet"})," branch:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout surge/devnet\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-configure-environment",children:"3. Configure Environment"}),"\n",(0,t.jsx)(n.p,{children:"Create and configure your environment file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp .env.sample .env\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Environment Configuration",type:"tip",children:[(0,t.jsxs)(n.p,{children:["Edit your ",(0,t.jsx)(n.code,{children:".env"})," file with the appropriate machine address where you deployed the Kurtosis package. Example configuration:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-env",children:"L1_ENDPOINT_WS=ws://placeholder:32003\nL1_BEACON_HTTP=http://placeholder:33001\n"})}),(0,t.jsx)(n.p,{children:"Make sure to replace the IP address and ports with your actual deployment values."})]}),"\n",(0,t.jsx)(n.h3,{id:"4-start-components",children:"4. Start Components"}),"\n",(0,t.jsx)(n.p,{children:"The deployment consists of three main components that need to be started in sequence:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsx)(l.A,{value:"driver",label:"Driver",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile nethermind_execution_l2 up -d\n"})})}),(0,t.jsx)(l.A,{value:"proposer",label:"Proposer",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile proposer up -d\n"})})}),(0,t.jsx)(l.A,{value:"prover",label:"Prover Relayer",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile prover up -d\n"})})}),(0,t.jsx)(l.A,{value:"metrics",label:"Metrics",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile metrics up -d\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,t.jsx)(n.p,{children:"After starting all components, you should:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Check that all Docker containers are running properly"}),"\n",(0,t.jsx)(n.li,{children:"Monitor the logs for any startup errors"}),"\n",(0,t.jsx)(n.li,{children:"Verify network connectivity between components"}),"\n",(0,t.jsx)(n.li,{children:"(Optional) Deploy BlockScout for chain exploration and verification:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile blockscout up -d\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once deployed, you can access BlockScout through these URLs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["L1 BlockScout: ",(0,t.jsx)(n.a,{href:"http://localhost:35001",children:"http://localhost:35001"})]}),"\n",(0,t.jsxs)(n.li,{children:["L2 BlockScout: ",(0,t.jsx)(n.a,{href:"http://localhost:4000",children:"http://localhost:4000"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"BlockScout provides a web interface for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Exploring blocks, transactions, and accounts"}),"\n",(0,t.jsx)(n.li,{children:"Verifying smart contracts"}),"\n",(0,t.jsx)(n.li,{children:"Monitoring network activity"}),"\n",(0,t.jsx)(n.li,{children:"Tracking token transfers and balances"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Component Order",type:"info",children:[(0,t.jsx)(n.p,{children:"It's important to start the components in the specified order:"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Driver"}),"\n",(0,t.jsx)(n.li,{children:"Proposer"}),"\n",(0,t.jsx)(n.li,{children:"Prover Relayer"}),"\n",(0,t.jsx)(n.li,{children:"Metrics (Prometheus and Grafana)"}),"\n",(0,t.jsx)(n.li,{children:"(Optional) BlockScout"}),"\n"]}),(0,t.jsx)(n.p,{children:"This sequence ensures proper initialization and communication between components."})]}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify all environment variables are correctly set"}),"\n",(0,t.jsx)(n.li,{children:"Check Docker logs for specific error messages"}),"\n",(0,t.jsx)(n.li,{children:"Ensure all required ports are accessible"}),"\n",(0,t.jsx)(n.li,{children:"Confirm network connectivity between components"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var t=r(4164);const o={tabItem:"tabItem_Ymn6"};var s=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(6540),o=r(4164),s=r(3104),l=r(6347),i=r(205),a=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const o=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:o}=e,s=h(e),[l,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:r,groupId:o}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,u.Dv)(r);return[o,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:o}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&a(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),x(e)}),[d,x,s]),tabValues:s}}var x=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=a.indexOf(n),o=i[r].value;o!==t&&(c(n),l(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...s,className:(0,o.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(6540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);