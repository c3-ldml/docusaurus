---
title: "Auto Translation"
slug: "auto-translation"
description: "Auto Translation allows you to automatically translate messages between different languages."
hidden: false
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import CompatibilityWithMTProviders from '@site/docs/_includes/ai/resource/translation-and-localization/_compatibility-with-machine-translation-providers.md';
import ConfigureMTProvider from '@site/docs/_includes/ai/resource/translation-and-localization/_configure-a-machine-translation-provider.md';
import SwitchLocale from '@site/docs/_includes/ai/localization/_switch-a-locale.md';

# Auto Translation

Cognigy.AI has integrated _Automatic Translation_ capabilities to streamline the process of customizing Flows and Intents for various Locales. These capabilities are helpful for users who need multilingual support for voice and text AI Agents without the need for manual translations.

## Key features

- **Freedom of Language Choice**. You have the flexibility to choose your preferred translation language.
- **Supervised or Automatic Translation**. You can trigger the translation manually or automatically, depending on your needs.
- **Voice-Ready Translation**. Cognigy.AI's translation capabilities are equipped to handle all modes, making them voice-ready and adaptable to various communication methods.

## Prerequisites

- Add a [machine translation provider](#configure-a-machine-translation-provider).
- Add a [Locale](#how-to-use-automatic-translation).

## Restrictions

- For [Intents](#machine-translation-for-flow-localization), machine translation doesn't match the [Slots](../../empower/nlu/intents/ml-intents.md) you set for your primary Locale to the Keyphrases in the localized Example Sentences. After performing an Intent or Multi-Intent localization, check and fix the [Slot annotation](../../empower/nlu/intents/annotations.md#example-sentences) in the localized Example Sentences.

<CompatibilityWithMTProviders />

## Configure a Machine Translation Provider

<Tabs>
  <TabItem value="tab1" label="GUI" default>
    You can add, edit, and delete Locales in **Manage > Localization**. Also, you can copy their Reference ID.

  </TabItem>
  <TabItem value="tab2" label="API">
    You can view, create, edit, and delete Locales using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--Locales-v2.0).

  </TabItem>
</Tabs>
<ConfigureMTProvider />

## How to Use Automatic Translation

### Machine Translation for Flow Localization

You can automatically translate [Nodes](../nodes/overview.md) and [Intents](../../empower/nlu/intents/ml-intents.md) in the [Flow editor](../flows/editor.md). To do so, select a Locale in the top bar, go to the Node editor or the **NLU** tab, and click **Add Localization**.

<SwitchLocale />

## More Information

- [Localization](localization.md)
- [Switch Locale Node](../node-reference/logic/switch-locale.md)