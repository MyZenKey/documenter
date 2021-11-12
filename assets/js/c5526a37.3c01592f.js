"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[4661],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(t),f=o,m=l["".concat(c,".").concat(f)]||l[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},3196:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:22},c="Access Token Response",d={unversionedId:"android/integration-guide/android-access-token-response",id:"android/integration-guide/android-access-token-response",isDocsHomePage:!1,title:"Access Token Response",description:"In addition to an access token, the token response returns an ID Token which includes the sub \u2014 an identifier that pairs a single user with a particular client_id. After receiving the sub, this ID gets stired in your user database for reference. Do not transmit this sub to your client app.",source:"@site/docs/android/integration-guide/android-access-token-response.md",sourceDirName:"android/integration-guide",slug:"/android/integration-guide/android-access-token-response",permalink:"/documenter/docs/android/integration-guide/android-access-token-response",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/android/integration-guide/android-access-token-response.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"Configuring Access Token Requests for Android",permalink:"/documenter/docs/android/integration-guide/android-configure-access-token-requests"},next:{title:"Decoding the ID Token",permalink:"/documenter/docs/android/integration-guide/android-decoding-the-id-token"}},u=[],p={toc:u};function l(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"access-token-response"},"Access Token Response"),(0,i.kt)("p",null,"In addition to an access token, the token response returns an ID Token which includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," \u2014 an identifier that pairs a single user with a particular ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),". After receiving the ",(0,i.kt)("inlineCode",{parentName:"p"},"sub"),", this ID gets stired in your user database for reference. Do not transmit this ",(0,i.kt)("inlineCode",{parentName:"p"},"sub")," to your client app."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample Token Response:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-type: application/json \nCache-control: no-cache\n\n{\n    "access_token": "....",\n    "token_type": "Bearer",\n    "refresh_token": "8xLOxBtZp8",\n    "expires_in": 3600,\n    "correlation_id\u201d:\u201dxxxxx\u201d,\n    "id_token": "..."\n}\n')))}l.isMDXComponent=!0}}]);