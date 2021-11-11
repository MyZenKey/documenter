---
sidebar_position: 13
---

# Handling Authorization Responses on Android

`PendingIntent` is a description of an Intent and target action to perform with it. Objects returned by `PendingIntent` can be directed toward other applications in order to perform a specified action such as integrating the ZenKey SDK for either successful or unsuccessful authorization responses.

```java
public class MyActivity extends AppCompatActivity {

    private static final int REQUEST_CODE_ZENKEY = 1234; 

    private void startZenKeyAuthorization(){
        startActivityForResult(
                ZenKey.identityProvider()
                    .authorizeIntent()
                    .withSuccessIntent(PendingIntent.getActivity(this, Activity.RESULT_OK, new Intent(this, SuccessActivity.class), PendingIntent.FLAG_UPDATE_CURRENT))
                    .withFailureIntent(PendingIntent.getActivity(this, Activity.RESULT_OK, new Intent(this, FailureActivity.class), PendingIntent.FLAG_UPDATE_CURRENT))
                    .build(),
                REQUEST_CODE_ZENKEY);
    }
}        
```

Specifiying `PendingIntent` to start in case of completion is an alternative. This `PendingIntent` is ignored if the above `PendingIntents` are specified as well.

```java
public class MyActivity extends AppCompatActivity {

    private static final int REQUEST_CODE_ZENKEY = 1234;

    private void startZenKeyAuthorization(){
        startActivityForResult(
                ZenKey.identityProvider()
                    .authorizeIntent()
                    .withCompletionIntent(PendingIntent.getActivity(this, Activity.RESULT_OK, new Intent(this, CompletionActivity.class), PendingIntent.FLAG_UPDATE_CURRENT))
                    .build(),
                REQUEST_CODE_ZENKEY);
    }
}        
```

Specifying a `PendingIntent` to start for cancelled authorizations is another option.

```java
public class MyActivity extends AppCompatActivity {

    private static final int REQUEST_CODE_ZENKEY = 1234;

    private void startZenKeyAuthorization(){
        startActivityForResult(
                ZenKey.identityProvider()
                    .authorizeIntent()
                    .withCancellationIntent(PendingIntent.getActivity(this, Activity.RESULT_CANCELED, new Intent(this, CancellationActivity.class), PendingIntent.FLAG_UPDATE_CURRENT))
                    .build(),
                REQUEST_CODE_ZENKEY);
    }
}        
```

Inside the started Activity, developers obtain the `AuthorizationResponse` using `AuthorizationResponse.fromIntent(intent)` passing the intent which started the activity as a parameter.

```java
public class MyResultActivity extends AppCompatActivity {

    @Override
        protected void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           AuthorizationResponse response = AuthorizationResponse.fromIntent(getIntent());
        }
}        
```