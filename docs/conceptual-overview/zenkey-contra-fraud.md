# Fraud scenarios
ZenKey is designed to prevent common hacker attacks described in the following scenarios.

## SIM swap fraud
ZenKey is a secure bridge between your users and the apps and services you provide. A joint undertaking between AT&T, Verizon, and T-Mobile, ZenKey leverages the encryption technologies of mobile phones and networks. The platform packages multiple factors of authentication into a streamlined experience for app and website providers. Taking advantage of carriers' capabilities, ZenKey provides a simple, secure way to register, login, and use other functions.

## Fraud scenario
Fraud by taking over accounts is the leading SIM/wireless attack vector impacting the financial services industry. These attacks cost banks millions of dollars every year. It is important to understand how SIM swap fraud takes place and explain features that prevent it. 

Hackers typically study their target and obtain information about the victim before an attack. The information can be used with the victim’s wireless carrier. The hacker swaps the victim's SIM card and calls the mobile carrier's customer service representative to report the SIM card damaged or lost. With stolen identity they can provide necessary recovery information to restore service. This might entail moving the victim's phone number from SIM 1 and associating it with the hacker's SIM 2. Then they begin log-in to the victim's bank account using the stolen username and password. The bank's challenge for 2nd-factor authentication goes to the new SIM card. The hacker enters the double authenticationn response to successfully log in to the victim's bank account.  

## ZenKey protection
ZenKey provides SIM swap protection that prevents successs by this attack. Mobile users have ZenKey installed on their device. The ZenKey app is linked to the service provider's app or website.

If a SIM swap occurs on a ZenKey user's mobile device, it triggers a recovery flow, and the user must respond to regain access to the account. This is easy for legitimate ZenKey users, but difficult for a hacker who would have to download and install ZenKey and provide at least two out of the following four alternate factors of authentication as part of a built-in recovery flow:

* PIN/biometric
* Recovery code (setup during ZenKey  sign-up)
* Trusted device (registered during ZenKey sign-up)
* Carrier username/password

ZenKey Trust Services provides a suite of fraud prevention services that sit atop the ZenKey authentication platform.
