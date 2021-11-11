---
sidebar_position: 24
---
# Requesting User Information

Upon receiving an Access Token, you may then request user info by issuing a GET request from your backend to the `userinfo_endpoint` discovered earlier.

```
GET /userinfo HTTP/1.1
Host: mno.com
Authorization: bearer {ACCESS_TOKEN}
```

The response will contain JSON with the user information requested by your scopes and approved by the user.


```
{   “sub”:”mccmnc-1234567abcdefghijk”, 
    “name”: {
        “value”:”Jane Doe”,
        “given_name”: “Jane”,
        “family_name”: “Doe”},
     “email”: {
        “value": “janedoe@example.com”},
    “postal_code”: {
        “value”:“90210”},
    “phone”: {
        “value”:“+13101234567”}
}
```