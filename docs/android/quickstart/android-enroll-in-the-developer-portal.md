---
sidebar_position: 1
---

# Developer Portal Enrollment

Before integrating the ZenKey SDK:

- Login to the Developer Portal.
- Register your application to obtain a valid client_id and client_secret. 
- Determine need for a custom redirect URI. Our SDK sends an auth code request to the appropriate carrier and redirects the user back to the app via your redirect URI. Several ZenKey services also utilize the redirect URI for callbacks. When configuring the redirect URI in the service provider portal, it must resemble one of the following formats:

-	{client_id}://com.xci.provider.sdk
-	https://URL/URI 
-	{custom}://
-	com.sp.app://

- Identify the attributes to capture when users authorize the app. End users provide the ZenKey SDK with basic information (e.g., name, email, physical address) while carriers provide other information (e.g., phone numbers). When signing into your app using ZenKey, end users determine the data they wish to share, other than .openid scope, which is mandatory. 

## Developer mode

Every app or site created is in developer mode after accepting the limited trial agreement. For more information, see *working with developer mode*.