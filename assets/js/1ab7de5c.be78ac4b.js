"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[1419],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2936:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={},l="Optimized Discovery Flow",c={unversionedId:"additional-topics/discovery-flows/optimized-discovery-flow",id:"additional-topics/discovery-flows/optimized-discovery-flow",isDocsHomePage:!1,title:"Optimized Discovery Flow",description:"To support Service Providers looking to reuse existing OpenID connect logic and code, ZenKey created a new optimized discovery endpoint. This endpoint receives the full OIDC request and once discovery is complete, it immediately redirects the request to the correct carrier.",source:"@site/docs/additional-topics/discovery-flows/optimized-discovery-flow.md",sourceDirName:"additional-topics/discovery-flows",slug:"/additional-topics/discovery-flows/optimized-discovery-flow",permalink:"/documenter/docs/additional-topics/discovery-flows/optimized-discovery-flow",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/additional-topics/discovery-flows/optimized-discovery-flow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MODRNA-based Discovery Flow",permalink:"/documenter/docs/additional-topics/discovery-flows/modrna-based-discovery-flow"},next:{title:"Consenting to share user information",permalink:"/documenter/docs/additional-topics/consenting-to-share-user-information"}},d=[{value:"Implications of the ZenKey Auth Endpoint",id:"implications-of-the-zenkey-auth-endpoint",children:[]},{value:"Steps for the New ZenKey Auth Endpoint",id:"steps-for-the-new-zenkey-auth-endpoint",children:[]},{value:"Requests After New Discovery Flow",id:"requests-after-new-discovery-flow",children:[]}],p={toc:d};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"optimized-discovery-flow"},"Optimized Discovery Flow"),(0,o.kt)("p",null,"To support Service Providers looking to reuse existing OpenID connect logic and code, ZenKey created a new optimized discovery endpoint. This endpoint receives the full OIDC request and once discovery is complete, it immediately redirects the request to the correct carrier. "),(0,o.kt)("p",null,"The following is a high-level sequence diagram illustrating this flow:\n",(0,o.kt)("img",{parentName:"p",src:"https://files.readme.io/1a287ad-optimizeddiscovery.png",alt:"Discovery flow"})),(0,o.kt)("h3",{id:"implications-of-the-zenkey-auth-endpoint"},"Implications of the ZenKey Auth Endpoint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service Providers make three high-level requests (authcode request, token request, and userinfo request)."),(0,o.kt)("li",{parentName:"ul"},"While ZenKey does support flows similar to OIDC CIBA with server-initiated requests, ZenKey does not support OIDC implicit flows."),(0,o.kt)("li",{parentName:"ul"},"Service Providers must see the MCCMNC that accompanies the authcode. This MCCMNC informs Service Providers which carrier services the subscriber. That informs the Service Provider which token and userinfo endpoints to use.\n-Since token and userinfo requests contain user identifiable data in the responses, they are not visible to the central ZenKey service. ")),(0,o.kt)("h3",{id:"steps-for-the-new-zenkey-auth-endpoint"},"Steps for the New ZenKey Auth Endpoint"),(0,o.kt)("p",null,"This endpoint (",(0,o.kt)("inlineCode",{parentName:"p"},"https://auth.myzenkey.com/v1/auth"),") is not defined in an OpenID configuration file as the configuration files contain the ",(0,o.kt)("inlineCode",{parentName:"p"},"authentication_endpoint")," for the correct carrier of the subscriber."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This endpoint URI may change.")),(0,o.kt)("p",null,"The Service Provider solution must be defined with this variable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GET request to this endpoint redirects to the Carrier Discovery UI.\n-Required url parameters include all the standard OIDC attributes that a Service Provider defines (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_uri"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"scope"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),").\n-Optional url parameters include ",(0,o.kt)("inlineCode",{parentName:"p"},"acr_values"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"prompt"),".\n-Any additional parameters provided are automatically forwarded to the carrier\u2019s authorization endpoint.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ZenKey may cache OIDC request parameters while the discovery process steps are being completed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Discovery UI determines the correct carrier for the subscriber.\n-The optimized discovery service substitutes its own ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," so it can handle the redirect response, but the state variable is the original value when the request is sent to the carrier.\n-The discovery ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_url")," may also be replaced with a temporary value, but will be the correct Service Provider redirect when the request is sent to the carrier.\n-The discovery service response includes a ",(0,o.kt)("inlineCode",{parentName:"p"},"login_hint_token")," when using a secondary device.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After discovery is complete, users' \u201cuser agent\u201d (browser) redirects to the correct carrier with any needed ",(0,o.kt)("inlineCode",{parentName:"p"},"login_hint_token")," added to the request. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After the request is completed on the user\u2019s primary device, the ",(0,o.kt)("inlineCode",{parentName:"p"},"redirect_uri")," opens in the user agent (browser).\n-Responses contain url parameters including ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mccmnc"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"correlation_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),",  and ",(0,o.kt)("inlineCode",{parentName:"p"},"error_description")," as defined in the current auth request response."))),(0,o.kt)("h3",{id:"requests-after-new-discovery-flow"},"Requests After New Discovery Flow"),(0,o.kt)("p",null,"Once the new discovery flow is complete, Service Providers make calls to the carrier Token and UserInfo endpoints:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Token Request to token_endpoint")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This request occurs on the client-server because it requires an authorization header that includes the client secret."),(0,o.kt)("li",{parentName:"ul"},"The post request from client-server to this endpoint submits a form.\n-Required form parameters include ",(0,o.kt)("inlineCode",{parentName:"li"},"token_url"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"grant_type"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"code"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"redirect_uri")),(0,o.kt)("li",{parentName:"ul"},"The response is JSON with ",(0,o.kt)("inlineCode",{parentName:"li"},"access_token"),",  ",(0,o.kt)("inlineCode",{parentName:"li"},"id_token"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"refresh_token"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"correlation_id"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Request user info from ",(0,o.kt)("inlineCode",{parentName:"li"},"user_endpoint"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This request occurs on the client-server because user info should be transferred safely.\n-The get request from the client-server to this endpoint containing the auth header.\n-This requires the access token in the authorization header and key binding signature in the x-authorization header."),(0,o.kt)("li",{parentName:"ul"},"This request returns JSON with user info.")),(0,o.kt)("p",null,"If you're interested in the MODRNA-Based Discovery Flow you can view documentation ",(0,o.kt)("a",{parentName:"p",href:"/documenter/docs/additional-topics/discovery-flows/modrna-based-discovery-flow"},"here"),'."'))}u.isMDXComponent=!0}}]);