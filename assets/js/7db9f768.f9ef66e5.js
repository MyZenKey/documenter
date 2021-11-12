"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[9236],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={},s="MODRNA-based Discovery Flow",d={unversionedId:"additional-topics/discovery-flows/modrna-based-discovery-flow",id:"additional-topics/discovery-flows/modrna-based-discovery-flow",isDocsHomePage:!1,title:"MODRNA-based Discovery Flow",description:"This discovery process for ZenKey uses OpenID Connect MODRNA (Mobile Operator Discovery, Registration & AutheNticAtion) extensions. More information on MODRNA can be found here.",source:"@site/docs/additional-topics/discovery-flows/modrna-based-discovery-flow.md",sourceDirName:"additional-topics/discovery-flows",slug:"/additional-topics/discovery-flows/modrna-based-discovery-flow",permalink:"/documenter/docs/additional-topics/discovery-flows/modrna-based-discovery-flow",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/additional-topics/discovery-flows/modrna-based-discovery-flow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure project links",permalink:"/documenter/docs/portal-user-guide/portal-project-links"},next:{title:"Optimized Discovery Flow",permalink:"/documenter/docs/additional-topics/discovery-flows/optimized-discovery-flow"}},c=[{value:"How It Works",id:"how-it-works",children:[{value:"Carrier Discovery UI",id:"carrier-discovery-ui",children:[]},{value:"OIDC Discovery Issuer",id:"oidc-discovery-issuer",children:[]},{value:"Request Auth Code from <code>authorization_endpoint</code>",id:"request-auth-code-from-authorization_endpoint",children:[]}]}],p={toc:c};function u(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modrna-based-discovery-flow"},"MODRNA-based Discovery Flow"),(0,o.kt)("p",null,"This discovery process for ZenKey uses OpenID Connect MODRNA (",(0,o.kt)("strong",{parentName:"p"},"M"),"obile ",(0,o.kt)("strong",{parentName:"p"},"O"),"perator ",(0,o.kt)("strong",{parentName:"p"},"D"),"iscovery, ",(0,o.kt)("strong",{parentName:"p"},"R"),"egistration & Authe",(0,o.kt)("strong",{parentName:"p"},"N"),"tic",(0,o.kt)("strong",{parentName:"p"},"A"),"tion) extensions. More information on MODRNA can be found ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/wg/mobile/"},"here"),"."),(0,o.kt)("p",null,"In this model, Service Providers make two distinct requests. The first is for discovery and the second is to the identified carrier for the authorization code."),(0,o.kt)("p",null,"The following is a high-level sequence diagram illustrating this flow. ",(0,o.kt)("inlineCode",{parentName:"p"},"service_provider")," refers to the Service Provider."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Discovery flow",src:n(5069).Z})),(0,o.kt)("h2",{id:"how-it-works"},"How It Works"),(0,o.kt)("p",null,"This model has two discovery endpoints:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A user experience endpoint using a browser client (or native client that can open a browser tab)."),(0,o.kt)("li",{parentName:"ol"},"An API endpoint that returns the correct carrier's OIDC configuration. ")),(0,o.kt)("h3",{id:"carrier-discovery-ui"},"Carrier Discovery UI"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://discoveryui.myzenkey.com/ui/discovery-ui")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redirecting to this endpoint navigates to choosing your carrier UI\n-Required url parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri"),"\n-Optional url parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"sdk_version")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"prompt")),(0,o.kt)("li",{parentName:"ul"},"When the user selects their carrier, they're redirected to their ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri"),"\n-The response has url parameters ",(0,o.kt)("inlineCode",{parentName:"li"},"mccmnc"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"state")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"login_hint_token")," (for secondary devices)")),(0,o.kt)("h3",{id:"oidc-discovery-issuer"},"OIDC Discovery Issuer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://discoveryissuer.myzenkey.com/.well-known/openid_configuration")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A GET request to this endpoint returns the OpenID configuration document\n-Required url parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"mccmnc"),"\n-Optional url parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"sub"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"phone_number")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"ip")),(0,o.kt)("li",{parentName:"ul"},"The response is JSON with OpenID configurations including ",(0,o.kt)("inlineCode",{parentName:"li"},"issuer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"authorization_endpoint"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"token_endpoint")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"user_endpoint"))),(0,o.kt)("h3",{id:"request-auth-code-from-authorization_endpoint"},"Request Auth Code from ",(0,o.kt)("inlineCode",{parentName:"h3"},"authorization_endpoint")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Redirecting to this endpoint navigates to the carrier specific ",(0,o.kt)("inlineCode",{parentName:"li"},"authorization_endpoint"),"\n-The required url parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"client_id"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"response_type"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"scope")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"state"),"\n-The ",(0,o.kt)("inlineCode",{parentName:"li"},"response_type"),"=code for ZenKey purposes\n-The optional url parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"login_hint_token")," (for secondary devices)"),(0,o.kt)("li",{parentName:"ul"},"When authorization request is received the user is redirected to their ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri"))),(0,o.kt)("p",null,"The response has url parameters ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mccmnc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"correlation_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"error_description"),"."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"/documenter/docs/additional-topics/discovery-flows/optimized-discovery-flow"},"Optimized Discovery Flow"),"."))}u.isMDXComponent=!0},5069:function(e,t,n){t.Z=n.p+"assets/images/a5984fb-modrna-4bfe13d55dcbf44eacfb4c701451dca9.png"}}]);