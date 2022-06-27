"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={id:"Solidity_Contract_Best_Practice",title:"Best practices",sidebar_label:"Best practices"},o=void 0,l={unversionedId:"Solidity_Contract_Best_Practice",id:"Solidity_Contract_Best_Practice",isDocsHomePage:!1,title:"Best practices",description:"Best Practice",source:"@site/../docs/solidity\u5408\u7ea6\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5.md",sourceDirName:".",slug:"/Solidity_Contract_Best_Practice",permalink:"/docs/en/Solidity_Contract_Best_Practice",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/solidity\u5408\u7ea6\u5f00\u53d1\u6700\u4f73\u5b9e\u8df5.md",version:"current",frontMatter:{id:"Solidity_Contract_Best_Practice",title:"Best practices",sidebar_label:"Best practices"},sidebar:"docs",previous:{title:"Development costs",permalink:"/docs/en/Solidity_Contract_Dev_Costs"},next:{title:"Contract security",permalink:"/docs/en/Solidity_Contract_Security_Dev_Guide"}},s=[{value:"Best Practice",id:"best-practice",children:[{value:"Introduction",id:"introduction",children:[]},{value:"Reasonable Cost Setting",id:"reasonable-cost-setting",children:[]},{value:"Avoid Timeouts",id:"avoid-timeouts",children:[]},{value:"Punishment For Illegal Operations",id:"punishment-for-illegal-operations",children:[]},{value:"Coding Standards",id:"coding-standards",children:[]}]}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"best-practice"},"Best Practice"),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This guide introduces users with some key points that need to be paid attention in the development of smart contracts, mainly in the practice of actual development. Users can use this guide to quickly understand how to set a reasonable fee for a transaction, how to avoid losing the fee due to transaction failure, and how to encode a more standardized smart contract."),(0,i.kt)("h3",{id:"reasonable-cost-setting"},"Reasonable Cost Setting"),(0,i.kt)("p",null,'When you need to deploy a contract on the main network of PlatON, you need to set a reasonable fee limit. The fee limit refers to the upper limit of the energy consumption cost of smart contract deployment/execution in PlatON. This restriction is mainly accomplished through Gas. Gas is the fuel value of the PlatON network world, which determines the normal operation of the PlatON network ecosystem. Gas is usually used to measure how much "work" is required to perform certain actions, and these workloads are the amount of fees that need to be paid to the PlatON network in order to perform the action. In a simple understanding, Gas is the commission for network miners, and is paid by LAT. Any transaction, contract execution, and data storage on the network need to use Gas.'),(0,i.kt)("p",null,"PlatON is similar to Ethereum's blockchain system. It uses ",(0,i.kt)("inlineCode",{parentName:"p"},"LAT")," for payment and maintenance networks. One LAT is divided into:",(0,i.kt)("inlineCode",{parentName:"p"},"mLAT/uLAT/gVON/mVON/kVON/VON"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"VON")," is the smallest unit."),(0,i.kt)("p",null,"Gas consists of two parts: GasLimit and GasPrice. ",(0,i.kt)("inlineCode",{parentName:"p"},"GasLimit")," is the maximum",(0,i.kt)("inlineCode",{parentName:"p"}," Gas")," consumption (minimum 21,000) that a user is willing to pay to perform an operation or confirm a transaction. GasPrice is the unit price of each Gas."),(0,i.kt)("p",null,"When a user sends a transaction, GasLimit and GasPrice are set. ",(0,i.kt)("inlineCode",{parentName:"p"},"GasLimit * GasPrice")," is the user's transaction cost, and the cost is rewarded to the miner as a commission."),(0,i.kt)("p",null,"The higher the GasPrice of the transaction, the higher the execution priority of the transaction and the greater the transaction cost. After each transaction is completed, the remaining unused Gas will be returned to the sender's address account. It is important to note that if the execution of the transaction fails due to the GasLimit is too low, the Gas will not be returned to the user's address at this time, and the user still needs to pay the energy cost for the failed transaction. Therefore, regardless of whether the transaction is executed successfully, the transaction sender needs to pay a certain calculation fee to the miner."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"PlatON")," network, the maximum gas limit is",(0,i.kt)("inlineCode",{parentName:"p"}," 4,700,000")," and the minimum is ",(0,i.kt)("inlineCode",{parentName:"p"},"22,000"),". Too low or too high will cause transaction failure. When deploying large contracts or calling complex functions in contracts, you can increase the gas limit, for example: ",(0,i.kt)("inlineCode",{parentName:"p"},"1,000,000"),". If it is a normal transfer, set it to the lowest value. The specific value needs to be estimated according to the size and complexity of the contract. Before the contract is released, the interface ",(0,i.kt)("inlineCode",{parentName:"p"},"platon_estimateGas")," can be called for approximate estimation to avoid failure due to insufficient Gas. ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/Json_Rpc"},"Click to view JSON-RPC reference documentation"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LAT Unit Conversion")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Unit"),(0,i.kt)("th",{parentName:"tr",align:"left"},"VON Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"VON"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1 VON")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"kVON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1e3 VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mVON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1e6 VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gVON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1e9 VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"LAT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1e18 VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1,000,000,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"mLAT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1e24 VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1,000,000,000,000,000,000,000,000")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"gLAT"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1e27 VON"),(0,i.kt)("td",{parentName:"tr",align:"left"},"1,000,000,000,000,000,000,000,000,000")))),(0,i.kt)("h3",{id:"avoid-timeouts"},"Avoid Timeouts"),(0,i.kt)("p",null,"Sending transactions on the PlatON network does not have the concept of timeout, but it will eventually stop according to the set gas limit value. If the limit value is lower than the consumption required for contract deployment, the transaction execution fails and the corresponding processing fee will be deducted. The fee setting cannot be infinite, because in the network, the block itself has a maximum ",(0,i.kt)("inlineCode",{parentName:"p"},"GasLimit")," value. When the GasLimit of the transaction exceeds this value, the transaction will not be accepted."),(0,i.kt)("p",null,"If the call function of a published contract is called (a call is a stateless operation in the contract logic), there is a 5s timeout limit. If the contract logic is not executed within 5s, a timeout will occur and the virtual machine will forcely exit , causing the query to fail."),(0,i.kt)("p",null,"To avoid contract-related transaction failures, try breaking large contracts into smaller pieces and referencing each other as needed. To avoid infinite loops, be aware of common pitfalls and recursive calls."),(0,i.kt)("h3",{id:"punishment-for-illegal-operations"},"Punishment For Illegal Operations"),(0,i.kt)("p",null,"If the smart contract is not compiled by a standard valid compiler, or the instruction code is changed at will, the opcode will be invalid. This type of contract not only fails to be deployed and executed successfully, but also generates a full amount (",(0,i.kt)("inlineCode",{parentName:"p"},"GasLimit * GasPrice"),") penalty. The transaction fee for the current transaction will be deducted. This is a very strong penalty. If the operator does not pay attention to this point and keep retrying, then the cost will be higher and the cost will be heavier."),(0,i.kt)("p",null,"In general, invalid opcodes have the following conditions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Manually changed the instruction code for the normally compiled contract;"),(0,i.kt)("li",{parentName:"ol"},"The contract compiler version is not consistent with the contract version supported by the network lock;")),(0,i.kt)("p",null,"When operating a contract in the PlatON network. First, you must confirm the smart contract version supported by the current network, and then select the compiler of the corresponding version pair."),(0,i.kt)("p",null,"The normal operation is to use the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"Truffle"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"PlatON-CDT")," officially provided by PlatON to compile/deploy/execute the contract. At the same time, before switching to the main network, it must be validated on the test network."),(0,i.kt)("h3",{id:"coding-standards"},"Coding Standards"),(0,i.kt)("h4",{id:"naming-rules"},"Naming Rules"),(0,i.kt)("p",null,"Basic Rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use complete descriptive information that accurately describes variables, fields, classes, interfaces, etc."),(0,i.kt)("li",{parentName:"ul"},"Use mixed case (except special characters) to improve the readability of the name."),(0,i.kt)("li",{parentName:"ul"},"Use terminology within the blockchain industry."),(0,i.kt)("li",{parentName:"ul"},"Use as few abbreviations as possible. If you must use them, it is recommended to use public abbreviations and custom abbreviations."),(0,i.kt)("li",{parentName:"ul"},"Avoid using names that are similar or just distinguish between upper and lower case."),(0,i.kt)("li",{parentName:"ul"},"The directory uses lowercase uniformly, without special symbols."),(0,i.kt)("li",{parentName:"ul"},"For smart contracts, the file name is consistent with the contract name."),(0,i.kt)("li",{parentName:"ul"},"The naming suggestion is to use the hump name uniformly.")),(0,i.kt)("h4",{id:"document-format-for-smart-contracts"},"Document Format For Smart Contracts"),(0,i.kt)("p",null,"File Layout Rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Generally more than 1000 lines of program code is difficult to read, try to avoid the situation that the number of lines of code in a file is too long. Each contract document should contain only a single contract class or contract interface.")),(0,i.kt)("p",null,"Order Of Files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notes on files: All contract source files have a note at the beginning, which lists the copyright statement, file name, function description, and creation and modification records of the file."),(0,i.kt)("li",{parentName:"ul"},"File/Package reference: In the contract source file, the first non-comment line is the compiler version, followed by the reference statement."),(0,i.kt)("li",{parentName:"ul"},"Remarks for class or interface: Comments should be made before class and interface definitions, including descriptions of classes and interfaces, latest modifiers, version numbers, reference links, etc."),(0,i.kt)("li",{parentName:"ul"},"The order of member variables: first the public level, then the protection level, and finally the private level."),(0,i.kt)("li",{parentName:"ul"},"Functions: Functions within a contract should be grouped by module, not by scope or access permissions.")),(0,i.kt)("h4",{id:"suggestions"},"Suggestions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the smart contract, to get the value of the state variable modified by the public, there is no need to write a function of ",(0,i.kt)("inlineCode",{parentName:"li"},"get"),"."),(0,i.kt)("li",{parentName:"ul"},"In a smart contract, if an anonymous function modified by payable is added to the contract, the contract address can accept LAT transfers.")),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);