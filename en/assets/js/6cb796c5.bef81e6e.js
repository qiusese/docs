"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?l.createElement(k,o(o({ref:t},u),{},{components:n})):l.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5555:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={id:"PlatON_Wallet_Plugin_Sdk",title:"PlatON-Wallet-Plugin-SDK - Access Manual",sidebar_label:"PlatON-Wallet-Plugin-SDK"},o="INTEGRATE PlatON Wallet Plugin SDK",i={unversionedId:"PlatON_Wallet_Plugin_Sdk",id:"PlatON_Wallet_Plugin_Sdk",isDocsHomePage:!1,title:"PlatON-Wallet-Plugin-SDK - Access Manual",description:"Install PlatON Wallet Plugin SDK",source:"@site/../docs/PlatON-Wallet-Plugin-SDK\u63a5\u5165\u624b\u518c.md",sourceDirName:".",slug:"/PlatON_Wallet_Plugin_Sdk",permalink:"/docs/en/PlatON_Wallet_Plugin_Sdk",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/PlatON-Wallet-Plugin-SDK\u63a5\u5165\u624b\u518c.md",version:"current",frontMatter:{id:"PlatON_Wallet_Plugin_Sdk",title:"PlatON-Wallet-Plugin-SDK - Access Manual",sidebar_label:"PlatON-Wallet-Plugin-SDK"},sidebar:"docs",previous:{title:"PlatON-Wallet Operation_Manual",permalink:"/docs/en/PlatON_Wallet_Operation_Manual"},next:{title:"Community Projects",permalink:"/docs/en/community"}},p=[{value:"Install PlatON Wallet Plugin SDK",id:"install-platon-wallet-plugin-sdk",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Set up the SDK",id:"set-up-the-sdk",children:[]},{value:"Example usage",id:"example-usage",children:[]}],s={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-platon-wallet-plugin-sdk"},"INTEGRATE PlatON Wallet Plugin SDK"),(0,a.kt)("h2",{id:"install-platon-wallet-plugin-sdk"},"Install PlatON Wallet Plugin SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Integrate our SDK to your dApp/Wallet/swap UI.")),(0,a.kt)("p",null,"The PlatON Wallet Plugin SDK provides users with quick asset management functions. Using this plugin library, users can view the\nbalance of assets on the PlatON network and purchase assets on the PlatON network by cross-chain bridge or fiat currency."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"We recommend installing the SDK via npm\u3001yarn or pnpm."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install '@platonnetwork/wallet-plugin-sdk'\n")),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add '@platonnetwork/wallet-plugin-sdk'\n")),(0,a.kt)("p",null,"or "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pnpm add '@platonnetwork/wallet-plugin-sdk'\n")),(0,a.kt)("h2",{id:"set-up-the-sdk"},"Set up the SDK"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After you have installed the SDK, you first need to set it up.")),(0,a.kt)("p",null,"To get started, you have to instantiate and configure the Platon-Wallet SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import PlatOWallet from '<package name>';\n\n// Definition PlatONWallet SDK\nconst walletSDK = new PlatONWallet(config);\n\n")),(0,a.kt)("p",null,"The optional config parameter can be used to pass custom configuration to the SDK:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"type ConfigUpdate = {\n    env: 'TEST' // 'TEST' or 'PROD'\n};\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," defines which environment should be access, and can be selected as ",(0,a.kt)("inlineCode",{parentName:"p"},"TEST")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"PROD"),". This requires that\nthe corresponding environment be determined at initialization time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TEST")," Corresponding test environment, which corresponds to PlatON's development network;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROD")," Corresponds to the production environment, which corresponds to the main network of PlatON;")),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import PlatOWallet from '<package name>';\n\n// Definition PlatONWallet SDK\nconst walletSDK = new PlatONWallet({\n    env: 'TEST' // 'TEST' or 'PROD'\n});\n\n// Initialization PlatONWallet SDK\nwalletSDK.init();\n\n// Hide Platon-Wallet.\nwalletSDK.hide();\n\n// Show Platon-Wallet.\nwalletSDK.show();\n\n// Destroy Platon-Wallet\nwalletSDK.destroy();\n")))}c.isMDXComponent=!0}}]);