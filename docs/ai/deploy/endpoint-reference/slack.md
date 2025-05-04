---
title: "Slack" 
slug: "slack" 
hidden: false 
---

import HandoverProviderDeprecation from '@site/docs/_includes/release-notes/_handover-providers-deprecation.md';
import InjectAndNotify from '@site/docs/_includes/ai/providers/_inject-and-notify.md';

# Slack

<img src={require('../../../../static/img/_assets/ai/deploy/endpoint-reference/slack.png').default} width="100%" />

<HandoverProviderDeprecation />

Within our **Cognigy.AI** platform, you're able to connect your Cognigy Agent to your **Slack Bot** by using our Slack Endpoint. 

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

<InjectAndNotify />

### OAuth access token

This value is the **OAuth access token** for your Slack app's workspace, which is obtained in the *OAuth & Permissions* page of your Slack App.

### Verify Token

This value is the **Verification Token** of your Slack app. This is obtained from the *Basic Information* page of your Slack App in the *App Credentials* section.

:::note[Help Center]

  More detailed information on how to set up a **Slack** Endpoint refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016307039).

:::

## More Information

- [Help Center: Slack Deployment](https://support.cognigy.com/hc/en-us/articles/360016307039-Slack-Deploy-an-Endpoint)
- [Help Center: Slack Renaming a Bot](https://support.cognigy.com/hc/en-us/articles/360016271340-Slack-Rename-your-bot)