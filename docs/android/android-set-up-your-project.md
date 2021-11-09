# Project Setup on Android

The ZenKey SDK has the following dependency.
```groovy
"com.android.support:customtabs:27.1.1"
```
Applications using AndroidX must Jetify this dependency. For more information about migrating to AndroidX, see [Migration](https://developer.android.com/jetpack/androidx/migrate).

If your application uses another version of the support library, you can force usage of your version. For more information about forcing dependency version, see [Resolution strategy](https://docs.gradle.org/current/dsl/org.gradle.api.artifacts.ResolutionStrategy.html).