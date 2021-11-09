# Access Token Response

In addition to an access token, the token response returns an ID Token which includes the `sub` — an identifier that pairs a single user with a particular `client_id`. When you receive the `sub`, store it in your user database for reference. Do not transmit this `sub` to your client app.

**Sample Token Response:**
``` 
HTTP/1.1 200 OK
Content-type: application/json
Cache-control: no-cache

{
    "access_token": "....",
    "token_type": "Bearer",
    "refresh_token": "8xLOxBtZp8",
    "expires_in": 3600,
    "correlation_id”:”xxxxx”,
    "id_token": "..."
}
```