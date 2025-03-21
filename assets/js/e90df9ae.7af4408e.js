"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[192],{1006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"guides/running-surge/provers/sgx-prover","title":"Deploy SGX Prover","description":"Prerequisites","source":"@site/docs/guides/running-surge/provers/sgx-prover.mdx","sourceDirName":"guides/running-surge/provers","slug":"/guides/running-surge/provers/sgx-prover","permalink":"/docs/guides/running-surge/provers/sgx-prover","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/surge/tree/main/docs/docs/guides/running-surge/provers/sgx-prover.mdx","tags":[],"version":"current","lastUpdatedAt":1742558871000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Set up a Prover","permalink":"/docs/guides/running-surge/provers/"},"next":{"title":"Deploy RISC0 Prover","permalink":"/docs/guides/running-surge/provers/risc0-prover"}}');var i=r(4848),s=r(8453);const o={sidebar_position:1},a="Deploy SGX Prover",c={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Fetch Collateral Information",id:"1-fetch-collateral-information",level:3},{value:"2. Build and Initialize Image",id:"2-build-and-initialize-image",level:3},{value:"3. Get Quote and Measurement Values",id:"3-get-quote-and-measurement-values",level:3},{value:"4. Register Collaterals",id:"4-register-collaterals",level:3},{value:"Set Environment Variables",id:"set-environment-variables",level:3},{value:"SGX TCB Setup Script",id:"sgx-tcb-setup-script",level:3},{value:"5. Configure and Run Raiko",id:"5-configure-and-run-raiko",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deploy-sgx-prover",children:"Deploy SGX Prover"})}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Machine with SGX support"}),"\n",(0,i.jsx)(n.li,{children:"L1 Accounts with funds (One for the Prover, One for Prover Registry)"}),"\n",(0,i.jsx)(n.li,{children:"L1 RPC URL"}),"\n",(0,i.jsx)(n.li,{children:"L1 Account Private Key"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"1-fetch-collateral-information",children:"1. Fetch Collateral Information"}),"\n",(0,i.jsx)(n.p,{children:"First, fetch the collateral information from Intel:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'FMSPC="00906ED50000"\n\nTCB_FILE="tcb.json"\nQE_IDENTITY_FILE="qe_identity.json"\n\ncurl -X GET "https://api.trustedservices.intel.com/sgx/certification/v3/tcb?fmspc=${FMSPC}" > ${TCB_FILE}\ncurl -X GET "https://api.trustedservices.intel.com/sgx/certification/v3/qe/identity" > ${QE_IDENTITY_FILE}\n\njq \'.tcbInfo.fmspc |= ascii_downcase\' ${TCB_FILE} > temp.json && mv temp.json ${TCB_FILE}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-build-and-initialize-image",children:"2. Build and Initialize Image"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the instructions at ",(0,i.jsx)(n.a,{href:"https://github.com/NethermindEth/raiko/blob/main/docs/README_Docker_and_RA.md",children:"Raiko Docker and RA Documentation"})," to build and initialize the image."]}),"\n",(0,i.jsx)(n.h3,{id:"3-get-quote-and-measurement-values",children:"3. Get Quote and Measurement Values"}),"\n",(0,i.jsxs)(n.p,{children:["Retrieve the ",(0,i.jsx)(n.code,{children:"quote"}),", ",(0,i.jsx)(n.code,{children:"MRENCLAVE"}),", and ",(0,i.jsx)(n.code,{children:"MRSIGNER"})," values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Get quote\ncat ~/.config/raiko/config/bootstrap.json | jq -r '.quote'\n\n# Get MRENCLAVE and MRSIGNER\ncat ~/.config/raiko/config/bootstrap.json | jq -r '.quote' | xxd -r -p > quote.bin\ngramine-sgx-quote-view quote.bin\n"})}),"\n",(0,i.jsx)(n.p,{children:"The output will contain important measurement values including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MRENCLAVE: ",(0,i.jsx)(n.code,{children:"14c4362d5dd0af9721ef9bdea2c92bf84b67fe34a102c892182ce2be7a81f2c5"})]}),"\n",(0,i.jsxs)(n.li,{children:["MRSIGNER: ",(0,i.jsx)(n.code,{children:"ca0583a715534a8c981b914589a7f0dc5d60959d9ae79fb5353299a4231673d5"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-register-collaterals",children:"4. Register Collaterals"}),"\n",(0,i.jsx)(n.admonition,{title:"Skip if Using Kurtosis",type:"note",children:(0,i.jsx)(n.p,{children:"If you're using the Kurtosis Package to deploy L1, you can skip this section."})}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"config_dcap_sgx_verifier.sh"})," or the script below to register the collaterals and the instance. For more information, see the following:"]}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsx)(n.h3,{id:"set-environment-variables",children:"Set Environment Variables"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export FOUNDRY_PROFILE=layer1\nexport MR_ENCLAVE=14c4362d5dd0af9721ef9bdea2c92bf84b67fe34a102c892182ce2be7a81f2c5\nexport MR_SIGNER=ca0583a715534a8c981b914589a7f0dc5d60959d9ae79fb5353299a4231673d5\nexport QEID_PATH="/test/qe_identity"\nexport TCB_INFO_PATH="/test/tcb"\nexport V3_QUOTE_BYTES=${Quote}\nexport SGX_VERIFIER_ADDRESS=0xaE37C7A711bcab9B0f8655a97B738d6ccaB6560B\nexport ATTESTATION_ADDRESS=0xaE37C7A711bcab9B0f8655a97B738d6ccaB6560B\nexport PEM_CERTCHAIN_ADDRESS=0x303CB317624c74bB20Acbb9E13c8D745C6379826\nexport FMSPC=00906ED50000\n'})}),(0,i.jsx)(n.h3,{id:"sgx-tcb-setup-script",children:"SGX TCB Setup Script"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'docker run \\\n  -e TASK_ENABLE="[1,1,1,1,1,1]" \\\n  -e MR_ENCLAVE=${MR_ENCLAVE} \\\n  -e MR_SIGNER=${MR_SIGNER} \\\n  -e QEID_PATH=${QEID_PATH} \\\n  -e TCB_INFO_PATH=${TCB_INFO_PATH} \\\n  -e V3_QUOTE_BYTES=${V3_QUOTE_BYTES} \\\n  -e SGX_VERIFIER_ADDRESS=${SGX_VERIFIER_ADDRESS} \\\n  -e ATTESTATION_ADDRESS=${ATTESTATION_ADDRESS} \\\n  -e PEM_CERTCHAIN_ADDRESS=${PEM_CERTCHAIN_ADDRESS} \\\n  -e FMSPC=${FMSPC} \\\n  -e TCB_FILE=${TCB_FILE} \\\n  -e QE_IDENTITY_FILE=${QE_IDENTITY_FILE} \\\n  -e PRIVATE_KEY=${PRIVATE_KEY} \\\n  nethsurge/protocol:surge-devnet \\\n  sh -c \'curl -X GET "https://api.trustedservices.intel.com/sgx/certification/v3/tcb?fmspc=${FMSPC}" > ${TCB_FILE} && \\\n        curl -X GET "https://api.trustedservices.intel.com/sgx/certification/v3/qe/identity" > ${QE_IDENTITY_FILE} && \\\n        jq ".tcbInfo.fmspc |= ascii_downcase" ${TCB_FILE} > temp.json && \\\n        mv temp.json ${TCB_FILE} && \\\n        forge script ./script/layer1/SetDcapParams.s.sol:SetDcapParams \\\n        --private-key ${PRIVATE_KEY} \\\n        --fork-url ${L1_RPC_URL} \\\n        --broadcast --evm-version cancun --ffi -vvvv --block-gas-limit 100000000 --legacy\'\n'})})]}),"\n",(0,i.jsx)(n.h3,{id:"5-configure-and-run-raiko",children:"5. Configure and Run Raiko"}),"\n",(0,i.jsx)(n.p,{children:"Set up the following environment variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export SGX_INSTANCE_ID=0\nexport L1_NETWORK=surge_dev_l1\nexport NETWORK=surge_dev\nexport SGX_VERIFIER_ADDRESS=0xaE37C7A711bcab9B0f8655a97B738d6ccaB6560B\nexport ATTESTATION_ADDRESS=0xaE37C7A711bcab9B0f8655a97B738d6ccaB6560B\nexport PEM_CERTCHAIN_ADDRESS=0x303CB317624c74bB20Acbb9E13c8D745C6379826\nexport PROVER_PRIVATE_KEY=0x53321db7c1e331d93a11a41d16f004d7ff63972ec8ec7c25db329728ceeb1710\nexport PRIVATE_KEY=0x53321db7c1e331d93a11a41d16f004d7ff63972ec8ec7c25db329728ceeb1710\nexport FORK_URL=https://placeholder:32002\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then run Raiko following the configuration instructions in the ",(0,i.jsx)(n.a,{href:"https://github.com/NethermindEth/raiko/blob/main/docs/README_Docker_and_RA.md#running-raiko",children:"Raiko Docker and RA Documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var t=r(6540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);