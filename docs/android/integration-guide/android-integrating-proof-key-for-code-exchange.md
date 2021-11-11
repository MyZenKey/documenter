# Integrating proof key for code exchange on Android

Proof Key for Code Exchange (PKCE) is a security extension to OAuth 2.0 for public clients on mobile devices. It helps prevent the interception of the authorization code on its return trip over an insecure transport protocol (e.g. deep linking between applications).

To support PKCE, the ZenKey SDK generates values for `codeVerifier`, `codeChallengeMethod`, and `codeChallenge`, using each as follows:

1.  **Authorization.** The ZenKey SDK passes a `codeChallengeMethod` and `codeChallenge` in the authorization request, then includes the `codeVerifier` in the `AuthorizationResponse`.

2.  **Code Verifier to SP Server.** Your app gets the `codeVerifier` from the `AuthorizationResponse` and securely transmits it to your backend in order to include the `codeVerifier` in your token request.

3.  **Token Request**. Your secure server requests an Access Token from the carrier with the additional `codeVerifier` parameter.

4.  **Access Token Sent.** The carrier applies the `codeChallengeMethod` to the received `codeVerifier`, then compares the resulting `codeChallenge` to the `codeChallenge` received during the authorization request. If the two values match, the carrier grants an Access Token. If not, the server denies the request and throws an error.


## Implementing PKCE

In light of the flow above, to implement PKCE, your app must be able to:

1.  Receive the `codeVerifier` value in the `AuthorizationResponse`;

2. Securely transmit the `codeVerifier` to your backend after a successful authorization request;

3. Configure your server to receive the `codeVerifier` via the authorization endpoint;

4. Include the `codeVerifier` value in the token request to ensure the request was authored from the same source and not intercepted.