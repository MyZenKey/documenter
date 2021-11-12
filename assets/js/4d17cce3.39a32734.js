"use strict";(self.webpackChunkdevpub=self.webpackChunkdevpub||[]).push([[431],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8012:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidenav:null},p=void 0,s={unversionedId:"singular-key/FlowOIDC",id:"singular-key/FlowOIDC",isDocsHomePage:!1,title:"FlowOIDC",description:"TOC",source:"@site/docs/singular-key/FlowOIDC.md",sourceDirName:"singular-key",slug:"/singular-key/FlowOIDC",permalink:"/documenter/docs/singular-key/FlowOIDC",editUrl:"https://github.com/MyZenKey/documenter/edit/main/docs/singular-key/FlowOIDC.md",tags:[],version:"current",frontMatter:{sidenav:null},sidebar:"tutorialSidebar",previous:{title:"Singular Key Flow Integration via API",permalink:"/documenter/docs/singular-key/FlowAPI"}},u=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Terminology",id:"terminology",children:[]},{value:"Creating a Flow",id:"creating-a-flow",children:[{value:"Step 1: Log into Singular Key Admin Portal",id:"step-1-log-into-singular-key-admin-portal",children:[]},{value:"Step 2: Create Connection(s)",id:"step-2-create-connections",children:[]},{value:"Step 3: Create Flow",id:"step-3-create-flow",children:[]},{value:"Step 4: Create App and Assign Flow to App",id:"step-4-create-app-and-assign-flow-to-app",children:[]}]},{value:"Invoking a Flow via OIDC",id:"invoking-a-flow-via-oidc",children:[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"OIDC Authorization Url",id:"oidc-authorization-url",children:[]},{value:"OIDC Token Url",id:"oidc-token-url",children:[]},{value:"User Info Url",id:"user-info-url",children:[]}]},{value:"Sequence Diagram",id:"sequence-diagram",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TOC")),(0,i.kt)("h1",{id:"singular-key-flow-integration-via-oidc"},"Singular Key Flow Integration via OIDC"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"There are several ways to invoke a Singular Key Flow - using OIDC (OpenID Connect), SAML 2.0, Web SDK (Widget), Native Mobile SDK or API."),(0,i.kt)("p",null,"This article documents Flow invocation via OIDC. We will first create a simple flow in Flow Studio in Singular Key Admin Portal."),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connector"),": A virtual representation of a third party service or a native Singular Key functionality within the Singular Key Orchestration Platform. It exposes a set of ",(0,i.kt)("strong",{parentName:"li"},"capabilities")," that can be used in flows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Connection"),": A configured instance of a ",(0,i.kt)("strong",{parentName:"li"},"connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Flow"),": Connections can be connected to each other to create meaningful user journeys or flows")),(0,i.kt)("h2",{id:"creating-a-flow"},"Creating a Flow"),(0,i.kt)("p",null,"We'll create a Hello World Flow which will Login the user using ZenKey and then create a session with a set of standard claims and redirect the user to the Relying Party redirect Url."),(0,i.kt)("p",null,"In order to create a ZenKey flow, you will need access to the Singular Key Admin Portal. At a high level, you need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Register an account in the ",(0,i.kt)("a",{parentName:"li",href:"https://portal.myzenkey.com/"},"ZenKey developer portal")),(0,i.kt)("li",{parentName:"ul"},"Create and configure ",(0,i.kt)("strong",{parentName:"li"},"connections")),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"Flow")," in Flow Studio "),(0,i.kt)("li",{parentName:"ul"},"Create an ",(0,i.kt)("strong",{parentName:"li"},"App")," and assign a Flow to it. ")),(0,i.kt)("p",null,"We'll walk you through the steps to create your first flow (Helloworld)"),(0,i.kt)("h3",{id:"step-1-log-into-singular-key-admin-portal"},"Step 1: Log into Singular Key Admin Portal"),(0,i.kt)("p",null,"Use the Admin Portal URL that is provided to you during the onboarding-process. Login with the credentials provided to you"),(0,i.kt)("h3",{id:"step-2-create-connections"},"Step 2: Create Connection(s)"),(0,i.kt)("p",null,"We'll create a Http Connection (which has the capability to send a JSON response)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ZenKey Connection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Click on Connections"),(0,i.kt)("li",{parentName:"ul"},"Click on 'New Connection' button"),(0,i.kt)("li",{parentName:"ul"},"Choose 'ZenKey' Connector from the dropdown list"),(0,i.kt)("li",{parentName:"ul"},"Click Create ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You should now see a 'ZenKey' connection in your Connections list"))),(0,i.kt)("li",{parentName:"ul"},"Now click on the newly created connection and configure its properties. ",(0,i.kt)("strong",{parentName:"li"},"Note"),": You will need to have registered a ZenKey developer account. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next create a 'Singular Key Token Management'/'Singular Key Session' Connection"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"*  Click on Connections\n*  Click on 'New Connection' button\n*  Choose 'Singular Key Token Management'/'Singular Key Session' Connector from the dropdown list\n*  Click Create \n")),(0,i.kt)("p",{parentName:"li"},"You should now see a 'Singular Key Token Management'/'Singular Key Session' connection in your Connections list"))),(0,i.kt)("h3",{id:"step-3-create-flow"},"Step 3: Create Flow"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Flow Studio")),(0,i.kt)("li",{parentName:"ul"},"Click on '",(0,i.kt)("strong",{parentName:"li"},"Create New Flow"),"'"),(0,i.kt)("li",{parentName:"ul"},"Enter ",(0,i.kt)("strong",{parentName:"li"},"Name of Flow")," and click 'Create'.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A new flow is created and you'll be presented with a Flow Canvas"))),(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Flow Canvas"),", click on the + icon on the bottom left corner to '",(0,i.kt)("strong",{parentName:"li"},"add connection"),"'."),(0,i.kt)("li",{parentName:"ul"},"On the Add Connection menu, select the 'ZenKey' Connection. This will automatically place the ZenKey connection on the Flow Canvas."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"ZenKey Connection")," that is on the canvas. It'll present you with a list of supported capabilities for this connection. "),(0,i.kt)("li",{parentName:"ul"},"Choose the '",(0,i.kt)("strong",{parentName:"li"},"ZenKey Login"),"' capability and click Save.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"[Optional]"," In the 'ZenKey Login' capability, you can optionally configure a few parameters like Display Name, CSS etc"))),(0,i.kt)("li",{parentName:"ul"},"Next, follow up the same steps to create a ",(0,i.kt)("strong",{parentName:"li"},"'Singular Key Token/Session Management'")," node on the canvas. Click on the node and select 'Create Tokens' and hit Save."),(0,i.kt)("li",{parentName:"ul"},"Next,connect the two nodes to each other"),(0,i.kt)("li",{parentName:"ul"},"Click on the 'Save' button on the Canvas to ",(0,i.kt)("strong",{parentName:"li"},"Save and Deploy")," the flow")),(0,i.kt)("p",null,"You have ",(0,i.kt)("strong",{parentName:"p"},"successfully created your first flow")," that can be invoked via OIDC!\nIn the future iterations, we will add several nodes to do various checks like device and location policy checks or MFA Register or Authentication. The idea is that several nodes can be strung together in many different ways to create a complex set of 'if these then those' sequences. "),(0,i.kt)("h3",{id:"step-4-create-app-and-assign-flow-to-app"},"Step 4: Create App and Assign Flow to App"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on Applications on the left menu"),(0,i.kt)("li",{parentName:"ul"},"Click on 'Create New App' button"),(0,i.kt)("li",{parentName:"ul"},"Enter app name ('HelloWorld') and click create. You will now see the newly created app in the list"),(0,i.kt)("li",{parentName:"ul"},"Select the newly created app. You will be presented a settings dialog box which contains several tabs. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Take a note of the 'CompanyId' and API Key in the General Tab. You will need them to invoke the flow in the later section"))),(0,i.kt)("li",{parentName:"ul"},"Click on the Flows Tab",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select the flow from the 'Add Flow' drop down box"),(0,i.kt)("li",{parentName:"ul"},"Click on Apply "),(0,i.kt)("li",{parentName:"ul"},"Take note of the FlowId. "))),(0,i.kt)("li",{parentName:"ul"},"OIDC Settings are in the OpenId Tab",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Client secret")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Redirect Url's"),": Add your application callback url and hit enter and click Apply"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Scopes"),": supported Scopes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Grants"),": supported Grants")))),(0,i.kt)("h2",{id:"invoking-a-flow-via-oidc"},"Invoking a Flow via OIDC"),(0,i.kt)("p",null,"This typically involves"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The customer (Relying Party App) redirects the user to Singular Key Flow ODIC Authorization Url to initiate the flow"),(0,i.kt)("li",{parentName:"ul"},"The user is taken through the flow / user journey"),(0,i.kt)("li",{parentName:"ul"},"At the end of the flow, Singular Key redirects the user back to the customer's Redirect Uri with the code and state parameters"),(0,i.kt)("li",{parentName:"ul"},"The customer backend calls the Singular Key Token Url to exchange the code for the various tokens (",(0,i.kt)("inlineCode",{parentName:"li"},"access_token"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"id_token"),")")),(0,i.kt)("h3",{id:"api-endpoint"},"API Endpoint"),(0,i.kt)("p",null,"SINGULARKEY_API_ENDPOINT"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sandbox"),": ",(0,i.kt)("a",{parentName:"p",href:"https://devapi.singularkey.com"},"https://devapi.singularkey.com"),"\n",(0,i.kt)("strong",{parentName:"p"},"Production"),": ",(0,i.kt)("a",{parentName:"p",href:"https://api.singularkey.com"},"https://api.singularkey.com")),(0,i.kt)("h3",{id:"oidc-authorization-url"},"OIDC Authorization Url"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl GET 'SINGULARKEY_API_ENDPOINT/v1/auth/:companyId/flows/:flowId/authorize?\nclient_id=CLIENT_ID&\nresponse_type=code&\nscope=openid&\nredirect_uri=REDIRECT_URI&\nstate=STATE`\n")),(0,i.kt)("h4",{id:"request-parameters"},"Request Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Required]"," ",(0,i.kt)("inlineCode",{parentName:"li"},":companyId"),": Singular Key Generated Unique Id for your account"),(0,i.kt)("li",{parentName:"ul"},"[Required]"," ",(0,i.kt)("inlineCode",{parentName:"li"},":flowId"),": Singular Key Generated Unique Id for your flow"),(0,i.kt)("li",{parentName:"ul"},"[Required]"," ",(0,i.kt)("inlineCode",{parentName:"li"},"CLIENT_ID"),": client Id can be found in the Singular Key Admin Portal -> Applications->Your App->General Tab "),(0,i.kt)("li",{parentName:"ul"},"[Required]","  ",(0,i.kt)("inlineCode",{parentName:"li"},"REDIRECT_URI"),": as defined in the Singular Key Admin Portal -> Applications->Your App->OpenID Tab")),(0,i.kt)("h3",{id:"oidc-token-url"},"OIDC Token Url"),(0,i.kt)("p",null,"Upon successful execution of the flow, the last node in the flow ('Singular Key Token Management'/'Singular Key Session') will redirect the user to the Relying Party's Redirect Uri (as defined in the Admin Portal -> Applications -> Your App->OpenId Tab) with the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," and optional ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," parameter. "),(0,i.kt)("p",null,"Your backend application can call the Token Url to exchange the code for the tokens (",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"id_token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl POST \'API_ENDPOINT/v1/auth/:companyId/token\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "client_id":"CLIENT_ID",\n  "client_secret":"CLIENT_SECRET",\n  "grant_type":"authorization_code",\n  "code":"CODE"  \n}\'\n')),(0,i.kt)("h4",{id:"responses"},"Responses"),(0,i.kt)("h5",{id:"success-response-fields"},"Success Response Fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"access_token"),": JWT token containing the access token which can be used to fetch user information or access the Singular Key's self service user portal"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token_type"),": Bearer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expires_in"),": access token's expiry date/time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id_token"),": JWT token containing ID token related claims. Claims can be customized in the flow by using Singular Key Token Management/Singular Key Session's ",(0,i.kt)("inlineCode",{parentName:"li"},"Send Custom Claims")," capability ")),(0,i.kt)("h4",{id:"jwt-token-validation"},"JWT Token Validation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"id_token")," signature can validated using a node library like node-jose"),(0,i.kt)("p",null,"JWKS public keys is available in the Admin Portal -> Company"),(0,i.kt)("h5",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json="},'const publicKeys = {\n    "keys": [\n        {\n            "kty": "RSA",\n            "kid": "-YtA5HbM-d1r8qUGin5P_1W1mGyJCiZObRN6QgnB_Fg",\n            "n": "ubObDOrqzsG4LFBjMg-VBc-s39BlfyoB26LT-mKj8vNXjIo0XGXAKTxmieH5tfs3yiXk8X24P7K5KeUG_z1aS7DAHZ2qazVk4IFVdGlM4gXUfirmFsD8Y0Lyo0j8-ecyflqXa13JoZzVuox-P87qJ1jHxu_uodXVdp0JaV9JM6gz08Bus1zrh-IRfyxYgn8dADffJf_a6QFjotwfPgxr2ZmS8J1d-VZWnYJ13GFDzm0yYl4eX9x56TW0lrhnDnhEKy_Q30YLNQomhsRIe6hUYwTieuW82aS-NGK7eFF6fRz2hAhyqnu6PSk5SaZcoFbcVDYX79DBgf_OdgeBkKTTVKMDCAZpYnV6LBX-r_wopxD1da8q_-zaaYXj7p82N4NdqPYbCzSWYKlvlQ1YY64kB_rQsxZF_btXu0Wpv4qPI8j2eSx_JVo2QqtE3b9m3RcaFSuFMs9jTdHt8QaoWpefHj-D6yw4in2E96pLYROuNYP_vW4lwRMbc4A0tPPT7y0GeJq9yK4RITFfuiZUhwBliiN_NGjorJai4OXvXwKaqqLON8Kpo7g6YFmX4ACx_yrNeN-7vDY7D7eFMNhNkCzHCEECghCO6bJFw-3eFYg-gg3NctEIZaTQUrX5Bm3T-w8EQtYsY1BeFVjGC0R81b6f8nPgfNhXozZAfDamQpJTAW0",\n            "e": "AQAB",\n            "alg": "RS256",\n            "use": "sig"\n        }\n    ]\n}\n\nconst id_token = \'ID_TOKEN_FROM_TOKEN_URL_RESPONSE\'\nconst jwkResult = await jose.JWK.asKeyStore(publicKeys)\nconst idToken = await jose.JWS.createVerify(jwkResult).verify(id_token)\nconst claims = JSON.parse(idToken.payload)\n\n// verify the token expiration\nconst current_ts = Math.floor(new Date() / 1000)\nif (current_ts > claims.exp) {\n    throw new Error(\'ID Token Expired\')\n}\n\n// verify audience matches client Id\nif (claims.aud != clientId) {\n    throw new Error(\'ClientId does not match\')\n}\n\n')),(0,i.kt)("h3",{id:"user-info-url"},"User Info Url"),(0,i.kt)("p",null,"User's Access Token from the Token Url Response is used to authenticate to the User Info endpoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl GET 'API_ENDPOINT/v1/auth/:companyId/user' \\\n--header 'Authorization: Bearer USER_ACCESS_TOKEN' \n")),(0,i.kt)("h5",{id:"response"},"Response"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userId")),(0,i.kt)("td",{parentName:"tr",align:null},"Singular Key assigned unique id to the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"RP assigned username for the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"companyId")),(0,i.kt)("td",{parentName:"tr",align:null},"Singular Key assigned unique id for the account")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"connectionId")),(0,i.kt)("td",{parentName:"tr",align:null},"connectionId pool to which the user is assigned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"createdDate")),(0,i.kt)("td",{parentName:"tr",align:null},"timestamp when the user record was created")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authType")),(0,i.kt)("td",{parentName:"tr",align:null},"Internal use")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"[Optional]"," name of the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"email")),(0,i.kt)("td",{parentName:"tr",align:null},"[Optional]"," user's email address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"phoneNumber")),(0,i.kt)("td",{parentName:"tr",align:null},"[Optional]"," user's phone number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"userAlias")),(0,i.kt)("td",{parentName:"tr",align:null},"[Optional]"," alias assigned to the user")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mfaEnabled")),(0,i.kt)("td",{parentName:"tr",align:null},"[Optional]","whether the mfa flag is true or false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"credentials")),(0,i.kt)("td",{parentName:"tr",align:null},"List of user's credentials")))),(0,i.kt)("h2",{id:"sequence-diagram"},"Sequence Diagram"),(0,i.kt)("p",null,"The sequence diagram below shows the data flow between the various components when a Flow/User Journey is invoked via OIDC. It uses a Login Flow as an example. The same pattern applies to any other flow type (enrollment, transaction, account recovery) invoked via OIDC."),(0,i.kt)("img",{src:"./sequenceDiagrams/SKFlowOIDC.png"}))}d.isMDXComponent=!0}}]);