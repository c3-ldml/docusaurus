---
title: "Logic Nodes" 
slug: "logic" 
hidden: false 
---

import {GridCards} from '@site/src/components/GridCards';

# Logic

Logic Nodes allow you to customize your Flow's behavior. You can use them to control which parts of the Flow should run based on conditions or integrate with other Flows.

<GridCards items={[
  {
    icon: "➕",
    title: "Add To Context",
    description: "Use the Add To Context Node to store information in the [Context](../../../test/interaction-panel/context.md) object and use this information throughout the session.",
    links: [
      {text: "Documentation", href: "add-to-context.md"}
    ]
  },
  {
    icon: "▶️",
    title: "Execute Flow",
    description: "Use the Execute Flow Node to execute another Flow and return to the initial Flow afterward.",
    links: [
      {text: "Documentation", href: "execute-flow.md"}
    ]
  },
  {
    icon: "➡️",
    title: "Go To",
    description: "Use the Go To Node to switch between Flows or between Nodes.",
    links: [
      {text: "Documentation", href: "go-to.md"}
    ]
  },
  {
    icon: "⚖️",
    title: "If",
    description: "The If Node evaluates a condition statement and triggers either the Then or Else child Nodes.",
    links: [
      {text: "Documentation", href: "if.md"}
    ]
  },
  {
    icon: "⏱️",
    title: "Interval",
    description: "Use the Interval Node to add a minimal interval before other Nodes are executed.",
    links: [
      {text: "Documentation", href: "interval.md"}
    ]
  },
  {
    icon: "🔀",
    title: "Lookup",
    description: "The Lookup Node acts as a switch between different options. Based on the input value, the Node executes one of the options.",
    links: [
      {text: "Documentation", href: "lookup.md"}
    ]
  },
  {
    icon: "1️⃣",
    title: "Once",
    description: "Once Nodes limit the Flow execution after them to once per session, for example, for greetings or database requests.",
    links: [
      {text: "Documentation", href: "once.md"}
    ]
  },
  {
    icon: "➖",
    title: "Remove From Context",
    description: "The Remove From Context Node removes information from the [Context](../../../test/interaction-panel/context.md) object.",
    links: [
      {text: "Documentation", href: "remove-from-context.md"}
    ]
  },
  {
    icon: "🔄",
    title: "Set State",
    description: "The Set State Node changes the Flow's [State](../../../test/interaction-panel/state.md).",
    links: [
      {text: "Documentation", href: "set-state.md"}
    ]
  },
  {
    icon: "🔄",
    title: "Reset State",
    description: "The Reset State Node resets the Flow's [State](../../../test/interaction-panel/state.md).",
    links: [
      {text: "Documentation", href: "reset-state.md"}
    ]
  },
  {
    icon: "😴",
    title: "Sleep",
    description: "The Sleep Node pauses the Flow execution for a period you define.",
    links: [
      {text: "Documentation", href: "sleep.md"}
    ]
  },
  {
    icon: "⏹️",
    title: "Stop and Return",
    description: "The Stop and Return Node stops the Flow execution and returns to the Start Node.",
    links: [
      {text: "Documentation", href: "stop-and-return.md"}
    ]
  },
  {
    icon: "🌐",
    title: "Switch Locale",
    description: "The Switch Locale Node changes [Locales](../../translation-and-localization/localization.md) during a conversation, for example, based on language detection or user region.",
    links: [
      {text: "Documentation", href: "switch-locale.md"}
    ]
  },
  {
    icon: "💭",
    title: "Think",
    description: "Use the Think Node to inject a text into the Start Node, for example, to restart the Flow, with specific data, text, or Intent.",
    links: [
      {text: "Documentation", href: "think.md"}
    ]
  },
  {
    icon: "⏳",
    title: "Wait for Input",
    description: "The Wait for Input Node halts the Flow execution until the user input is received.",
    links: [
      {text: "Documentation", href: "wait-for-input.md"}
    ]
  }
]} />