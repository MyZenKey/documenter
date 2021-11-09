# Custom Redirect URI for IdentityProvider on Android

When using `identityProvider`,  configure the custom Redirect URI as follows:

```java
public class MyActivity extends AppCompatActivity {

    private static final int REQUEST_CODE_ZENKEY = 1234;

    @Override
    protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState);
       setContentView(R.layout.my_layout);
       findViewById(R.id.myZenKeyButton).setOnClickListener(v -> startZenKeyAuthorization());
    }

    private void startZenKeyAuthorization(){ 
        startActivityForResult(
                ZenKey.identityProvider()
                    .authorizeIntent()
                    .withRedirectUri(new Uri.Builder()
                                       .scheme("https")
                                       .authority("app.example.com")
                                       .path("/oauth2redirect")
                                       .build())
                    .build(),
                REQUEST_CODE_ZENKEY); 
    }
}        
```