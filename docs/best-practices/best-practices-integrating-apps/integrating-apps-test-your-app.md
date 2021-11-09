---
title: "Test Your App"
slug: "integrating-apps-test-your-app"
hidden: false
createdAt: "2020-05-08T20:43:09.024Z"
updatedAt: "2021-07-08T16:43:52.442Z"
---
After integrating ZenKey with your service, test whether your app can successfully: 

  * Discover a user's carrier.
  * Request an authorization code.
  * Receive an authorization response
  * Return user info.
  * Issue a token request.
  * Authenticate trusted devices and browsers.
[block:callout]
{
  "type": "info",
  "body": "Developers who plan to use the Trust Services API for fraud prevention services should also test event alerts and user trait parameters. For more details, please refer to the end of this section."
}
[/block]

[block:callout]
{
  "type": "warning",
  "body": "If your client is in Dev Mode and not in Standard Mode, enable Developer Mode in the ZenKey app to test. See instructions for turning on Dev Mode in your app [here](https://developer.myzenkey.com/docs/portal-working-with-developer-mode)."
}
[/block]
 

##  Testing Scenarios


Below are several test scenarios to consider when testing your applications. As a best practice, ZenKey recommends testing each scenario on all platforms relevant to your app (e.g. iOS, Android, web) as well as devices configured to different wireless providers (e.g., AT&T, Verizon, T-Mobile).


###   Adding Your Application as a ZenKey Service 

[block:callout]
{
  "type": "info",
  "body": "This is only possible once your client is in Standard Mode."
}
[/block]
In this scenario, new users want to access your service's app on their primary mobile devices prior to authenticating with ZenKey. Mirror this action in the ZenKey app by taking the following steps:

1. Download the carrier's version of the ZenKey app on a device that has not authorized your app.
1. Create a new ZenKey account and confirm your identity.
1. If your service requires second-factor authentication, set up a biometric recovery method.
1. Navigate to Services > tap the "+" icon > search for your service and test that your application appears.
1. Add your application to ZenKey Services > select your application.
1. On Account Details, verify that the scopes you wish to request from your users appear as expected.

## Carrier Discovery

In this scenario, users added your service to their local ZenKey app. Test to see if your app can properly identify that user's carrier. To do so, follow these steps:


1. Initiate Carrier Discovery
Preferably on the same device as above, open your service's app and select the "Sign in with ZenKey" button. Because this will initiate carrier discovery, test that your REST GET request includes a:
  * BASE_URL: The Base URL you created in the Developer Portal (e.g. https://discoveryissuer.xcijv.com/.well-known/openid_configuration). 
  * CLIENT_ID: The App ID created during registration (e.g. =ccid-{client_ID_value_here})
  * MCCMNC: The six-digit code located on every SIM card identifying the mobile country code, mcc, and mobile operator code, or mnc (e.g. 421249). When calls are made from a mobile device, the MCC and MNC should be provided.

2. Verify Carrier and OpenID Configuration
Next, test that the appropriate carrier was found. If so, test that the proper OpenID Connect configuration was returned. A proper discovery payload should include a token endpoint, user info endpoint, supported scopes, and an authorization URL based on the mobile provider. For example:
 
```
{
   “issuer”:“https://carrier.com”,
   “authorization_endpoint”:“https://carrier.com/connect/authorize”,
   “token_endpoint”:“https://carrier.com/connect/token”,
   ...
   “userinfo_endpoint”:“https://carrier.com/connect/userinfo”,
   “mccmnc”:310010,
   ...
   “registration_endpoint”:”https://xcijv.com/connect/register”
   “scopes_supported”:[
      “profile”,
      “name”,
      “email”,
      “phone”,
      “postal_code”
   ],
   “response_types_supported”:[
      “code”,
      “async_token”
   ],
   “grant_types_supported”:“authorization_code”,
   “acr_values_supported”:[
      “a1”,
      “a3”
   ],
  ...
}
```

3. Discovery on a Secondary Device
If the carrier was not found because you are using a secondary device, test that the user reached the Discovery UI website to identify their carrier. The Discovery UI website should display a “Connect browser to your ZenKey” page to scan a visual code or enter a manual code to add the browser as a trusted device. Recall that this DISCOVERY_UI_URI is the endpoint to your service’s app and should include a:
  * BASE_URL: The Base URL you created in the Developer Portal (e.g. https://discoveryissuer.xcijv.com/.well-known/openid_configuration). 
  * CLIENT_ID: The App ID created during registration (e.g. =ccid-{client_ID_value_here})
  * REDIRECT_URI: A URI encoded https (or custom) scheme registered under your Client ID; redirects the user back to your application after discovery is complete.

4. App Redirect
After submitting either the visual or numeric code on the secondary device, test that the browser redirects users back to your app and that the response includes:

  * LOGIN_HINT_TOKEN: Only returned from a secondary device. When present, it should be used in your authentication request. When not present, you do not need a login hint in your authentication request.
  
## New User Authorization Flow

In this scenario, users selected "Sign in with ZenKey" and your app already discovered users' carriers, per above. Having authenticated your app in ZenKey, users decide whether to share info with you and their carriers. If they do, they'll then experience an app redirect. To test this flow, follow the steps listed here:


1. Authorization Request
After discovery, test that your application's request to the carrier's authorization endpoint contains:
  * CLIENT_ID: The App ID created during registration (e.g. =ccid-{client_ID_value_here})
  * REDIRECT_URI: A URI encoded https (or custom) scheme registered under your Client ID; redirects users back to your application after discovery is complete.
  * RESPONSE_TYPE: Standard OpenID code flow.
  * NONCE (Optional): String provided by you and included later in the ID token.
  * SCOPE: User info attributes specified in your application and defined in the developer portal.
  * STATE: Value provided by you; returned with authorization code.
  * LOGIN_HINT_TOKEN (Optional): Returned from Discovery UI endpoint as a JWE readable by the carrier. While this parameter is optional, you should include LOGIN_HINT_TOKEN when it is provided by discovery.
 

2. Return Scopes
On your test device, check that the scopes your application wishes to request appear as expected. These scopes return by the same carrier user info endpoint revealed during the discovery process. If your scopes were returned properly, test each of the three authorization options presented on the device:

  * Select "Edit" > Toggle scopes in the local ZenKey app > return to your app.
  * Select "Deny" > Deny Request.
  * Select "Agree" > Provide PIN | Biometric* (if necessary). 
[block:callout]
{
  "type": "info",
  "body": "If users do not have biometrics setup in their ZenKey profile, they will not receive a biometric authenticator because biometrics are not recorded in their user info."
}
[/block]
3. Authorization to App Redirect
Provide consent and test that your app sends an authorization request to the authorization endpoint received during discovery, including the following parameters:

  * MCCMNC: The six-digit code located on every SIM card identifying the mobile country code, mcc, and mobile operator code, or mnc (e.g. 421249). When calls are made from a mobile device, the MCC and MNC should be provided.
  * CODE: Authorization code.
  * CLIENT_ID: Your app ID.
  * GRANT_TYPE: Value set to "authorization_code".
  * REDIRECT_URI: A URI encoded https (or custom) scheme registered under your CLIENT_ID.
 
With the authorization code returned, verify that your app redirects as expected. 


4. Token Request
Test that your app sent a POST request to the carrier token endpoint. The token endpoint expects a `CLIENT_SECRET`, so be sure to test that your API has included this parameter when you issue the request from your secure backend. 

5. Return User Info 
Finally, test that you received the relevant scopes from the carrier user info endpoint.