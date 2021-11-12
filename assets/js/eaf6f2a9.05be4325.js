"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[1178],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,f=d["".concat(c,".").concat(g)]||d[g]||l[g]||a;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4212:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],p={title:"Carrier Apps",slug:"integrating-apps-carrier-apps",hidden:!1,createdAt:"2020-05-08T20:43:09.024Z",updatedAt:"2021-07-08T17:03:22.235Z"},c=void 0,s={unversionedId:"best-practices/best-practices-integrating-apps/integrating-apps-carrier-apps",id:"best-practices/best-practices-integrating-apps/integrating-apps-carrier-apps",isDocsHomePage:!1,title:"Carrier Apps",description:"Each carrier has its own app to which ZenKey must link. Users must download their carrier's ZenKey app from the App Store or Google Play in order to enroll and add your application as a service.",source:"@site/docs/best-practices/best-practices-integrating-apps/integrating-apps-carrier-apps.md",sourceDirName:"best-practices/best-practices-integrating-apps",slug:"/best-practices/best-practices-integrating-apps/integrating-apps-carrier-apps",permalink:"/documenter/docs/best-practices/best-practices-integrating-apps/integrating-apps-carrier-apps",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/best-practices/best-practices-integrating-apps/integrating-apps-carrier-apps.md",tags:[],version:"current",frontMatter:{title:"Carrier Apps",slug:"integrating-apps-carrier-apps",hidden:!1,createdAt:"2020-05-08T20:43:09.024Z",updatedAt:"2021-07-08T17:03:22.235Z"},sidebar:"tutorialSidebar",previous:{title:"Building an App",permalink:"/documenter/docs/best-practices/best-practices-integrating-apps/integrating-apps-building-an-app"},next:{title:"Test Your App",permalink:"/documenter/docs/best-practices/best-practices-integrating-apps/integrating-apps-test-your-app"}},u=[{value:"Bring Your Own Device (BYOD)",id:"bring-your-own-device-byod",children:[]}],l={toc:u};function d(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each carrier has its own app to which ZenKey must link. Users must download their carrier's ZenKey app from the App Store or Google Play in order to enroll and add your application as a service."),(0,a.kt)("h2",{id:"bring-your-own-device-byod"},"Bring Your Own Device (BYOD)"),(0,a.kt)("p",null,"Bring your own device (BYOD) refers to any phone customers purchased from a private vendor, but for which the customers' carrier supplies the wireless plan. In order for BYOD to work, devices must first be unlocked (i.e., not tied to a specific phone carrier)."),(0,a.kt)("p",null,"ZenKey supports BYOD for the majority of participating carriers. However, in rare cases, a carrier may not support BYOD for certain devices and/or mobile operating systems."),(0,a.kt)("p",null,"For example, one network may accept any BYOD iPhone but have certain stipulations for BYOD Android devices. In this instance, the carrier might require customers with Android devices to contain both an active SIM card that can connect to their network and a mobile operating system updated to Google Play\u2019s most recent version."))}d.isMDXComponent=!0}}]);