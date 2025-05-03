---
title: "Data Nodes"
slug: "data"
hidden: false
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import {GridCards} from '@site/src/components/GridCards';

# Data

Data Nodes are designed to manage, manipulate, process, or store data within a system.

<GridCards items={[
  {
    icon: "📅",
    title: "Datepicker",
    description: "The Datepicker Node renders a date selection widget in certain channels.",
    links: [
      {text: "Documentation", href: "datepicker.md"}
    ]
  },
  {
    icon: "📧",
    title: "Send SMTP Email",
    description: "The Send SMTP Email Node sends an email directly from the Flow.",
    links: [
      {text: "Documentation", href: "send-smtp-email.md"}
    ]
  },
  {
    icon: "📨",
    title: "Email Notification",
    description: "The Email Notification Node sends quick and easy emails during sessions or for in-house communications.",
    links: [
      {text: "Documentation", href: "email-notification.md"}
    ]
  }
]} />
