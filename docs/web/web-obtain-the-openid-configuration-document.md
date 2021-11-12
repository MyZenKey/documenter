---
sidebar_position: 5
---

# Obtain the OpenID Configuration Document

The iOS or Android SDK within your application on a user's primary device covers this section and its subsections.

The carrier's discovery response contains the OpenID configuration document. Fetch the OpenID configuration document for each authentication request as it differs between carriers. Below is a snippet of what a carrier might return: 

```bash
HTTP/1.1 200 OK
Content_type: application/json
Cache-control: max-age=864000

  {
   "issuer":"https://mno.com",
   "authorization_endpoint":"https://mno.com/connect/authorize",
   "token_endpoint":"https://mno.com/connect/token",
   "userinfo_endpoint":"https://mno.com/connect/userinfo",
   "registration_endpoint":"https://xcijv.com/connect/register",
   "scopes_supported":["openid", "profile", "email", "address", "phone", ".."],
   "response_types_supported":["code", "async_token” ],
   ...
  }
 
```