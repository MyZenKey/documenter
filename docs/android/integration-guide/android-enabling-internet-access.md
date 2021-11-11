---
sidebar_position: 4
---

# Enabling Internet Access on Android

If you don't already have internet permissions, add them to your Android manifest.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <uses-permission android:name="android.permission.INTERNET" />
    <application>
        [...]
    </application>
</manifest>
```