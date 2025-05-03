---
title: "Voice Gateway Nodes" 
slug: "voice-gateway" 
hidden: true 
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import {GridCards} from '@site/src/components/GridCards';

# Voice Gateway

Voice Gateway Nodes help you build a voice agent using [Voice Gateway configuration](../../../../../voice-gateway/overview.md).

<GridCards items={[
  {
    icon: "🎙️",
    title: "Call Recording",
    description: "The Call Recording Node starts or stops a conversation recording.",
    links: [
      {text: "Documentation", href: "call-recording.md"}
    ]
  },
  {
    icon: "🔢",
    title: "DTMF",
    description: "The DTMF Node plays DTMF digits to the caller.",
    links: [
      {text: "Documentation", href: "dtmf.md"}
    ]
  },
  {
    icon: "📞",
    title: "Hang Up",
    description: "The Hang Up Node instructs Voice Gateway to end the call.",
    links: [
      {text: "Documentation", href: "hangup.md"}
    ]
  },
  {
    icon: "🔇",
    title: "Mute Speech Input",
    description: "The Mute Speech Input Node controls when speech and DTMF user inputs are collected in your Flow.",
    links: [
      {text: "Documentation", href: "mute-speech-input.md"}
    ]
  },
  {
    icon: "▶️",
    title: "Play",
    description: "The Play Node lets you stream a sound file into the call, also in a loop. The Node supports encoded MP3 and WAV files.",
    links: [
      {text: "Documentation", href: "play.md"}
    ]
  },
  {
    icon: "ℹ️",
    title: "Send Metadata",
    description: "The Send Metadata Node sends metadata via SIP INFO messages to the connected SIP trunk.",
    links: [
      {text: "Documentation", href: "send-metadata.md"}
    ]
  },
  {
    icon: "⚙️",
    title: "Set Session Config",
    description: "The Set Session Config Node configures the Voice Gateway session. This configuration applies for the rest of the session unless overwritten, either directly or by activity parameters.",
    links: [
      {text: "Documentation", href: "set-session-config.md"}
    ]
  },
  {
    icon: "🔄",
    title: "Transfer",
    description: "The Transfer Node lets you transfer an ongoing call to a Tel or SIP target.",
    links: [
      {text: "Documentation", href: "transfer.md"}
    ]
  }
]} />

!!! note
    The Play Node can be configured with [Parameter Details](parameter-details.md).
