# Definitions and basic concepts

## Account Linking 
Refers to associating a user’s ZenKey account with the account they have created with your service.
 
## Authentication
**Validates the user and device.** The primary authentication flow applies to the user's mobile phone as the primary device. This confirms that the user has a carrier account with this device and is a legitimate user. The secondary authentication flow validates a secondary device for the user associated with the authenticated account and the user's primary device.
 
## Auth Code 
**The authorization code is a temporary code that clients exchange for an access token.** The code itself is obtained from the authorization server where the user learns what information the client is requesting and either approves or denies the request. To exchange this code for access and ID tokens, pass it to the discovered /token endpoint.
 
## CCID Application
**A carrier-specific application for managing the user's mobile profile and supporting ZenKey.** Users download the app to a mobile phone via the App Store or Google Play. The CCID app is the main authenticator for all flows.
 
## Client ID (client_id)
**The ID by which apps are identified by ZenKey**. Client IDs are auto-generated, lowercase, non-editable, and start with "ccid-" followed by 16 alphanumeric characters. You may request multiple Client IDs (each with its own configuration).
 
## Deep Links
In the context of mobile apps, deep linking consists of using a uniform resource identifier (URI) that links to a specific location within a mobile app rather than simply launching the app. 
 
## Discovery
A process for identifying the mobile user's carrier.
 
## OpenID Connect
A simple identity layer on top of the OAuth 2.0 protocol allows computing clients to verify the identity of an end-user based on the authentication performed by an authorization server as well as obtaining basic profile information about the end-user in an interoperable and REST-like manner. ZenKey requests and receives information about authenticated sessions and end-users.
 
## Primary Device
The user's mobile device containing the SIM by which the user is authenticated.
 
## Secondary Device
Another device associated with the user as a trusted device for accessing applications.
 
## Scope
**Attributes that define what user account information an application may access.** Scopes are shown to users on the consent screen and the access token issued to your application is limited to the scopes granted. Examples of ZenKey scopes include openid, email, name, phone, and postal code. Besides openid, all scopes are optional. Please include only those scopes you need. (See also: userinfo.)
 
## SIM
**The card in a user's mobile phone, which also serves as one of several methods for authenticating a user’s ZenKey account.** If a user’s SIM card changes, a recovery flow is triggered and the user must provide at least three factors of authentication (e.g. PIN/biometric, recovery code, trusted device, carrier username/password).
 
## Token
**Data created by a server in order to retrieve a certain resource and/or identify a particular user. **In order to securely transmit information, tokens are often encrypted, expire within a specified period of time, and must be decoded and validated once they have been received. Common examples of tokens include access tokens and ID tokens.
 
## Trusted Device/Browser
Users can designate another desktop or tablet device as a trusted device. This is a secondary device, which is deemed "trusted" since it is associated with the known user and the user's primary mobile device.
 
##User Info
**Personal information you wish to capture about the user such as name, address, phone. **Each of these are referred to as a scope. The user has control over what userinfo gets shared with your app or website.