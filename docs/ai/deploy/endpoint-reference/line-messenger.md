---
title: "LINE Messenger" 
slug: "line-messenger" 
hidden: false 
---

import HandoverProviderDeprecation from '@site/docs/_includes/release-notes/_handover-providers-deprecation.md';
import InjectAndNotify from '@site/docs/_includes/ai/providers/_inject-and-notify.md';

# LINE Messenger

<img src={require('../../../../static/img/_assets/ai/deploy/endpoint-reference/line.png').default} width="100%" />

<HandoverProviderDeprecation />

Within our **Cognigy.AI** platform, you're able to connect your Cognigy resources to your **LINE** channel by using our Line Endpoint integration. 

## Generic Endpoint Settings

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md) 

<InjectAndNotify />

## Specific Endpoint Settings

The **Line Setup** dropdown menu is where Cognigy.AI needs to be provided with the credentials to connect with a **Line Channel**.

<img src={require('../../../../static/img/_assets/ai/deploy/endpoint-reference/line-setup.png').default} width="100%" />

### Channel Access Token

This value is the Line **Channel Access Token**, which is obtained from the Line Developer account for each channel that is deployed. This token should be associated with the secret provided below.

### Channel Secret

This value is the Line **Channel Secret**, which is associated with a channel access token. This value is obtained from the Line Developer account for each channel that is deployed.

:::note[Help Center]

  More detailed information on how to set up a **Line Messenger** Endpoint, refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016222819).

:::

:::warning[Configuration of Line messages]

  Line Messenger Messaging API requests have lots of requirements that might cause some of your configured messages not to be sent. Review your node configurations with regard to Line Messaging API requirements [**here**](https://support.cognigy.com/hc/en-us/articles/5721825020444) to make sure all messages configured will be delivered.

:::

## More Information 

- [Line Messenger: Deployment](https://support.cognigy.com/hc/en-us/articles/360016222819)
- [Line Messenger: Message types and payload examples](https://support.cognigy.com/hc/en-us/articles/5721825020444)