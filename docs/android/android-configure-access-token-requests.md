# Configuring Access Token Requests for Android

With the user’s consent in the form of an authorization code, your secure server will request an access token from the `token_endpoint` discovered earlier. Information on setting up your secure server can be found in [integration options on the web](doc:web-integration-options).

To configure this request:  

1. Base64 encode your `client_id` and `client_secret`:

```        
        Base64Encode(“{client_id}:{client_secret}”) 
```

Note: When you retrieve your client_secret from the ZenKey Developer Portal, store your client_secret on your secure backend and restrict access only to those who need it.

2. Insert this encoded value in your Authorization header:
```
        'Authorization': "Basic {encoded_value_here}"
```

3. Specify the `Content-Type` as URL-encoded:
```
        Content-Type: application/x-www-form-urlencoded
```

4. Then include the following parameters in the body of your token request:

```
    grant_type="authorization_code"
    code="{auth_code}"
    redirect_uri="{auth_redirect_uri}"
    
```

Here are all the components working together:

```
POST /token HTTP/1.1
Host: mno.com
Authorization: Basic {encoded_value_here}
Content-Type: application/x-www-form-urlencoded

    grant_type=authorization_code
    &redirect_uri=https://www.client.com
    &code={auth_code}
   
```

```
POST /token HTTP/1.1
Host: mno.com
Authorization: Basic {encoded_value_here}
Content-Type: application/x-www-form-urlencoded

    grant_type=authorization_code
    &redirect_uri=https://www.client.com
    &code={auth_code}
    &code_verifier={codeVerifier}
```
