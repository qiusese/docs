"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2800],{793:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=t(8168),n=(t(6540),t(5680));const l={id:"OnLine_MTool_Manual",title:"MTool online tutorial",sidebar_label:"MTool online tutorial"},r=void 0,i={unversionedId:"OnLine_MTool_Manual",id:"OnLine_MTool_Manual",isDocsHomePage:!1,title:"MTool online tutorial",description:"Introductory",source:"@site/../docs/\u5728\u7ebfPlatON MTool\u4f7f\u7528\u624b\u518c.md",sourceDirName:".",slug:"/OnLine_MTool_Manual",permalink:"/docs/en/OnLine_MTool_Manual",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/\u5728\u7ebfPlatON MTool\u4f7f\u7528\u624b\u518c.md",version:"current",frontMatter:{id:"OnLine_MTool_Manual",title:"MTool online tutorial",sidebar_label:"MTool online tutorial"},sidebar:"docs",previous:{title:"Run a validator node",permalink:"/docs/en/Become_PlatON_Main_Verification"},next:{title:"MTool offline tutorial",permalink:"/docs/en/OffLine_MTool_Manual"}},s=[{value:"Introductory",id:"introductory",children:[]},{value:"Install PlatON MTool",id:"install-platon-mtool",children:[{value:"Install PlatON MTool under Windows",id:"install-platon-mtool-under-windows",children:[]},{value:"Install PlatON MTool under Ubuntu",id:"install-platon-mtool-under-ubuntu",children:[]}]},{value:"PlatON MTool Environment Variable Description",id:"platon-mtool-environment-variable-description",children:[]},{value:"Modifying the Chain ID in the Configuration File",id:"modifying-the-chain-id-in-the-configuration-file",children:[]},{value:"PlatON MTool Command Details",id:"platon-mtool-command-details",children:[{value:"Create A Wallet",id:"create-a-wallet",children:[]},{value:"Recover wallet file",id:"recover-wallet-file",children:[]},{value:"Ordinary transfer operation",id:"ordinary-transfer-operation",children:[]},{value:"View wallet list",id:"view-wallet-list",children:[]},{value:"Query balance based on wallet name",id:"query-balance-based-on-wallet-name",children:[]},{value:"Query balance based on address",id:"query-balance-based-on-address",children:[]},{value:"Create a new Lockup plans",id:"create-a-new-lockup-plans",children:[]},{value:"Initiate a staking operation",id:"initiate-a-staking-operation",children:[]},{value:"Modify validator information operation",id:"modify-validator-information-operation",children:[]},{value:"Decommissioning operation",id:"decommissioning-operation",children:[]},{value:"Increase staking operation",id:"increase-staking-operation",children:[]},{value:"Submit Text Proposal",id:"submit-text-proposal",children:[]},{value:"Submit upgrade proposal operation",id:"submit-upgrade-proposal-operation",children:[]},{value:"Submit Cancel Proposal",id:"submit-cancel-proposal",children:[]},{value:"Text proposal voting operation",id:"text-proposal-voting-operation",children:[]},{value:"Upgrade proposal voting operation",id:"upgrade-proposal-voting-operation",children:[]},{value:"Cancel proposal voting",id:"cancel-proposal-voting",children:[]},{value:"Submit parameter proposal operation",id:"submit-parameter-proposal-operation",children:[]},{value:"Parameter proposal voting operation",id:"parameter-proposal-voting-operation",children:[]},{value:"Version declaration operation",id:"version-declaration-operation",children:[]},{value:"View help",id:"view-help",children:[]}]}],p={toc:s},c="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(c,(0,o.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introductory"},"Introductory"),(0,n.yg)("p",null,"To facilitate node transfer, pledge, delegate, and governance operations, PlatON provides MTool to assist users:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"PlatON MTool supports Ubuntu 18.04 and Windows 10. This document describes the installation and use of Windows and Ubuntu, respectively. Users can choose from their own resources.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"PlatON MTool provides two signature methods for transactions such as pledge: online signature and offline signature.This document describes online signing operations. For offline signing operations, refer to the ",(0,n.yg)("a",{parentName:"p",href:"/docs/en/OffLine_MTool_Manual"},"Offline PlatON MTool Manual"),"\u3002"))),(0,n.yg)("h2",{id:"install-platon-mtool"},"Install PlatON MTool"),(0,n.yg)("p",null,"In addition, this document introduces the operation of PlatON MTool under Windows and Ubuntu respectively. Users can choose according to their own resources."),(0,n.yg)("h3",{id:"install-platon-mtool-under-windows"},"Install PlatON MTool under Windows"),(0,n.yg)("h4",{id:"preparation-before-installation"},"Preparation before installation"),(0,n.yg)("p",null,"execute command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"platon_mtool --version\n")),(0,n.yg)("p",null,"If the execution result shows error message, it indicates that the PlatON MTool has not been installed and you can skip the following instructions on how to uninstall the older version."),(0,n.yg)("p",null,"If the execution result shows the version number, timestamp and other information, it indicates that PlatON MTool has been installed. If the PlatON MTool is an old version, you need to back up important information at this time, and then manually uninstall the old version. The instructions are as follows:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step1. Backup directory")),(0,n.yg)("p",null,"Back up the ",(0,n.yg)("inlineCode",{parentName:"p"},"C:\\platon_mtool\\mtool\\current\\keystore")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"C:\\platon_mtool\\mtool\\current\\validator")," directories to other directories (do not back them up to ",(0,n.yg)("inlineCode",{parentName:"p"},"C:\\platon_mtool"),"). After installing the new version, you need to copy the backup directory back to the ",(0,n.yg)("inlineCode",{parentName:"p"},"C:\\platon_mtool\\mtool\\current\\")," directory. (If the installation directory is a custom directory, the actual one shall prevail)"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step2. Uninstall old version")),(0,n.yg)("p",null,"Double-click ",(0,n.yg)("inlineCode",{parentName:"p"},"C:\\platon_mtool\\unins000.exe")," to uninstall all old versions of PlatON MTool and other business platon_mtool."),(0,n.yg)("h4",{id:"start-installation"},"Start installation"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step1. Download PlatON MTool installation package")),(0,n.yg)("p",null,"On the online machine, copy the link ",(0,n.yg)("a",{parentName:"p",href:"https://download.platon.network/platon/mtool/windows/1.1.1/platon_mtool.exe"},"https://download.platon.network/platon/mtool/windows/1.1.1/platon_mtool.exe"),"  to the browser and download the PlatON MTool installation package."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step2. Install PlatON MTool")),(0,n.yg)("p",null,"Double-click platon_mtool.exe to install it. The default installation directory is C:\\platon_mtool, and it is recommended not to change this installation directory. The pop-up interface displays the message ",(0,n.yg)("strong",{parentName:"p"},"Completing the mtool Setup Wizard"),", indicating that the installation was successful. Click ",(0,n.yg)("strong",{parentName:"p"},"Finish"),"."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step3. Restart the terminal")),(0,n.yg)("p",null,"After installation is complete, you need to ",(0,n.yg)("font",{color:"red"},"restart the terminal (do not restart the server, close the CMD window or PowerShell window and reopen the window)")," for the newly added environment variables to take effect."),(0,n.yg)("h3",{id:"install-platon-mtool-under-ubuntu"},"Install PlatON MTool under Ubuntu"),(0,n.yg)("h4",{id:"preparation-before-installation-1"},"Preparation before installation"),(0,n.yg)("p",null,"Back up the ",(0,n.yg)("inlineCode",{parentName:"p"},"~/platon_mtool/keystore")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"~/platon_mtool/validator")," directories to other directories (do not back them up to ",(0,n.yg)("inlineCode",{parentName:"p"},"~/platon_mtool"),"). After installing the new version, you need to copy the backup directory back to the ",(0,n.yg)("inlineCode",{parentName:"p"},"~/platon_mtool/")," directory. (If the installation directory is a custom directory, the actual one shall prevail)"),(0,n.yg)("h4",{id:"start-installation-1"},"start installation"),(0,n.yg)("p",null,"Proceed as follows:"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step1. Download PlatON MTool toolkit")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://download.platon.network/platon/mtool/linux/1.1.1/platon_mtool.zip\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step2. Extract the PlatON MTool toolkit")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"(if ! command -v unzip;then sudo apt install unzip; fi;) && unzip platon_mtool.zip && cd platon_mtool\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step3. Download script")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"The script is downloaded to the ",(0,n.yg)("font",{color:"red"},"platon_mtool")," directory, otherwise the script cannot find the path of the new version of mtool.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://download.platon.network/platon/scripts/mtool_install.sh\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step4. Execute command")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"chmod +x mtool_install.sh && ./mtool_install.sh\n")),(0,n.yg)("blockquote",null,(0,n.yg)("ul",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ul"},"When the message ",(0,n.yg)("font",{color:"red"},"Install platon mtool succeed.")," is displayed, PlatON MTool is successfully installed. If it is not successfully installed, please contact our official customer service to provide feedback on specific issues."))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step5. Restart the session window")),(0,n.yg)("p",null,"After installation is complete, you need to ",(0,n.yg)("font",{color:"red"},"restart the session window (do not restart the server, close the session window or SSH tool to reopen the window)")," for the newly added environment variables to take effect."),(0,n.yg)("h2",{id:"platon-mtool-environment-variable-description"},"PlatON MTool Environment Variable Description"),(0,n.yg)("p",null,"The environment variables of PlatON MTool directories under Windows and Ubuntu are different:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"PlatON MTool directory",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Windows: ",(0,n.yg)("inlineCode",{parentName:"li"},"%PLATON_MTOOLDIR%")),(0,n.yg)("li",{parentName:"ul"},"Ubuntu: ",(0,n.yg)("inlineCode",{parentName:"li"},"$PLATON_MTOOLDIR"))))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Note:Users choose according to their installed system.")),(0,n.yg)("h2",{id:"modifying-the-chain-id-in-the-configuration-file"},"Modifying the Chain ID in the Configuration File"),(0,n.yg)("p",null,"There are differences in the use of environment variables for the PlatON MTool directory between Windows and Ubuntu:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Windows"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Path: mtool\\current\\config")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Change chainId=100 to chainId=210425")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Ubuntu"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Path: /platon_mtool/config.properties")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Change chainId=100 to chainId=210425"))))),(0,n.yg)("h2",{id:"platon-mtool-command-details"},"PlatON MTool Command Details"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Note: The follow-up command is the command format under Ubuntu. Under Windows, you need to modify ",(0,n.yg)("inlineCode",{parentName:"p"},"$PLATON_MTOOLDIR")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"%PLATON_MTOOLDIR%"),"."),(0,n.yg)("ul",{parentName:"blockquote"},(0,n.yg)("li",{parentName:"ul"},"Original Devnet1 (ChainID:210309) has been disabled, please change it to Devnet2 (ChainID:2206131) if needed."),(0,n.yg)("li",{parentName:"ul"},"If you are connecting to the Development 2 network, you need to modify the domainid of the config.properties configuration file in the PlatON MTool installation directory to 2206131."))),(0,n.yg)("h3",{id:"create-a-wallet"},"Create A Wallet"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Execute the command:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"platon_mtool account new staking\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"staking: The name of the wallet to be created. Once the wallet is created successfully, a wallet file named ",(0,n.yg)("inlineCode",{parentName:"p"},"staking.json")," will be generated in the directory ",(0,n.yg)("inlineCode",{parentName:"p"},"$PLATON_MTOOLDIR/keystore"),", And print the following information:"),(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"-name: staking\n-type: NORMAL\n-address: lat124xmsmd0uf5cvk7v3s36eytqezqsjfcxfw2lmr\n-public key: 0x9521cd81ba28d5d1c23bb7ddb7042d146375203d35000c0289178027abd4dc09bca30257739df166201e73497485242f41d5f50d46bc3c7e4385f81bde560db0\nImportant write this Private Key in a safe place.\nIt is the important way to recover your account if you ever forget your password.\n4630b6d86bc74bffd4ca8cfc18bceec562cb40fc5080c258452a04a69bc1ee07\n\nImportant write this mnemonic phrase in a safe place.\nIt is the important way to recover your account if you ever forget your password.\nworry jewel penalty jealous expect embark outer eternal verb rebuild rice kidney\n")),(0,n.yg)("p",{parentName:"blockquote"}," Wallet address format adjusted to Bech32, among them:"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"lat124xmsmd0uf5cvk7v3s36eytqezqsjfcxfw2lmr"),": account address;"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"4630b6d86bc74bffd4ca8cfc18bceec562cb40fc5080c258452a04a69bc1ee07")," : the private key of the wallet;"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("inlineCode",{parentName:"p"},"worry jewel penalty jealous expect embark outer eternal verb rebuild rice kidney"),": the mnemonic words."),(0,n.yg)("p",{parentName:"blockquote"}," For security reasons, users need to back up the wallet private key or mnemonic words (both can be backed up, or one of them can be backed up). When the wallet is lost, it can be used for recovery. It is recommended that users back up mnemonic words or private keys to a secure storage medium, such as an offline machine.")),(0,n.yg)("h3",{id:"recover-wallet-file"},"Recover wallet file"),(0,n.yg)("p",null," If the wallet file is lost, you can restore it with the backed up private key or mnemonic as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Execute the command:"),(0,n.yg)("p",{parentName:"li"}," Recovery via private key:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"platon_mtool account recover -k staking\n")),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"},"Prompt to enter the new wallet password and backup private key, as follows:"),(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"Enter a passphrase to encrypt your key to disk:\nRepeat the passphrase:\nEnter your 64bit Private Key:\n4630b6d86bc74bffd4ca8cfc18bceec562cb40fc5080c258452a04a69bc1ee07\n"))),(0,n.yg)("p",{parentName:"li"},"or"),(0,n.yg)("p",{parentName:"li"}," Recovery through mnemonics:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"platon_mtool account recover -m staking\n")),(0,n.yg)("blockquote",{parentName:"li"},(0,n.yg)("p",{parentName:"blockquote"}," Prompt to enter a new wallet password and backup mnemonic words, as follows:"),(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"}," Enter a passphrase to encrypt your key to disk:\n Repeat the passphrase:\n Enter your bip39 mnemonic:\n worry jewel penalty jealous expect embark outer eternal verb rebuild rice kidney\n")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Parameter description"),(0,n.yg)("p",{parentName:"li"},"staking\uff1awallet name."),(0,n.yg)("p",{parentName:"li"}," After successful restoration, the wallet file staking.json will be generated under the directory ",(0,n.yg)("inlineCode",{parentName:"p"},"$PLATON_MTOOLDIR/keystore"),"."))),(0,n.yg)("h3",{id:"ordinary-transfer-operation"},"Ordinary transfer operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'platon_mtool tx transfer --keystore $PLATON_MTOOLDIR/keystore/staking.json --amount "1" --recipient $ to_address --config $PLATON_MTOOLDIR/validator/validator_config.json\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"keystore: path of the wallet sending the transaction"),(0,n.yg)("p",{parentName:"blockquote"},"amount: transfer amount, unit: LAT"),(0,n.yg)("p",{parentName:"blockquote"},"recipient: receiving address")),(0,n.yg)("h3",{id:"view-wallet-list"},"View wallet list"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool account list\n")),(0,n.yg)("h3",{id:"query-balance-based-on-wallet-name"},"Query balance based on wallet name"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool account balance $keystorename --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"$ keystorename: wallet file name\uff0cexample:staking.json")),(0,n.yg)("h3",{id:"query-balance-based-on-address"},"Query balance based on address"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool account balance -a $address --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"a: wallet address")),(0,n.yg)("h3",{id:"create-a-new-lockup-plans"},"Create a new Lockup plans"),(0,n.yg)("p",null,"Creating a new Lockup plan, node's LATs will be transferred to a specified precompiled contract. The LATs will be transferred to the specified account multiple times at specified intervals. Before creating a new Lockup plan, you need to create a Lockup plan description file in json format."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Lockup plan description file\uff0cretricting_plans.json")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "account":"lat12jn6835z96ez93flwezrwu4xpv8e4zathsyxdn",\n  "plans":[\n    {"epoch": 5000,"amount": 100},\n    {"epoch": 6000,"amount": 100},\n    {"epoch": 7000,"amount": 100}\n  ]\n}\n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"account\uff1athe specified account that will received LAT from the estricting plan."),(0,n.yg)("p",{parentName:"blockquote"},"epoch\uff1athe number of epoch to wait for a transfer plan (Greater than or equal to 1)"),(0,n.yg)("p",{parentName:"blockquote"},"amount\uff1athe number of LAT to be transferred. Unit: LAT")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool create_restricting --config $PLATON_MTOOLDIR/validator/validator_config.json --keystore $PLATON_MTOOLDIR/keystore/staking.json --file ./restricting_plans.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"config\uff1anode configuration file"),(0,n.yg)("p",{parentName:"blockquote"},"keytore: wallet file"),(0,n.yg)("p",{parentName:"blockquote"},"file: Lockup plan description file")),(0,n.yg)("h3",{id:"initiate-a-staking-operation"},"Initiate a staking operation"),(0,n.yg)("p",null,"If the deployment of the consensus node is complete and the block has been synchronized successfully, you can use MTool for staking operations. After the staking fund application is completed, ensure that the balance of the staking account is sufficient, and replace the staking amount according to the user's situation. The minimum threshold for staking is one hundred thousand LAT."),(0,n.yg)("p",null,"Note: Please keep enough LAT in the staking account, so that the transactions initiated by the subsequent node management have sufficient transaction fees, such as voting for upgrading proposals, and unsecured transactions."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool staking --config $PLATON_MTOOLDIR/validator/validator_config.json --keystore $PLATON_MTOOLDIR/keystore/staking.json --amount 100000 --benefit_address xxx196278ns22j23awdfj9f2d4vz0pedld8a2fzwwj --delegated_reward_rate 5000 --node_name myNode --website www.mywebsite.com --details myNodeDescription --external_id 121412312\n")),(0,n.yg)("p",null,"Prompt:",(0,n.yg)("strong",{parentName:"p"},"please input keystore password:"),"Enter the password of the staking wallet and press Enter. If the following information is displayed, the staking is successful:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"operation finished\ntransaction hash:\n0x89b964d27d0caf1d8bf268f721eb123c4af57aed36187bea90b262f4769eeb9b\nSUCCESS\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"config\uff1anode configuration file"),(0,n.yg)("p",{parentName:"blockquote"},"keystore: staking wallet file"),(0,n.yg)("p",{parentName:"blockquote"},"amount: staking amount, not less than 100000LAT-staking threshold, no more than 8 decimal places"),(0,n.yg)("p",{parentName:"blockquote"},"restrictedamount: not less than 100000LAT-staking threshold, no more than 8 decimal points (staking using locked balance)"),(0,n.yg)("p",{parentName:"blockquote"},"autoamount: Not less than 100000LAT-Priority to use the lock-up balance staking, if the lock-up balance is not enough for the staking deposit, then use free amount staking"),(0,n.yg)("p",{parentName:"blockquote"},"benefit_address: benefit account to receive block-packing reward and staking reward"),(0,n.yg)("p",{parentName:"blockquote"},"delegated_reward_rate\uff1aDelegated bonus ratio, type is integer range is ","[","0,10000","]",", unit: ten thousand percent, e.g. enter 5000, it means the bonus ratio is 50%"),(0,n.yg)("p",{parentName:"blockquote"},"node",(0,n.yg)("em",{parentName:"p"},"name\uff1anode name\uff0c30 bytes(beginning with a letter, including alphabet, number, space, "),", -, #)"),(0,n.yg)("p",{parentName:"blockquote"},"website\uff1anode website, 30 bytes"),(0,n.yg)("p",{parentName:"blockquote"},"details\uff1anode description, 280 bytes"),(0,n.yg)("p",{parentName:"blockquote"},"external_id\uff1anode Icon ID of ",(0,n.yg)("a",{parentName:"p",href:"https://keybase.io"},"keybase.io"),", or identity authentication ID")),(0,n.yg)("h3",{id:"modify-validator-information-operation"},"Modify validator information operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},'platon_mtool update_validator --config $PLATON_MTOOLDIR/validator/validator_config.json --keystore $PLATON_MTOOLDIR/keystore/staking.json --node_name myNode --website www.mywebsite.com --external_id 121412312 --delegated_reward_rate 6000 --benefit_address lax1x0f9xwr9steccekttqvml0d26zgsxwdnhq3fkv --details "Modify the verifier information operation"\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"config\uff1anode configuration file"),(0,n.yg)("p",{parentName:"blockquote"},"keystore: staking wallet file"),(0,n.yg)("p",{parentName:"blockquote"},"benefit_address","[","option","]",": benefit account to receive block-packing reward and staking reward"),(0,n.yg)("p",{parentName:"blockquote"},"delegated_reward_rate","[","option","]","\uff1aDelegated bonus ratio, type is integer range is ","[","0,10000","]",", unit: ten thousand percent, e.g. enter 5000, it means the bonus ratio is 50%"),(0,n.yg)("p",{parentName:"blockquote"},"node",(0,n.yg)("em",{parentName:"p"},"nam","[","option","]","e\uff1anode name\uff0c30 bytes(beginning with a letter, including alphabet, number, space, "),", -, #)"),(0,n.yg)("p",{parentName:"blockquote"},"website","[","option","]","\uff1anode website, 30 bytes"),(0,n.yg)("p",{parentName:"blockquote"},"details","[","option","]","\uff1anode description, 280 bytes"),(0,n.yg)("p",{parentName:"blockquote"},"external_id","[","option","]","\uff1anode Icon ID of ",(0,n.yg)("a",{parentName:"p",href:"https://keybase.io"},"keybase.io"),", or identity authentication ID")),(0,n.yg)("h3",{id:"decommissioning-operation"},"Decommissioning operation"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("font",{color:"red"},"It takes 168 settlement cycles to withdraw from the pledge, please be careful!"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool unstaking --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"None")),(0,n.yg)("h3",{id:"increase-staking-operation"},"Increase staking operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool increasestaking --amount 5000000 --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"amount: Use the account balance to increase the staking amount (LAT), the minimum added value is not less than 10, and the decimal point does not exceed 8 digits"),(0,n.yg)("p",{parentName:"blockquote"},"restrictedamount: use the account balance to increase the amount of staking, not less than 10 staking threshold, the decimal point does not exceed 8")),(0,n.yg)("h3",{id:"submit-text-proposal"},"Submit Text Proposal"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool submit_textproposal --pid_id 100 --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,n.yg)("h3",{id:"submit-upgrade-proposal-operation"},"Submit upgrade proposal operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool submit_versionproposal --newversion 0.15.1 --end_voting_rounds 345 --pid_id 100 --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"newversion: target upgrade version, x.x.x, number punctuation"),(0,n.yg)("p",{parentName:"blockquote"},"end_voting_rounds: the number of voting consensus rounds, the number of voting consensus rounds N, must satisfy 0 < N <= 2813 (about 2 weeks)"),(0,n.yg)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,n.yg)("h3",{id:"submit-cancel-proposal"},"Submit Cancel Proposal"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool submit_cancelproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --end_voting_rounds 12 --pid_id 100 --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR_validator/validator\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"proposalid: the ID of the proposal that needs to be cancelled"),(0,n.yg)("p",{parentName:"blockquote"},"end_voting_rounds: the number of voting consensus rounds, the number of voting consensus rounds N, must satisfy 0 < N <= 2813 (about 2 weeks)"),(0,n.yg)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,n.yg)("h3",{id:"text-proposal-voting-operation"},"Text proposal voting operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool vote_textproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --opinion yes --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"proposalid: text proposal ID, that is, the hash of the proposal transaction, 66 characters, alphanumeric"),(0,n.yg)("p",{parentName:"blockquote"},"opinion: voting options, yes, no, abstain-choose one")),(0,n.yg)("h3",{id:"upgrade-proposal-voting-operation"},"Upgrade proposal voting operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool vote_versionproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"proposalid: upgrade proposal ID, that is, the hash of the proposed transaction, 66 characters, alphanumeric")),(0,n.yg)("h3",{id:"cancel-proposal-voting"},"Cancel proposal voting"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool vote_cancelproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --opinion yes --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"proposalid: Cancel the proposal ID, that is, the hash of the proposed transaction, 66 characters, composed of alphanumeric characters"),(0,n.yg)("p",{parentName:"blockquote"},"opinion: voting options, yes, no, abstain-choose one")),(0,n.yg)("h3",{id:"submit-parameter-proposal-operation"},"Submit parameter proposal operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool submit_paramproposal --pid_id 200 --module $ module --paramname $ paramname --paramvalue $ paramvalue --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"module: governance module parameters"),(0,n.yg)("p",{parentName:"blockquote"},"paramname: the name of the governance module parameter, pay attention to the case of the letters"),(0,n.yg)("p",{parentName:"blockquote"},"paramvalue: Governance module parameter value"),(0,n.yg)("p",{parentName:"blockquote"},"pid_id: GitHub ID")),(0,n.yg)("h3",{id:"parameter-proposal-voting-operation"},"Parameter proposal voting operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool vote_paramproposal --proposalid 0x444c3df404bc1ce4d869166623514b370046cd37cdfa6e932971bc2f98afd1a6 --opinion yes --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameters Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"proposalid: Cancel the proposal ID, that is, the hash of the proposed transaction, 66 characters, composed of alphanumeric characters"),(0,n.yg)("p",{parentName:"blockquote"},"opinion: voting options, yes, no, abstain-choose one")),(0,n.yg)("h3",{id:"version-declaration-operation"},"Version declaration operation"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool declare_version --keystore $PLATON_MTOOLDIR/keystore/staking.json --config $PLATON_MTOOLDIR/validator/validator_config.json\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"None")),(0,n.yg)("h3",{id:"view-help"},"View help"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Command line")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"platon_mtool -h\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Parameter Description")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"None")))}u.isMDXComponent=!0},5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var o=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return o.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},g=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||l;return t?o.createElement(m,r(r({ref:a},c),{},{components:t})):o.createElement(m,r({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,r=new Array(l);r[0]=g;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:n,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);