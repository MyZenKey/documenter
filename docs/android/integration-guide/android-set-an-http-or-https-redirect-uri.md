---
sidebar_position: 17
---
# Setting HTTP or HTTPS Redirect URI for Android

HTTPS redirects are more secure and preferable to HTTP. If you require an HTTP/HTTPS redirect URI instead of a custom scheme, modify your AndroidManifest.xml:

```xml
<activity android:name="com.xci.zenkey.sdk.RedirectUriReceiverActivity"  
        tools:node="replace">
    <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/> 
        <data android:scheme="https"
              android:host="www.example.com"
              android:pathPrefix="/oauth2redirect"/> 
    </intent-filter>
</activity>
```