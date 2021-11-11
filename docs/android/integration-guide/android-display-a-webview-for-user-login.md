---
sidebar_position: 8
---

# Displaying Webview for User Login on Android

With ZenKey, your app can use a `WebView` to trigger the native SDK letting users sign in via `AuthorizeIntentBuilder`. It's unnecessary to override the ZenKey button to call the Android SDK via a `WebView`. Rather, you override the `WebViewClient.shouldInterceptRequest` method and use `AuthorizeIntentBuilder` to generate an `Intent` to call `Context.startActivityForResult` with the generated `Intent`.

For more on `shouldInterceptRequest`, please refer to the Android documentation on `WebViewClient` [here](https://developer.android.com/reference/android/webkit/WebViewClient.html#shouldInterceptRequest(android.webkit.WebView,%20android.webkit.WebResourceRequest)). 

To learn about `startActivityForResult`, visit the `Context` class page [here](https://developer.android.com/reference/android/content /Context#startActivity(android.content.Intent)).