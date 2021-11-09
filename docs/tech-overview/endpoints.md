# ZenKey endpoints
Trust Services are useful in situations when a Service Provider suspects fraud will be attempted against user accounts.  ZenKey Trust Services are available to Service Providers via two types of endpoints:
1. User trait, such as SIM Tenure
2. Event alerts, such as the sim_swap alert 

Both these endpoints reside with the participating ZenKey carriers. The user trait endpoint accepts incoming API requests directly from the service provider and responds with answers to specific questions in the request.  The response is available in real-time. 

The event alert endpoint, on the other hand, generates alerts that are delivered to the service provider. It generates alerts upon qualifying changes to the user’s device or wireless account. These event alerts are automatic. Acting on these alerts protects users from fraud. 

In order to obtain user traits and event alerts, service providers subscribe to them on the ZenKey developer portal. Trust Services are available to users of service providers that have the ZenKey app and have used it to log in to their Service Provider account at least once, or the user must have used ZenKey as a factor of authentication.

The trust service available is the user trait called SIM Tenure API. The SIM Tenure API allows service providers to query participating ZenKey wireless carriers directly via and learn whether the SIM card for a given user has changed within the past 24 hours. 

As more user traits and event alerts become available, this guide will reflect the details of their use.