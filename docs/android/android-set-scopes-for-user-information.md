# Setting Scopes for User Info on Android

By default, authorization requests made with the ZenKey SDK include the scope OpenId. Set additional scopes using the `ZenKeyButton` as follows:

```java
public class MyActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_layout);
        findViewById(R.id.myZenKeyButton).setScopes(Scopes.EMAIL, Scopes.fromValue("Any"));
    }
}
```

## Request a specific level of user authentication

 Include the acr_values parameter in the authorization request to specify the level of authentication to use and request from users.

* `acr_values`  - (Optional) The user authentication level to request from users.
    - a1: Use this authentication level if you only require low-level authentication for a user. In this experience, the user is not asked to provide their PIN or biometrics data.
    -  a2: Do not use this authentication level as it will produce an inconsistent effect between carriers.
    - a3: (Default) Use this authentication level if you require the user to provide their PIN or biometrics data. In this experience, the user must provide their PIN or biometrics data if they have not authenticated in the last 30 minutes or prompt=login.

### Use a ZenKeyButton to set the level user authentication

zenkeyButton.setAcrValues(ACR.AAL1)

### Use an intentbuilder to set the level user authentication
intentbuilder.withAcrValues(ACR.AAL1)

For information about sharing user scopes, see [Consenting to share user information](../additional-topics/consenting-to-share-user-information.md) .