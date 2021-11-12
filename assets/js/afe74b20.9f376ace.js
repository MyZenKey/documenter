"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[5220],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),l=c(r),f=i,y=l["".concat(u,".").concat(f)]||l[f]||p[f]||o;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=l;var d={};for(var u in t)hasOwnProperty.call(t,u)&&(d[u]=t[u]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},403:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],d={sidebar_position:18},u="Setting Redirect URI for IdentityProvider on Android",c={unversionedId:"android/integration-guide/android-set-a-redirect-uri-for-an-identityprovider",id:"android/integration-guide/android-set-a-redirect-uri-for-an-identityprovider",isDocsHomePage:!1,title:"Setting Redirect URI for IdentityProvider on Android",description:"When using identityProvider instead of ZenKeyButton, set th redirect URI this way:",source:"@site/docs/android/integration-guide/android-set-a-redirect-uri-for-an-identityprovider.md",sourceDirName:"android/integration-guide",slug:"/android/integration-guide/android-set-a-redirect-uri-for-an-identityprovider",permalink:"/documenter/docs/android/integration-guide/android-set-a-redirect-uri-for-an-identityprovider",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/android/integration-guide/android-set-a-redirect-uri-for-an-identityprovider.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"Setting HTTP or HTTPS Redirect URI for Android",permalink:"/documenter/docs/android/integration-guide/android-set-an-http-or-https-redirect-uri"},next:{title:"Troubleshooting Authorization Errors on Android",permalink:"/documenter/docs/android/integration-guide/android-troubleshoot-authorization-errors"}},s=[],p={toc:s};function l(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-redirect-uri-for-identityprovider-on-android"},"Setting Redirect URI for IdentityProvider on Android"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"identityProvider")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZenKeyButton"),", set th redirect URI this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MyActivity extends AppCompatActivity {\n\n    private static final int REQUEST_CODE_ZENKEY = 1234;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n       super.onCreate(savedInstanceState);\n       setContentView(R.layout.my_layout);\n       findViewById(R.id.myZenKeyButton).setOnClickListener(v -> startZenKeyAuthorization());\n    }\n\n    private void startZenKeyAuthorization(){\n        startActivityForResult(\n                ZenKey.identityProvider()\n                      .authorizeIntent()\n                      .withRedirectUri(\n                              new Uri.Builder()\n                                  .scheme("com.example.app")\n                                  .authority("authority")\n                                  .build())\n                      .build(),\n                REQUEST_CODE_ZENKEY);\n    }\n}        \n')))}l.isMDXComponent=!0}}]);