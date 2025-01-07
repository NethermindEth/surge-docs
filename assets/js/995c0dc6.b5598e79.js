"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[502],{2487:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var l=s(4848),i=s(8453);const r={sidebar_position:2},a="Deploy RISC0 Prover",c={id:"Guides/provers/risc0-prover",title:"Deploy RISC0 Prover",description:"Prerequisites",source:"@site/docs/Guides/provers/risc0-prover.mdx",sourceDirName:"Guides/provers",slug:"/Guides/provers/risc0-prover",permalink:"/docs/Guides/provers/risc0-prover",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/surge/tree/main/docs/docs/Guides/provers/risc0-prover.mdx",tags:[],version:"current",lastUpdatedAt:1736235525e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deploy SGX Prover",permalink:"/docs/Guides/provers/sgx-prover"},next:{title:"Deploy SP1 Prover",permalink:"/docs/Guides/provers/sp1-prover"}},o={},t=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Overview",id:"overview",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Allow Running Docker Without <code>sudo</code>",id:"allow-running-docker-without-sudo",level:4},{value:"Install Rust",id:"install-rust",level:2},{value:"Install sccache",id:"install-sccache",level:2},{value:"Install gcc-12",id:"install-gcc-12",level:2},{value:"Install g++-12",id:"install-g-12",level:2},{value:"Install openssl",id:"install-openssl",level:2},{value:"Install package-config",id:"install-package-config",level:2},{value:"Uninstall Existing CUDA (optional)",id:"uninstall-existing-cuda-optional",level:2},{value:"Uninstall a Toolkit runfile installation",id:"uninstall-a-toolkit-runfile-installation",level:3},{value:"Steps to Uninstall CUDA",id:"steps-to-uninstall-cuda",level:3},{value:"Install CUDA",id:"install-cuda",level:2},{value:"Pull Raiko",id:"pull-raiko",level:2},{value:"Install Raiko with RISC0",id:"install-raiko-with-risc0",level:2},{value:"Build Risc0 Program",id:"build-risc0-program",level:2},{value:"Setup Trusted Images for the RISC0 Verifier Contract",id:"setup-trusted-images-for-the-risc0-verifier-contract",level:2},{value:"Set Chain Spec",id:"set-chain-spec",level:2},{value:"Build Raiko",id:"build-raiko",level:2},{value:"Run Raiko",id:"run-raiko",level:2},{value:"Check Logs",id:"check-logs",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"deploy-risc0-prover",children:"Deploy RISC0 Prover"})}),"\n",(0,l.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Machine with CUDA support"}),"\n",(0,l.jsx)(n.li,{children:"L1 Accounts with funds (One for the Prover, One for Prover Registry)"}),"\n",(0,l.jsx)(n.li,{children:"L1 RPC URL"}),"\n",(0,l.jsx)(n.li,{children:"L1 Account Private Key"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,l.jsxs)(n.p,{children:["Set up Docker, CUDA, and other dependencies to run Risc0 prover on an x86 machine.\nDocumentation: ",(0,l.jsx)(n.a,{href:"https://dev.risczero.com/api/",children:(0,l.jsx)(n.strong,{children:"Risc0 API"})})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"install-docker",children:"Install Docker"}),"\n",(0,l.jsxs)(n.p,{children:["Follow the ",(0,l.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"official Docker documentation"})," for installation steps."]}),"\n",(0,l.jsxs)(n.h4,{id:"allow-running-docker-without-sudo",children:["Allow Running Docker Without ",(0,l.jsx)(n.code,{children:"sudo"})]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Add your user to the ",(0,l.jsx)(n.code,{children:"docker"})," group:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Apply the changes to the user group:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"newgrp docker\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Verify that Docker works without sudo:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"install-rust",children:"Install Rust"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsudo reboot\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-sccache",children:"Install sccache"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cargo install sccache\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-gcc-12",children:"Install gcc-12"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt install gcc-12\ncd /usr/bin\nsudo rm gcc\nsudo ln -s gcc-12 gcc\ngcc --version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-g-12",children:"Install g++-12"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt install g++-12\nsudo rm g++\nsudo ln -s g++-12 g++\ng++ --version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-openssl",children:"Install openssl"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install libssl-dev\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-package-config",children:"Install package-config"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo apt install pkg-config\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"uninstall-existing-cuda-optional",children:"Uninstall Existing CUDA (optional)"}),"\n",(0,l.jsxs)(n.p,{children:["Reference: ",(0,l.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#handle-conflicting-installation-methods",children:"NVIDIA CUDA Installation Guide - Handle Conflicting Installation Methods"})]}),"\n",(0,l.jsx)(n.h3,{id:"uninstall-a-toolkit-runfile-installation",children:"Uninstall a Toolkit runfile installation"}),"\n",(0,l.jsx)(n.p,{children:"Use the following command to uninstall a Toolkit runfile installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/cuda-X.Y/bin/cuda-uninstaller\n"})}),"\n",(0,l.jsx)(n.h3,{id:"steps-to-uninstall-cuda",children:"Steps to Uninstall CUDA"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Stop NVIDIA Persistenced Service (if running):","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo service nvidia-persistenced stop\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Remove CUDA Toolkit:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sudo apt-get --purge remove "*cublas*" "cuda*" "nsight*"\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Remove NVIDIA Drivers:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'sudo apt-get --purge remove "*nvidia*"\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Remove Source File Installations (if applicable): Assuming the default installation location is /usr/local, remove it using:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo rm -rf /usr/local/cuda*\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"install-cuda",children:"Install CUDA"}),"\n",(0,l.jsxs)(n.p,{children:["Refer to the ",(0,l.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-quick-start-guide/index.html#runfile-installer",children:"CUDA Quick Start Guide"})," for more information."]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the CUDA installer:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"wget https://developer.download.nvidia.com/compute/cuda/12.6.2/local_installers/cuda_12.6.2_560.35.03_linux.run\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Run the installer:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo sh cuda_12.6.2_560.35.03_linux.run\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If you encounter an error, the installer will create a file at:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"/etc/modprobe.d/nvidia-installer-disable-nouveau.conf\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Reboot the system:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"After rebooting, rerun the installer:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo sh cuda_12.6.2_560.35.03_linux.run\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Verify CUDA installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ls /usr/local/ | grep cuda\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add environment variables:\nOpen the ",(0,l.jsx)(n.code,{children:".bashrc"})," file:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"nano ~/.bashrc\n"})}),"\n",(0,l.jsx)(n.p,{children:"Append the following lines to the end of the file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'export PATH="/usr/local/cuda/bin:$PATH"\nexport LD_LIBRARY_PATH="/usr/local/cuda/lib64:$LD_LIBRARY_PATH"\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Apply the changes:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"pull-raiko",children:"Pull Raiko"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/raiko.git\ncd raiko\ngit checkout risc0-main\ncargo --version\n"})}),"\n",(0,l.jsx)(n.h2,{id:"install-raiko-with-risc0",children:"Install Raiko with RISC0"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Navigate to the root directory:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd /\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Create the required directories:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /opt/riscv\nsudo chown <USER> /opt/riscv\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Switch to the Raiko repository directory:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cd ~/raiko\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Install Raiko with the RISC0 target:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"TARGET=risc0 make install\n"})}),"\n",(0,l.jsx)(n.em,{children:"Note: If you encounter an error during this step, run the following command to refresh your environment variables and retry the installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bashrc",children:"source ~/.bashrc\nTARGET=risc0 make install\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"build-risc0-program",children:"Build Risc0 Program"}),"\n",(0,l.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cargo +nightly-2024-04-18 run --bin risc0-builder -F raiko-tasks/in-memory\n"})}),"\n",(0,l.jsx)(n.p,{children:"You will get the image ID from the output of that call."}),"\n",(0,l.jsx)(n.h2,{id:"setup-trusted-images-for-the-risc0-verifier-contract",children:"Setup Trusted Images for the RISC0 Verifier Contract"}),"\n",(0,l.jsx)(n.p,{children:"Run the following command to set an image as trusted:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'cast send <RISC0_VERIFIER> "setImageIdTrusted(bytes32,bool)" <IMAGE_ID> true --rpc-url <L1_RPC_URL> --private-key <PRIVATE_KEY>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"set-chain-spec",children:"Set Chain Spec"}),"\n",(0,l.jsx)(n.p,{children:"Edit the file located at:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"raiko/host/config/chain_spec_list_default.json\n"})}),"\n",(0,l.jsx)(n.p,{children:"Set the values according to your chain configuration."}),"\n",(0,l.jsx)(n.h2,{id:"build-raiko",children:"Build Raiko"}),"\n",(0,l.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cargo build --release --features risc0 -F cuda\n"})}),"\n",(0,l.jsx)(n.h2,{id:"run-raiko",children:"Run Raiko"}),"\n",(0,l.jsx)(n.p,{children:"Set the required environment variables:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"export GROTH16_VERIFIER_ADDRESS=0xA2C4Ef228de6BA701660e75Cb06f1c9b29E53069\nexport GROTH16_VERIFIER_RPC_URL=http://139.162.249.67:32002\nexport TASKDB=./raiko-tasks/in-memory\nexport RISC0_PROVER=local\n"})}),"\n",(0,l.jsx)(n.p,{children:"Run Raiko in the background:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"nohup ./target/release/raiko-host --chain-spec-path=</full/path/to/chain_spec_list_default.json> > ~/log/output.log 2>&1 &\n"})}),"\n",(0,l.jsx)(n.h2,{id:"check-logs",children:"Check Logs"}),"\n",(0,l.jsx)(n.p,{children:"View the log output:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cat ~/log/output.log\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);