# Authentication Flows

Securing your applications and their associated data and resources is important. By prompting each mobile user who attempts to access your applications to authenticate who they are and that they are known by, their carriers fulfill this requirement. 

There are two authentication flows. The primary flow applies to the user's primary mobile device and supports Service Provider native apps and Service Provider browser-based websites on the same device as ZenKey. The secondary flow applies to secondary devices used with your services that are accessing ZenKey from the Service Provider's website.

### Primary Auth Flow

As the following diagram shows, consumers access your app or website from their primary mobile device.

![Primary device](f18ca67-PrimaryDeviceHighLevelFlow.jpeg)

It flows from consumer through a Service Provider website, to Service Provider backend, to mobile carrier, to ZenKey and back again.

1. The user's wireless carrier is determined by the mccmnc — a six-digit number representing the user’s mobile country code (mcc) and mobile network code (mnc) — whose value allows for SIM and user authentication. The carrier returns an authorization code via your Redirect URI.
1. Your app or website makes an authorization code request to the local ZenKey app.
1. If the user consents to share information, your backend server issues a token request for user info and other resources.

### Secondary Auth Flow

The diagram below shows the user using a secondary device (such as a laptop) attempting to access a website.

![Secondary device](https://files.readme.io/a2a7eae-SecondaryDeviceHighLevelFlow.jpeg)

In this case, ZenKey requires the user to associate the device with the user's primary mobile device. Once accomplished, the user can authenticate and gain access to your website.

As these illustrations show, authentication involves the user’s carrier, your backend, and the ZenKey platform in the following sequence:

1. The SDK presents the carrier Discovery UI. If the user authorizes a secondary device from an app on a tablet, the SDK uses a web view for this step. Since secondary device flows are not initiated from the user's phone, if the user has already trusted their browser they may attempt to log in to your app or website from that trusted browser.
1.  If the user has not designated the browser as 'trusted', they must scan the visual code or enter the numeric code shown on the secondary device into the ZenKey app on their primary device.
1. Once the user approves the request in the ZenKey app on their primary device, the carrier Discovery UI returns a login_hint_token to your app’s Redirect URI. This login_hint_token is only returned to a secondary device for use during the authentication request.
1. To perform SIM and user authentication, your app makes an authorization code request to the appropriate carrier and receives the auth code in its Redirect URI.
1. If the user consents to share information, your backend server issues a token request for user info and other resources.