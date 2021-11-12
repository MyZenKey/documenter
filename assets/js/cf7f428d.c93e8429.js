"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[5026],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8418:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Capturing and Managing User Information",u={unversionedId:"best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-capture-and-manage-user-information",id:"best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-capture-and-manage-user-information",isDocsHomePage:!1,title:"Capturing and Managing User Information",description:"Users may edit, approve, or deny scopes you request. The scopes the user does consent to share with you will only be made available once you have used your access token to issue a GET request from your backend to the carrier's userinfo_endpoint and the carrier provides this information in the userinfo response.",source:"@site/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-capture-and-manage-user-information.md",sourceDirName:"best-practices/best-practices-managing-and-enrolling-users",slug:"/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-capture-and-manage-user-information",permalink:"/documenter/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-capture-and-manage-user-information",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-capture-and-manage-user-information.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authentication Flows",permalink:"/documenter/docs/best-practices/best-practices-getting-started/getting-started-authentication-flows"},next:{title:"Enrolling New Users",permalink:"/documenter/docs/best-practices/best-practices-managing-and-enrolling-users/managing-and-enrolling-users-enroll-new-users"}},l=[{value:"Types of Scopes",id:"types-of-scopes",children:[]},{value:"What Gets Collected?",id:"what-gets-collected",children:[{value:"Retrieving User Information",id:"retrieving-user-information",children:[]}]},{value:"Authorization User Experience",id:"authorization-user-experience",children:[]},{value:"Handling Issues of Non-Consent or Changes",id:"handling-issues-of-non-consent-or-changes",children:[]},{value:"Account Linking",id:"account-linking",children:[{value:"Matching a User&#39;s Subject Identifier (sub)",id:"matching-a-users-subject-identifier-sub",children:[]},{value:"Users with Multiple Accounts",id:"users-with-multiple-accounts",children:[]},{value:"Account Linking User Experience",id:"account-linking-user-experience",children:[]}]}],p={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"capturing-and-managing-user-information"},"Capturing and Managing User Information"),(0,i.kt)("p",null,"Users may edit, approve, or deny scopes you request. The scopes the user does consent to share with you will only be made available once you have used your access token to issue a GET request from your backend to the carrier's ",(0,i.kt)("inlineCode",{parentName:"p"},"userinfo_endpoint")," and the carrier provides this information in the userinfo response. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /userinfo HTTP/1.1\nnContent-Type: application json\nAuthorization: Bearer {ACCESS_TOKEN} \nnx-authorization: {<key_binding>}\n")),(0,i.kt)("h2",{id:"types-of-scopes"},"Types of Scopes"),(0,i.kt)("p",null,"Besides openid, all scopes are optional. Below is a list of all scopes supported by ZenKey:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"openid"),(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"address"),(0,i.kt)("li",{parentName:"ul"},"phone"),(0,i.kt)("li",{parentName:"ul"},"postalCode")),(0,i.kt)("p",null,"By default, authorization requests made with the ZenKey SDK include the ",(0,i.kt)("inlineCode",{parentName:"p"},"openid scope"),", which returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"id_token")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"token_endpoint"),". To use additional scopes, set them on the button and they will be added to the request. "),(0,i.kt)("p",null,"For more information, refer to the following guides: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documenter/docs/android/integration-guide/android-set-scopes-for-user-information"},"Set scopes for user information on Android")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../web/web-integration-options"},"Integration options on the web")," ")),(0,i.kt)("h2",{id:"what-gets-collected"},"What Gets Collected?"),(0,i.kt)("p",null,"ZenKey users are always in control of their personal data. While you define what type of information to collect, users must consent to share that information with you."),(0,i.kt)("p",null,"What if a user declines to share required attributes?"),(0,i.kt)("p",null,"If a user declines to share attributes that are required by your application, they receive a warning dialog and are allowed to enter that information in your application later. For example, not sharing a required scope such as postal code triggers a dialog to advise them to confirm the action and that your app may require this information at a future date. "),(0,i.kt)("h3",{id:"retrieving-user-information"},"Retrieving User Information"),(0,i.kt)("p",null,"To retrieve user information, clients must present a valid access token. The destination for this call is indicated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"userinfo_endpoint")," extracted from the discovered carrier\u2019s openid-configuration. Only those claims scoped by the token will be made available to the client. Since this user info is stored with the carrier, the carrier delivers that information via the user info response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{   \u201csub\u201d:\u201dmccmnc-1234567abcdefghijk\u201d,\n    \u201cname\u201d: {\n        \u201cvalue\u201d:\u201dJane Doe\u201d,\n        \u201cgiven_name\u201d: \u201cJane\u201d,\n        \u201cfamily_name\u201d: \u201cDoe\u201d},\n    \u201cemail\u201d: {\n        \u201cvalue": \u201cjanedoe@example.com\u201d},\n    \u201cpostal_code\u201d: {\n        \u201cvalue\u201d:\u201c90210\u201d},\n    \u201cphone\u201d: {\n        \u201cvalue\u201d:\u201c+13101234567\u201d},  \n}\n')),(0,i.kt)("h2",{id:"authorization-user-experience"},"Authorization User Experience"),(0,i.kt)("p",null,"To complete the authorization flow, users must first download their mobile carrier's ZenKey app and set up a ZenKey account on their device. They can then add and authorize your service within the ZenKey app. After app installation and account creation, the user encounters the:"),(0,i.kt)("p",null,"Launch; Sign-in | Consent screen (to provide authorization)"),(0,i.kt)("p",null,"Confirm | Success screen (before successfully logging in to your app) "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Launch Screen"),'\nWhen users open your app, your Launch Screen includes the "Sign in with ZenKey" button.\n',(0,i.kt)("img",{alt:"Launch screen",src:n(1306).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Consent Screen | Sign-In Screen"),'\nIf a user attempts to select the "Sign in with ZenKey" button on a primary or secondary device without an installed ZenKey app and active account, a device check redirects them to download the ZenKey app suited for their mobile platform and wireless network.'),(0,i.kt)("p",null,"Once the ZenKey app is installed and the account created, users enable your service in ZenKey and review the scopes your app is requesting (if any)."),(0,i.kt)("p",null,'Active ZenKey users who have not enabled your app are asked to "Agree" on the ZenKey consent screen to enable your app as a service. Here, users review the requested scopes and approve or deny the authorization request.'),(0,i.kt)("p",null,"Those who downloaded ZenKey, created a ZenKey account, and enabled your service in the ZenKey app will see three options:"),(0,i.kt)("p",null,'Edit - users may toggle required and optional scopes on or off in the ZenKey app. Users who choose to edit scopes in the ZenKey app can then return to the authorization flow where they may "Sign in" or "Deny" consent. If new scopes are requested, the user may see "Review and Edit" instead of "Edit."'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Agree - users may agree to share all attributes and proceed to sign in to your application."),(0,i.kt)("li",{parentName:"ul"},"Deny - users may deny sharing information and cancel authorization altogether.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Confirm | Success Screen"),"\nThis screen refers to your app's UI/UX. For users authorizing transactions such as a money transfers, ZenKey does not provide a screen outlining the details of the transaction in the ZenKey app. However,  users may review the details of their transactions such as the amount being sent and the name of the recipient, and then select the \"Continue with ZenKey\" button if you added it to your app's design, or they may cancel the request."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirm",src:n(8914).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Users may need to provide their ZenKey PIN or Biometric authorization (e.g., fingerprint or face scan), if set up in the app, depending on the level of authentication required."),(0,i.kt)("p",null,"If the user confirms the transaction, you may then load a success screen to indicate the completed money transfer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confirmation",src:n(1027).Z})),(0,i.kt)("h2",{id:"handling-issues-of-non-consent-or-changes"},"Handling Issues of Non-Consent or Changes"),(0,i.kt)("p",null,"For best practices, your application should either ask users for the scopes above or not require them at all. Moreover, keep in mind that users who select \"Edit\" during authorization can see a list of required and optional scopes. In other words, if you specify a user's email, name, and phone as required scopes, but define postalCode as optional, users can view these differences in ZenKey's 'Account Details' page after they click \"Edit\" on the authorization screen."),(0,i.kt)("h2",{id:"account-linking"},"Account Linking"),(0,i.kt)("p",null,"Account linking refers to associating a user\u2019s ZenKey account with the account they created with your service. For account linking to work, several criteria must be met:"),(0,i.kt)("p",null,"Users must have an account with your service and log in. If users have ZenKey accounts set up, they must first log in to your app or website before they can link their ZenKey account. Your service must first authenticate the subscriber \u2014 likely via a username and password \u2014 before allowing the user to link their existing ZenKey account. If users do not yet have an account with your service, they must create one. For users who have just created an account with your service and have already created a ZenKey account, we advise notifying the user that ZenKey is now supported so they can complete the linking flow. (Note: the images below are solely for demonstration purposes. Please refer to our ZenKey Brand Guidelines documentation for more specific instructions on how to display the ZenKey name, logo, and button.)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Account Linking",src:n(7684).Z})),(0,i.kt)("p",null,"Users must have a ZenKey account on their device set up. Even users created an account with your service, in order to link accounts, they must have created a ZenKey account as well. If users do not have accounts, ZenKey will attempt to detect the carrier associated with the device and prompt users to download the ZenKey app for that carrier. "),(0,i.kt)("p",null,"Users must enable your service in the ZenKey app. To link accounts, ZenKey checks to see if your service has been enabled. If so, users will select \u201cSign In\u201d. If not, users must agree to share data or edit their details."),(0,i.kt)("p",null,'Users must authorize your app. After registering accounts for your service and ZenKey, users then click the \u201cSign in with ZenKey\u201d button and "Agree" to share information. During this step, users may also choose to edit which profile details they wish to share within the ZenKey app. '),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Share data",src:n(9592).Z})),(0,i.kt)("h3",{id:"matching-a-users-subject-identifier-sub"},"Matching a User's Subject Identifier (sub)"),(0,i.kt)("p",null,"Assuming the above criteria are met, you may now attempt to match users' ZenKey account with the account they created for your service. This reconciliation process occurs on your backend, specifically by your server looking up a users' sub-identifier \u2014 the main pairwise identifier that associates a single user with your unique client_id \u2014 whose value gets returned along with the Access/ID Token and later by the userinfo_endpoint."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The Sub ID may contain numbers, letters, and other characters."),(0,i.kt)("h3",{id:"users-with-multiple-accounts"},"Users with Multiple Accounts"),(0,i.kt)("p",null,"In the event users have multiple accounts with your service, you may also choose to look up their email address (if available) and link it to the relevant account. Another option is to prompt users to name which of their accounts with your service they linked to their ZenKey account. Users may proceed to their accounts or opt to create new accounts with your service."),(0,i.kt)("p",null,"In rare cases, you may not be able to match users' sub-identifier, most likely because users have migrated accounts (i.e., switched carriers). So while a user's sub-identifier normally stays constant, its value is modified if the user migrated carriers."),(0,i.kt)("p",null,"For any users who migrated accounts, be sure to update that user's old sub value with the new sub value provided by their new carrier. If you do not update these references on your backend, you will be unable to link accounts."),(0,i.kt)("h3",{id:"account-linking-user-experience"},"Account Linking User Experience"),(0,i.kt)("p",null,"With the account linking flow completed, users may click on ZenKey instead of using their username and password for all future sign-ins. After a user authorizes your app with the ZenKey button, your job is to find out whether this ZenKey account is linked to an account in your user database. If your backend does not find a matching account, or finds several, the app must prompt the user to login at this point. As stated above, you might do a lookup based on the sub and/or email address (if available) to resolve this. Users should not have to link their accounts themselves. The task of linking accounts is yours after authorization."))}d.isMDXComponent=!0},9592:function(e,t,n){t.Z=n.p+"assets/images/03d3bac-Share_Data-e7218ce46737fe893be1ef3010af754c.jpeg"},1306:function(e,t,n){t.Z=n.p+"assets/images/3f053ae-1._Launch_Screen-72a7ca7d8cad6b928c5b8dc3d3238714.jpeg"},7684:function(e,t,n){t.Z=n.p+"assets/images/750a2d3-Account_Linking-c28f1f7cb90a373d187b358785ee2f34.png"},1027:function(e,t,n){t.Z=n.p+"assets/images/b6d316e-4._Confirmation-6394442d03a60eff8605c1ba1f1a45b0.jpeg"},8914:function(e,t,n){t.Z=n.p+"assets/images/f23eed1-3._Confirm-f213360e14ceba966a225c46376a6506.jpeg"}}]);