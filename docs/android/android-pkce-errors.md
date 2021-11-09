# PKCE errors on Android

1. **No Code Verifier**. If the server requires PKCE, but the client does not send a `codeVerifier`, the authorization endpoint will send an error set to `invalid_request`. The `error_description` or response of `error_uri` will likely explain the error (e.g.`codeVerifier required`).

1. **Incorrect Code Verifier**. Since ZenKey sends a hashed version of the `codeVerifier` in the authorization request, when the carrier receives this `codeVerifier` in the token request they can re-hash it and validate whether the two values match. If not, you will receive a `request_denied` error.