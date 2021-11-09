# Managing Tokens

When the carrier issues an access_token and id_token, by default the access_token expires within 30 minutes (1800 seconds) as defined by the 'expires_in' parameter of the token response.   
 
```
HTTP/1.1 200 OK 
Content-type: application/json 
Cache-control: no-cache 

{ 
     "access_token": "...", 
     "token_type": "Bearer", 
     "refresh_token": "8xLOxBtZp8", 
     "expires_in": 1800, 
     "correlation_id":"xxxxx", 
     "id_token": "..." 
}
```
Despite the relatively short expiration of the access_token, we discourage you from using ZenKey for session management in your app. Failing to destroy the server-side session is a common and dangerous logout error since keeping the session or token alive, even after the user logs out of the application, allows attackers valid authentication data and therefore the ability to hijack a user’s account.

The best practice is to store your access tokens in a secure database. Restrict access to that database so that your client secret and access tokens are only readable by the owner, limiting edit/write privileges to the database table and encrypting access tokens before placing them in any data stores.

Regarding the id_token, when you Base64url-decode its JWT payload, ensure that no line breaks, whitespace, or other additional characters were used as these suggest foul play. Remember that the id_token contains claims about the authentication of your end-user, so you should always validate these standard claims such as the token expiration and token issuer. 

Additionally, check that the structures of the JWT—its header, payload, and signature—are well-formed. Verify that the token is correctly signed by the correct entity using the proper key. If using a nonce, confirm that it is included in the id_token as well. Forward the JWT to your API as a header; never persist it in localstorage or create cookies on the client to save the JWT.

Although these best practices for managing tokens are by no means exhaustive, please be sure to take these precautions before using an access_token to request user info.