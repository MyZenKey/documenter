# Auth Code Flow and Carrier Discovery

The ZenKey API exposes one main entry point, `authorize`, which is a function that takes a number of different parameters for further processing downstream by the ZenKey app (i.e., the carrier-specific app that supports ZenKey) or exiting with an error context. 

This section describes ZenKey's primary and a secondary flows. Both terminate with an authorization code and a valid, ZenKey-supported `mccmnc` — a six-digit number representing the user’s mobile country code (mcc) and mobile network code (mnc) — whose value allows for SIM and user authentication. As the Service Provider, you are responsible for passing this information to your server to make a token request.

## Primary Device Flow

Before a user can sign in to your app using ZenKey, they must first install their carrier’s version of the ZenKey app on their primary device. After completing a simple initial setup, they may use ZenKey to log in to third-party applications. Pressing the ZenKey button in a third-party app or website from their primary device starts the authentication process prompting users to set up their devices as a primary device if they have yet to do so. 

**Note:** This primary device is also the device with which users can authenticate requests from other devices, such as desktops and tablets.

![Primary Device High Level Flow](b06fdf4-PrimaryDeviceHighLevelFlow.jpeg)

1. The mccmnc — a six-digit number representing the user’s mobile country code (mcc) and mobile network code (mnc) whose value allows for SIM and user authentication — determines the users' wireless carrier. The carrier returns an authorization code via your Redirect URI (see Section 4.1 Configure Your Redirect URI).
1.  Your app or website makes an authorization code request to the local ZenKey app.
1. If the user consents to share information, your backend server issues a token request for user info and other resources.

## Secondary Device Flow

The secondary device flow denotes the "Trusted Browser Flow" for users' secondary devices such as a desktop browser or tablet. In this case, users perform authorizations for your app from a web browser/secondary device on which the app is not installed alongside the ZenKey app.

When users press the ZenKey button on a secondary device, they see a visual and numeric code. This code allows users to associate that secondary device with their primary devices.

![Scondary Device High Level Flow](7337ce2-Secondary-device-high-level-flow-25c4784e492f0b4b62509209bea3fdae.png)

1. The SDK presents the carrier Discovery UI. If the user is authorizing a secondary device from an app on a tablet, the SDK uses a webview for this step.
1. Users then scan the visual code or enter the numeric code into the ZenKey app on their primary device.
1. Once users approve the request in the ZenKey app on their primary devices, the carrier Discovery UI returns a login_hint_token to your app’s Redirect URI. This login_hint_token is only returned to a secondary device for use during the authentication request.
1.  To perform SIM and user authentication, your app makes an authorization code request to the appropriate carrier and receives the auth code in its Redirect URI.
1. If users consent to share information, your backend server issues a token request for user info and other resources.

## Discovery

During discovery, your application determines the correct OpenID authentication request URL to construct. If users accessed the ZenKey application on their devices they need only perform discovery once per browser at worst, and at best only when accessing your service from their non-primary devices.

If users tried to sign in to your app or website from a new desktop browser, for instance, they need to authenticate by accessing their primary devices to verify their ZenKey identity. The discovery endpoint would then load the discovery-ui web interface where users either scan a visual code or enter a manual code on the browser into their primary devices. Once users verify their ZenKey account on a secondary device/browser, they will not be required to repeat the discovery process again for that particular device/browser.

**Note:** To prevent fraud, users will never be asked to provide a phone number in the web interface of the discovery service page.

**Sample Request**
```
https://discoveryui.myzenkey.com/ui/discovery-ui?%20client_id=CLIENT_ID%20&redirect_uri=REDIRECT_URI%20&state=STATE%20&sdk_version=SDK_VERSION%20&prompt=true
```


**Sample Response**
 ```
https://server.example.com/cb?login_hint_token=<xxx>&mccmnc=<xx>&state=<state>
```
[block:callout]
{
  "type": "info",
  "body": "login_hint_token is an optional parameter returned only if the request is made by a secondary device, such as a desktop browser or tablet. Requests that originate on a user's primary device will not return this parameter. Only include login_hint_token if present in the discovery response. Do not include login_hint_token if the parameter is not present in the response."
}

For more information about discovery, see [Integration options on the web](../../web/web-integration-options.md).

### Authorization Code Request, Universal Link Captured

Once discovery is completed, your app's SDK (Android, iOS, or JavaScript) constructs the request for the auth code. The ZenKey app on a device captures this standard OpenID Connect request which registers the universal link or is serviced by the carriers’ web interface as an alternative.

**Note:** If users have a carrier-specific ZenKey application on their devices already, the common request will be serviced by the carrier natively or via the web. Otherwise, users are instructed to download and install the ZenKey application.

Sample Authorization Code Request
```
https://server.example.com/authorize? 
client_id=CLIENT_ID 
&login_hint_token=LOGIN_HINT_TOKEN 
&redirect_uri=REDIRECT_URI 
&response_type=code 
&scope=SCOPES 
&state=STATE
```
 
#### Normal Authorization Code Request vs. Server-Initiated Flow

The majority of authorization code requests look a lot like the one shown directly above. However, if you configured your project for a server-initiated flow you would send a POST to the server_initiated_authorization_endpoint and receive a 200 response. This scenario differs from the regular authorization code request, which supports both GET and POST, and returns a 302 response. Another key difference for a server-initiated flow is that the response_type in your request must be set to async_token instead of code. Assuming these criteria have been met and the request contains a valid request JWT signed by you, the server-initiated response would resemble the following:
``` 
HTTP/1.1 200 OK
Content-type: application/json

{
    “correlation_id”:”123”,
    “auth_req_id”:”123325325352”,
    “expires_in”:”3600”
}
 ```

### SIM and User Authentication

User authentication can fail for any number of reasons. Perhaps a user gets a new SIM card, transfers their SIM card to a new device, or simply resets their device. In each scenario, a carrier detects a device_change, ZenKey might trigger a fraud alert, and a user fails to authenticate.

If, however, a user keeps their device yet changes their address, such a profile_change still allows that user to authenticate with your service. As a best practice, record your users' sub—the identifier that pairs a single user to a single application. Storing this value in a database allows you to make server-initiated calls to the carrier, instead of the phone number, and discern a device_change from a profile_change .

 
### Recovery Process

Whenever ZenKey launches on a user device, it verifies the following attributes:

Carrier User ID
IMSI: Identity of the SIM card
IMEI: Identity of the device
Application key: an application instance key for the ZENKEY application.

In the wake of a `device_change`, ZenKey triggers a recovery flow that challenges the user to provide three factors (methods) for re-associating the new attributes to users' accounts. During this process, ZenKey presents separate screens where users select the authentication method and successfully provide the requested information. 

Example recovery methods include:

  * Biometrics (fingerprints, face scans)
  * ZenKey PIN numbers
  * Email verification
  * Carrier login information
  * Single-use recovery codes
  * Trusted secondary devices

In addition to re-associating a ZenKey user after a `device_change`, the recovery process is also beneficial for users who get locked out of their accounts. In addition, recovery is necessary for users who wish to transfer their ZenKey account from one mobile provider to another. In this last scenario, users would:

1. Select their former carrier.
1. Sign in to their former carrier's account.
1. Confirm their identity by providing at least three ZenKey recovery methods.
1. Sign in to their new carrier's account.
1. Create their new ZenKey account.

Once users complete these steps, ZenKey informs them that all their data was transferred to their new carrier's account.
 
### Configuring Redirect URIs

When a user authorizes your application, the ZenKey SDK sends an authorization code request to the appropriate carrier then redirects users back to the app via your Redirect URI. This Redirect URI may also be used for callbacks to several ZenKey services.

**Using the Recommended Redirect URI**

The Redirect URI field in the [ZenKey Portal](https://portal.myzenkey.com/) is pre-populated with a recommended value that starts with your Client ID, but whose value you may change to a custom Redirect URI (see section directly below).

The ZenKey mobile SDKs assume the recommended Redirect URI is included. If you change this value, you must take extra steps to integrate a custom universal link for your mobile apps. 

**Using Multiple Redirect URIs**
You may also choose to keep the recommended Redirect URI, and add additional ones. 

Providing multiple Redirect URIs can be useful if you wish to use unique Redirect URIs for different environments (development vs. production, for example) or for different platforms that share the same Client ID. Additionally, you may want to receive callbacks at different URLs depending on the authorization type. 

If you configure your Redirect URI in the [ZenKey Portal](https://portal.myzenkey.com/), its scheme must resemble one of the following formats:

        - {client_id}://com.example.provider.sdk

        - https://URL/URI

        - {custom}://

        - com.sp.app://


As a general rule, you should also configure one or more valid Redirect URIs in the Redirect URIs attribute of your Client ID metadata, doing so as a space-separated list of redirects that are exact matches, with no wild-carding.

### Token Request

As a Service Provider, you must make a token request using your registered client_id and a JWT client assertion signed by your registered keys. Because you cannot secure secrets on a mobile device, we recommend using a server instance for these requests.

To make requests directly from a mobile device, ZenKey recommends your client first secure a signed assertion from your server. The client can then use that signed assertion in the request. For more info, please refer to the key binding section of this document.

In the example below, your client has secured the auth code and passed it to your server to get the token. Here, your server must re-run discovery in order to identify the carrier's endpoint data.

![RTA mage](88aa20b-rtaImage.jpeg)

**Token Request** 

![Token Request 1](token-request-1.png)
![Token Request 2](token-request-2.png)

**Sample Request**
```
POST /token HTTP/1.1 
Host: mno.com Authorization Basic Y2xpZW50aWQ6Y2xpZW50c2VjcmV0 
Content-Type: application/x-www-form-urlencoded 

grant_type=authorization_code 
&redirect_uri=https://www.client.com 
&code={auth_code} 
```

```
POST /token HTTP/1.1 
Host: mno.com Authorization Basic Y2xpZW50aWQ6Y2xpZW50c2VjcmV0 
Content-Type: application/x-www-form-urlencoded 

grant_type=authorization_code 
&redirect_uri=https://www.client.com 
&code={auth_code} 
&code_verifier={codeVerifier}
```


**Token Response** 

![Token Response 1](token-response-1.png)
![Token Response 2](token-response-2.png)
![Token Response 3](token-response-3.png)

**Sample Response**

```
HTTP/1.1 200 OK 
Content-type: application/json 
Cache-control: no-cache 

{ 
    "access_token": "....", 
    "token_type": "Bearer", 
    "refresh_token": "8xLOxBtZp8", 
    "expires_in": 3600, 
    "correlation_id”:”xxxxx”, 
    "id_token": "..." 
}
```

 ### Userinfo

ZenKey supports capturing user information based on the user's providing permission to you. The predefined scopes supported by ZenKey include:
  * openid
  * email
  * name
  * phone
  * postalCode
 
You must make a `userinfo` request using your access token to receive any of the user profile attributes. Service Providers that only need authentication or 2nd-factor authentication need not make the `userinfo` request.
The `userinfo_endpoint` extracted from the discovered carrier’s iss/.well-known/openid-configuration indicates the destination for this call.

### Userinfo request

Submit a `userinfo` request using your access token to receive any of the user profile attributes. The `userinfo_endpoint` extracted from the discovered carrier’s openid-configuration identifies the destination for this call.


![User info](user-info.png)

Sample Request
```
GET /v1/userinfo?sdk_version=1.1 HTTP/1.1
Host: mno.com
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMzQ1In0.eyJpc3MiOiJodHRwczovL3hjaWp2LnQtbW9iaWxlLmNvbSIsImlhdCI6IjE1NTI4NzU4ODIiLCJleHAiOiIxNTUyODc1ODgyIiwiYXVkIjoiY2NpZC1zcGFwcGxpY2F0aW9uMDAxIiwic3ViIjoiMzYwMjEwLTMzMnNmMjM0MzAxLTEyNDRqNDNnYmprczMzIiwiYWNyIjoiYWFsMyIsImFtciI6WyJod2siLCJmcHQiXSwiY25mIjp7Imt0eSI6IlJTQSIsIm4iOiJ3Z3c2aGs0Z1dNcUFmVS1SMnFNT1lIRHdTQ0lwYlMxY2pPTDZQRThZbXRYTTRLNU5seGgtYmVIYkZxM0Z5RjQwR256Vy16eW5wVjJYVVZOLXJ5Q0FHbVFtZEFMT1M3WkF1UV9kX2lqdlR4U3hwQjhWb3RodU41MmtmWVRwNnlwWWpJem5maVVWSFFLWFdQSFA4R0NXdzhSaHJzTzF2WHR6TEN3QVJSQ3ZrNXowMVNiVHZDTWVfQllyaDBhS0ZuMU9hWWUzSlgwM3NycDNUZGdUYl9KanVtVWdZZ1FKT3JUZkJjS1pZN1BlbWY5eDV6RUxyVjlmd0JaREotWWZoTkJGZUFvQ3o3N1VXczM4NkZqWlNJbHhwb2xWRlI2ek5jSjJ2WTBfNDhtLTJxTVpMWVpBRjItalRjZ2x2Mlo4YXVPVHM4dHU1R1hNUDEtRmtORURKcVlIMXciLCJlIjoiQVFBQiJ9fQ.czReSZPxr5BbFt68_XSSrfbpyss6k5ZgKhM1gJj9_fU
x-authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNTI0ODY3NDE1IiwiZXhwIjoiMTUyNDg3MTAxNSIsImFsZyI6InNoYTI1NiIsImVodHMiOiJhdXRob3JpemF0aW9uIiwiZWR0cyI6IjZhZjNlYTlhOGIyMzdkNDQwZDIzNjdkNzQ2MmNjMmE1NjgzYmJmMjZhYjg0Y2EyMDZmNmMyY2ZkYTJhNTQ1NDIifQ.MzHzE4_IsOKe4w6JOKP21GrNqaaWomj3Y_SQzMaTGRs
```

 
### Userinfo Response
 
```
{   “sub”:”mccmnc-1234567abcdefghijk”,
    “name”: {
        “value”:”Jane Doe”,
        “given_name”: “Jane”,
        “family_name”: “Doe”},
    “email”:{
        “value: “janedoe@example.com”},
    “postal_code”: {
        “value”:“90210”},
    “phone”: {
        “value”:“+13101234567”},  
}
   ```

 
### User Consent

Because ZenKey does not provide a silent user experience (i.e., an implicit flow where the user experience is seamless across a single page) and the prompt parameter is not the same across the different carriers, users must approve a transaction with each request (referred to as explicit user consent) using the user's primary device.