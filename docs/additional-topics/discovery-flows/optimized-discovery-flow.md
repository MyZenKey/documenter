# Optimized Discovery Flow

To support Service Providers looking to reuse existing OpenID connect logic and code, ZenKey created a new optimized discovery endpoint. This endpoint receives the full OIDC request and once discovery is complete, it immediately redirects the request to the correct carrier. 

The following is a high-level sequence diagram illustrating this flow: 
![Discovery flow](https://files.readme.io/1a287ad-optimizeddiscovery.png)

### Implications of the ZenKey Auth Endpoint

  * Service Providers make three high-level requests (authcode request, token request, and userinfo request).
  * While ZenKey does support flows similar to OIDC CIBA with server-initiated requests, ZenKey does not support OIDC implicit flows.
  * Service Providers must see the MCCMNC that accompanies the authcode. This MCCMNC informs Service Providers which carrier services the subscriber. That informs the Service Provider which token and userinfo endpoints to use.
      -Since token and userinfo requests contain user identifiable data in the responses, they are not visible to the central ZenKey service. 

### Steps for the New ZenKey Auth Endpoint 

This endpoint (`https://auth.myzenkey.com/v1/auth`) is not defined in an OpenID configuration file as the configuration files contain the `authentication_endpoint` for the correct carrier of the subscriber.

*This endpoint URI may change.*

The Service Provider solution must be defined with this variable:
  * GET request to this endpoint redirects to the Carrier Discovery UI.
      -Required url parameters include all the standard OIDC attributes that a Service Provider defines (e.g. `client_id`, `redirect_uri`, `scope`, and `state`).
      -Optional url parameters include `acr_values`, `context` and `prompt`.
      -Any additional parameters provided are automatically forwarded to the carrier’s authorization endpoint.
  * ZenKey may cache OIDC request parameters while the discovery process steps are being completed.

  * Discovery UI determines the correct carrier for the subscriber.
      -The optimized discovery service substitutes its own `redirect_url` and `state` so it can handle the redirect response, but the state variable is the original value when the request is sent to the carrier. 
      -The discovery `redirect_url` may also be replaced with a temporary value, but will be the correct Service Provider redirect when the request is sent to the carrier. 
      -The discovery service response includes a `login_hint_token` when using a secondary device.

* After discovery is complete, users' “user agent” (browser) redirects to the correct carrier with any needed `login_hint_token` added to the request. 
* After the request is completed on the user’s primary device, the `redirect_uri` opens in the user agent (browser). 
      -Responses contain url parameters including `code`, `state`, `mccmnc`, `correlation_id`, `error`,  and `error_description` as defined in the current auth request response.

### Requests After New Discovery Flow

Once the new discovery flow is complete, Service Providers make calls to the carrier Token and UserInfo endpoints:

1. Token Request to token_endpoint
  * This request occurs on the client-server because it requires an authorization header that includes the client secret.
  * The post request from client-server to this endpoint submits a form.
      -Required form parameters include `token_url`, `grant_type`, `code`, and `redirect_uri`
  * The response is JSON with `access_token`,  `id_token`, `refresh_token`, and `correlation_id`.

2. Request user info from `user_endpoint`
  * This request occurs on the client-server because user info should be transferred safely.
      -The get request from the client-server to this endpoint containing the auth header.
      -This requires the access token in the authorization header and key binding signature in the x-authorization header.
  * This request returns JSON with user info.

If you're interested in the MODRNA-Based Discovery Flow you can view documentation [here](modrna-based-discovery-flow.md)."
