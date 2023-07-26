"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,f=u["".concat(i,".").concat(g)]||u[g]||p[g]||s;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<s;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5631:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const s={id:"PlaTrust-wallet-js-sdk",title:"PlaTrust Wallet js-sdk",sidebar_label:"PlaTrust Wallet js-sdk"},l="PlaTrust Wallet js-sdk Installation and Usage Instructions",o={unversionedId:"PlaTrust-wallet-js-sdk",id:"PlaTrust-wallet-js-sdk",isDocsHomePage:!1,title:"PlaTrust Wallet js-sdk",description:"Install js-sdk",source:"@site/../docs/PlaTrust\u94b1\u5305js-sdk\u5b89\u88c5\u53ca\u4f7f\u7528\u8bf4\u660e.md",sourceDirName:".",slug:"/PlaTrust-wallet-js-sdk",permalink:"/docs/PlaTrust-wallet-js-sdk",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlaTrust\u94b1\u5305js-sdk\u5b89\u88c5\u53ca\u4f7f\u7528\u8bf4\u660e.md",version:"current",frontMatter:{id:"PlaTrust-wallet-js-sdk",title:"PlaTrust Wallet js-sdk",sidebar_label:"PlaTrust Wallet js-sdk"},sidebar:"docs",previous:{title:"PlaTrust Wallet",permalink:"/docs/PlaTrust_Wallet"},next:{title:"PlaTrust Wallet js-sdk-api",permalink:"/docs/PlaTrust-wallet-js-sdk-api"}},i=[{value:"Install js-sdk",id:"install-js-sdk",children:[]},{value:"Using the SDK in Code",id:"using-the-sdk-in-code",children:[]},{value:"PlatON Testnet Configuration",id:"platon-testnet-configuration",children:[]}],d={toc:i},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platrust-wallet-js-sdk-installation-and-usage-instructions"},"PlaTrust Wallet js-sdk Installation and Usage Instructions"),(0,a.kt)("h2",{id:"install-js-sdk"},"Install js-sdk"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use npm to install:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install platrust-wallet-js-sdk\n")),(0,a.kt)("h2",{id:"using-the-sdk-in-code"},"Using the SDK in Code"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import the js-sdk:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const platrust = require("platrust-wallet-js-sdk")\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// import { ethers } from \"ethers\";\n// import { Accounts } from \"web3-eth-accounts\";\n// import { UserOpReceipt, BaseWalletLib, UserOperation, packSignatureHash, signMessage, encodeSignature } from 'platrust-wallet-js-sdk';\nconst platrust = require(\"platrust-wallet-js-sdk\")\nconst ethers = require(\"ethers\")\n\nasync function main() {\n    const pks = ['0xa5748918ff73de2e3f6cde786a1567640349eefff2503de82b0bfa4d41d55101']\n    let owners = ['0x2E64cAbc8586CE95B5744DDE91Bc92182CbbD813']\n\n    const walletLib = new platrust.WalletLib();\n    const walletLogic = '0x2e234DAe75C793f67A35089C9d99245E1C58470b'\n    const walletFactory = '0xF62849F9A0B5Bf2913b396098F7c7019b51A820a' // wallet proxy factory contract address\n    const relayerManagerAddr = '0x5615dEB798BB3E4dFa0139dFa1b3D433Cc23b72f'\n    // const salt = ethers.utils.formatBytes32String(\"abc\")\n    const salt = '0x4aa639acfa86f7d60530bf462efdfdd9f4c4a6526226f5284c0af71240d47f25'\n    const initializer = await walletLib.getSetupCode(\n        relayerManagerAddr,   // <address> EntryPoint Contract Address\n        owners, // <[address]> owner Address List\n        1,       // <number> threshold\n        AddressZero,  // <address> to Address\n        '0x',  // <string> wallet init execute data\n        AddressZero,  // <string> fallbackHandler\n        86400,      // <number> lockPeriod\n    )\n    const walletAddress = await walletLib.calculateWalletAddress(\n        walletLogic,  // <address> PlatrustWalletLogic Contract Address\n        initializer,  // <string> initializer\n        salt,     // <string> salt (Hex string)\n        walletFactory  // <address> wallet Factory Address\n    );\n    const initcode = walletLib.getInitCode(walletFactory, walletLogic, initializer, salt)\n    const activateOp = walletLib.activateWalletOp(\n        walletLogic,  // <address> PlatrustWallet Logic Contract Address\n        initializer,  // <string> initializer\n        undefined,   // <bytes> paymasterAndData\n        salt,     // <string> salt (Hex string)\n        walletFactory,  // <address> Wallet factory Contract Address\n        100,      // <number> maxFeePerGas 100Gwei\n        1000,     // <number> maxPriorityFeePerGas 10Gwei\n        5000000,\n        500000,\n        50000\n    );\n    const userOpHash = await activateOp.getUserOpHashFromContract(\n        relayerManagerAddr,  // <address> EntryPoint Contract Address\n        new ethers.providers.JsonRpcProvider( \"https://devnet2openapi.platon.network/rpc\"),  // ethers.providers\n    );\n    const signedHash = platrust.packSignatureHash(userOpHash, SignatureMode.owner, 0, 0);\n    const sig = platrust.signMessage(signedHash, pks[0])\n    const pk = platrust.recoverAddress(signedHash, sig)\n\n    activateOp.signature = platrust.encodeSignature(SignatureMode.owner, sig, 0, 0);\n    console.log(\"signature: \", activateOp.signature);\n    \n    const bundler = new walletLib.Bundler(\n        '0x0',  // <address> EntryPoint Contract Address\n        new ethers.providers.JsonRpcProvider( \"https://devnet2openapi.platon.network/rpc\"),  // ethers.providers\n    );\n\n    const validation = await bundler.simulateValidation(activateOp);\n    if (validation.status !== 0) {\n        throw new Error(`error code:${validation.status}`);\n    }\n\n    const bundlerEvent = bundler.sendUserOperation(activateOp);\n    bundlerEvent.on('error', (err: any) => {\n        console.log(err);\n    });\n    bundlerEvent.on('send', (userOpHash: string) => {\n        console.log('send: ' + userOpHash);\n    });\n    bundlerEvent.on('receipt', (receipt: IUserOpReceipt) => {\n        console.log('receipt: ' + JSON.stringify(receipt));\n    });\n    bundlerEvent.on('timeout', () => {\n        console.log('timeout');\n    });\n}\n\nmain();\n")),(0,a.kt)("h2",{id:"platon-testnet-configuration"},"PlatON Testnet Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"TestnetURL: 'https://devnet2openapi2.platon.network/rpc'\nbundleURL: 'https://testbundler.platon.network'\n\nwalletLogic: '0x3b682b956E65b5F5b8150f75F2235f156A8F4b7B'\nwalletFactory: '0x97429FFFdE9223C92Cb00F66D8352B0642f70FA4' // wallet proxy factory contract address\nrelayerManagerAddr: '0xD7998fC16185cC619b0918028D9BBc77A844a880'\n")))}u.isMDXComponent=!0}}]);