---
title: "Analytics Nodes" 
slug: "analytics overview"
hidden: false 
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import {GridCards} from '@site/src/components/GridCards';

# Analytics

Analytics Nodes let you take advantage of Cognigy.AI's comprehensive marketing functionality. Use and update [Contact Profiles](../../../analyze/contact-profiles.md) within your Flow for personalized, adaptive Flows that connect with your audience.

<GridCards items={[
  {
    icon: "✅",
    title: "Activate Profile",
    description: "The Activate Profile Node activates the Contact Profile.",
    links: [
      {text: "Documentation", href: "activate-profile.md"}
    ]
  },
  {
    icon: "🧠",
    title: "Add Memory",
    description: "The Add Memory Node stores any text, user input or other details in the Contact Profile.",
    links: [
      {text: "Documentation", href: "add-memory.md"}
    ]
  },
  {
    icon: "👁️",
    title: "Blind Mode",
    description: "The Blind Mode disables logging completely or selectively, for example, to exclude sensitive data from AI Agents' logs.",
    links: [
      {text: "Documentation", href: "blind-mode.md"}
    ]
  },
  {
    icon: "✅",
    title: "Complete Task",
    description: "The Complete Task Node tracks the completion specifically of a Task once the Node is triggered.",
    links: [
      {text: "Documentation", href: "complete-task.md"}
    ]
  },
  {
    icon: "❌",
    title: "Deactivate Profile",
    description: "The Deactivate Profile Node deactivates the Contact Profile.",
    links: [
      {text: "Documentation", href: "deactivate-profile.md"}
    ]
  },
  {
    icon: "🗑️",
    title: "Delete Profile",
    description: "The Delete Profile Node deletes the currently active Contact Profile.",
    links: [
      {text: "Documentation", href: "delete-profile.md"}
    ]
  },
  {
    icon: "👥",
    title: "Merge Profile",
    description: "The Merge Profile Node merges the current session to a Contact Profile. You can configure the Node with an identifier that you can use as a user ID.",
    links: [
      {text: "Documentation", href: "merge-profile.md"}
    ]
  },
  {
    icon: "✏️",
    title: "Overwrite Analytics",
    description: "With the Overwrite Analytics Node, you can selectively overwrite the Analytics data that before storing it in Insights.",
    links: [
      {text: "Documentation", href: "overwrite-analytics.md"}
    ]
  },
  {
    icon: "⭐",
    title: "Request Rating",
    description: "The Request Rating Node requests a rating from the user.",
    links: [
      {text: "Documentation", href: "request-rating.md"}
    ]
  },
  {
    icon: "🎯",
    title: "Track Goal",
    description: "The Track Goal Node lets you monitor the progress specifically of Goals within a Flow.",
    links: [
      {text: "Documentation", href: "track-goal.md"}
    ]
  },
  {
    icon: "⭐",
    title: "Set Rating",
    description: "The Set Rating Node extends the analytical capabilities of Cognigy.AI together with the Insights application.",
    links: [
      {text: "Documentation", href: "set-rating.md"}
    ]
  },
  {
    icon: "✏️",
    title: "Update Profile",
    description: "The Update Profile Node updates Contact Profile information.",
    links: [
      {text: "Documentation", href: "update-profile.md"}
    ]
  }
]} />
