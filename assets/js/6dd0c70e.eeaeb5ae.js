"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[146],{5347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=i(4848),t=i(8453);const o={sidebar_position:2},r="Deploy L1",l={id:"Guides/running-surge/deploy-l1",title:"Deploy L1",description:"In this guide, we'll walk through the process of deploying the L1 network using Kurtosis. This will also deploy the Taiko protocol on L1.",source:"@site/docs/Guides/running-surge/deploy-l1.mdx",sourceDirName:"Guides/running-surge",slug:"/Guides/running-surge/deploy-l1",permalink:"/docs/Guides/running-surge/deploy-l1",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/running-surge/deploy-l1.mdx",tags:[],version:"current",lastUpdatedAt:174222577e4,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Prepare L2 Genesis",permalink:"/docs/Guides/running-surge/prepare-l2-genesis"},next:{title:"Set up a Prover",permalink:"/docs/Guides/running-surge/provers/"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"1. Install Kurtosis",id:"1-install-kurtosis",level:3},{value:"2. Clone the Repository",id:"2-clone-the-repository",level:3},{value:"3. Deploy Using Kurtosis",id:"3-deploy-using-kurtosis",level:3},{value:"Verification",id:"verification",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-l1",children:"Deploy L1"})}),"\n",(0,s.jsx)(n.p,{children:"In this guide, we'll walk through the process of deploying the L1 network using Kurtosis. This will also deploy the Taiko protocol on L1."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Git and Docker installed on your system"}),"\n",(0,s.jsx)(n.li,{children:"Terminal access"}),"\n",(0,s.jsx)(n.li,{children:"Basic command line knowledge"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-install-kurtosis",children:"1. Install Kurtosis"}),"\n",(0,s.jsx)(n.p,{children:"First, you'll need to install Kurtosis on your system. Follow the installation guide at:"}),"\n",(0,s.jsx)("div",{className:"flex justify-center my-8",children:(0,s.jsx)("a",{className:"button button--primary button--lg",href:"https://docs.kurtosis.com/quickstart",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)(n.p,{children:"Kurtosis Installation Guide \u2197"})})}),"\n",(0,s.jsx)(n.h3,{id:"2-clone-the-repository",children:"2. Clone the Repository"}),"\n",(0,s.jsx)(n.p,{children:"Clone the Surge devnet package repository and navigate to the directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/surge-devnet-package.git\n\ncd surge-devnet-package\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-deploy-using-kurtosis",children:"3. Deploy Using Kurtosis"}),"\n",(0,s.jsx)(n.p,{children:"Run Kurtosis with the following command to deploy the L1 network:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kurtosis run --enclave surge-devnet . --args-file network_params.yaml --production\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This command will also automatically deploy the Taiko protocol on L1 for you. Watch closely for the deployment outputs."})}),"\n",(0,s.jsx)(n.h2,{id:"verification",children:"Verification"}),"\n",(0,s.jsx)(n.p,{children:"After running the deployment command, Kurtosis will start setting up your L1 environment. You should see output in your terminal indicating the progress of the deployment."}),"\n",(0,s.jsx)(n.admonition,{title:"What's Next?",type:"info",children:(0,s.jsx)(n.p,{children:"Once your L1 deployment is complete, you can proceed with setting up your prover or configuring additional network parameters."})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter any issues during deployment:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure all prerequisites are properly installed"}),"\n",(0,s.jsxs)(n.li,{children:["Check that the ",(0,s.jsx)(n.code,{children:"network_params.yaml"})," file exists and is properly configured"]}),"\n",(0,s.jsx)(n.li,{children:"Make sure Kurtosis is running correctly on your system"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);