"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[39],{5862:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(4848),s=r(8453),o=r(1470),l=r(9365);const i={sidebar_position:7},a="Deploy Relayer",c={id:"Guides/running-surge/deploy-relayer",title:"Deploy Relayer",description:"This guide walks you through the process of deploying and configuring the Surge Relayer.",source:"@site/docs/Guides/running-surge/deploy-relayer.mdx",sourceDirName:"Guides/running-surge",slug:"/Guides/running-surge/deploy-relayer",permalink:"/docs/Guides/running-surge/deploy-relayer",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/running-surge/deploy-relayer.mdx",tags:[],version:"current",lastUpdatedAt:174222577e4,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Deploy Protocols on L2",permalink:"/docs/Guides/running-surge/deploy-l2-protocols"},next:{title:"Deploy Bridge UI",permalink:"/docs/Guides/running-surge/deploy-bridge-ui"}},u={},d=[{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"1. Clone Repository",id:"1-clone-repository",level:3},{value:"2. Switch to the Correct Branch",id:"2-switch-to-the-correct-branch",level:3},{value:"3. Configure Environment",id:"3-configure-environment",level:3},{value:"4. Deploy Components",id:"4-deploy-components",level:3},{value:"Verification",id:"verification",level:2},{value:"Component Health Checks",id:"component-health-checks",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"deploy-relayer",children:"Deploy Relayer"})}),"\n",(0,t.jsx)(n.p,{children:"This guide walks you through the process of deploying and configuring the Surge Relayer."}),"\n",(0,t.jsx)(n.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,t.jsx)(n.h3,{id:"1-clone-repository",children:"1. Clone Repository"}),"\n",(0,t.jsx)(n.p,{children:"First, clone the Surge Taiko Mono repository and navigate to the directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/surge-taiko-mono.git\n\ncd surge-taiko-mono/\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-switch-to-the-correct-branch",children:"2. Switch to the Correct Branch"}),"\n",(0,t.jsxs)(n.p,{children:["Checkout the ",(0,t.jsx)(n.code,{children:"surge/devnet"})," branch:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git checkout surge/devnet\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3-configure-environment",children:"3. Configure Environment"}),"\n",(0,t.jsx)(n.p,{children:"Navigate to the relayer package and prepare the configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd packages/relayer\n\ncp .default.env .env\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Edit ",(0,t.jsx)(n.code,{children:".env"}),", make sure ",(0,t.jsx)(n.code,{children:"L1_RPC_URL"})," and ",(0,t.jsx)(n.code,{children:"L2_RPC_URL"})," are set correctly."]}),"\n",(0,t.jsx)(n.h3,{id:"4-deploy-components",children:"4. Deploy Components"}),"\n",(0,t.jsx)(n.p,{children:"Deploy the relayer components in the following sequence:"}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsxs)(l.A,{value:"init",label:"Initialize Components",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile init up -d\n"})}),(0,t.jsx)(n.p,{children:"This command starts the relayer database and queue services."})]}),(0,t.jsxs)(l.A,{value:"migrations",label:"Run Migrations",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Wait for services to be ready\nsleep 20\n\n# Run migrations\ndocker compose --profile migrations up\n"})}),(0,t.jsx)(n.p,{children:"This step sets up the necessary database schema and initial configurations."})]}),(0,t.jsxs)(l.A,{value:"relayer",label:"Start Relayer",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile l1 --profile l2 --profile api up -d\n"})}),(0,t.jsx)(n.p,{children:"This starts the main relayer service."})]})]}),"\n",(0,t.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,t.jsx)(n.p,{children:"After deployment, verify that:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Database is properly initialized"}),"\n",(0,t.jsx)(n.li,{children:"Migrations completed successfully"}),"\n",(0,t.jsx)(n.li,{children:"Relayer service is running and connected to both L1 and L2"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"component-health-checks",children:"Component Health Checks"}),"\n",(0,t.jsx)(n.p,{children:"Monitor the health of your deployment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Check running containers\ndocker compose ps\n\n# View logs of required relayer components, e.g. processor\ndocker logs relayer-l1-processor\n\n# Check database status\ndocker compose logs db -f\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,t.jsx)(n.p,{children:"Ensure all components are running before proceeding with any network operations. The relayer is a critical component for cross-layer communication."})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Connection Issues"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify L1 and L2 RPC endpoints are accessible"}),"\n",(0,t.jsx)(n.li,{children:"Check network connectivity"}),"\n",(0,t.jsx)(n.li,{children:"Ensure all contract addresses are correct"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Database Issues"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Verify PostgreSQL is running"}),"\n",(0,t.jsx)(n.li,{children:"Check migration logs for errors"}),"\n",(0,t.jsx)(n.li,{children:"Ensure database credentials are correct"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Service Issues"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Check container logs for errors"}),"\n",(0,t.jsx)(n.li,{children:"Verify all environment variables are set"}),"\n",(0,t.jsx)(n.li,{children:"Ensure sufficient system resources"}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{title:"Need Help?",type:"tip",children:[(0,t.jsx)(n.p,{children:"If you continue to experience issues, check the logs using:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose logs --tail=100\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>l});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var o=r(4848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(6540),s=r(4164),o=r(3104),l=r(6347),i=r(205),a=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,a.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=h(e),[l,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=g({queryString:r,groupId:s}),[m,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&a(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=a.indexOf(n),s=i[r].value;s!==t&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;n=a[r]??a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;n=a[r]??a[a.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:o}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...n,...e}),(0,x.jsx)(j,{...n,...e})]})}function k(e){const n=(0,f.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var t=r(6540);const s={},o=t.createContext(s);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);