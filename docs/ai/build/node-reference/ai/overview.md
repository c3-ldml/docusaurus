---
title: "AI Nodes" 
slug: "ai" 
hidden: false 
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import {GridCards} from '@site/src/components/GridCards';

# AI

AI Nodes extend the toolset provided by the Basic Nodes to a more in-depth level, enabling interactions with system resources.

[Watch this Episode](https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU) of Cognigy Sessions for a technical deep dive.

<GridCards items={[
  {
    icon: "➕",
    title: "Add Lexicon Keyphrase",
    description: "The Add Lexicon Keyphrase Node dynamically creates a Lexicons Keyphrase entry, either based on hardcoded or dynamic data.",
    links: [
      {text: "Documentation", href: "add-lexicon-keyphrase.md"}
    ]
  },
  {
    icon: "🤖",
    title: "AI Agent",
    description: "The AI Agent Node lets you assign a job to a AI Agents, provide them instructions, tool actions, and access to knowledge.",
    links: [
      {text: "Documentation", href: "ai-agent.md"}
    ]
  },
  {
    icon: "🔄",
    title: "AI Agent Handover",
    description: "The AI Agent Handover Node transfers the conversation to another AI Agent Node or Flow.",
    links: [
      {text: "Documentation", href: "ai-agent-handover.md"}
    ]
  },
  {
    icon: "🧹",
    title: "Clean Text",
    description: "The Clean Text Node enables a user to clean a provided text using the Text Cleaner class.",
    links: [
      {text: "Documentation", href: "clean-text.md"}
    ]
  },
  {
    icon: "📋",
    title: "Copy Slots to Context",
    description: "The Copy Slots to Context Node copies Slots that were detected and written to the Input or Context object.",
    links: [
      {text: "Documentation", href: "copy-slots-to-context.md"}
    ]
  },
  {
    icon: "❌",
    title: "Disable Slot Fillers",
    description: "The Disable Slot Fillers Node disables any active Slot Fillers.",
    links: [
      {text: "Documentation", href: "disable-slot-fillers.md"}
    ]
  },
  {
    icon: "✅",
    title: "Enable Slot Fillers",
    description: "The Enable Slot Fillers Node enables a particular Slot Filler.",
    links: [
      {text: "Documentation", href: "enable-slot-fillers.md"}
    ]
  },
  {
    icon: "▶️",
    title: "Execute Cognigy NLU",
    description: "The Execute Cognigy NLU Node explicitly executes Cognigy NLU.",
    links: [
      {text: "Documentation", href: "execute-cognigy-nlu.md"}
    ]
  },
  {
    icon: "🔍",
    title: "Fuzzy Search",
    description: "The Fuzzy Search Node enables a Flow to search fuzzy string patterns in list of source data and returns the best possible matches.",
    links: [
      {text: "Documentation", href: "fuzzy-search.md"}
    ]
  },
  {
    icon: "🔤",
    title: "Match Pattern",
    description: "The Match Pattern Node enables a user to find patterns in text and expose them in the Input Object.",
    links: [
      {text: "Documentation", href: "match-pattern.md"}
    ]
  },
  {
    icon: "🔍",
    title: "Regex Slot Filler",
    description: "The Regex Slot Filler Node creates a Slot based on a regex pattern. When the pattern is detected, a Slot is written to the Input object.",
    links: [
      {text: "Documentation", href: "regex-slot-filler.md"}
    ]
  },
  {
    icon: "✅",
    title: "Resolve Tool Action",
    description: "The Resolve Tool Action Node sends an answer as the response to a tool call to the AI Agent after completing a tool action.",
    links: [
      {text: "Documentation", href: "resolve-tool-action.md"}
    ]
  }
]} />