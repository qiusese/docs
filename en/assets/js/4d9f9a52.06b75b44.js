"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8249],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=r,g=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=y;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4189:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=t(8168),r=(t(6540),t(5680));const o={id:"PRC20_contract",title:"PRC-20",sidebar_label:"PRC-20"},l=void 0,s={unversionedId:"PRC20_contract",id:"PRC20_contract",isDocsHomePage:!1,title:"PRC-20",description:"PRC-20 Contract",source:"@site/../docs/prc-20.md",sourceDirName:".",slug:"/PRC20_contract",permalink:"/docs/en/PRC20_contract",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/prc-20.md",version:"current",frontMatter:{id:"PRC20_contract",title:"PRC-20",sidebar_label:"PRC-20"},sidebar:"docs",previous:{title:"Samurai API",permalink:"/docs/en/Samurai_API"},next:{title:"PRC-721",permalink:"/docs/en/PRC721_contract"}},i=[{value:"PRC-20 Contract",id:"prc-20-contract",children:[{value:"Standards",id:"standards",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"View",id:"view",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Invoking functions",id:"invoking-functions",children:[]}]}],c={toc:i},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"prc-20-contract"},"PRC-20 Contract"),(0,r.yg)("p",null,"PRC-20 is a set of standards for implementing token APIs on PlatON through smart contracts. It provides functions including interfaces for token transfers, querying token balances, and the total supply of tokens available on the network, and is fully compatible with ",(0,r.yg)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20"),"."),(0,r.yg)("h3",{id:"standards"},"Standards"),(0,r.yg)("p",null,"The PRC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes each Token be exactly the same (in type and value) of another Token. For example, an PRC-20 Token acts just like the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.\nIf a Smart Contract implements the following methods and events it can be called an PRC-20 Token Contract and, once deployed, it will be responsible to keep track of the created tokens on PlatON."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-solidity"},"contract PRC20 {\n\n    //required\n    function totalSupply() constant returns (uint theTotalSupply);\n    function balanceOf(address _owner) constant returns (uint balance);\n    function transfer(address _to, uint _value) returns (bool success);\n    function transferFrom(address _from, address _to, uint _value) returns (bool success);\n    function approve(address _spender, uint _value) returns (bool success);\n    function allowance(address _owner, address _spender) constant returns (uint remaining);\n    \n    //optional\n    function name() public view returns (string);\n    function symbol() public view returns (string);\n    function decimals() public view returns (uint8);\n    \n    //events\n    event Transfer(address indexed _from, address indexed _to, uint _value);\n    event Approval(address indexed _owner, address indexed _spender, uint _value);\n}\n")),(0,r.yg)("h4",{id:"required-apis"},"Required APIs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"totalSupply")),(0,r.yg)("p",null,"Returns the total token supply."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"balanceOf")),(0,r.yg)("p",null,"Returns the account balance of another account with address _owner."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"transfer")),(0,r.yg)("p",null,"Transfers _value amount of tokens to address _to, and MUST fire the Transfer event. The function SHOULD throw if the message caller's account balance does not have enough tokens to spend."),(0,r.yg)("p",null,"Note Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"approve")),(0,r.yg)("p",null,"Allows _spender to withdraw from your account multiple times, up to the _value amount. If this function is called again it overwrites the current allowance with _value.."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"transferFrom")),(0,r.yg)("p",null,"Transfers _value amount of tokens from address _from to address _to, and MUST fire the Transfer event."),(0,r.yg)("p",null,"The transferFrom method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf. This can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies. The function SHOULD throw unless the _from account has deliberately authorized the sender of the message via some mechanism."),(0,r.yg)("p",null,"Note Transfers of 0 values MUST be treated as normal transfers and fire the Transfer event."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"allowance")),(0,r.yg)("p",null,"Returns the amount which _spender is still allowed to withdraw from _owner."),(0,r.yg)("h4",{id:"optional-apis"},"Optional APIs"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"name")),(0,r.yg)("p",null,'Returns the name of the token - e.g. "MyToken".'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"symbol")),(0,r.yg)("p",null,'Returns the symbol of the token. E.g. "HAHA".'),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"decimals")),(0,r.yg)("p",null,"Returns the number of decimals the token uses - e.g. 8, means to divide the token amount by 100000000 to get its user representation."),(0,r.yg)("h4",{id:"events"},"Events"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Transfer")),(0,r.yg)("p",null,"MUST trigger when tokens are transferred, including zero value transfers."),(0,r.yg)("p",null,"A token contract which creates new tokens SHOULD trigger a Transfer event with the _from address set to 0x0 when tokens are created."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Approval")),(0,r.yg)("p",null,"MUST trigger on any successful call to approve(address _spender, uint256 _value)."),(0,r.yg)("h3",{id:"implementation"},"Implementation"),(0,r.yg)("p",null,"Refer ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/tree/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20"},"OpenZeppelin implementation"),"."),(0,r.yg)("h3",{id:"view"},"View"),(0,r.yg)("p",null,"It can be viewed via PlatON ",(0,r.yg)("a",{parentName:"p",href:"https://scan.platon.network/tokens/tokensTranfer/prc20"},"browser")," and also via ",(0,r.yg)("a",{parentName:"p",href:"/docs/en/ATON-user-manual/"},"ATON")," to view the PRC-20 contract transactions."),(0,r.yg)("h3",{id:"deploy"},"Deploy"),(0,r.yg)("p",null,"please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/en/Solidity_Dev_Manual#introduction"},"Solidity Contracts Getting Started Manual")),(0,r.yg)("h3",{id:"invoking-functions"},"Invoking functions"),(0,r.yg)("p",null,"Using python as an example:"),(0,r.yg)("h4",{id:"installing-dependencies"},"Installing Dependencies"),(0,r.yg)("p",null,"Use the following command to install the PlatON python library,Python version 3.7.5+ is recommended:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install client-sdk-python\n")),(0,r.yg)("p",null,"During the installation process, some dependency packages will require c++14 compilation, please download ",(0,r.yg)("a",{parentName:"p",href:"http://go.microsoft.com/fwlink/?LinkId=691126"},"cppbuildtools")," after you see the relevant prompt, use the default value to install, and then re-execute the pip install command."),(0,r.yg)("h4",{id:"instantiation"},"Instantiation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from client_sdk_python import Web3, HTTPProvider\n\nrpc, chain_id, hrp = 'http://127.0.0.1:6789', 210425, 'lat'\nw3 = Web3(HTTPProvider(rpc), chain_id=chain_id, hrp_type=hrp)\nabi = []            # ABI\nprc20 = w3.eth.contract(address='contract address', abi=abi)\n# View all functions and events of the contract\nprint([func for func in prc20.functions])\nprint([event for event in prc20.events])\n")),(0,r.yg)("h4",{id:"query-the-total-number-of-tokens-issued"},"Query the total number of tokens issued"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"prc20.functions.totalSupply().call()\n")),(0,r.yg)("h4",{id:"check-the-token-balance-of-your-account"},"Check the token balance of your account"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"prc20.functions.balanceOf('you address').call()\n")),(0,r.yg)("h4",{id:"transfer"},"Transfer"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"tx = {\n    'chainId': w3.chain_id,\n    'nonce': w3.eth.getTransactionCount('your address'),\n    'gas': 4012388,\n    'value': 0,\n    'gasPrice': 1000000000,\n}\ntxn = prc20.functions.transfer(to='to address', value=1 * 10 ** 18).buildTransaction(tx)\nsigned_txn = w3.eth.account.signTransaction(txn, private_key='your private key')\ntx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction).hex()\nreceipt = w3.eth.waitForTransactionReceipt(tx_hash)\n")),(0,r.yg)("h4",{id:"get-contract-events"},"Get contract events"),(0,r.yg)("p",null,"As an example of transfer transaction events, other events can be obtained in a similar way."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"events = prc20.events.Transfer().processReceipt(receipt)\n")))}p.isMDXComponent=!0}}]);