---
title: "Connections"
slug: "connections"
hidden: false
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connections

_Connections_ are configurations that empower Cognigy AI Agents to securely interact with external services, systems, or APIs. These configurations involve the encryption, storage, and management of credentials for seamless communication between Cognigy and external resources.

<Tabs>
  <TabItem value="tab1" label="GUI" default>
    You can view, edit, and delete Connections in **Build > Connections**. Also, you can copy their Reference ID or export Connections as a [Package](packages.md).

  </TabItem>
  <TabItem value="tab2" label="API">
    You can view, edit, and delete Connections using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#get-/v2.0/connections).

  </TabItem>
</Tabs>
In contrast to other resources in Cognigy.AI, you can't create a Connection from scratch on the Connections page. You create Connections while adding a Node that requires credentials or adding a provider for [LLM](../empower/llms/providers/all-providers.md), [translation](translation-and-localization/auto-translation.md), [voice](../test/voice-preview.md), [handover](../human-escalation/handovers.md), or [file storage](../deploy/endpoints/file-storage.md).

## Working with Connections

:::warning

  If you delete a Connection, features relying on this Connection stop working. When you delete a Connection, the Flow that uses the deleted Connection in a Node isn't updated automatically. Executing the Flow that uses the deleted Connection hangs on that Node and can cause error messages.

:::

## More Information

- [Extensions](extensions.md)
- [Nodes](nodes/overview.md)
- [HTTP Request Node](node-reference/service/http-request.md)