---
title: "Azure Bot Services" 
slug: "azure-bot-services" 
hidden: false 
---

import CollapsibleSection from '@site/src/components/CollapsibleSection';
import HandoverProviderDeprecation from '@site/docs/_includes/release-notes/_handover-providers-deprecation.md';

# Azure Bot Services

<a href="../../../release-notes/4.55.md" /><img src="https://img.shields.io/badge/Updated in-v4.55-blue.svg" alt="Version badge" />

<img src={require('../../../../static/img/_assets/ai/deploy/endpoint-reference/azure-bot-services.png').default} width="100%" />

<HandoverProviderDeprecation />

Within our **Cognigy.AI** platform, you're able to connect your Cognigy Agent to **Azure Bot Services** by using our Azure Bot Services Endpoint integration.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md) 

<CollapsibleSection title="Supports Inject & Notify">

    You can use the [Inject & Notify](../endpoints/inject-and-notify.md) functionality with this type of Endpoint.

</CollapsibleSection>


## Specific Endpoint Settings

The **Azure Bot Services Settings** dropdown menu is where Cognigy.AI needs to be provided with the credentials to connect with an Azure Bot Services deployment.

### Access Scope

<a href="../../../release-notes/4.55.md" /><img src="https://img.shields.io/badge/Added in-v4.55-blue.svg" alt="Version badge" />

This setting determines who can access this application, choosing being **Multi Tenant** and **Single Tenant**.

#### Restrict to Azure AD Accounts

When choosing **Multi Tenant**, you will have an additional toggle.
The **Restrict to Azure AD Accounts** setting prevents public access to your Endpoint,
and only allows access to the Teams' accounts that are managed by an organization in Azure Active Directory.

### Microsoft App ID

This value is the **Microsoft App ID**, which is obtained in the settings page of your bot in the Azure Bot Services Dashboard.

### Microsoft App Password

This value is the **Microsoft App Password** of your Bot, also referred to as the **Client Secret**. This is obtained by creating a new Client Secret in the App Registrations page for your bot in the Azure Bot Services Dashboard.

### SSO Connection Name

This value is the **SSO Connection Name** when using this endpoint with an SSO integration.

:::note[Help Center]

  More detailed information on how to set up an **Azure Bot Services** Endpoint refer to the [Help Center articles](https://support.cognigy.com/hc/en-us/articles/360016183720).

:::


### Microsoft Teams

As of release v4.9, the display changes for clicked postback buttons in a Microsoft Teams chat. 

When clicking the postback button in a [quick reply](../../resource/node-reference/basic/say.md), [gallery](../../resource/node-reference/basic/say.md), [list](../../resource/node-reference/basic/say.md), or [button](../../resource/node-reference/basic/say.md) configuration, the button title is displayed now on the user side of the chat. For other Azure bot service channels, this change is not relevant.

<img src={require('../../../../static/img/_assets/ai/deploy/endpoint-reference/teams-chat.svg').default} width="100%" />

<img src={require('../../../../static/img/_assets/ai/deploy/endpoint-reference/teams-example.svg').default} width="100%" />

## Channel Priority when using Azure Bot Services

You can use the Azure Bot Services Endpoint to serve multiple channels, such as Line, Messenger, Microsoft Teams, and others. 

To define where the output will be delivered, select these channels in the Say, Question, or Optional Question Nodes. 

However, the sequence of using these channels in the Node is determined by their fixed priority.

Priority rules exist for the following supported Azure Bot Services channels:

- Line
- Messenger
- Microsoft Teams
- Slack
- SMS
- Azure Bot Services
- AI

### Examples

Consider the following examples when using the Azure Bot Services Endpoint from the perspective of channel priority.

**Example 1**

The Say Node is configured with AI, Azure Bot Services, and Microsoft Teams channels.

Result: The user will receive the text output from the Microsoft Teams channel.

**Example 2**

The Question Node is configured with AI and Azure Bot Services channels.

Result: The user will receive the text output from the Azure Bot Services channel.

**Example 3**

The Optional Question Node is configured with only the AI channel.

Result: The user will receive the text output from the AI channel.

## More Information
- [Help Center: Microsoft Bot Framework Deployment ](https://support.cognigy.com/hc/en-us/articles/360016183720-Microsoft-Bot-Framework-Deploy-an-Endpoint)
- [Help Center: Microsoft Bot Framework Adaptive Cards](https://support.cognigy.com/hc/en-us/articles/360016184000-Microsoft-Bot-Framework-Using-Adaptive-Cards)