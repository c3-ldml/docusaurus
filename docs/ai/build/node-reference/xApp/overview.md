---
title: "xApp Nodes"
slug: "xapp overview"
description: "xApp Nodes are used to create and manage xApp experiences."
hidden: false
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import Pricing from '@site/docs/_includes/ai/xApp/_pricing.md';
import {GridCards} from '@site/src/components/GridCards';

# xApp

xApp Nodes let you take advantage of Cognigy.AI's xApp capabilities. Use these Nodes to create interactive xApp experiences.

<GridCards items={[
  {
    icon: "▶️",
    title: "xApp: Init Session",
    description: "This Node initializes a new xApp session.",
    links: [
      {text: "Documentation", href: "init-xApp-session.md"}
    ]
  },
  {
    icon: "🔑",
    title: "xApp: Get Session PIN",
    description: "This Node generates a new xApp session PIN. You can access it using the xApp: Get Session PIN token or via input.apps.session.pin.",
    links: [
      {text: "Documentation", href: "get-xApp-session-PIN.md"}
    ]
  },
  {
    icon: "📱",
    title: "xApp: Show Adaptive Card",
    description: "This Node builds an xApp Page by providing an Adaptive Card in JSON format.",
    links: [
      {text: "Documentation", href: "set-AdaptiveCard-xApp-state.md"}
    ]
  },
  {
    icon: "🖥️",
    title: "xApp: Show HTML",
    description: "This Node builds an xApp Page by providing custom HTML code.",
    links: [
      {text: "Documentation", href: "set-html-xApp-state.md"}
    ]
  }
]} />

<Pricing />

## More Information

- [xApps](../../../../xApps/overview.md)
- [xApp Tokens](../../../../xApps/tokens.md)
- [xApp Flow API](../../../../xApps/api.md)