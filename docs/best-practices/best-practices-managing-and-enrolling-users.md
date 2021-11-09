# Managing and Enrolling Users

By integrating ZenKey with your applications, you offer a safe and secure environment for users of your applications. However, in order for users to benefit from ZenKey's unique security features, they must first create a ZenKey account. Below are tips to enroll and manage users in your application.
 
## Enrolling Users
Once a customer creates a ZenKey account, he or she must now add your application as a service in ZenKey. 
 
## Assigning and Managing User Information
With your application added as a service in ZenKey, users may now enroll into your application using the "Sign in with ZenKey" button. At this step, ZenKey asks for the user's permission to allow their carrier to share ZenKey profile information (e.g. name, email, phone) with you. This information is defined by assigning different scopes, or user attributes when you integrate the ZenKey SDK (see Section 3.1: Types of Scopes). However, keep in mind that despite whichever scopes you choose, all users can edit in the ZenKey app which scopes they wish to share prior to giving consent.
 
## Authorization
You may ask the user for a second factor of authentication (2FA), such as a PIN or biometric (if enabled). Once providing 2FA, the user may then agree or provide consent to share information before the ZenKey SDK provides authorization data to your app and issues the authorization request to the carrier.
 
## Managing Tokens
With the user’s consent and an authorization code from the carrier, your server requests an access token from the carrier. This access token returns a unique identifier scoped to the user along with other user information. As a result, be sure that your backend is properly configured to provide access and refresh tokens.