"use strict";(self.webpackChunksurge_docs=self.webpackChunksurge_docs||[]).push([[356],{7123:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"guides/running-surge/provers/sp1-prover","title":"Deploy SP1 Prover","description":"Prerequisites","source":"@site/docs/guides/running-surge/provers/sp1-prover.mdx","sourceDirName":"guides/running-surge/provers","slug":"/guides/running-surge/provers/sp1-prover","permalink":"/docs/guides/running-surge/provers/sp1-prover","draft":false,"unlisted":false,"editUrl":"https://github.com/NethermindEth/surge/tree/main/docs/docs/guides/running-surge/provers/sp1-prover.mdx","tags":[],"version":"current","lastUpdatedAt":1742558871000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Deploy RISC0 Prover","permalink":"/docs/guides/running-surge/provers/risc0-prover"},"next":{"title":"Deploy Protocols on L1","permalink":"/docs/guides/running-surge/deploy-l1-protocols"}}');var i=s(4848),r=s(8453);const a={sidebar_position:3},t="Deploy SP1 Prover",c={},o=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Overview",id:"overview",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Allow Running Docker Without <code>sudo</code>",id:"allow-running-docker-without-sudo",level:4},{value:"Install Rust",id:"install-rust",level:2},{value:"Install openssl",id:"install-openssl",level:2},{value:"Install package-config",id:"install-package-config",level:2},{value:"Install sccache",id:"install-sccache",level:2},{value:"Install gcc-12",id:"install-gcc-12",level:2},{value:"Install g++-12",id:"install-g-12",level:2},{value:"Uninstall Existing CUDA (optional)",id:"uninstall-existing-cuda-optional",level:2},{value:"Uninstall a Toolkit runfile installation",id:"uninstall-a-toolkit-runfile-installation",level:3},{value:"Steps to Uninstall CUDA",id:"steps-to-uninstall-cuda",level:3},{value:"Install CUDA",id:"install-cuda",level:2},{value:"Installing with Apt",id:"installing-with-apt",level:3},{value:"Configuring Docker",id:"configuring-docker",level:3},{value:"Pull Raiko",id:"pull-raiko",level:2},{value:"Install Raiko with SP1",id:"install-raiko-with-sp1",level:2},{value:"Build SP1 Program",id:"build-sp1-program",level:2},{value:"Setup Program VK Key for the SP1 Verifier Contract",id:"setup-program-vk-key-for-the-sp1-verifier-contract",level:2},{value:"Set Chain Spec",id:"set-chain-spec",level:2},{value:"Build Raiko",id:"build-raiko",level:2},{value:"Run Raiko",id:"run-raiko",level:2},{value:"Check Logs",id:"check-logs",level:2},{value:"Restarting Raiko",id:"restarting-raiko",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"deploy-sp1-prover",children:"Deploy SP1 Prover"})}),"\n",(0,i.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Machine with CUDA support"}),"\n",(0,i.jsx)(n.li,{children:"L1 Accounts with funds (One for the Prover, One for Prover Registry)"}),"\n",(0,i.jsx)(n.li,{children:"L1 RPC URL"}),"\n",(0,i.jsx)(n.li,{children:"L1 Account Private Key"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["Set up Docker, CUDA, CUDA Container Toolkit and other dependencies to run SP1 prover on an x86 machine.\nFor more information, refer to the ",(0,i.jsx)(n.a,{href:"https://docs.succinct.xyz/introduction.html",children:(0,i.jsx)(n.strong,{children:"Succinct Documentation"})}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"install-docker",children:"Install Docker"}),"\n",(0,i.jsxs)(n.p,{children:["Follow the ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/install/ubuntu/",children:"official Docker documentation"})," for installation steps."]}),"\n",(0,i.jsxs)(n.h4,{id:"allow-running-docker-without-sudo",children:["Allow Running Docker Without ",(0,i.jsx)(n.code,{children:"sudo"})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Add your user to the ",(0,i.jsx)(n.code,{children:"docker"})," group:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo usermod -aG docker $USER\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Apply the changes to the user group:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"newgrp docker\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Verify that Docker works without sudo:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-rust",children:"Install Rust"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsudo reboot\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-openssl",children:"Install openssl"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install libssl-dev\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-package-config",children:"Install package-config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install pkg-config\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-sccache",children:"Install sccache"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cargo install sccache\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-gcc-12",children:"Install gcc-12"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install gcc-12\ncd /usr/bin\nsudo rm gcc\nsudo ln -s gcc-12 gcc\ngcc --version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-g-12",children:"Install g++-12"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install g++-12\nsudo rm g++\nsudo ln -s g++-12 g++\ng++ --version\n"})}),"\n",(0,i.jsx)(n.h1,{id:"install-clang",children:"Install clang"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install clang\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"uninstall-existing-cuda-optional",children:"Uninstall Existing CUDA (optional)"}),"\n",(0,i.jsxs)(n.p,{children:["Reference: ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html#handle-conflicting-installation-methods",children:"NVIDIA CUDA Installation Guide - Handle Conflicting Installation Methods"})]}),"\n",(0,i.jsx)(n.h3,{id:"uninstall-a-toolkit-runfile-installation",children:"Uninstall a Toolkit runfile installation"}),"\n",(0,i.jsx)(n.p,{children:"Use the following command to uninstall a Toolkit runfile installation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo /usr/local/cuda-X.Y/bin/cuda-uninstaller\n"})}),"\n",(0,i.jsx)(n.h3,{id:"steps-to-uninstall-cuda",children:"Steps to Uninstall CUDA"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Stop NVIDIA Persistenced Service (if running):","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo service nvidia-persistenced stop\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Remove CUDA Toolkit:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo apt-get --purge remove "*cublas*" "cuda*" "nsight*"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Remove NVIDIA Drivers:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sudo apt-get --purge remove "*nvidia*"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Remove Source File Installations (if applicable): Assuming the default installation location is /usr/local, remove it using:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo rm -rf /usr/local/cuda*\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"install-cuda",children:"Install CUDA"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/cuda/cuda-quick-start-guide/index.html#runfile-installer",children:"CUDA Quick Start Guide"})," for more information."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download the CUDA installer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget https://developer.download.nvidia.com/compute/cuda/12.6.2/local_installers/cuda_12.6.2_560.35.03_linux.run\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the installer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo sh cuda_12.6.2_560.35.03_linux.run\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you encounter an error, the installer will create a file at:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"/etc/modprobe.d/nvidia-installer-disable-nouveau.conf\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reboot the system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"After rebooting, rerun the installer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo sh cuda_12.6.2_560.35.03_linux.run\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Verify CUDA installation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ls /usr/local/ | grep cuda\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add environment variables:\nOpen the ",(0,i.jsx)(n.code,{children:".bashrc"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano ~/.bashrc\n"})}),"\n",(0,i.jsx)(n.p,{children:"Append the following lines to the end of the file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export PATH="/usr/local/cuda/bin:$PATH"\nexport LD_LIBRARY_PATH="/usr/local/cuda/lib64:$LD_LIBRARY_PATH"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Apply the changes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"source ~/.bashrc\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"installing-the-nvidia-container-toolkit",children:"Installing the NVIDIA Container Toolkit"}),"\n",(0,i.jsxs)(n.p,{children:["Refer to the ",(0,i.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html",children:"NVIDIA Documentation"})]}),"\n",(0,i.jsx)(n.h3,{id:"installing-with-apt",children:"Installing with Apt"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Configure the production repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg    && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list |      sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' |      sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Optionally, configure the repository to use experimental packages:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Update the packages list from the repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the NVIDIA Container Toolkit packages:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install -y nvidia-container-toolkit\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configuring-docker",children:"Configuring Docker"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure the container runtime by using the ",(0,i.jsx)(n.code,{children:"nvidia-ctk"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nvidia-ctk runtime configure --runtime=docker\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"nvidia-ctk"})," command modifies the ",(0,i.jsx)(n.code,{children:"/etc/docker/daemon.json"})," file on the host. The file is updated so that Docker can use the NVIDIA Container Runtime."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Restart the Docker daemon:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart docker\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"pull-raiko",children:"Pull Raiko"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/NethermindEth/raiko.git\ncd raiko\ncargo --version\n"})}),"\n",(0,i.jsx)(n.h2,{id:"install-raiko-with-sp1",children:"Install Raiko with SP1"}),"\n",(0,i.jsx)(n.p,{children:"Install Raiko with the SP1 target:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"TARGET=sp1 make install\n"})}),"\n",(0,i.jsx)(n.h2,{id:"build-sp1-program",children:"Build SP1 Program"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cargo run --release --bin sp1-builder\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You will get the ",(0,i.jsx)(n.code,{children:"programVKey"})," from the output of that call."]}),"\n",(0,i.jsx)(n.h2,{id:"setup-program-vk-key-for-the-sp1-verifier-contract",children:"Setup Program VK Key for the SP1 Verifier Contract"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cast send <SP1_VERIFIER> "setProgramTrusted(bytes32,bool)" <PROGRAM_VK> true --rpc-url <L1_RPC_URL> --private-key <PRIVATE_KEY>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"set-chain-spec",children:"Set Chain Spec"}),"\n",(0,i.jsx)(n.p,{children:"Edit the file located at:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"raiko/host/config/chain_spec_list_default.json\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set the values according to your chain configuration."}),"\n",(0,i.jsx)(n.admonition,{title:"Don't miss out genesis timestamp",type:"note",children:(0,i.jsxs)(n.p,{children:["You can retrieve the genesis timestamp from ",(0,i.jsx)(n.a,{href:"http://placeholder:33001/eth/v1/beacon/genesis",children:"http://placeholder:33001/eth/v1/beacon/genesis"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"build-raiko",children:"Build Raiko"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cargo build --release --features sp1 -F raiko-tasks/in-memory\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-raiko",children:"Run Raiko"}),"\n",(0,i.jsx)(n.p,{children:"Set the required environment variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export SP1_VERIFIER_RPC_URL=http://placeholder:32002\nexport SP1_VERIFIER_ADDRESS=0x57E5d642648F54973e504f10D21Ea06360151cAf\n"})}),"\n",(0,i.jsx)(n.p,{children:"Run Raiko in the background:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nohup ./target/release/raiko-host --chain-spec-path=</full/path/to/chain_spec_list_default.json> > ~/log/output.log 2>&1 &\n"})}),"\n",(0,i.jsx)(n.h2,{id:"check-logs",children:"Check Logs"}),"\n",(0,i.jsx)(n.p,{children:"View the log output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat ~/log/output.log\n"})}),"\n",(0,i.jsx)(n.h3,{id:"restarting-raiko",children:"Restarting Raiko"}),"\n",(0,i.jsxs)(n.p,{children:["Before restarting Raiko, ensure that ",(0,i.jsx)(n.code,{children:"succinct-labs/moongate"})," and ",(0,i.jsx)(n.code,{children:"succinctlabs/sp1-gnark"})," Docker containers are stopped"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var l=s(6540);const i={},r=l.createContext(i);function a(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);