---
title: "Cognigy Live Agent"
slug: "cognigy-live-agent"
description: "Cognigy Live Agent is a contact center solution that is designed to work exclusively with Cognigy.AI. It utilizes human agents to handle escalated conversations from AI Agents. The system automatically assigns human agents based on their expertise and availability, which helps businesses to optimize efficiency, scalability and deliver exceptional customer support."
hide:
  - feedback
---

import {GridCards} from '@site/src/components/GridCards';

# Cognigy Live Agent

_Cognigy Live Agent_ is a contact center solution that is designed to work exclusively with Cognigy.AI. It utilizes human agents to handle escalated conversations from AI Agents. The system automatically assigns human agents based on their expertise and availability, which helps businesses to optimize efficiency, scalability and deliver exceptional customer support.

<GridCards items={[
  {
    icon: "👋",
    title: "About Live Agent",
    description: "Learn more about Live Agent features and set up Live Agent to your needs by creating your first inbox and adding agents to it",
    links: [
      {text: "Overview", href: "overview.md"},
      {text: "Getting Started", href: "getting-started/overview.md"},
      {text: "Glossary", href: "glossary.md"},
    ]
  },
  {
    icon: "💬",
    title: "Conversations",
    description: "Conversation is a core component of Live Agent. Explore conversation's interface and start implementing conversation routing",
    links: [
      {text: "Overview", href: "conversation/overview.md"},
      {text: "Conversation Routing", href: "conversation/conversation-routing/overview.md"},
      {text: "Send Replies", href: "conversation/send-reply.md"},
      {text: "Search and Filter", href: "conversation/search-and-filter.md"},
    ]
  },
  {
    icon: "🛠️",
    title: "Build Processes",
    description: "Organize your human agents' work. Create inboxes, add agents, and group them into teams.",
    links: [
      {text: "Agents", href: "settings/agents.md"},
      {text: "Teams", href: "settings/teams.md"},
      {text: "Inboxes", href: "settings/inboxes.md"},
      {text: "Labels", href: "settings/labels.md"},
      {text: "Skills", href: "settings/skills.md"},
    ]
  },
  {
    icon: "🤖",
    title: "Assistants",
    description: "Use virtual assistants to support your human agents, enabling them to respond to user queries more accurately and efficiently",
    links: [
      {text: "Overview", href: "assistants/overview.md"},
      {text: "AI Copilot Whisper", href: "assistants/ai-copilot-whisper.md"},
      {text: "AI Copilot", href: "assistants/ai-copilot.md"},
      {text: "AI Copilot Bot", href: "assistants/ai-copilot-bot.md"},
    ]
  },
  {
    icon: "📊",
    title: "Analytics Tools",
    description: "Use to enhance and optimize human agent performance, maximizing productivity and efficiency",
    links: [
      {text: "Reports", href: "reports/overview.md"},
      {text: "OData Integration", href: "tools/odata-endpoint.md"},
    ]
  },
  {
    icon: "🔄",
    title: "Automation and Logs",
    description: "Automate routine tasks and track user actions in Live Agent",
    links: [
      {text: "Automation Rules", href: "settings/automation-rules.md"},
      {text: "Canned Responses", href: "settings/canned-responses.md"},
      {text: "Audit Logs", href: "settings/audit-logs.md"},
    ]
  },
  {
    icon: "⚙️",
    title: "Administer",
    description: "Manage your account settings and assign roles such as Agent, Supervisor, and Administrator to different users based on their responsibilities and access level",
    links: [
      {text: "Account Setting", href: "settings/account-settings.md"},
      {text: "Roles", href: "roles.md"},
    ]
  },
  {
    icon: "📧",
    title: "User Profile and Notifications",
    description: "Live Agent users can manage their profile settings and configure notifications based on their preferences.",
    links: [
      {text: "Profile Settings", href: "profile-settings.md"},
      {text: "Notifications", href: "notifications.md"},
    ]
  },
  {
    icon: "🖥️",
    title: "On-Premises Installation",
    description: "Refer to the instructions if you want to install Live Agent on your servers",
    links: [
      {text: "Version Compatibility Matrix", href: "installation/deployment/version-compatibility-matrix.md"},
      {text: "Deployment", href: "installation/deployment/installation-using-helm.md"},
      {text: "Migration Guides", href: "installation/migration/overview.md"},
    ]
  },
]} />
