# (Coming soon) Managing Carrier Migration

A future release of ZenKey will support account migration. Meanwhile, Service Providers can begin using the following instructions now as required.

ZenKey supports users who migrate to new carriers. When users switch to a new carrier, they receive unique identifiers (the user’s “sub”) based on the new carrier. If users opt to migrate their ZenKey accounts to new carriers, ZenKey provides a reference to any previous carrier sub for users. Any stored deprecated user subs are replaceable with new ones. 

Users can move their ZenKey account within 180 days of porting their line. After migrating ZenKey to their carriers, subsequent ZenKey logins for the next 180 days will contain the port_token.

## How to detect and handle users who migrated to new mobile carriers.

When users who migrated to new carriers use ZenKey, the new carriers handle the migration process. The ZenKey SDKs or the discovery-ui endpoints manage the transitions automatically. The responses from the carriers' token_endpoint contain the current/new sub that identifies users. Subs also contain an array of JWT port_tokens in the “aka” parameter of the id_token. These port tokens identify previous subs for the user.

A decoded port token contains data in the following format:
```
{typ=port_token+jwt,kid=xxx}
{
  "iss": "https://ZenKey.old_carrier.com",
  "sub": "mncmcc-75984731587234asdf",
  "iat": 1516239022
  "aud": client_id
}
```

To determine if a user new or a returning one, complete the carrier token request on your secure server. Afterward, perform the following steps:

1. Search your user database for the user’s current sub. Reference the user by their sub and not their phone, email, or other property. Those properties sometimes change and/or the user may not opt to share them.
2. If you find a user in your database with the matching sub, proceed with that recognized user and skip the remaining steps below. Otherwise, this may be either a user who migrated to a new carrier or a new user.
3. Decode any port_token JWTs. No port token means it is a new user. Prompt the user to register or link an existing account as appropriate for your service.
4. Verify that each port_token issuer (iss) URL is a trusted carrier. The following is a list of valid `iss` URLs:
    - *.att.com
    - *.verizon.com
    - *.t-mobile.com
    - *.myzenkey.com
    - *.xcijv.com
5. Use the port_token issuer (iss) URL to extract the OpenID configuration of the old carrier and get their JWKs. Use the key ID (KID) in the port_token to identify the JWK key to use to verify the token’s signature.
6. Search your database for user accounts linked to the subs in verified port tokens. If you find a user with any of the old subs, update the references in the database to the new sub from the new carrier.
7. If you cannot find a matching user, treat the user as new to your service. For more information, see the notes section.

Note: Always provide all new users with the option to link to an existing account for your service, even if the existing account in your database is already linked to a (possibly old) user.\n - A user may choose not to migrate their ZenKey or may not use your app within 180 days of migration. Therefore, a new or unrecognized user might still be a returning user of your app. \n - If a user migrated carriers more than 180 days ago, the new carrier may no longer provide a port_token.\n - There are other scenarios where an existing user appears to be a new ZenKey user. For example, if a user is locked out of their ZenKey and unable to recover the account, the user may choose to create a new ZenKey.