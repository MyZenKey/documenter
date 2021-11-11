---
sidebar_position: 5
---

# Receiving Authorization Request Response on Android

ZenKey's SDK returns the authorization result using an Intent. To receive responses from authorization requests, your Activity must be designed to receive the Intent.

To handle callbacks, use the `onActivityResult()` method. Results come back in the requesting Activity/Fragment `onActivityResult()` method even without any `PendingIntent` for your request,

When the Activity ends, the result the authorization request passes back with `onActivityResult(int requestCode, int resultCode, Intent data)`. Because the Intent contains the result of the authorization request, you can extract the `AuthorizationResponse` by calling the `AuthorizationResponse.fromIntent(intent)` method.


```java
public class MyActivity extends AppCompatActivity { 

    private static final int REQUEST_CODE_ZENKEY = 1234;

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
       if (requestCode == REQUEST_CODE_ZENKEY) {
          if (resultCode == RESULT_OK) {
              handleAuthorizationResponse(data);
          } else {
             //Authorization canceled by user.
          }
       }
    }

    private void handleAuthorizationResponse(Intent data) {
       AuthorizationResponse response = AuthorizationResponse.fromIntent(data);
       if(response.isSuccessful()){
          // Authorization Succeeded
          finishZenKeyAuthentication(response);
       } else {
           //Authorization Failed
           handleZenKeyError(response);
       }
    }

    private void finishZenKeyAuthentication(AuthorizationResponse response) {
       String authorizationCode = response.getAuthorizationCode();
       String redirectUri = response.getRedirectUri();
       String mcc = response.getMcc();
       String mnc = response.getMnc();
       // Send these values to your backend to finish the authentication process.
    }

    private void handleZenKeyError(AuthorizationResponse response) {
       AuthorizationError error = response.getError();
       switch (error){
          case AuthorizationError.INVALID_CONFIGURATION:
             break;
          case AuthorizationError.INVALID_REQUEST:
             break;
          case AuthorizationError.REQUEST_DENIED:
             break;
          case AuthorizationError.REQUEST_TIMEOUT:
             break;
          case AuthorizationError.SERVER_ERROR:
             break;
          case AuthorizationError.NETWORK_FAILURE:
             break;
          case AuthorizationError.DISCOVERY_STATE:
             break;
          case AuthorizationError.UNKNOWN:
             break;
       }
    }
}
```

```java
public class MyActivity extends AppCompatActivity {

    private static final int REQUEST_CODE_ZENKEY = 1234;

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
       if (requestCode == REQUEST_CODE_ZENKEY) {
          if (resultCode == RESULT_OK) {
              handleAuthorizationResponse(data);
          } else {
             //Authorization canceled by user.
          }
       }
    }

    private void handleAuthorizationResponse(Intent data) {
       AuthorizationResponse response = AuthorizationResponse.fromIntent(data);
       if(response.isSuccessful()){
          // Authorization Succeeded
          finishZenKeyAuthentication(response);
       } else {
           //Authorization Failed
           handleZenKeyError(response);
       }
    }

    private void finishZenKeyAuthentication(AuthorizationResponse response) {
       String authorizationCode = response.getAuthorizationCode();
       String redirectUri = response.getRedirectUri();
       String mcc = response.getMcc();
       String mnc = response.getMnc();
       String codeVerifier = response.getCodeVerifier();
       // Send these values to your backend to finish the authentication process.
    }

    private void handleZenKeyError(AuthorizationResponse response) {
       AuthorizationError error = response.getError();
       switch (error){
          case AuthorizationError.INVALID_CONFIGURATION:
             break;
          case AuthorizationError.INVALID_REQUEST:
             break;
          case AuthorizationError.REQUEST_DENIED:
             break;
          case AuthorizationError.REQUEST_TIMEOUT:
             break;
          case AuthorizationError.SERVER_ERROR:
             break;
          case AuthorizationError.NETWORK_FAILURE:
             break;
          case AuthorizationError.DISCOVERY_STATE:
             break;
          case AuthorizationError.UNKNOWN:
             break;
       }
    }
}
```
