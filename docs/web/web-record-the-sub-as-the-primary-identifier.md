---
sidebar_position: 12
---

# Record the Sub as the Primary Identifier of the ZenKey User

Because phone numbers and emails change, record the `sub` as the primary identifier of a ZenKey user in a database where you store information about your users. 

**The Sub ID may contain numbers, letters, and other characters**

Depending on whether the user registers or signs in, create or fetch their user record from your data store, respectively. You may enrich this user record with information received from the User Info response.

Once completing the ZenKey authentication flow, return a session using the session management strategy you're already using for your application. Discard the tokens used throughout this flow.