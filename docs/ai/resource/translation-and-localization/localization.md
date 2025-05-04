---
title: "Localization" 
slug: "localization" 
hidden: false
description: "Cognigy.AI offers a robust localization feature for easy customization and content reuse. You can configure multiple Locales and add localized content to your Flow. Alternatively, you can use machine translation to automatically translate content."
tags:
    - Translation
    - Localization
    - Locales
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import SwitchLocale from '@site/docs/_includes/ai/localization/_switch-a-locale.md';

# Localization

Cognigy.AI offers a robust localization feature for easy customization and content reuse. You can configure multiple Locales and add localized content to your Flow. Alternatively, you can use [machine translation to automatically translate content](auto-translation.md). If one Locale doesn't have configured content, Cognigy.AI automatically falls back to another Locale.

## Restrictions

<Tabs>
  <TabItem value="tab1" label="GUI" default>
    You can add, edit, and delete Locales in **Manage > Localization**. Also, you can copy their Reference ID.

  </TabItem>
  <TabItem value="tab2" label="API">
    You can view, create, edit, and delete Locales using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--Locales-v2.0).

  </TabItem>
</Tabs>
- You can't change the primary Locale after you've selected it.

## How to Use

### Localize a Flow

You can localize [Nodes](../nodes/overview.md) and [Intents](../../empower/nlu/intents/ml-intents.md) in the [Flow editor](../flows/editor.md) after selecting a Locale in the top bar.

<SwitchLocale />

## More Information

- [Automatic Translation](auto-translation.md)
- [Switch Locale Node](../node-reference/logic/switch-locale.md)