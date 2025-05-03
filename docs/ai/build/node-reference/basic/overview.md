---
title: "Basic Nodes" 
slug: "basic-nodes" 
hidden: false 
---

import {GridCards} from '@site/src/components/GridCards';

# Basic Nodes

Basic Nodes are the fundamental Nodes you will need to create a Flow.

<GridCards items={[
  {
    icon: "💬",
    title: "Say",
    description: "Use the Say Node to send a message to the user on their current channel.",
    links: [
      {text: "Documentation", href: "say.md"}
    ]
  },
  {
    icon: "❓",
    title: "Question",
    description: "Use the Question Node to ask the user a question.",
    links: [
      {text: "Documentation", href: "question.md"}
    ]
  },
  {
    icon: "❔",
    title: "Optional Question",
    description: "The Optional Question Node works similar to the Question Node, except that the conversation can continue even if the question is not answered.",
    links: [
      {text: "Documentation", href: "optional-question.md"}
    ]
  },
  {
    icon: "📝",
    title: "Send Text",
    description: "The Send Text Node outputs simple text.",
    links: [
      {text: "Documentation", href: "send-text.md"}
    ]
  },
  {
    icon: "🐛",
    title: "Debug Message",
    description: "The Debug Message Node sends a debug message to the Interaction Panel.",
    links: [
      {text: "Documentation", href: "debug-message.md"}
    ]
  },
  {
    icon: "💻",
    title: "Code Node",
    description: "The Code Node enables the execution of custom JavaScript or TypeScript code within the Flow.",
    links: [
      {text: "Documentation", href: "code/overview.md"}
    ]
  }
]} />