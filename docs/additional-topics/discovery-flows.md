# Discovery Flows

One of ZenKey's core design features makes a subscriber’s carrier the sole party able to authenticate and capture user consent. This means a central component for Service Providers integrating with ZenKey is the routing of requests to the correct carrier. ZenKey implemented two different, but complementary methods to enable a Service Provider to integrate and determine this discovery. 

## OpenID MODRNA Discovery Flows

The first method is based on OpenID MODRNA discovery flows. This method has two services from ZenKey:

  1. An API layer that, when given the correct discovery variables, returns the configuration for the correct carrier. 
  2. An endpoint that is a visual experience for the user. This allows users with the ZenKey application to set up a binding to a secondary device. 

Use an OIDC compliant implementation. Find more information see [MODRNA-based discovery flow](discovery-flows/modrna-based-discovery-flow.md).

## Optimized Discovery Flow

The second method leverages a more common OpenID auth request process. In this case, Service Providers redirect the user to ZenKey who redirects them to the correct carrier after discovery is complete. Using this process, Service Providers must contact the ZenKey discovery issuer after the auth code is received so that Service Providers can route their token and UserInfo API calls to the correct carrier endpoints. 

Use Optimized Discovery if you want to reuse existing OpenID connect logic and code. For more information see [optimized discovery flow](doc:optimized-discovery-flow).

