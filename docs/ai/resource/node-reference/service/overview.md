---
title: "Service Nodes" 
slug: "service overview" 
hidden: false 
---

import {GridCards} from '@site/src/components/GridCards';

# Service Overview

Service Nodes are used to:

- Serve as connectors to APIs and databases. They assist in tasks such as accessing your user database to enhance the customization of your Flow.
- Help to operate Flows that include handover logic.

<GridCards items={[
  {
    icon: "💬",
    title: "Add Transcript Steps",
    description: "The Add Transcript Steps Node adds a step for one of the conversation actors to simulate an input or output.",
    links: [
      {text: "Documentation", href: "add-transcript-steps.md"}
    ]
  },
  {
    icon: "👥",
    title: "Check Agent Availability",
    description: "The Check Agent Availability Node checks and reports the availability of agents with specific skills, or suggest an alternative response.",
    links: [
      {text: "Documentation", href: "check-agent-availability.md"}
    ]
  },
  {
    icon: "❌",
    title: "Close Handover",
    description: "The Close Handover Node closes the handover conversation on the handover provider side and returns the user to the AI Agent.",
    links: [
      {text: "Documentation", href: "close-handover.md"}
    ]
  },
  {
    icon: "📝",
    title: "Get Transcript",
    description: "The Get Transcript Node lets you receive a real-time conversation transcript and store the result in the Input or Context object.",
    links: [
      {text: "Documentation", href: "get-transcript.md"}
    ]
  },
  {
    icon: "🤖",
    title: "GPT Conversation",
    description: "The GPT Conversation Node processes and comprehends natural language input from users to generate contextually appropriate responses.",
    links: [
      {text: "Documentation", href: "gpt-conversation.md"}
    ]
  },
  {
    icon: "🔄",
    title: "Handover to Agent",
    description: "With the Handover to Agent Node, AI Agents can hand transfer conversations to human agents in contact centers.",
    links: [
      {text: "Documentation", href: "handover-to-agent.md"}
    ]
  },
  {
    icon: "🌐",
    title: "HTTP Request",
    description: "The HTTP Request Node executes HTTP requests to other interfaces (APIs).",
    links: [
      {text: "Documentation", href: "http-request.md"}
    ]
  },
  {
    icon: "🧠",
    title: "LLM Prompt",
    description: "With the LLM Prompt Node, you can use prompts with different LLMs to generate structured content for AI Agent responses.",
    links: [
      {text: "Documentation", href: "llm-prompt.md"}
    ]
  },
  {
    icon: "🗄️",
    title: "MongoDB Nodes",
    description: "A built-in MongoDB connector that you can use directly in the Flow. Includes different operations for MongoDB.",
    links: [
      {text: "Documentation", href: "mongo-db.md"}
    ]
  },
  {
    icon: "💾",
    title: "Microsoft SQL Nodes",
    description: "A built-in Microsoft SQL connector that you can use directly in the Flow. Includes different operations for Microsoft SQL.",
    links: [
      {text: "Documentation", href: "ms-sql.md"}
    ]
  },
  {
    icon: "⏰",
    title: "Set Handover Inactivity",
    description: "The Set Handover Inactivity Node detects and handles user inactivity, freeing up capacity for the human agent team.",
    links: [
      {text: "Documentation", href: "set-handover-inactivity.md"}
    ]
  },
  {
    icon: "⚡",
    title: "Trigger Function",
    description: "Use the Trigger Function Node to execute a Function.",
    links: [
      {text: "Documentation", href: "trigger-function.md"}
    ]
  }
]} />
