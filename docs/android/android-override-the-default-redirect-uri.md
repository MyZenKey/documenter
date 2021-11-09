# Overriding Default Redirect URI for Android

```xml  
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