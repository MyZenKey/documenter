"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[936],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return l}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),l=o,m=f["".concat(u,".").concat(l)]||f[l]||d[l]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2906:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:12},u="Record the Sub as the Primary Identifier of the ZenKey User",c={unversionedId:"web/web-record-the-sub-as-the-primary-identifier",id:"web/web-record-the-sub-as-the-primary-identifier",isDocsHomePage:!1,title:"Record the Sub as the Primary Identifier of the ZenKey User",description:"Because phone numbers and emails change, record the sub as the primary identifier of a ZenKey user in a database where you store information about your users.",source:"@site/docs/web/web-record-the-sub-as-the-primary-identifier.md",sourceDirName:"web",slug:"/web/web-record-the-sub-as-the-primary-identifier",permalink:"/documenter/docs/web/web-record-the-sub-as-the-primary-identifier",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/web/web-record-the-sub-as-the-primary-identifier.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Requesting User Information",permalink:"/documenter/docs/web/web-requesting-user-information"},next:{title:"Add the ZenKey button on the Web",permalink:"/documenter/docs/web/web-add-the-zenkey-button"}},p=[],d={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"record-the-sub-as-the-primary-identifier-of-the-zenkey-user"},"Record the Sub as the Primary Identifier of the ZenKey User"),(0,i.kt)("p",null,"Because phone numbers and emails change, record the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," as the primary identifier of a ZenKey user in a database where you store information about your users. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Sub ID may contain numbers, letters, and other characters")),(0,i.kt)("p",null,"Depending on whether the user registers or signs in, create or fetch their user record from your data store, respectively. You may enrich this user record with information received from the User Info response."),(0,i.kt)("p",null,"Once completing the ZenKey authentication flow, return a session using the session management strategy you're already using for your application. Discard the tokens used throughout this flow."))}f.isMDXComponent=!0}}]);