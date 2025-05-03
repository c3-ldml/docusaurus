---
title: "AI Copilot Nodes"
slug: "overview"
hidden: false
---

import {GridCards} from '@site/src/components/GridCards';

# AI Copilot Nodes

[![Version badge](https://img.shields.io/badge/Updated in-v4.66-blue.svg)](../../../../release-notes/4.66.md)

The AI Copilot Nodes allow users to customize the AI Copilot workspace by adding HTML, Adaptive Cards, and IFrame content.

<GridCards items={[
  {
    icon: "📄",
    title: "Copilot: Adaptive Card Tile",
    description: "This Node allows you to create and display adaptive cards in your AI Copilot workspace.",
    links: [
      {text: "Documentation", href: "set-adaptive-card-tile.md"}
    ]
  },
  {
    icon: "🖥️",
    title: "Copilot: HTML Tile",
    description: "This Node allows you to display customized HTML content in the AI Copilot workspace.",
    links: [
      {text: "Documentation", href: "set-html-tile.md"}
    ]
  },
  {
    icon: "📱",
    title: "Copilot: IFrame Tile",
    description: "This Node allows you to embed external websites directly into the AI Copilot workspace.",
    links: [
      {text: "Documentation", href: "set-iframe-tile.md"}
    ]
  },
  {
    icon: "👤",
    title: "Copilot: Identity Tile",
    description: "This Node displays and processes customer-specific information directly within the widget of your AI Copilot workspace.",
    links: [
      {text: "Documentation", href: "identity-tile.md"}
    ]
  },
  {
    icon: "📚",
    title: "Copilot: Knowledge Tile",
    description: "This Node provides potential answers to human agents regarding customer questions.",
    links: [
      {text: "Documentation", href: "knowledge-tile.md"}
    ]
  },
  {
    icon: "➡️",
    title: "Copilot: Next Action Tile",
    description: "This Node determines the appropriate next step or action in a conversation or process based on the user's input or the current context.",
    links: [
      {text: "Documentation", href: "next-action-tile.md"}
    ]
  },
  {
    icon: "📤",
    title: "Copilot: Send Data",
    description: "This Node enables real-time updates of dynamic content to AI Copilot widgets without reloading the entire widget.",
    links: [
      {text: "Documentation", href: "send-data.md"}
    ]
  },
  {
    icon: "😊",
    title: "Copilot: Sentiment Tile",
    description: "This Node performs sentiment analysis on the most recent input and provides insights into the emotional tone of the user.",
    links: [
      {text: "Documentation", href: "sentiment-tile.md"}
    ]
  },
  {
    icon: "📊",
    title: "Copilot: Set Grid",
    description: "This Node updates the AI Copilot workspace grid via an API POST request and provides a preview of the grid.",
    links: [
      {text: "Documentation", href: "set-grid.md"}
    ]
  },
  {
    icon: "💬",
    title: "Copilot: Transcript Tile",
    description: "This Node captures the most recent customer response and displays it on a designated widget in the AI Copilot workspace.",
    links: [
      {text: "Documentation", href: "transcript-tile.md"}
    ]
  }
]} />

## More Information

- [AI Copilot](../../../../ai-copilot/overview.md)
- [Getting started with AI Copilot](../../../../ai-copilot/getting-started.md)
- [AI Copilot configuration](../../../../ai-copilot/configuration.md)
- [AI Copilot embedding](../../../../ai-copilot/embedding.md)
- [AI Copilot for Voice](../../../../ai-copilot/voice/voice-overview.md)
- [AI Copilot for Chat](../../../../ai-copilot/chat.md)