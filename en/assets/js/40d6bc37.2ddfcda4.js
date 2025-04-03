"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1230],{2981:(e,t,r)=>{r.d(t,{A:()=>p});var a=r(8168),l=r(6540),n=r(53),o=r(4676),s=r(3155),c=r(4586),i=r(6025);const u="footerLogoLink_94kH";var m=r(1101);function f(e){let{to:t,href:r,label:n,prependBaseUrlToHref:s,...c}=e;const u=(0,i.A)(t),m=(0,i.A)(r,{forcePrependBaseUrl:!0});return l.createElement(o.A,(0,a.A)({className:"footer__link-item"},r?{href:s?m:r}:{to:u},c),n)}const h=e=>{let{sources:t,alt:r}=e;return l.createElement(m.A,{className:"footer__logo",alt:r,sources:t})};let d=!1;function g(){return(0,l.useEffect)((()=>{if(!d){let e=document.createElement("script");e.src="https://buttons.github.io/buttons.js",document.body.appendChild(e),d=!0}}),[]),l.createElement("div",{className:"gitstar"},l.createElement("a",{className:"github-button",href:"https://github.com/PlatONnetwork/PlatON-Go","data-color-scheme":"no-preference: light; light: light; dark: light;","data-icon":"octicon-star","data-size":"small","data-show-count":"true","aria-label":"Star PlatONnetwork/PlatON-Go on GitHub"},"Star"))}const p=function(){const{footer:e}=(0,s.pN)(),{copyright:t,links:r=[],logo:a={}}=e||{},{i18n:m}=(0,c.A)(),d={light:(0,i.A)(a.src),dark:(0,i.A)(a.srcDark||a.src)};return e?("en"!==m.currentLocale&&r.map((e=>{e.items.map((e=>{e.hrefzh&&(e.href=e.hrefzh)}))})),l.createElement("footer",{className:(0,n.A)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map(((e,t)=>l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):e.img?l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement("a",{href:e.href,target:"_blank",className:"footer-logo-home",rel:"noreferrer noopener"},l.createElement("img",{src:(0,i.A)(e.img),width:"66",height:"58"}))):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(f,e))))):null))),l.createElement(g,null)),(a||t)&&l.createElement("div",{className:"footer__bottom text--center"},a&&(a.src||a.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},a.href?l.createElement(o.A,{href:a.href,className:u},l.createElement(h,{alt:a.alt,sources:d})):l.createElement(h,{alt:a.alt,sources:d})),t?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null)))):null}},5483:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(8168),l=r(6540),n=r(961),o=r(4586),s=r(6347),c=(r(6025),r(4676)),i=r(2602),u=r(802),m=r(2525),f=r(4142),h=r(3707),d=r(4798);let g=null;function p(e){let{hit:t,children:r}=e;return l.createElement(c.A,{to:t.url,autoAddBaseUrl:!1,target:"_self"},r)}function E(e){let{state:t,onClose:r}=e;const{generateSearchPageLink:a}=(0,u.A)();return l.createElement(c.A,{to:a(t.query),onClick:r},"See all ",t.context.nbHits," results")}function b(e){let{contextualSearch:t,...c}=e;const{siteMetadata:u}=(0,o.A)(),b=(0,h.A)(),A=c.searchParameters?.facetFilters??[],k=t?[...b,...A]:A,_={...c.searchParameters,facetFilters:k},N=((0,s.W6)(),(0,l.useRef)(null)),y=(0,l.useRef)(null),[C,v]=(0,l.useState)(!1),[w,S]=(0,l.useState)(null),P=(0,l.useCallback)((()=>g?Promise.resolve():Promise.all([r.e(5343).then(r.bind(r,5343)),Promise.all([r.e(1869),r.e(8913)]).then(r.bind(r,8913)),Promise.all([r.e(1869),r.e(3760)]).then(r.bind(r,3760))]).then((e=>{let[{DocSearchModal:t}]=e;g=t}))),[]),$=(0,l.useCallback)((()=>{P().then((()=>{N.current=document.createElement("div"),document.body.insertBefore(N.current,document.body.firstChild),v(!0)}))}),[P,v]),L=(0,l.useCallback)((()=>{v(!1),N.current.remove()}),[v]),B=(0,l.useCallback)((e=>{P().then((()=>{v(!0),S(e.key)}))}),[P,v,S]),I=(0,l.useRef)({navigate(e){let{itemUrl:t}=e;window.location.assign(t)}}).current,O=(0,l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:`${window.location.origin}${t.pathname}${t.hash}`}})))).current,T=(0,l.useMemo)((()=>e=>l.createElement(E,(0,a.A)({},e,{onClose:L}))),[L]),U=(0,l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e)),[u.docusaurusVersion]);(0,m.E)({isOpen:C,onOpen:$,onClose:L,onInput:B,searchButtonRef:y});const H=(0,d.T)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(i.A,null,l.createElement("link",{rel:"preconnect",href:`https://${c.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),l.createElement(f.B,{onTouchStart:P,onFocus:P,onMouseOver:P,onClick:$,ref:y,translations:{buttonText:H,buttonAriaLabel:H}}),C&&(0,n.createPortal)(l.createElement(g,(0,a.A)({onClose:L,initialScrollY:window.scrollY,initialQuery:w,navigator:I,transformItems:O,hitComponent:p,resultsFooterComponent:T,transformSearchClient:U},c,{searchParameters:_})),N.current))}const A=function(){const{siteConfig:e}=(0,o.A)();return l.createElement(b,e.themeConfig.algolia)}},7551:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(8168),l=r(6540),n=r(3031),o=(r(7601),r(4586)),s=r(6347);const c=function(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:r,currentLocale:a}}=(0,o.A)(),{pathname:l}=(0,s.zy)(),n=a===r?e:e.replace(`/${a}/`,`/${r}/`),c=l.replace(e,"");return{createUrl:function(e){let{locale:a,fullyQualified:l}=e;return`${l?t:""}${function(e){return e===r?`${n}`:`${n.replace(`/${r}/`,`/${e}/`)}`}(a)}${c}`}}};function i(e){let{mobile:t,dropdownItemsBefore:r,dropdownItemsAfter:s,...i}=e;const{i18n:{currentLocale:u,locales:m,localeConfigs:f}}=(0,o.A)(),h=c();function d(e){return f[e].label}const g=[...r,...m.map((e=>{const t=`pathname://${h.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:d(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...s],p=t?"Languages":d(u);return l.createElement(n.A,(0,a.A)({},i,{href:"#",mobile:t,label:l.createElement("span",null,p),items:g}))}}}]);