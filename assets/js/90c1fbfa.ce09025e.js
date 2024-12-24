"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1399],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,d=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return a?n.createElement(d,i(i({ref:t},g),{},{components:a})):n.createElement(d,i({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8294:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(8168),r=(a(6540),a(5680));const o={id:"Samurai_user_manual",title:"Samurai",sidebar_label:"Samurai"},i=void 0,s={unversionedId:"Samurai_user_manual",id:"Samurai_user_manual",isDocsHomePage:!1,title:"Samurai",description:"Samurai is an open source browser plug-in wallet tool that supports the Alaya and PlatON networks, supporting wallet creation, sending and receiving ATP and LAT, and allowing web DApps to interact with the Alaya and PlatON networks.",source:"@site/../docs/Samurai_user_manual.md",sourceDirName:".",slug:"/Samurai_user_manual",permalink:"/docs/Samurai_user_manual",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/Samurai_user_manual.md",version:"current",frontMatter:{id:"Samurai_user_manual",title:"Samurai",sidebar_label:"Samurai"},sidebar:"docs",previous:{title:"ATON Wallet User Manual",permalink:"/docs/ATON-user-manual"},next:{title:"Third-party wallets",permalink:"/docs/Third_Party_Walle"}},l=[{value:"Note",id:"note",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Initial Use",id:"initial-use",children:[]},{value:"Transaction Operation",id:"transaction-operation",children:[{value:"Send LAT",id:"send-lat",children:[]},{value:"Add and send Token",id:"add-and-send-token",children:[]}]},{value:"Create and manage an account",id:"create-and-manage-an-account",children:[{value:"Create Account",id:"create-account",children:[]},{value:"Import Account",id:"import-account",children:[]}]},{value:"Network Management",id:"network-management",children:[{value:"Choose networks",id:"choose-networks",children:[]},{value:"Add Custom Network",id:"add-custom-network",children:[]}]},{value:"Switch language",id:"switch-language",children:[]}],c={toc:l},g="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Samurai is an open source browser plug-in wallet tool that supports the Alaya and PlatON networks, supporting wallet creation, sending and receiving ATP and LAT, and allowing web DApps to interact with the Alaya and PlatON networks."),(0,r.yg)("p",null,"Samurai only generates wallet keys on your device, so only you can access your wallet account and data. You therefore need to keep your wallet key (private key, mnemonic) and wallet password safe. Samurai currently only supports Chrome."),(0,r.yg)("h2",{id:"note"},"Note"),(0,r.yg)("p",null,"Samurai is a browser plug-in wallet modified based on MetaMask's open source code version 8.0.10, which is mainly adapted to the Alaya network and PlatON network. Due to some bugs in the official MetaMask itself. Please pay attention when using Samurai:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Do not click the edit button to edit transaction related information on the transaction confirmation page"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"On the transaction confirmation page, please make sure that the receiving address is correct before clicking the confirm button"),".")),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Download Samurai plug-in package from ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/AlayaNetwork/Samurai/releases"},"Release address"),"."),(0,r.yg)("li",{parentName:"ul"},"Unzip Samurai plug-in package."),(0,r.yg)("li",{parentName:"ul"},"Open chrome browser,input ",(0,r.yg)("inlineCode",{parentName:"li"},"chrome://extensions/")," in the address bar and Enter,enter the management page of chrome extension program.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"chrome://extensions/\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Open the switch of ",(0,r.yg)("strong",{parentName:"li"},"developer mode"),", select to ",(0,r.yg)("strong",{parentName:"li"},"load the unzipped extension program"),", import the unzipped catalogue of the 2nd step.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/add-chrome.jpg"}),(0,r.yg)("h2",{id:"initial-use"},"Initial Use"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Click the Samurai icon on the right side of browser address bar, when you use it for the first time, there will be a prompt as shown below:")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-welcome.jpg"}),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Click \u201c",(0,r.yg)("strong",{parentName:"li"},"Get Started"),"\u201d,there is two options - ",(0,r.yg)("strong",{parentName:"li"},"Create wallet")," and ",(0,r.yg)("strong",{parentName:"li"},"iImport wallet"),".")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-select-action.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Import wallet: ")),(0,r.yg)("p",null,"Click \u201c",(0,r.yg)("strong",{parentName:"p"},"import wallet"),"\u201d\uff0center the guide page, click \u201c",(0,r.yg)("strong",{parentName:"p"},"I agree"),"\u201d and enter the next step. Then input the ",(0,r.yg)("strong",{parentName:"p"},"Seed phrase")," and ",(0,r.yg)("strong",{parentName:"p"},"password")," of this wallet, and click \u201c",(0,r.yg)("strong",{parentName:"p"},"import"),"\u201d->Once all steps is completed, you can enter the mainpage."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Note: The current Samurai mnemonic phrase generation path has problems, and the import of mnemonic phrases generated by external wallet applications is not supported. It is recommended to import it through the private key after the initial creation.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-agreement.jpg"}),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-import-seed.jpg"}),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-importd.jpg"}),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-import-home.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create wallet: ")),(0,r.yg)("p",null,"Click \u201c",(0,r.yg)("strong",{parentName:"p"},"create wallet"),"\u201d, enter the boot page, click \u201c",(0,r.yg)("strong",{parentName:"p"},"I agree"),"\u201d and enter the next step. Then input the ",(0,r.yg)("strong",{parentName:"p"},"password")," of new wallet, and click \u201c",(0,r.yg)("strong",{parentName:"p"},"create"),"\u201d."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-create-password.jpg"}),(0,r.yg)("p",null,'Go to the mnemonic backup page, click "CLICK  HERE TO REVEAL SECRET WORDS" to show the mnemonic words of the new account (mnemonic words need to be prevented from being seen by others, Samurai uses the password you provided to encrypt this information locally and will never send it to the server), click \u201c',(0,r.yg)("strong",{parentName:"p"},"Reminder me later"),"\u201d to go directly to the Samurai mainpage of the new account(Skip not recommended)."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-create-seed.jpg"}),(0,r.yg)("p",null,"Click \u201c",(0,r.yg)("strong",{parentName:"p"},"ext step"),"\u201d, re-input the mnemonic words with the right sequence, click \u201c",(0,r.yg)("strong",{parentName:"p"},"confirm"),"\u201d->Once all steps is completed, you can enter the mainpage."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-create-seed-confirm.jpg"}),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-importd.jpg"}),(0,r.yg)("h2",{id:"transaction-operation"},"Transaction Operation"),(0,r.yg)("h3",{id:"send-lat"},"Send LAT"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'In the PlatON main network, click "',(0,r.yg)("strong",{parentName:"li"},"send"),'" on the mainpage, and you can see the ',(0,r.yg)("strong",{parentName:"li"},"Add Recipient")," page.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-send-address-input.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enter or select the address for ",(0,r.yg)("strong",{parentName:"li"},"transfer between my accounts"),", and go to the transaction form page.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-send-input.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The transaction form must fill in the number of transaction LAT, and the system will give you the default transaction fee. You can also make appropriate adjustments to this value. After completing the form, click \u201c",(0,r.yg)("strong",{parentName:"li"},"next"),"\u201d to enter the page to be confirmed, which will show the total number of LAT spent (including the handling fee).")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-send-confirm.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click \u201c",(0,r.yg)("strong",{parentName:"li"},"Confirm"),"\u201d to complete the sending of LAT, and you can view the transaction status in the ",(0,r.yg)("strong",{parentName:"li"},"Activity")," on the mainpage.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-tx-detail.jpg"}),(0,r.yg)("h3",{id:"add-and-send-token"},"Add and send Token"),(0,r.yg)("h4",{id:"add-token"},"Add Token"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enter the mainpage, click ",(0,r.yg)("strong",{parentName:"li"},"Assets")," -> ",(0,r.yg)("strong",{parentName:"li"},"Add Token"),".")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-add-token.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pop-up the \u201cAdd Tokens\u201d page, add the existed  ",(0,r.yg)("strong",{parentName:"li"},"Token Contract Address")," of connected network, Samurai will automatically to get token\u2019s symbol and exact decimal point, click \u201c",(0,r.yg)("strong",{parentName:"li"},"Next"),"\u201d when you completed all the steps.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-add-token-input.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enter the confirm page of Add Tokens, there will show the balance of this token under this account, click \u201c",(0,r.yg)("strong",{parentName:"li"},"Add Tokens"),"\u201dto add successfully.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-add-token-confirm.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"After the account is successfully added, go to the token display screen, which displays the balance of tokens, or you can click \u201c",(0,r.yg)("strong",{parentName:"li"},"send"),"\u201d to enter the token transfer page. At the same time, the asset list of the mainpage will display the token assets.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-token-display.jpg"}),(0,r.yg)("h4",{id:"token-transfer"},"Token Transfer"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'You can click "',(0,r.yg)("strong",{parentName:"li"},"send"),'" in the account token display page to initiate the token transfer, or you can click  "',(0,r.yg)("strong",{parentName:"li"},"send"),'" of the corresponding token in the asset list inof the mainpage.')),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-assets-list.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Enter the ",(0,r.yg)("strong",{parentName:"li"},"add recipient")," page, enter or select the address for ",(0,r.yg)("strong",{parentName:"li"},"transfer between my accounts")," as you would for sending LAT, and enter the transaction form page.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-send-token-input.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The transaction form must enter the number of tokens for the transaction. Click \u201c",(0,r.yg)("strong",{parentName:"li"},"Next"),"\u201d to enter the transaction confirmation page.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-send-token-confirm.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click \u201c",(0,r.yg)("strong",{parentName:"li"},"Confirm"),"\u201d to complete the sending of tokens, you can view the transaction status in the transaction list on the mainpage.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-token-tx-detail.jpg"}),(0,r.yg)("h2",{id:"create-and-manage-an-account"},"Create and manage an account"),(0,r.yg)("h3",{id:"create-account"},"Create Account"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click on the wallet avatar at the top right of the Samurai homepage and click on ",(0,r.yg)("strong",{parentName:"li"},"Create Account")," in the drop down menu that appears.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-create-account.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to create account form page, enter ",(0,r.yg)("strong",{parentName:"li"},"account name")," (example below is wallet 2), click ",(0,r.yg)("strong",{parentName:"li"},"create")," button.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-create-account-input.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Successful creation will bring you to the mainpage of the newly created wallet, click on the wallet avatar at the top right to see a list of all wallet accounts.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-create-accountd.jpg"}),(0,r.yg)("h3",{id:"import-account"},"Import Account"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click on the wallet avatar at the top right of the Samurai page and in the drop down menu that appears click on ",(0,r.yg)("strong",{parentName:"li"},"import account"),".")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-import-account.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"enter import account form page, you can choose two import modes (private key/keystore json file), choose private key mode, paste private key into the form, then click ",(0,r.yg)("strong",{parentName:"li"},"import")," button.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-import-account-privatekey-input.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Choose import keystore file mode, select ",(0,r.yg)("strong",{parentName:"li"},"JSON file")," type, click select file, select keystore file from local directory, then enter keystore file passphrase, finally click ",(0,r.yg)("strong",{parentName:"li"},"import")," button.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-import-accout-keystoret.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the import is successful you will enter the main page of the newly imported wallet, click on the wallet avatar at the top right to see a list of all wallet accounts.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-import-accountd.jpg"}),(0,r.yg)("h2",{id:"network-management"},"Network Management"),(0,r.yg)("p",null,"By default, Samurai connects to the PlatON network, or it can connect to other networks."),(0,r.yg)("h3",{id:"choose-networks"},"Choose networks"),(0,r.yg)("p",null,"Samurai have added PlatON Main Network, PlatON dev network, PlatON Network, PlatON dev Network as default, you can choose a network to connect. Click ",(0,r.yg)("strong",{parentName:"p"},"\u201cNetworks\u201d")," and choose a network from the four networks to connect."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/choose-network.jpg"}),(0,r.yg)("h3",{id:"add-custom-network"},"Add Custom Network"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"\u201cNetworks\u201d"),"-> ",(0,r.yg)("strong",{parentName:"p"},"Custom RPC"),"."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/choose-custom-network.jpg"})),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Enter the new network configuration page, and click ",(0,r.yg)("strong",{parentName:"p"},"\u201cSave\u201d")," after configuring the form."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/custom-network-config.jpg"})),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Samurai will try to connect to the node, and if the node fails to connect, it will pop up a corresponding dialog prompt."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/custom-network-connect-failed.jpg"})),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"If the connection is successful, a network list option will be added to the network list."),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/custom-network-connect-success.jpg"}))),(0,r.yg)("h2",{id:"switch-language"},"Switch language"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click on the wallet avatar at the top right of the Samurai homepage and click on ",(0,r.yg)("strong",{parentName:"li"},"Settings")," in the drop down menu that appears.")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-setting.jpg"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Go to main settings page, then click ",(0,r.yg)("strong",{parentName:"li"},"General")," -> Go to ",(0,r.yg)("strong",{parentName:"li"},"Current Language")," drop down box to select (multiple languages supported).")),(0,r.yg)("img",{src:"/docs/img/en/Samurai.assets/samurai-home-setting-language.jpg"}))}m.isMDXComponent=!0}}]);