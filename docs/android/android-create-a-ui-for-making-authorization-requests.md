# Creating UI for Authorization Requests on Android"

Authorization requests start with an authorization intent received by the ZenKey app. To trigger an authorization request, use the ZenKey default button which conducts the interaction with the identityProvider and launches the authorization intent. Add `ZenKeyButton` to your layout or get the authorization intent from `identityProvider`.