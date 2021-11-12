---
sidebar_position: 10
---

# Decoding the ID Token

The ID Token needs decoding. Once you decode the JWT payload, it contains claims about the authentication of your end-user. As a best practice, always validate the ID Token after decoding. Verify the signature and claims contained within the ID Token. For more information about each parameter, refer to [integration options on the web](doc:web-integration-options).

**Sample Decoded ID Token:**

```
{   
    "type"="at+jwt",  
    "kid":"xxx"
}

{
    "iss": https://mno.com,
    "sub": "mccmnc-client0001",  
    "aud": "ccid-sp00001",
    "nonce": "n-0S6_WzA2Mj",
    "exp": 1311281970,
    "iat": 1311280970,
    "auth_time": 1311280969,
    "acr": "a3",
    ...
}
```