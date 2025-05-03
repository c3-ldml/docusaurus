---
title: "Overview"
slug: "nodes-overview"
hidden: false
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import {GridCards} from '@site/src/components/GridCards';

# Node Reference

This Node reference provides details about the [Nodes'](../nodes/overview.md) parameters to help you configure your [Flow](../flows/overview.md).

## Node Categories

<GridCards items={[
  {
    icon: "💬",
    title: "Basic",
    description: "Use Basic Nodes for basic conversational Flows, for example, the Say Node and the Question Node.",
    links: [
      {text: "Documentation", href: "basic/overview.md"}
    ]
  },
  {
    icon: "🔀",
    title: "Logic",
    description: "Use Logic Nodes to control the Flow execution, for example, the If Node and the Lookup Node.",
    links: [
      {text: "Documentation", href: "logic/overview.md"}
    ]
  },
  {
    icon: "🎤",
    title: "Voice",
    description: "Voice Nodes are for developing voice AI Agents.",
    links: [
      {text: "Documentation", href: "voice/overview.md"}
    ]
  },
  {
    icon: "📊",
    title: "Analytics",
    description: "Nodes for tracking and analyzing conversation data and taking advantage of Cognigy AI's comprehensive marketing functionality.",
    links: [
      {text: "Documentation", href: "analytics/overview.md"}
    ]
  },
  {
    icon: "⚙️",
    title: "Service",
    description: "Use Service Nodes to trigger external services, like databases and email servers. Additional services can be added through Extensions.",
    links: [
      {text: "Documentation", href: "service/overview.md"}
    ]
  },
  {
    icon: "🤖",
    title: "AI",
    description: "AI Nodes are a collection of Nodes for Cognigy.AI NLU and Agentic AI.",
    links: [
      {text: "Documentation", href: "ai/overview.md"}
    ]
  },
  {
    icon: "🗄️",
    title: "Data",
    description: "Data Nodes are designed to manage, manipulate, process, or store data.",
    links: [
      {text: "Documentation", href: "data/overview.md"}
    ]
  },
  {
    icon: "👤",
    title: "AI Copilot",
    description: "Nodes for creating the AI Copilot workspace.",
    links: [
      {text: "Documentation", href: "ai-copilot/overview.md"}
    ]
  },
  {
    icon: "📱",
    title: "xApps",
    description: "Nodes for creating xApps.",
    links: [
      {text: "Documentation", href: "xApp/overview.md"}
    ]
  },
  {
    icon: "🔍",
    title: "Other",
    description: "Additional specialized Nodes.",
    links: [
      {text: "Documentation", href: "other-nodes/overview.md"}
    ]
  }
]} />

If you want to create a custom Node, go to the [Extensions](../extensions.md) section.

!!! note
    Nodes can belong to multiple categories for easier search and navigation. In the following sections, each Node is assigned to a single category to avoid duplicated descriptions.

## Settings Common to All Node Types

All Node types include the **Settings** section, which contains the following parameters:

| Parameter      | Description                                                                                                              |
|----------------|--------------------------------------------------------------------------------------------------------------------------|
| Label          | The name of the Node that is displayed in the Flow editor. This is useful to distinguish between Nodes of the same type. |
| Comment        | A comment that is displayed in the Flow editor. This is useful to add additional information about the Node.             |
| Analytics Step | An [analytic step](../../analyze/collecting-data.md#analytics-steps) to track which paths users take in the Flow.        |
