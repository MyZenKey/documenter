# Verify redirect URLs

After you finish setting up a client in the ZenKey Developer Portal, the client configuration is in a pending state until the domain control is proven (domain proofing). Afterwards, carriers can provision the client configuration.

Domain control must be verified whenever a relevant domain is changed or added. Relevant domains include:
-	Sector URI (Project level)
-	Domain URL (Project level)
-	Privacy Policy URL (Project level)
-	Terms of Service Link (Project level)
-	Redirect URLs (Client level)

Redirect URLs support deep links, universal links, and URLs with variables.

All URLs must pass verification before the client is able to “Launch” their client.

If a client configuration has multiple relevant domains, all the domains must be verified before the Service Provider can provision the client.

**NOTE:** A developer can use only a Localhost redirect while their client is still in dev_mode.

## Viewing the verification or domain proofing status of URLs

The ZenKey Developer Portal displays the verification or domain proofing status of each relevant redirect domain.

In the portal, the **Domain Ownership** page displays verification or domain proofing information for all Projects, including client redirect URLs. The information shows if a link or URL has passed or failed verification, or is pending verification.

The **Project Review** section also displays the status of domain proofing.
If a link or URL has not been verified or has not passed verification, the page displays 'Not verified' beside the link or URL.

## Steps for verifying URLs
1. On the **Domain Ownership** page, follow the steps in the **Set up domain verification** section. Note: The content of the downloaded JSON file must match the content of the JSON file you host at the Sector_URI. Otherwise, the Developer Portal displays the URLs that did not pass verification.
2. Click **Next**.
3. Click **Verify my domains**.
4. The **Domain Ownership** page displays a red warning image beside each ULR that could not be verified. Ensure that you correctly uploaded the JSON file to your Sector URI.
5. Click **Finish**. To continue, you must verify all project and client domains.

You can see the status of redirect URI proofing in the “Clients” section, in the “Domain ownership” column. If you expand any of the clients in this section, a badge appears next to the redirect URI. The badge shows the unverified or verified status of the URI.