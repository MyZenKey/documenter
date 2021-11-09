# Set redirect URI

After authentication, ZenKey uses your redirect URI to send users back to your app. Real-time requests must match one of the Redirect URIs in the ZenKey portal. 

## Redirect URI value

The “Default Redirect URI” uses this format: `{client_id}://com.xci.provider.sdk`

The Redirect URI field in the ZenKey portal pre-populates itself with a recommended value. The value starts with your client ID. If you change that value and later want to reuse the recommended value, click the button.

The ZenKey mobile SDK assumes that you have included a Redirect URI and that you kept the “Default Redirect URI” from the portal. The mobile SDKs register the Default Redirect URI with the OS to return control to your mobile app during and after the authentication flow. Keep the default Redirect URI unless you are sure it will not be used.

Note: Only **localhost** can be used when in Developer Mode.

## Supported Redirect URI types

The Redirect URI can be a simple link, a deep link, or a universal link. Redirect URIs also support URLs with variables (e.g. `{client_id}://com.xci.provider.sdk/level2/desired_ref/&amp;var=zk`).

## Multiple Redirect URIs

You may add multiple Redirect URIs for web apps. Additional Redirect URIs are unnecessary for mobile apps. Multiple Redirect URIs can be useful in situations such as the following.

 - To use different Redirect URIs in different environments, like development and production.
 - To use different Redirect URIs on different platforms that share the same Client ID.
 - To receive callbacks at different URLs by authorization type.

For more information about setting up Redirect URIs, see [creating a custom redirect URI on Android](doc:android-creating-a-custom-redirect-uri) or [creating a custom redirect URI on iOS](doc:ios-creating-a-custom-redirect-uri).

## Create a custom redirect URI for Android

By default, the ZenKey SDK uses and registers a default redirect URI in the form of *<clientId>://com.xci.zenkey.sdk</clientId>*. For every request made using the ZenKey SDK, the corresponding AuthorizationResponse contains the redirect URI used for the request.

To use a custom redirect URI, override the default value in your manifest and specify the custom redirect URI for your request with ZenKeyButton or identityProvider. Additionally, ensure that your custom redirect URI is valid.

## Override Default Redirect URI for Android
```
<activity android:name="com.xci.zenkey.sdk.RedirectUriReceiverActivity"
            tools:node="replace">
    <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="com.mydomain" android:host="authorize"/>
    </intent-filter>         
</activity> 
```