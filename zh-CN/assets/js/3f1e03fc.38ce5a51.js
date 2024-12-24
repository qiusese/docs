"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8668],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>N});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=c(r),s=n,N=y["".concat(p,".").concat(s)]||y[s]||d[s]||l;return r?a.createElement(N,i(i({ref:t},u),{},{components:r})):a.createElement(N,i({ref:t},u))}));function N(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4583:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(8168),n=(r(6540),r(5680));const l={id:"PlatON_Overview_DevGuide",title:"\u5f00\u53d1\u6307\u5357",sidebar_label:"\u5f00\u53d1\u6307\u5357"},i=void 0,o={unversionedId:"PlatON_Overview_DevGuide",id:"PlatON_Overview_DevGuide",isDocsHomePage:!1,title:"\u5f00\u53d1\u6307\u5357",description:"PlatON\u517c\u5bb9EVM\u548cWASM\u865a\u62df\u673a\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u9ad8\u7ea7\u8bed\u8a00\u6765\u7f16\u5199\u5408\u7ea6\u3002\u8fd9\u5927\u5927\u964d\u4f4e\u4e86\u7f16\u5199\u5408\u7ea6\u7684\u5b66\u4e60\u95e8\u69db\uff0c\u540c\u65f6\u63d0\u9ad8\u4e86\u5904\u7406\u5408\u7ea6\u4ea4\u6613\u7684\u6027\u80fd\u3002\u8be5\u7ae0\u8282\u7684\u6587\u6863\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5728PlatON\u7f51\u7edc\u4e0a\u5feb\u901f\u7f16\u5199\u3001\u90e8\u7f72\u3001\u8c03\u8bd5\u5408\u7ea6\uff0c\u5e76\u57fa\u4e8e\u5408\u7ea6\u5f00\u53d1\u5404\u7c7bDapp\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/\u5f00\u53d1\u6307\u5357\u6982\u89c8.md",sourceDirName:".",slug:"/PlatON_Overview_DevGuide",permalink:"/docs/zh-CN/PlatON_Overview_DevGuide",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/\u5f00\u53d1\u6307\u5357\u6982\u89c8.md",version:"current",frontMatter:{id:"PlatON_Overview_DevGuide",title:"\u5f00\u53d1\u6307\u5357",sidebar_label:"\u5f00\u53d1\u6307\u5357"},sidebar:"docs",previous:{title:"CTool\u6559\u7a0b",permalink:"/docs/zh-CN/CTool_Manual"},next:{title:"\u5f00\u53d1\u7f51\u7edc",permalink:"/docs/zh-CN/Join_Dev_Network"}},p=[{value:"\u4ec0\u4e48\u662fDapp?",id:"\u4ec0\u4e48\u662fdapp",children:[]},{value:"\u5982\u4f55\u5f00\u53d1Dapp?",id:"\u5982\u4f55\u5f00\u53d1dapp",children:[{value:"\u5f00\u53d1\u73af\u5883\u51c6\u5907",id:"\u5f00\u53d1\u73af\u5883\u51c6\u5907",children:[]},{value:"\u5408\u7ea6\u5f00\u53d1",id:"\u5408\u7ea6\u5f00\u53d1",children:[]},{value:"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1",id:"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1",children:[]},{value:"\u5982\u4f55\u53d1\u5e03PRC Token\uff1f",id:"\u5982\u4f55\u53d1\u5e03prc-token",children:[]}]}],c={toc:p},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"PlatON\u517c\u5bb9EVM\u548cWASM\u865a\u62df\u673a\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u9ad8\u7ea7\u8bed\u8a00\u6765\u7f16\u5199\u5408\u7ea6\u3002\u8fd9\u5927\u5927\u964d\u4f4e\u4e86\u7f16\u5199\u5408\u7ea6\u7684\u5b66\u4e60\u95e8\u69db\uff0c\u540c\u65f6\u63d0\u9ad8\u4e86\u5904\u7406\u5408\u7ea6\u4ea4\u6613\u7684\u6027\u80fd\u3002\u8be5\u7ae0\u8282\u7684\u6587\u6863\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u5728PlatON\u7f51\u7edc\u4e0a\u5feb\u901f\u7f16\u5199\u3001\u90e8\u7f72\u3001\u8c03\u8bd5\u5408\u7ea6\uff0c\u5e76\u57fa\u4e8e\u5408\u7ea6\u5f00\u53d1\u5404\u7c7bDapp\u5e94\u7528\u3002"),(0,n.yg)("h2",{id:"\u4ec0\u4e48\u662fdapp"},"\u4ec0\u4e48\u662fDapp?"),(0,n.yg)("p",null,"Dapp\uff0c\u5373Decentralized Application\uff0c\u662f\u6784\u5efa\u5728\u533a\u5757\u94fe\u4e0a\u7684\u53bb\u4e2d\u5fc3\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,n.yg)("h2",{id:"\u5982\u4f55\u5f00\u53d1dapp"},"\u5982\u4f55\u5f00\u53d1Dapp?"),(0,n.yg)("p",null,"\u4ece\u5f00\u53d1\u8005\u89d2\u5ea6\u51fa\u53d1\uff0cDapp\u5e94\u7528\u672c\u8d28\u4e0a\u662f\u548c\u5408\u7ea6\u4ea4\u4e92\u7684\u4e00\u4e2a\u8fc7\u7a0b\u3002\u53ef\u4ee5\u901a\u8fc7web\u7aef\u76f4\u63a5\u8c03\u7528\u5408\u7ea6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7SDKs\u548c\u5408\u7ea6\u4ea4\u4e92\u3002\u6574\u4e2a\u5f00\u53d1\u8fc7\u7a0b\u5927\u81f4\u5206\u4e3a\u5f00\u53d1\u73af\u5883\u51c6\u5907\u3001\u5408\u7ea6\u5f00\u53d1\u3001\u524d\u7aef\u548c\u540e\u53f0\u5f00\u53d1\u4e09\u5927\u8fc7\u7a0b\u3002"),(0,n.yg)("h3",{id:"\u5f00\u53d1\u73af\u5883\u51c6\u5907"},"\u5f00\u53d1\u73af\u5883\u51c6\u5907"),(0,n.yg)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u5f00\u53d1\u9700\u8981\uff0c\u9009\u62e9\u4ee5\u4e0b\u51e0\u79cd\u73af\u5883\u534f\u52a9\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Build_Private_Chain"},"\u79c1\u6709\u7f51\u7edc"),"-\u5728\u672c\u5730\u642d\u5efa\u4e00\u4e2a\u79c1\u6709\u8282\u70b9\u6216\u8005\u7f51\u7edc\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5feb\u901f\u5f00\u53d1\u8c03\u8bd5\u672c\u5730\u5e94\u7528\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Join_Dev_Network"},"\u5f00\u53d1\u7f51\u7edc"),"-\u63a5\u5165\u5230\u5f00\u53d1\u7f51\u7edc\u53ef\u4ee5\u5e2e\u52a9\u5728\u8f83\u4e3a\u5f00\u653e\u7684\u73af\u5883\u6d4b\u8bd5\u4f60\u7684\u4ee3\u7801\u3002"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#"},"\u4e3b\u7f51"),"-\u5f53\u4f60\u5728\u5728\u79c1\u6709\u7f51\u7edc\u548c\u5f00\u53d1\u7f51\u7edc\u5b8c\u6210\u4e86\u5168\u90e8\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u65e0\u7f1d\u8fc1\u79fb\u5230PlatON\u4e3b\u7f51")),(0,n.yg)("h3",{id:"\u5408\u7ea6\u5f00\u53d1"},"\u5408\u7ea6\u5f00\u53d1"),(0,n.yg)("p",null,"PlatON\u652f\u6301WASM\u548cEVM\u53cc\u865a\u62df\u673a\uff0c\u56e0\u6b64\u5f00\u53d1\u8005\u53ef\u6839\u636e\u81ea\u5df1\u64c5\u957f\u7684\u9886\u57df\u6765\u9009\u62e9\u5408\u7ea6\u7684\u5f00\u53d1\u8bed\u8a00\u3002"),(0,n.yg)("h4",{id:"solidity\u5408\u7ea6\u5f00\u53d1"},"Solidity\u5408\u7ea6\u5f00\u53d1"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Dev_Manual"},"\u5f00\u53d1\u5165\u95e8")," - \u4f60\u53ef\u4ee5\u4e86\u89e3\u5982\u4f55\u5728PlatON\u7f51\u7edc\u90e8\u7f72\u3001\u7f16\u8bd1\u3001\u53d1\u5e03\u3001\u8c03\u7528\u5408\u7ea6"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Contract_Best_Practice"},"\u6700\u4f73\u5b9e\u8df5"),"-\u5bf9\u4e8e\u5982\u4f55\u5408\u7406\u8bbe\u7f6e\u624b\u7eed\u8d39\uff0c\u5982\u4f55\u89c4\u907f\u56e0\u4ea4\u6613\u5931\u8d25\u6263\u9664\u624b\u7eed\u8d39\u7b49\u5408\u7ea6\u7f16\u5199\u89c4\u8303\u7684\u4ecb\u7ecd"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"docs/zh-CN/Solidity_Contract_Dev_Costs"},"\u5f00\u53d1\u6210\u672c"),"-\u4ecb\u7ecd\u5728PlatON\u4e0aSlolidity\u5408\u7ea6\u90e8\u7f72\u8c03\u7528\u7684\u624b\u7eed\u8d39\u6210\u672c\u4ee5\u53ca\u548c\u4ee5\u592a\u574a\u624b\u7eed\u8d39\u7684\u5bf9\u6bd4\u5206\u6790"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Contract_Security_Dev_Guide"},"\u5b89\u5168\u6307\u5357"),"-\u4ecb\u7ecd\u5982\u4f55\u63d0\u9ad8\u5408\u7ea6\u7684\u5b89\u5168\u6027"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Contract_Migrate"},"\u5408\u7ea6\u8fc1\u79fb"),"-\u9664\u4e86\u81ea\u5df1\u7f16\u5199\u5408\u7ea6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4ece\u4ee5\u592a\u574a\u6216\u5176\u4ed6\u652f\u6301Solidity\u5408\u7ea6\u7684\u516c\u94fe\u4e0a\u8fc1\u79fb\u5408\u7ea6\u5230PlatON\u7f51\u7edc"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Inner_Contract"},"\u7cfb\u7edf\u5408\u7ea6\u8c03\u7528"),"-\u5982\u4f55\u5728Solidity\u5408\u7ea6\u4e2d\u8c03\u7528\u7cfb\u7edf\u5408\u7ea6")),(0,n.yg)("h4",{id:"wasm\u5408\u7ea6\u5f00\u53d1"},"WASM\u5408\u7ea6\u5f00\u53d1"),(0,n.yg)("p",null,"WASM\u5408\u7ea6\u76ee\u524d\u53ea\u652f\u6301",(0,n.yg)("inlineCode",{parentName:"p"},"C++"),"\u8bed\u8a00\u5f00\u53d1\uff0c\u4e5f\u6b22\u8fce\u5927\u5bb6\u7ee7\u7eed\u6269\u5c55\u5176\u4ed6\u4e3b\u6d41\u8bed\u8a00\u7684\u5408\u7ea6\u3002"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Dev_Manual"},"\u5f00\u53d1\u5165\u95e8"),"-\u4ecb\u7ecd\u5982\u4f55\u5728PlatON\u4e0a\u7f16\u8bd1\u53d1\u5e03\u8c03\u7528WASM\u5408\u7ea6 "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Contract_Dev_Costs"},"\u5f00\u53d1\u6210\u672c"),"-\u4ecb\u7ecd\u5728PlatON\u4e0aWasm\u5408\u7ea6\u90e8\u7f72\u8c03\u7528\u7684\u624b\u7eed\u8d39\u6210\u672c\u4ee5\u53ca\u548c\u4ee5\u592a\u574a\u624b\u7eed\u8d39\u7684\u5bf9\u6bd4\u5206\u6790"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Solidity_Contract_Best_Practice"},"\u6700\u4f73\u5b9e\u8df5"),"-\u5bf9\u4e8e\u5982\u4f55\u5408\u7406\u8bbe\u7f6e\u624b\u7eed\u8d39\uff0c\u5982\u4f55\u89c4\u907f\u56e0\u4ea4\u6613\u5931\u8d25\u6263\u9664\u624b\u7eed\u8d39\u7b49\u5408\u7ea6\u7f16\u5199\u89c4\u8303\u7684\u4ecb\u7ecd"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Wasm_Contract_API"},"\u5408\u7ea6\u5e93"))),(0,n.yg)("h3",{id:"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1"},"\u524d\u7aef\u6216\u540e\u53f0\u5f00\u53d1"),(0,n.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u76f4\u63a5\u901a\u8fc7Web\u524d\u7aef\u4e0e\u5408\u7ea6\u76f4\u63a5\u4ea4\u4e92\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u6587\u6863\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Samurai_API"},"Samurai API"),"-\u63d0\u4f9bWeb\u94b1\u5305\u5f00\u53d1\u652f\u6301"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/JS_SDK"},"JS SDK"),"-\u5982\u4f55\u4f7f\u7528JS\u4e0e\u5408\u7ea6\u6216PlatON\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92")),(0,n.yg)("p",null,"\u5982\u679c\u4f60\u60f3\u901a\u8fc7\u7f16\u5199\u540e\u7aef\u4ee3\u7801\u6765\u548c\u5408\u7ea6\u6216PlatON\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\uff0c\u4ee5\u4e0b\u4e0d\u540c\u8bed\u8a00\u7684SDK\u53ef\u4ee5\u63d0\u4f9b\u5e2e\u52a9\uff1a"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Python_SDK"},"Python SDK")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/zh-CN/Java_SDK"},"JAVA SDK"))),(0,n.yg)("h3",{id:"\u5982\u4f55\u53d1\u5e03prc-token"},"\u5982\u4f55\u53d1\u5e03PRC Token\uff1f"),(0,n.yg)("p",null,"\u7531\u4e8ePlatON\u7ee7\u627f\u4e86EVM\u865a\u62df\u673a\uff0c\u7406\u8bba\u4e0a\u53ef\u4ee5\u517c\u5bb9\u6240\u6709\u4ee5\u592a\u574a\u6807\u51c6\u534f\u8bae\u7684Token\uff0c\u76ee\u524d\u5e38\u7528\u7684Token\u534f\u8bae\u6709",(0,n.yg)("a",{parentName:"p",href:"/docs/zh-CN/PRC20_contract/"},"PRC-20"),"\u548c",(0,n.yg)("a",{parentName:"p",href:"/docs/zh-CN/PRC721_contract/"},"PRC-721"),"."))}y.isMDXComponent=!0}}]);