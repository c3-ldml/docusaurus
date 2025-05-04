---
title: "Cognigy Insights"
slug: "cognigy-insights"
description: "Cognigy Insights is an analytics tool that helps you monitor and analyze the performance of your AI agents. It provides detailed metrics and visualizations to help you understand how your agents are performing and identify areas for improvement."
hide:
  - feedback
---

import {GridCards} from '@site/src/components/GridCards';

# Cognigy Insights

_Cognigy Insights_ is an analytics tool that helps you monitor and analyze the performance of your AI agents. It provides detailed metrics and visualizations to help you understand how your agents are performing and identify areas for improvement.

<GridCards items={[
  {
    icon: "mdi:information",
    title: "About Insights",
    description: "To analyze your AI agents and take your chat and voice agents to the next level, explore the capabilities of Cognigy Insights",
    links: [
      {text: "Overview", href: "overview.md"},
      {text: "Glossary", href: "glossary.md"},
    ]
  },
  {
    icon: "mdi:chart-bar",
    title: "View Report Metrics",
    description: "Monitor key metrics by utilizing ready-made charts on reports",
    links: [
      {text: "Overview", href: "reports/overview.md"},
      {text: "Engagement", href: "reports/engagement.md"},
      {text: "Goals", href: "reports/goals.md"},
      {text: "NLU Performance", href: "reports/nlu-performance.md"},
      {text: "Live Agent (Beta)", href: "reports/live-agent.md"},
    ]
  },
  {
    icon: "mdi:telescope",
    title: "Use Explorers",
    description: "Examine sessions separately to thoroughly investigate performance issues",
    links: [
      {text: "Step Explorer", href: "explorers/step.md"},
      {text: "Transcript Explorer", href: "explorers/transcript.md"},
      {text: "Message Explorer", href: "explorers/message.md"},
    ]
  },
  {
    icon: "mdi:download",
    title: "Download Reports",
    description: "Download reports individually for each chat on the reports",
    links: [
      {text: "Guide", href: "download-reports.md"},
    ]
  },
  {
    icon: "mdi:filter",
    title: "Filter and Sort",
    description: "Use global filters to effectively sort and filter data both on reports and explorers",
    links: [
      {text: "Global Filters", href: "global-filters.md"},
    ]
  },
  {
    icon: "mdi:calendar",
    title: "Data Management",
    description: "Learn how data pre-aggregation is used for reports, configure Time Zone and TTL (Time To Live) settings for your project",
    links: [
      {text: "Pre-Aggregation", href: "data-management/pre-aggregation.md"},
      {text: "Time Zone", href: "data-management/time-zone.md"},
      {text: "Data Expiration", href: "data-management/ttl.md"},
    ]
  },
]} />