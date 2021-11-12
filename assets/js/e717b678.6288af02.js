"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[6713],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return g}});var n=t(7294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),g=s,m=p["".concat(c,".").concat(g)]||p[g]||l[g]||i;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function g(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=p;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2929:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=t(7462),s=t(3366),i=(t(7294),t(3905)),a=["components"],o={},c="Registering Trusted Devices",u={unversionedId:"best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-register-trusted-devices",id:"best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-register-trusted-devices",isDocsHomePage:!1,title:"Registering Trusted Devices",description:"Trusted devices/browsers can be registered using secondary flow.",source:"@site/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-register-trusted-devices.md",sourceDirName:"best-practices/best-practices-managing-and-enrolling-users",slug:"/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-register-trusted-devices",permalink:"/documenter/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-register-trusted-devices",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-register-trusted-devices.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Managing Tokens",permalink:"/documenter/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-managing-tokens"},next:{title:"Auth Code Flow and Carrier Discovery",permalink:"/documenter/docs/best-practices/best-practices-integrating-apps/integrating-apps-auth-code-flow-and-carrier-discovery"}},d=[{value:"Register Trusted Device/Browsers through Secondary Flow",id:"register-trusted-devicebrowsers-through-secondary-flow",children:[]}],l={toc:d};function p(e){var r=e.components,o=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"registering-trusted-devices"},"Registering Trusted Devices"),(0,i.kt)("p",null,"Trusted devices/browsers can be registered using secondary flow."),(0,i.kt)("h2",{id:"register-trusted-devicebrowsers-through-secondary-flow"},"Register Trusted Device/Browsers through Secondary Flow"),(0,i.kt)("p",null,"Users can also use ZenKey to authenticate on devices other than a primary device, such as a tablet. These secondary devices rely on users to complete the authentication process. Users pressing the ZenKey button on secondary devices see a visual and numeric code as a part of the secondary device authorization process. This code allows users to associate that secondary device with their primary device."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SecondaryDeviceHighLevelFlow",src:t(4238).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The SDK presents the carrier Discovery UI. If users authorize secondary devices from an app on a desktop browser, a web view will be used for this step."),(0,i.kt)("li",{parentName:"ol"},"Users then scan the visual codes or enter the numeric codes into the ZenKey app on their primary device."),(0,i.kt)("li",{parentName:"ol"},"Once users approve the request in the ZenKey app on their primary devices, the carrier Discovery UI returns a login_hint_token to your app\u2019s Redirect URI. This login_hint_token is only returned to a secondary device for use during the authentication request."),(0,i.kt)("li",{parentName:"ol"},"To perform SIM and user authentication, your app makes an authorization code request to the appropriate carrier and receives the auth code in its Redirect URI."),(0,i.kt)("li",{parentName:"ol"},"If users consent to share information, your backend server issues a token request for user info and other resources.")))}p.isMDXComponent=!0},4238:function(e,r,t){r.Z=t.p+"assets/images/c8ff57e-SecondaryDeviceHighLevelFlow-09006ab9ed12f5a73c89fcc3023257cd.jpeg"}}]);