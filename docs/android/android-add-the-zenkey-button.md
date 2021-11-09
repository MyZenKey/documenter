# Adding ZenKey Button on Android

The ZenKey SDK provides a default button to interact with the `identityProvider` and start the authorization intent. To use the ZenKey button, add the following to your XML layout.

```xml
         <com.xci.zenkey.sdk.widget.ZenKeyButton
             android:id="@+id/zenKeyButton"
             android:layout_width="match_parent"
             android:layout_height="wrap_content"/>
```


## Add a dark color button

The button's appearance is customizable. A dark button style is the default style and looks like this:

![ZenKey dark button](ab0a93f-ZenKey_Dark_Button.png)

## Add a light color button

To use the light button style, add the parameter ```app:ZenKeyButtonMode="LIGHT"``` as follows:

```xml
        <com.xci.zenkey.sdk.widget.ZenKeyButton
              android:id="@+id/zenKeyButton"
              android:layout_width="match_parent"
              android:layout_height="wrap_content"
              app:ZenKeyButtonMode="LIGHT"/>
```

The light button style looks like this:

![ZenKey light button](bbd4993-ZenKey_Light_Button.png)

## Add button text 

Set the text of your button using the parameter ```app:ZenKeyButtonText```. For example:

```xml
       <com.xci.zenkey.sdk.widget.ZenKeyButton
            android:id="@+id/zenkeyButton"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            app:ZenKeyButtonMode="DARK"
            app:ZenKeyButtonText="CONTINUE"/>
```

## Add a fragment button

To use the ZenKey button inside a fragment, set the fragment to the `ZenKeyButton` to receive results inside the fragment `onActivityResult()` method. Otherwise, receive results in the `onActivityResult()` method of the host activity.

```java
public class MyFragment extends Fragment {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.my_layout);
        findViewById(R.id.myZenKeyButton).setFragment(this);
    }
}
```

## Create a custom button

Custom buttons must meet the ZenKey brand integration guidelines for approval. Read more about button requirements in the [identity service brand integration guidelines](../best-practices/best-practices-identity-service-brand-integration-guidelines/brand-guidelines-zenkey-buttons.md)


Instead of the default `ZenKeyButton`, you may use your own custom button or view. This option is useful if your login UX is presented in a WebView see [display a webview for user login on Android](android-display-a-webview-for-user-login.md).

To make authorization requests, you can use `identityProvider`,  but we recommend using `ZenKeyButton` (the default button interacts with the identityProvider and initiates the authorization intent). If you decide to use `identityProvider`, you call `ZenKey.identityProvider().authorizeIntent().build()`.

The intent obtained from the `identityProvider` must start by using [Activity.startActivityForResult(Intent, Int)](https://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent,%20int)).

You can use any request code.

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
                    .withScopes(Scopes.EMAIL, Scopes.ADDRESS)
                    .build(),
                REQUEST_CODE_ZENKEY);
    }
}        
```

* For more information see [GitHub sp-sdk-android](https://github.com/MyZenKey/sp-sdk-android).