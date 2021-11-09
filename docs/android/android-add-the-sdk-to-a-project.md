# Adding the SDK to a project on Android

The ZenKey SDK comes as a Gradle, Maven, and Ivy reference. To use Gradle to integrate ZenKey in your project:

1. Add the JCenter repository to your Android project (if you do not already have it) and include the following Maven URL:

```groovy
allprojects {
     repositories {
        jcenter()
        maven {
            url "https://repo.repsy.io/mvn/myzenkey/sp-sdk-android"
        }
     }
}
```

2. Add the ZenKey SDK as a dependency in your application module. (**NOTE:** Replace *x* and *y* in the snippet below with the actual latest version numbers.)

```groovy
dependencies {
    implementation 'com.xci.android:zenkey-sdk:0.x.y'
}
```