"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[220],{6311:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=r(4848),t=r(8453),i=r(1470),l=r(9365);const o={sidebar_position:5},a="Deploy Relayer",c={id:"Guides/deploy-relay",title:"Deploy Relayer",description:"This guide walks you through the process of deploying and configuring the Surge Relayer.",source:"@site/docs/Guides/deploy-relay.mdx",sourceDirName:"Guides",slug:"/Guides/deploy-relay",permalink:"/docs/Guides/deploy-relay",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/deploy-relay.mdx",tags:[],version:"current",lastUpdatedAt:1731580117e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Deploy Protocols on L2",permalink:"/docs/Guides/deploy-l2-protocols"},next:{title:"Deploy Bridge UI",permalink:"/docs/Guides/deploy-bridge-ui"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"L1 Requirements",id:"l1-requirements",level:3},{value:"L2 Requirements",id:"l2-requirements",level:3},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"1. Clone Repository",id:"1-clone-repository",level:3},{value:"2. Configure Environment",id:"2-configure-environment",level:3},{value:"3. Deploy Components",id:"3-deploy-components",level:3},{value:"Verification",id:"verification",level:2},{value:"Component Health Checks",id:"component-health-checks",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-relayer",children:"Deploy Relayer"})}),"\n",(0,s.jsx)(n.p,{children:"This guide walks you through the process of deploying and configuring the Surge Relayer."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before you begin, make sure you have the following contract addresses and endpoints:"}),"\n",(0,s.jsx)(n.h3,{id:"l1-requirements",children:"L1 Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L1_BRIDGE"}),"\n",(0,s.jsx)(n.li,{children:"L1_ERC20_VAULT"}),"\n",(0,s.jsx)(n.li,{children:"L1_ERC721_VAULT"}),"\n",(0,s.jsx)(n.li,{children:"L1_ERC1155_VAULT"}),"\n",(0,s.jsx)(n.li,{children:"L1_TAIKO"}),"\n",(0,s.jsx)(n.li,{children:"L1_SIGNAL_SERVICE"}),"\n",(0,s.jsx)(n.li,{children:"L1 RPC URL"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"l2-requirements",children:"L2 Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"L2_BRIDGE"}),"\n",(0,s.jsx)(n.li,{children:"L2_ERC20_VAULT"}),"\n",(0,s.jsx)(n.li,{children:"L2_ERC721_VAULT"}),"\n",(0,s.jsx)(n.li,{children:"L2_ERC1155_VAULT"}),"\n",(0,s.jsx)(n.li,{children:"L2_TAIKO"}),"\n",(0,s.jsx)(n.li,{children:"L2_SIGNAL_SERVICE"}),"\n",(0,s.jsx)(n.li,{children:"L2 RPC URL"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-clone-repository",children:"1. Clone Repository"}),"\n",(0,s.jsx)(n.p,{children:"First, clone the Surge Taiko Mono repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/surge-taiko-mono.git\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-configure-environment",children:"2. Configure Environment"}),"\n",(0,s.jsx)(n.p,{children:"Navigate to the relayer package and prepare the configuration:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd surge-taiko-mono/packages/relayer\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Configuration",type:"tip",children:(0,s.jsxs)(n.p,{children:["Update the ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," file with your specific RPC URLs and other required configuration values."]})}),"\n",(0,s.jsx)(n.h3,{id:"3-deploy-components",children:"3. Deploy Components"}),"\n",(0,s.jsx)(n.p,{children:"Deploy the relayer components in the following sequence:"}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsxs)(l.A,{value:"init",label:"Initialize Components",default:!0,children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose --profile init up -d\n"})}),(0,s.jsx)(n.p,{children:"This command starts the relayer database and queue services."})]}),(0,s.jsxs)(l.A,{value:"migrations",label:"Run Migrations",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Wait for services to be ready\nsleep 20\n\n# Run migrations\ndocker compose --profile migrations up\n"})}),(0,s.jsx)(n.p,{children:"This step sets up the necessary database schema and initial configurations."})]}),(0,s.jsxs)(l.A,{value:"relayer",label:"Start Relayer",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose --profile relayer up -d\n"})}),(0,s.jsx)(n.p,{children:"This starts the main relayer service."})]})]}),"\n",(0,s.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,s.jsx)(n.p,{children:"After deployment, verify that:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Database is properly initialized"}),"\n",(0,s.jsx)(n.li,{children:"Migrations completed successfully"}),"\n",(0,s.jsx)(n.li,{children:"Relayer service is running and connected to both L1 and L2"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"component-health-checks",children:"Component Health Checks"}),"\n",(0,s.jsx)(n.p,{children:"Monitor the health of your deployment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Check running containers\ndocker compose ps\n\n# View relayer logs\ndocker compose logs relayer -f\n\n# Check database status\ndocker compose logs db -f\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,s.jsx)(n.p,{children:"Ensure all components are running before proceeding with any network operations. The relayer is a critical component for cross-layer communication."})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Connection Issues"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify L1 and L2 RPC endpoints are accessible"}),"\n",(0,s.jsx)(n.li,{children:"Check network connectivity"}),"\n",(0,s.jsx)(n.li,{children:"Ensure all contract addresses are correct"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Database Issues"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify PostgreSQL is running"}),"\n",(0,s.jsx)(n.li,{children:"Check migration logs for errors"}),"\n",(0,s.jsx)(n.li,{children:"Ensure database credentials are correct"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Service Issues"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Check container logs for errors"}),"\n",(0,s.jsx)(n.li,{children:"Verify all environment variables are set"}),"\n",(0,s.jsx)(n.li,{children:"Ensure sufficient system resources"}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Need Help?",type:"tip",children:[(0,s.jsx)(n.p,{children:"If you continue to experience issues, check the logs using:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose logs --tail=100\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var s=r(4164);const t={tabItem:"tabItem_Ymn6"};var i=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>k});var s=r(6540),t=r(4164),i=r(3104),l=r(6347),o=r(205),a=r(7485),c=r(1682),u=r(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:r,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,u.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),g=(()=>{const e=c??f;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&a(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(4848);function j(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,r=a.indexOf(n),t=o[r].value;t!==s&&(c(n),l(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...i,className:(0,t.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,y.jsx)(j,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function k(e){const n=(0,x.A)();return(0,y.jsx)(v,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var s=r(6540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);