---
title: "Trusted Browsers"
slug: "integrating-apps-trusted-browsers"
hidden: false
createdAt: "2020-05-08T20:43:09.025Z"
updatedAt: "2021-07-08T18:11:01.490Z"
---
Users will want to use their secondary devices, such as tablets, to run an operating system that ZenKey associates with a mobile OS (e.g., iOS, Android, iPadOS, etc.) You may want to make these trusted browsers.
 

Prompt=True 

Setting prompt=true tells the Discovery UI to ignore cookies and re-prompts users to pick their carriers. This optional parameter is beneficial for users who have ported to a new carrier and whose desktop computers have failed to authenticate with the old carrier.

For desktops and tablet user agents, the SDK passes prompt=true to discovery because ZenKey has not discovered the Open ID configuration and must therefore return a redirect to the Discovery UI. At this point, users may trust their browsers and retrieve the login_hint_token required to complete authorization via the browser flow (instead of through a co-located ZenKey app).

More specifically, setting prompt=true occurs in the SDK when user_not_found results from an authorization request, suggesting users are no longer customers of that carrier and the phone number was ported to a new one. For this reason, ZenKey re-performs discovery with prompt=true and the discovery service shortcuts to a visual experience in which the user may either continue with their current account (based on stored cookies) or select a different account by completing the visual or manual code flow.

With this in mind, we should also note that there are several limitations to this approach:

  * Android cannot detect "tablet" as a class of user agent with certainty.
 
"Secondary Phones" are not supported by this solution. A secondary phone could be any of the following:
 
  * iPod touch
  * Secondary phone without a SIM
  * Secondary phone with a SIM but not associated with the ZenKey app with which the user wishes to use to log in.
 
The following are possible solutions:
 
  * Since we know that any device on a mobile operating system without a SIM cannot have the ZenKey app installed on it, assume that users need to go through the trusted browser flow.
  * Leverage the Web UX to allow users to cancel the current request and install the ZenKey app if they are on a device that could support a SIM.