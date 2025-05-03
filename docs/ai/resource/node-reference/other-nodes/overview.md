---
title: "Other Nodes"
slug: "other-nodes"
hidden: false
---

import {GridCards} from '@site/src/components/GridCards';

# Other Nodes

<GridCards items={[
  {
    icon: "🔍",
    title: "Knowledge Search",
    description: "This Node searches and retrieves content from data that was previously uploaded to the Knowledge AI solution.",
    links: [
      {text: "Documentation", href: "knowledge-search.md"}
    ]
  },
  {
    icon: "📋",
    title: "LLM Entity Extract",
    description: "This Node uses a chosen LLM to extract entities, such as product codes, booking codes, and customer IDs, from a given string.",
    links: [
      {text: "Documentation", href: "llm-entity-extract.md"}
    ]
  },
  {
    icon: "📝",
    title: "Log Message",
    description: "The Log Message Node writes a message into the [Project Logs](../../../test/logs.md).",
    links: [
      {text: "Documentation", href: "log-message.md"}
    ]
  },
  {
    icon: "📄",
    title: "Search Extract Output",
    description: "This Node searches through data within the Knowledge AI solution, extracts a relevant answer via a Generative AI model, and creates an output.",
    links: [
      {text: "Documentation", href: "search-extract-output.md"}
    ]
  },
  {
    icon: "🌐",
    title: "Set Translation",
    description: "This Node enables the override of real-time translation settings for the ongoing session. Translation settings are defined in the [Project Settings](../../../administer/access/project-settings.md) page.",
    links: [
      {text: "Documentation", href: "set-translation.md"}
    ]
  }
]} />
