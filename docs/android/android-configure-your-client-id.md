# Configuring Client ID on Android

The ZenKey SDK manifest contains a placeholder for `clientId`. In order to compile an app with the ZenKey SDK, register the `clientId` placeholder value in the app `build.gradle`. Replace `MY_CLIENT_ID` by the value obtained in the previous step.

```groovy
android {
    defaultConfig {
        manifestPlaceholders = [zenKeyClientId: 'MY_CLIENT_ID']
    }
}
```