"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8431],{936:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/wasm-ferris-bff7a4e3a34b707a6324936f31283459.png"},1352:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(8168),a=(t(6540),t(5680));const l={id:"WASM_Contract_2",title:"PlatON WASM\u5408\u7ea6\u5f00\u53d1\uff08\u4e8c\uff09\u2014\u2014 \u8de8\u5408\u7ea6\u8c03\u7528",sidebar_label:"WASM\u8de8\u5408\u7ea6\u8c03\u7528"},s=void 0,o={unversionedId:"WASM_Contract_2",id:"WASM_Contract_2",isDocsHomePage:!1,title:"PlatON WASM\u5408\u7ea6\u5f00\u53d1\uff08\u4e8c\uff09\u2014\u2014 \u8de8\u5408\u7ea6\u8c03\u7528",description:"\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/PlatON WASM\u4e8c-\u8de8\u5408\u7ea6\u8c03\u7528.md",sourceDirName:".",slug:"/WASM_Contract_2",permalink:"/docs/zh-CN/WASM_Contract_2",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/PlatON WASM\u4e8c-\u8de8\u5408\u7ea6\u8c03\u7528.md",version:"current",frontMatter:{id:"WASM_Contract_2",title:"PlatON WASM\u5408\u7ea6\u5f00\u53d1\uff08\u4e8c\uff09\u2014\u2014 \u8de8\u5408\u7ea6\u8c03\u7528",sidebar_label:"WASM\u8de8\u5408\u7ea6\u8c03\u7528"},sidebar:"docs",previous:{title:"WASM\u5408\u7ea6\u5f00\u53d1\u5165\u95e8",permalink:"/docs/zh-CN/WASM_Contract_1"},next:{title:"WASM\u4e8b\u4ef6\u673a\u5236",permalink:"/docs/zh-CN/WASM_Contract_3"}},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]},{value:"\u5408\u7ea6\u5f00\u53d1",id:"\u5408\u7ea6\u5f00\u53d1",children:[{value:"\u7f16\u5199\u5408\u7ea6",id:"\u7f16\u5199\u5408\u7ea6",children:[]},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[]},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",children:[]}]}],i={toc:c},d="wrapper";function p(e){let{components:n,...l}=e;return(0,a.yg)(d,(0,r.A)({},i,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.yg)("p",null,"\u57fa\u4e8ePlatON\u8fdb\u884c\u751f\u6001\u5f00\u53d1\uff0c\u667a\u80fd\u5408\u7ea6\u662f\u5173\u952e\u3002\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u4e3a\u5927\u5bb6\u4ecb\u7ecdPlatON WASM\u667a\u80fd\u5408\u7ea6\u7684\u8de8\u5408\u7ea6\u8c03\u7528\u3002\u672c\u6559\u7a0b\u5c06\u7528\u5230\u6211\u4eec\u5728\u5165\u95e8\u7bc7\u4e2d\uff08\u505a\u6210\u8d85\u94fe\u63a5\uff09\u6559\u7a0b\u5185\u5bb9\uff0c\u5982\u679c\u8fd8\u6ca1\u6709\u5b89\u88c5\u5f00\u53d1\u73af\u5883\uff0c\u6216\u8005\u8fd8\u672a\u8fdb\u884c\u5408\u7ea6\u90e8\u7f72\uff0c\u53ef\u4ee5\u53c2\u89c1\u5165\u95e8\u7bc7\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(936).A})),(0,a.yg)("h2",{id:"\u5408\u7ea6\u5f00\u53d1"},"\u5408\u7ea6\u5f00\u53d1"),(0,a.yg)("h3",{id:"\u7f16\u5199\u5408\u7ea6"},"\u7f16\u5199\u5408\u7ea6"),(0,a.yg)("h4",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.yg)("p",null,"\u5728contracts\u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6Cross.cpp\uff0c\u5408\u7ea6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'#undef NDEBUG\n#include <platon/platon.hpp>\n#include <string>\nusing namespace platon;\n\nCONTRACT Cross : public platon::Contract\n{\npublic:\n    ACTION void init(){}\n\n    ACTION void add_message(std::string a, std::string b, std::string c)\n    {\n        auto address_pair = make_address("lat150nn0efn0de86mw2pcdyhlnmucln89m93sr49h");\n        char param[50];\n        sprintf(param, "[[[\\"&s\\"], \\"&s\\", \\"&s\\"]]", a.c_str(), b.c_str(), c.c_str());\n        auto result = platon_call(address_pair.first, uint32_t(0), uint32_t(0), "add_message", std::string(param));\n        if (!result)\n        {\n            internal::platon_throw("add_message fail");\n        }\n    }\n\n    CONST uint8_t get_message_size()\n    {\n        auto address_pair = make_address("lat150nn0efn0de86mw2pcdyhlnmucln89m93sr49h");\n        if (address_pair.second)\n        {\n            DEBUG("address", address_pair.first.toString())\n        }\n        else\n        {\n            DEBUG("address error")\n        }\n        auto result = platon_call_with_return_value<uint8_t>(address_pair.first,\n                                                uint32_t(0), uint32_t(0), "get_message_size");\n        if (!result.second)\n        {\n            internal::platon_throw("cross call fail");\n        }\n        return result.first;\n    }\n\n    CONST std::string get_message_body(const uint8_t index)\n    {\n        auto address_pair = make_address("lat150nn0efn0de86mw2pcdyhlnmucln89m93sr49h");\n        auto result = platon_call_with_return_value<std::string>(address_pair.first, uint32_t(0), uint32_t(0), "get_message_body", index);\n        if (!result.second)\n        {\n            internal::platon_throw("cross call fail");\n        }\n        return result.first;\n    }\n};\n\nPLATON_DISPATCH(Cross, (init)(add_message)(get_message_size)(get_message_body))\n')),(0,a.yg)("h4",{id:"\u4ee3\u7801\u8bf4\u660e"},"\u4ee3\u7801\u8bf4\u660e"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4ee3\u7801\u4e2d\u6211\u4eec\u7528\u5230\u4e86platon_call\u548cplaton_call_with_return_value\u65b9\u6cd5\uff0c\u5206\u522b\u8868\u793a\u65e0\u8fd4\u56de\u8c03\u7528\u548c\u6709\u8fd4\u56de\u5408\u7ea6\u8c03\u7528\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u66f4\u591a\u7684\u63a5\u53e3\u53ef\u4ee5\u5728~/.config/truffle/compilers/platon-cdt/platon.cdt/include/platon\u76ee\u5f55\u4e2d\u627e\u5230\uff0c\u5982\u5408\u7ea6\u8c03\u7528\u6587\u4ef6\u4e3across_call.hpp\u3002"),(0,a.yg)("li",{parentName:"ul"},"make_address\u586b\u5165\u7684\u5730\u5740\u662fHelloWorld\u6559\u7a0b\u4e2d\u90e8\u7f72\u7684\u5408\u7ea6\u5730\u5740\u3002"),(0,a.yg)("li",{parentName:"ul"},"make_address\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2apair\uff0c\u9700\u8981\u6839\u636esecond\u503c\u5224\u65ad\u5730\u5740\u662f\u5426\u83b7\u53d6\u6210\u529f\u3002"),(0,a.yg)("li",{parentName:"ul"},'DEBUG\u53ef\u4ee5\u7528\u4e8e\u8c03\u8bd5\u8f93\u51fa\uff0c\u53ef\u4ee5\u5728\u8282\u70b9\u65e5\u5fd7\u4e2d\u770b\u5230\u8f93\u51fa\u4fe1\u606f\u3002\n\u9700\u8981\u4fee\u6539"lat150nn0efn0de86mw2pcdyhlnmucln89m93sr49h"\u4e3a\u4e4b\u524d\u90e8\u7f72\u7684HelloWorld\u5408\u7ea6\u5730\u5740')),(0,a.yg)("h4",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,a.yg)("h5",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.yg)("p",null,"\u5b98\u65b9\u76ee\u524d\u53ea\u53d1\u5e03\u4e86alaya\u7248\u672c\u7684wasm\u7f16\u8bd1\u5668\uff0c\u5728\u6d89\u53ca\u5230\u8de8\u5408\u7ea6\u8c03\u7528\u7684\u65f6\u5019\uff0c\u4f1a\u51fa\u73b0\u5730\u5740\u7f16\u7801\u95ee\u9898\uff0c\u56e0\u6b64\u9700\u8981\u624b\u52a8\u7f16\u8bd1\u548c\u5b89\u88c5platon\u7248\u672c\u7684wasm\u7f16\u8bd1\u5668\u3002\n\u6211\u4eec\u5df2\u7ecf\u7f16\u8bd1\u4e86\u6700\u65b0\u7248\u672c\u7684platon\u7248\u672c\u7684wasm\u7f16\u8bd1\u5668\uff0c\u6709\u9700\u8981\u7684\u670b\u53cb\u53ef\u4ee5\u4e0b\u8f7d\u5e76\u89e3\u538b\u5230~/.config/truffle/compilers\u76ee\u5f55\u4e0b\u3002"),(0,a.yg)("h5",{id:"\u6267\u884c\u7f16\u8bd1\u547d\u4ee4"},"\u6267\u884c\u7f16\u8bd1\u547d\u4ee4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"platon-truffle compile\n")),(0,a.yg)("h3",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"platon-truffle deploy --wasm --contract-name Cross\n")),(0,a.yg)("p",null,"\u7f72\u6210\u529f\u540e\uff0c\u5c06\u770b\u5230\u7c7b\u4f3c\u5982\u4e0b\u4fe1\u606f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"receipt:  { blockHash:\n   '0x8602678fc1f9e1934e9505fc291e3021e5eff70513d37156bc9b9b87273cfb69',\n  blockNumber: 3957166,\n  contractAddress: 'lat1ypc40ulq7vqk2kle0wcr7gf2udlgkwpsta5e0d',\n  cumulativeGasUsed: 322472,\n  from: 'lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n',\n  gasUsed: 322472,\n  logs: [],\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: null,\n  transactionHash:\n   '0xf0a04748ca277ec7ceecc2910753bec270f802632d2743843b43cc8030a73bd8',\n  transactionIndex: 0 }\ncontract Cross deployed successfully\n======================\n\n   > transactionHash:     0xf0a04748ca277ec7ceecc2910753bec270f802632d2743843b43cc8030a73bd8\n   > contract address:    lat1ypc40ulq7vqk2kle0wcr7gf2udlgkwpsta5e0d\n   > block number:        3957166\n   > block timestamp:     1619603861743\n   > account:             lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n\n   > balance:             7199474719087690925044\n   > gas limit:           9424776\n   > gas used:            322472\n   > gas price:           0.00000002 LAT\n   > total cost:          0.00644944 LAT\n")),(0,a.yg)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.yg)("h4",{id:"1-\u8fdb\u5165platon-truffle\u63a7\u5236\u53f0"},"1. \u8fdb\u5165platon-truffle\u63a7\u5236\u53f0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"platon-truffle console\n")),(0,a.yg)("p",null,"*\u4ee5\u4e0b\u8c03\u7528\u67e5\u8be2\u5c06\u5728truffle\u63a7\u5236\u53f0\u4e2d\u8fdb\u884c"),(0,a.yg)("h4",{id:"2-\u6784\u5efa\u5408\u7ea6\u5bf9\u8c61"},"2. \u6784\u5efa\u5408\u7ea6\u5bf9\u8c61"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'var abi = [{"constant":true,"input":[],"name":"get_message_size","output":"uint8","type":"Action"},{"constant":false,"input":[],"name":"init","output":"void","type":"Action"},{"constant":false,"input":[{"name":"a","type":"string"},{"name":"b","type":"string"},{"name":"c","type":"string"}],"name":"add_message","output":"void","type":"Action"},{"constant":true,"input":[{"name":"index","type":"uint8"}],"name":"get_message_body","output":"string","type":"Action"}];\n\nvar contractAddr = \'lat1ypc40ulq7vqk2kle0wcr7gf2udlgkwpsta5e0d\';\n \nvar cross = new web3.platon.Contract(abi,contractAddr,{vmType: 1 });\n')),(0,a.yg)("h5",{id:"\u8bf4\u660e"},"\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"abi\u662f\u5408\u7ea6\u63d0\u4f9b\u7ed9\u5916\u90e8\u8c03\u7528\u65f6\u7684\u63a5\u53e3\uff0c\u6bcf\u4e2a\u5408\u7ea6\u5bf9\u5e94\u7684abi\u5728\u7f16\u8bd1\u540e\u7684\u6587\u4ef6\u4e2d\uff0c\u5982\uff1aHelloWorld/build/contracts/Cross.abi.json\u4e2d\u53ef\u4ee5\u627e\u5230"),(0,a.yg)("li",{parentName:"ul"},"contractAddr\u5728\u90e8\u7f72\u5408\u7ea6\u6210\u529f\u540e\u6709\u4e00\u4e2acontract address"),(0,a.yg)("li",{parentName:"ul"},"cross\u5c31\u662f\u6784\u5efa\u51fa\u6765\u4e0e\u94fe\u4e0a\u5408\u7ea6\u4ea4\u4e92\u7684\u5408\u7ea6\u5bf9\u8c61\u62bd\u8c61")),(0,a.yg)("h4",{id:"3-\u8c03\u7528\u5408\u7ea6"},"3. \u8c03\u7528\u5408\u7ea6"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cross.methods.add_message(\"10\", \"11\", \"12\").send({\n    from: 'lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n',gas: 999999\n}).on('receipt', function(receipt) {\n    console.log(receipt);\n}).on('error', console.error);\n")),(0,a.yg)("h5",{id:"\u8c03\u7528\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e"},"\u8c03\u7528\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"cross\u662f\u4e4b\u524d\u6784\u5efa\u7684\u5408\u7ea6\u5bf9\u8c61"),(0,a.yg)("li",{parentName:"ul"},"methods\u56fa\u5b9a\u8bed\u6cd5,\u540e\u9762\u7d27\u8ddf\u5408\u7ea6\u7684\u65b9\u6cd5\u540d"),(0,a.yg)("li",{parentName:"ul"},"add_message\u662f\u6211\u4eecCross\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u67093\u4e2astd::string\u7c7b\u578b\u7684\u5165\u53c2"),(0,a.yg)("li",{parentName:"ul"},"from\u8c03\u7528\u8005\u7684\u94b1\u5305\u5730\u5740"),(0,a.yg)("li",{parentName:"ul"},"gasgas\u503c"),(0,a.yg)("li",{parentName:"ul"},"on\u662f\u76d1\u542c\u5408\u7ea6\u5904\u7406\u7ed3\u679c\u4e8b\u4ef6\uff0c\u6b64\u5904\u5982\u679c\u6210\u529f\u5c06\u6253\u5370\u56de\u6267\uff0c\u5931\u8d25\u8f93\u51fa\u9519\u8bef\u65e5\u5fd7\n\u51fd\u6570\u8c03\u7528\u6210\u529f\uff0c\u5c06\u4f1a\u770b\u5230\u5982\u4e0b\u4fe1\u606f\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"{ blockHash:\n   '0x50fac24f50f871260663997d66f99e7d4e66bd09edc3002cc00d2be8c0021bdc',\n  blockNumber: 3957919,\n  contractAddress: null,\n  cumulativeGasUsed: 137365,\n  from: 'lat1ar0s6re3qpe3rt39523qw4jars6s4sdhak459n',\n  gasUsed: 137365,\n  logsBloom:\n   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',\n  status: true,\n  to: 'lat1ypc40ulq7vqk2kle0wcr7gf2udlgkwpsta5e0d',\n  transactionHash:\n   '0x8196f89cca8161b940b649008211c1cccea40edf0581d5088961c344382d3f31',\n  transactionIndex: 0,\n  events: {} }\n")),(0,a.yg)("h4",{id:"4-\u67e5\u8be2\u5408\u7ea6"},"4. \u67e5\u8be2\u5408\u7ea6"),(0,a.yg)("h5",{id:"get_message_body"},"get_message_body"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cross.methods.get_message_body(0).call() \n")),(0,a.yg)("h5",{id:"\u67e5\u8be2\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e"},"\u67e5\u8be2\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"cross\u662f\u4e4b\u524d\u6784\u5efa\u7684\u5408\u7ea6\u5bf9\u8c61"),(0,a.yg)("li",{parentName:"ul"},"methods\u6307\u5b9a\u5c06\u83b7\u53d6\u5408\u7ea6\u4e2d\u7684\u65b9\u6cd5"),(0,a.yg)("li",{parentName:"ul"},"get_message_body\u662f\u6211\u4eecHelloWorld\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u6709\u4e00\u4e2aint\u7c7b\u578b\u7684\u5165\u53c2\ncall\u6307\u660e\u662f\u67e5\u8be2\u65b9\u6cd5")),(0,a.yg)("h5",{id:"get_message_size"},"get_message_size"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cross.methods.get_message_size().call() \n")),(0,a.yg)("h5",{id:"\u67e5\u8be2\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e-1"},"\u67e5\u8be2\u5408\u7ea6\u547d\u4ee4\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"cross\u662f\u4e4b\u524d\u6784\u5efa\u7684\u5408\u7ea6\u5bf9\u8c61"),(0,a.yg)("li",{parentName:"ul"},"methods\u6307\u5b9a\u5c06\u83b7\u53d6\u5408\u7ea6\u4e2d\u7684\u65b9\u6cd5"),(0,a.yg)("li",{parentName:"ul"},"get_message_size\u662f\u6211\u4eecHelloWorld\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u6ca1\u6709\u53c2\u6570\ncall\u6307\u660e\u662f\u67e5\u8be2\u65b9\u6cd5")),(0,a.yg)("p",null,"\u60f3\u8981\u83b7\u5f97\u66f4\u591a\u5173\u4e8e\u5408\u7ea6\u5f00\u53d1\u7684\u8d44\u6599\uff0c\u8bf7",(0,a.yg)("a",{parentName:"p",href:"https://devdocs.platon.network/docs/zh-CN/WASM_Smart_Contract/"},"\u524d\u5f80\u5b98\u7f51\u6587\u6863"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"\u672c\u6559\u7a0b\u8d21\u732e\u8005 @",(0,a.yg)("a",{parentName:"em",href:"https://github.com/xiyu1984"},"xiyu"))))}p.isMDXComponent=!0},5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||l;return t?r.createElement(m,s(s({ref:n},d),{},{components:t})):r.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);