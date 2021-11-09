# Implementing trust services

Complete the following prerequisites before implementing a specific Trust Services option with ZenKey and your applications:  

* Register with the [Developer Portal](https://portal.myzenkey.com/signup).
* Ensure your users installed the ZenKey app on their devices.
* Ensure your app or website is linked and working with ZenKey.
* If using the event alert option, subscribe to the event alert service through the developer portal.

* In the portal, enable one or more of the following event alerts:
    *  `call_verification_enabled`
    * `sim_tenure_24`
* Configure `enum_enabled`. 
* Configure contact numbers, such as:
    * 1-800-call me
    * +1-555-666-7777

## Configure the SIM Tenure option 
For the SIM Tenure option, configure the following:
* User behavior actions to be monitored, such as attempted bank transactions, and/or users/MDNs to be checked for `sim_tenure_24`.
* Process for querying the user's carrier.
* Process for checking `sim_tenure_24`.
* Process to input the `sim_tenure_24` into your existing fraud prevention system.
* User remediation - actions to be implemented for users whose `sim_tenure_24` is false.

### Test the SIM tenure option

With the simulator tool and environment of your choice, follow these steps to test your implementation:

1. Swap a mobile phone's SIM card.
2. Use the phone to connect to your application.
3. Submit an API query to the carrier for the phone for it's `sim_tenure_24`.
4. Review the response.
5. Ensure the `sim_tenure_24` was input into your test fraud protection system and remediation actions set.

## SIM Swap Event Alert Option
For the sim_swap event alert option, configure the following: 
- Process to input the `sim_swap alert` event into your existing fraud prevention system.
- User remediation - associate actions to perform when a `sim_swap alert` event is received by your fraud detection system.

### Test the Swap Event option

First, ensure that you have subscribed to the Event Alert service.  Then with the simulator tool and environment of your choice, test your implementation:

1.  Add or switch your SIM card to a new device.
2.  Use the phone to connect to your application.
3.  Check that an alert is received from the carrier that identifies the `sim_swap alert` event.
4.  Check that the alert is inserted into your test fraud protection system and remediation actions have been set.