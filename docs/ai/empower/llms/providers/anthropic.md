---
title: "Anthropic"
slug: "anthropic"
description: "To start using an Anthropic LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - Anthropic
  - Anthropic models
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import applyModel from '@site/docs/_includes/ai/generative-ai/_apply-model.md';
import addModelViaApi from '@site/docs/_includes/ai/generative-ai/_add-model-via-api.md';

# Anthropic

To start using an Anthropic model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

<Tabs>
  <TabItem value="tab1" label="Standard Model" default>

    | Parameter | Description                                                                                                                      |
    |-----------|----------------------------------------------------------------------------------------------------------------------------------|
    | apiKey    | Add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic. |

  </TabItem>
  <TabItem value="tab2" label="Custom Model">

    | Parameter  | Description                                                                                                                                                                                                                                                                                                     |
    |------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type | Select **Chat** for models that support the Messages API, **Completion** for the Completions API, or **Embedding** for the Embeddings API. For more information, refer to the [Anthropic Model Comparison (API format)](https://docs.anthropic.com/claude/docs/models-overview#model-comparison) documentation. |
    | Model Name | Enter the name of the model that you want to use as a custom model. To find model names, refer to the [Anthropic](https://docs.anthropic.com/claude/docs/models-overview) documentation.                                                                                                                              |
    | apiKey     | Add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.                                                                                                                                                                                |

  </TabItem>
</Tabs>
### Add a Model via GUI

You can add a model provided by Anthropic to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

Apply changes. Check if the connection was set up by clicking **Test**.

<addModelViaApi />

## Apply the Model

<applyModel />

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)