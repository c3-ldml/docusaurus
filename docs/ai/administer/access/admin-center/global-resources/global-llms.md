---
title: "Global Large Language Models"
slug: "global-llms"
description: "Global Large Language Models are a Cognigy.AI resource that you can assign to and share across different Projects in your organization."
hidden: false
tags:
    - Global resources
    - Global LLMs
    - Admin Center
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Global Large Language Models

<a href="Added"><img src="https://img.shields.io/badge/Added_in-v4.97-blue" alt="Version badge" /></a>

_Global Large Language Models_ (LLMs) are [LLMs](../../../../empower/llms/overview.md) at [organization level](overview.md) that you can assign to and share across different Projects in your organization.

## Restrictions

- Global LLMs don't support [LLM fallback](../../../../empower/llms/fallback.md).
- Global LLMs can't be set as a [default model](../../../../empower/llms/other-operations.md#set-a-model-as-default).
<Tabs>
  <TabItem value="tab1" label="GUI" default>

    You can view, create, edit, and delete global LLMs in the [Admin Center](../overview.md) under **Resources > LLMs** as well as copy their Reference ID.

    To assign a global LLM to a Project, go to the global LLM page, click ![assign](../../../../../../static/img/_assets/icons/assign.svg) or ![edit-assign](../../../../../../static/img/_assets/icons/edit-assign.svg) in the **Assigned Projects** section, and select the Project.

    You can also view global LLMs in **Build > LLMs** and edit their settings.

  </TabItem>
  <TabItem value="tab2" label="API">

    You can view, create, delete, and edit global LLMs using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--LargeLanguageModels-v2.0). To do so, set the `resourceLevel` parameter to `organisation` in the JSON body.

  </TabItem>
</Tabs>
- Global LLMs can't be cloned.

## Working with Global LLMs
