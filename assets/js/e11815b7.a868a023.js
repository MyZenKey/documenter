"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[6483],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?i.createElement(m,a(a({ref:t},p),{},{components:r})):i.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5783:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],l={sidebar_position:18},s="Verify redirect URLs",c={unversionedId:"portal-user-guide/portal-verify-redirect-urls",id:"portal-user-guide/portal-verify-redirect-urls",isDocsHomePage:!1,title:"Verify redirect URLs",description:"After you finish setting up a client in the ZenKey Developer Portal, the client configuration is in a pending state until the domain control is proven (domain proofing). Afterwards, carriers can provision the client configuration.",source:"@site/docs/portal-user-guide/portal-verify-redirect-urls.md",sourceDirName:"portal-user-guide",slug:"/portal-user-guide/portal-verify-redirect-urls",permalink:"/documenter/docs/portal-user-guide/portal-verify-redirect-urls",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/portal-user-guide/portal-verify-redirect-urls.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Verify Sector URL Domain Control",permalink:"/documenter/docs/portal-user-guide/portal-verify-sector-url-domain-control"},next:{title:"Wait for carriers to provision client",permalink:"/documenter/docs/portal-user-guide/portal-wait-for-carriers-client-provision"}},p=[{value:"Viewing the verification or domain proofing status of URLs",id:"viewing-the-verification-or-domain-proofing-status-of-urls",children:[]},{value:"Steps for verifying URLs",id:"steps-for-verifying-urls",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"verify-redirect-urls"},"Verify redirect URLs"),(0,o.kt)("p",null,"After you finish setting up a client in the ZenKey Developer Portal, the client configuration is in a pending state until the domain control is proven (domain proofing). Afterwards, carriers can provision the client configuration."),(0,o.kt)("p",null,"Domain control must be verified whenever a relevant domain is changed or added. Relevant domains include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sector URI (Project level)"),(0,o.kt)("li",{parentName:"ul"},"Domain URL (Project level)"),(0,o.kt)("li",{parentName:"ul"},"Privacy Policy URL (Project level)"),(0,o.kt)("li",{parentName:"ul"},"Terms of Service Link (Project level)"),(0,o.kt)("li",{parentName:"ul"},"Redirect URLs (Client level)")),(0,o.kt)("p",null,"Redirect URLs support deep links, universal links, and URLs with variables."),(0,o.kt)("p",null,"All URLs must pass verification before the client is able to \u201cLaunch\u201d their client."),(0,o.kt)("p",null,"If a client configuration has multiple relevant domains, all the domains must be verified before the Service Provider can provision the client."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," A developer can use only a Localhost redirect while their client is still in dev_mode."),(0,o.kt)("h2",{id:"viewing-the-verification-or-domain-proofing-status-of-urls"},"Viewing the verification or domain proofing status of URLs"),(0,o.kt)("p",null,"The ZenKey Developer Portal displays the verification or domain proofing status of each relevant redirect domain."),(0,o.kt)("p",null,"In the portal, the ",(0,o.kt)("strong",{parentName:"p"},"Domain Ownership")," page displays verification or domain proofing information for all Projects, including client redirect URLs. The information shows if a link or URL has passed or failed verification, or is pending verification."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Project Review")," section also displays the status of domain proofing.\nIf a link or URL has not been verified or has not passed verification, the page displays 'Not verified' beside the link or URL."),(0,o.kt)("h2",{id:"steps-for-verifying-urls"},"Steps for verifying URLs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Domain Ownership")," page, follow the steps in the ",(0,o.kt)("strong",{parentName:"li"},"Set up domain verification")," section. Note: The content of the downloaded JSON file must match the content of the JSON file you host at the Sector_URI. Otherwise, the Developer Portal displays the URLs that did not pass verification."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Verify my domains"),"."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"Domain Ownership")," page displays a red warning image beside each ULR that could not be verified. Ensure that you correctly uploaded the JSON file to your Sector URI."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Finish"),". To continue, you must verify all project and client domains.")),(0,o.kt)("p",null,"You can see the status of redirect URI proofing in the \u201cClients\u201d section, in the \u201cDomain ownership\u201d column. If you expand any of the clients in this section, a badge appears next to the redirect URI. The badge shows the unverified or verified status of the URI."))}d.isMDXComponent=!0}}]);