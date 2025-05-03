---
title: "Voice Nodes"
slug: "voice-nodes"
description: "Voice Nodes are used to handle voice interactions in your Flow."
hidden: false
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';
import {GridCards} from '@site/src/components/GridCards';

# Voice Nodes

<ACAndGenericNodeDeprecation />

Voice Nodes are necessary for developing a voice AI Agent.

<GridCards items={[
  {
    icon: "🎤",
    title: "Generic Voice Nodes",
    description: "The Generic Voice Nodes create voice Flows that are not specific to one Endpoint. They are compatible with both AudioCodes and Voice Gateway.",
    links: [
      {text: "Documentation", href: "generic/overview.md"}
    ]
  },
  {
    icon: "🔊",
    title: "Voice Gateway Nodes",
    description: "Voice Gateway Nodes help you build a voice AI Agent using [Voice Gateway configuration](../../../../voice-gateway/overview.md).",
    links: [
      {text: "Documentation", href: "voice-gateway/overview.md"}
    ]
  },
  {
    icon: "📞",
    title: "AudioCodes",
    description: "AudioCodes Nodes help you build a voice AI Agent using [AudioCodes configuration](https://www.cognigy.com/products/voice-gateway).",
    links: [
      {text: "Documentation", href: "audiocodes/overview.md"}
    ]
  }
]} />
