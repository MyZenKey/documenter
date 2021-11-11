---
sidebar_position: 11
---

# Advanced project links

Advanced project links are optional.

Use the optional links in the advanced links section to help ZenKey users discover and open your app from within the ZenKey directory.   

If the URIs for either the iOS or Google Play stores are blank, the Domain URI directs users to your app in the ZenKey directory. 

Be prepared to provide the following:

**iOS App Store URI**
  * Provide the marketplace URL that allows users to download and install your app from the Apple App Store (e.g. `http://itunes.apple.com/{Country_Code_Here}/app/{Your_Apple_ID_Here)&mt=8`).

**iOS App Launch URI**
  * Enter either a URL Scheme (e.g. `myApp:articleDetail?id=234`) or Universal Link (e.g. `https://www.myapp.com/article?234`) that ZenKey uses to launch apps installed on a user's primary device. If the system is unable to handle this URI, users redirect to your Domain URL or to the iOS App Store URI, if provided.

**Google Play Store URI**
  * This allows ZenKey users to launch your Android app from within the ZenKey app.  

**Android Package Name**
  * Provide the unique identifier for your app from the Google Play Store and the Android OS. This allows ZenKey users to open your app from the account details page or install it from the ZenKey directory if they do not have it installed (e.g. `com.example.myapp`).

**Android App Launch URI**
  * Allows ZenKey users to launch your Android app from within ZenKey. 

Note: If the **Optional** fields on this page are left blank, the values default to the Domain URI for the Project.
![Advanced project links](https://files.readme.io/e054b1e-Advanced_Links.png)
