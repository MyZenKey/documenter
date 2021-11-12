---
sidebar_position: 9
---

# Request an Access Token

After receiving an authorization code, your secure server requests an access token from the `token_endpoint` discovered earlier. Information on setting up your secure server is in [integration options on the web](doc:web-integration-options).

**Warning:** When you retrieve your client_assertion or client_secret from the ZenKey Developer Portal, store it on your secure backend and restrict access only to those who need it.

There are two ways to authenticate a client access token request:
- Client secret: For servers using Basic authorization; secret is typically used during initial development stages when testing basic flows.
- Client assertion: For servers using JWT. A client that uses the Server-Initiated flow or Trust Services must use a a JSON web keyset. 

**NOTE:** Existing clients with a client secret cannot change from a secret to a JSON web keyset. To change from client secret to client assertion, a new client configuration must be created using JWT.

Client assertion is the more secure authentication option. ZenKey recommends that Service Providers use client assertion whenever possible. Some Service Provider servers are configured to use a client secret authorization.

```
https://developer.myzenkey.com/docs/portal-obtain-your-client-secret
```

You must request the access token that corresponds with your previously chosen authentication type, which was decided at client configuration. Follow the instructions below that match your authentication type.

## For client secret type (Basic authorization)"

The client secret is used by OAuth 2.0 to communicate between the authorization server and the client.

1. Base64-encode your client ID and client secret.

```        
        Base64Encode({client_id} : {client_secret})
```

2. Insert this encoded value in the header under Authorization.

```
        Authorization:Basic {encoded_value_here}
```

3. Also in the header, specify `Content-Type:application/x-www-form-urlencoded`

4. In the token request body, include the *grant_type*, *code*, and *redirect_uri* attributes:

```
{
    "grant_type" : "authorization_code",
    "redirect_uri" : "{auth redirect URI}",
    "code" : "{authentication code}"
}
```

**Example: Client secret (Basic authorization)**
Assume the Base64 encoding of the client ID and client secret returned a value of *nN9YDBH7vM...*

```
POST /token HTTP/1.1
Host: mno.com
Authorization: Basic {nN9YDBH7vM...}
Content-Type: application/x-www-form-urlencoded

{
    "grant_type" : "authorization_code",
    "redirect_uri" : "https://www.client.com",
    "code" : "ilWaRnluBi"
}
```
[block:api-header]
{
  "title": "For client assertion (JWT) type"
}
[/block]
Client assertion uses a JSON web token (JWT) to offer more security than the OAuth authorization that uses a client secret. You do not specify an Authorization in the header when using client assertion.

To construct the access token request:

1. In the header, specify `Content-Type:application/x-www-form-urlencoded`

2. In the body of your token request, include the completed *grant_type*, *client_id*, *code* (auth code), and *redirect_url* attributes. Specify the *client_assertion_type* attribute as jwt. Use the encoded value of the client assertion for the *client_assertion* attribute.

- *grant_type* = *authorization_code*
- *redirect_uri* = {auth redirect URI}
- *code* = {auth code}
- *client_id* = {client identifier}
- *client_assertion_type* = *urn:ietf:params:oauth:client-assertion-type:jwt-bearer*
- *client_assertion* = {encoded client assertion}

The decoded client assertion is constructed as follows:
```
{
    "typ" : "jwt",
    "kid" : "{matching registered key ID}",
    "alg" : "RS256"
}
{
    "iss" : "{client identifier}",
    "sub" : "{client identifier}",
    "client_id" : "{client identifier}",
    "aud" : "{aud URI}",
    "exp" : "{epoch time}",
    "iat" : "{epoch time}",
    "jti" : "{unique transaction UUID}"
}
```
**Notes:**
- The fields shown above are mandatory.
- Use your private key to sign the jwt.
- Be sure the key ID (`kid`) matches the key ID of your private key.
- The `alg` parameter must be `RS256`.
- Include the `client_id` parameter in both the client assertion and the body of the request. The value of the `client_id` parameter in the access token request must match the value of the `client_id` parameter in the unencoded client assertion.

Encode the client assertion and insert it into the access token request as the value of the *client_assertion* parameter, as previously described.

**Example: Client assertion (JWT)**

***Access token request***
Assume the client assertion encodes to a value of *2Kwi4QkzWaKj9<truncated//...>*

```
POST /token HTTP/1.1
Host: carrier.com
Content-Type: application/x-www-form-urlencoded
 grant_type=authorization_code&redirect_uri=www.client.com&client_id=ccid-client01&code=i1WsRn1uB1&client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer&client_assertion=2Kwi4QkzWaKj9<truncated....>
```

***Client assertion***
```
{
    "typ" : "jwt",
    "kid" : "IFz0RB8k...",
    "alg" : "RS256"
}
{
    "iss" : "ccid-client01",
    "sub" : "ccid-client01",
    "client_id" : "ccid-client01",
    "aud" : "https://token.carrierurl.com/",
    "exp" : "1623367013",
    "iat" : "1623367013",
    "jti" : "09518450<replay_detection>0984509485"
}
```