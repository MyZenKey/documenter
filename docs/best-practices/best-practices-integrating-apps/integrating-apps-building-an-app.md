# Building an App

The following resources are available.

## Sample App & Developer Playground 

The BankApp, provided with the developer resources, simulates a sample banking app where a bank or financial institution leverages ZenKey for second-factor authentication and large or risky transactions. To see how this sample app works, you can interact with this website just as a consumer would and download and set up your personal ZenKey app, or get the app as part of the flow.

Here the authorization flow demonstrates how to request the second-factor userinfo scope to authorize a money transfer. The Bank App receives an authorization code and mccmnc from ZenKey. It passes this data back to the sample Bank App server where a mock token exchange takes place. Once the server has a token, it proceeds with the transaction.

## Developer Playground
 The ZenKey Developer Playground is a useful resource for understanding ZenKey flows and their associated requests and responses. The Developer Playground is a sample web app with a pre-configured environment.

As you navigate through the playground, the messages travel between the playground and its backend and the appropriate carrier for many of the services. You can configure the environment, run each step for user authentication, and test the user experience by being the user yourself with ZenKey on your mobile device.

When you are ready, apply what you learned to integrate and test ZenKey with your own apps. 


## Build Your Own Integrated App
Before you integrate ZenKey with your app, use the mobile SDK to request an authorization code (or perform the steps outlined in the server and web integration guide manually). In addition, use the authorization code to perform a token request and use the tokens returned to request user info.

When validating your integration of ZenKey with your application, be sure that you complete the following checklist:
 
  * Register your application. Obtain a client_id and client_secret from the Developer Portal. Consider whether or not you need to use a custom Redirect URI.
 * Define your scopes if requesting userinfo (Note: OpenID is the only required scope).
 * Read the iOS Integration Guide and/or Android Integration Guide, then add and configure the SDK. 
 * For web integration, refer to the Server and Web Integration Guide.
  * Configure your app's Info.plist.
  * If necessary, set up a custom redirect URL.
  * Instantiate ZenKey in the application delegate.
  * Add the ZenKey button.
  * Set up receive callbacks for event handling.
  * Code the request parameters.
  * Configure your secure server and set up the tokens.
  * Build, run, and test your app.