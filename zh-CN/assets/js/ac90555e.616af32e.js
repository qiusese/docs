"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8e3],{746:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var t=r(8168),a=(r(6540),r(5680));const o={id:"get_vrf_random_number",title:"\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b",sidebar_label:"\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b"},i=void 0,l={unversionedId:"get_vrf_random_number",id:"get_vrf_random_number",isDocsHomePage:!1,title:"\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b",description:"\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b.md",sourceDirName:".",slug:"/get_vrf_random_number",permalink:"/docs/zh-CN/get_vrf_random_number",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b.md",version:"current",frontMatter:{id:"get_vrf_random_number",title:"\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b",sidebar_label:"\u83b7\u53d6\u968f\u673a\u6570\u6559\u7a0b"},sidebar:"docs",previous:{title:"WalletConnect\u96c6\u6210\u6559\u7a0b",permalink:"/docs/zh-CN/DApp_integration_with_WalletConnect_for_ATON"},next:{title:"EIP55\u548cBech32\u5730\u5740\u683c\u5f0f\u517c\u5bb9\u65b9\u6848",permalink:"/docs/zh-CN/eip55-bech32-compatible"}},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u5165\u53c2",id:"\u5165\u53c2",children:[]},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[]},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",children:[]}],s={toc:u},d="wrapper";function c(e){let{components:n,...r}=e;return(0,a.yg)(d,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.yg)("p",null,"PlatON \u5185\u7f6e\u5408\u7ea6\uff08\u5408\u7ea6\u5730\u5740\uff1alat1xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpe9fgva\uff09\u63d0\u4f9b\u751f\u6210 VRF \u968f\u673a\u6570\u529f\u80fd\u3002\u8be5\u5408\u7ea6\u6700\u591a\u652f\u6301\u8fd4\u56de500\u4e2a\u968f\u673a\u6570\uff0c\u8fd4\u56de\u503c\u4e3a[]byte\u6570\u7ec4\uff0c\u6bcf32\u4e2a\u5b57\u8282\u8868\u793a\u4e00\u4e2a\u968f\u673a\u6570\u3002"),(0,a.yg)("h3",{id:"\u5165\u53c2"},"\u5165\u53c2"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"input []byte\uff1a\u9700\u8981\u83b7\u53d6\u7684\u968f\u673a\u6570\u7684\u4e2a\u6570\uff0c\u4e0d\u5f97\u8d85\u8fc7500\u3002\u8be5\u5165\u53c2\u8868\u793a\u4e3a\u5c06\u4e00\u4e2a uint64 \u503c\uff0c\u586b\u5145\u523032\u4e2a\u5b57\u8282\u3002\u6bd4\u5982\uff1a0x0000000000000000000000000000000000000000000000000000000000000006 \u8868\u793a\u83b7\u53d66\u4e2a\u968f\u673a\u6570")),(0,a.yg)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"ret []byte\uff1a\u6bcf32\u4e2a\u5b57\u8282\u8868\u793a\u4e00\u4e2a\u968f\u673a\u6570")),(0,a.yg)("h3",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,a.yg)("h4",{id:"python-sdk-\u8c03\u7528"},"Python SDK \u8c03\u7528"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"from client_sdk_python import Web3, WebsocketProvider\n\nw3 = Web3(WebsocketProvider('ws://192.168.120.121:7789'))\n\ntxn = {\n    \"to\": 'lat1xqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpe9fgva',\n    \"data\": 0x000000000000000000000000000000000000000000000000000000000000001f4,\n}\n\ncrypt_hex = w3.platon.call(txn).hex()[2:]\ncrypts = [crypt_hex[i: i + 64] for i in range(len(crypt_hex)) if i % 64 == 0]\n\nprint(len(crypts), crypts)\n")),(0,a.yg)("h4",{id:"solidity\u8de8\u5408\u7ea6\u8c03\u7528"},"Solidity\u8de8\u5408\u7ea6\u8c03\u7528"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\n/**\n * \u8c03\u7528PlatON\u5185\u7f6e\u5408\u7ea6\u751f\u6210VRF\u968f\u673a\u6570\n */\ncontract VRF {\n\n  error InvalidRandomWords(uint32 numWords, uint256 returnValueLength);\n\n  // VrfInnerContract \u5185\u7f6e\u5408\u7ea6\u5730\u5740\n  address vrfInnerContractAddr = 0x3000000000000000000000000000000000000001;\n\n  // 32\u4e2a\u5b57\u8282\u8868\u793auint256\n  uint32 base = 32;\n\n  /**\n   * \u8c03\u7528 VrfInnerContract \u5185\u7f6e\u5408\u7ea6\u751f\u6210VRF\u968f\u673a\u6570\n   * @param numWords \u968f\u673a\u6570\u7684\u4e2a\u6570\n   */\n  function requestRandomWords(uint32 numWords) internal returns (uint256[] memory) {\n    bytes memory data = abi.encode(numWords);\n    bytes memory returnValue = assemblyCall(data, vrfInnerContractAddr);\n\n    if (numWords * base != returnValue.length) {\n        revert InvalidRandomWords(\n            numWords,\n            returnValue.length\n        );\n    }\n\n    uint256[] memory randomWords = new uint256[](numWords);\n    for(uint i = 0; i < numWords; i++) {\n        uint start = i * base;\n        randomWords[i] = sliceUint(returnValue, start);\n    }\n\n    return randomWords;\n  }\n\n  /**\n   * delegatecall \u5408\u7ea6\n   * @param data \u5408\u7ea6input data\n   * @param addr \u5408\u7ea6\u5730\u5740\n   */\n    function assemblyCall(bytes memory data, address addr) internal returns (bytes memory) {\n        uint256 len = data.length;\n        uint retsize;\n        bytes memory resval;\n        assembly {\n            let result := delegatecall(gas(), addr, add(data, 0x20), len, 0, 0)\n            retsize := returndatasize()\n        }\n        resval = new bytes(retsize);\n        assembly {\n            returndatacopy(add(resval, 0x20), 0, returndatasize())\n        }\n        return resval;\n    }\n\n    function sliceUint(bytes memory bs, uint start) internal pure returns (uint256) {\n        require(bs.length >= start + 32, "slicing out of range");\n        uint256 x;\n        assembly {\n            x := mload(add(bs, add(0x20, start)))\n        }\n        return x;\n    }\n}\n')))}c.isMDXComponent=!0},5680:(e,n,r)=>{r.d(n,{xA:()=>d,yg:()=>y});var t=r(6540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(r),p=a,y=c["".concat(u,".").concat(p)]||c[p]||m[p]||o;return r?t.createElement(y,i(i({ref:n},d),{},{components:r})):t.createElement(y,i({ref:n},d))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);