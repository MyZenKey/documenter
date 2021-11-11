---
sidebar_position: 13
---
# Creating Custom Redirect URI for Android

By default, the ZenKey SDK uses and registers a default redirect URI in the form of `<clientId>://com.xci.zenkey.sdk`. For every request made using the ZenKey SDK, the corresponding `AuthorizationResponse` contains the redirect URI used for the request.

To use a custom redirect URI, override the default value in your manifest and specify the custom redirect URI for your request with `ZenKeyButton` or `identityProvider`. Additionally,  ensure that your custom redirect URI is [valid](https://tools.ietf.org/html/rfc3986).