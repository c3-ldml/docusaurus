---
title: "Inbox Setup" 
slug: "live-agent-setup-inbox" 
hidden: false 
---

# Set up the Inbox for Live Agent

After [setting up Live Agent for your organization](live-agent-setup-org.md), configure your default Live Agent Inbox.

## Agent Settings

To create a new Inbox for the Agent, follow these steps:

1. In the Cognigy.AI interface, open an existing [Agent](../../../ai/build/projects.md).
2. In the left-side menu of the Agent, click **Manage > Settings**.
3. Scroll down and find **Live Agent Settings**.
4. Click **Create Project Inbox**.

Once the Inbox is created, the **Default Inbox ID** button will be disabled.

<img src={require('../../../../static/img/_assets/live-agent/getting-started/project-wide-live-agent-setting-with-inbox-id.png').default} width="100%" />

## Troubleshooting

### Create Project Inbox disabled

The **Create Project Inbox** button could also be disabled for the following reasons:

* You do not have the Cognigy Live Agent feature enabled.
* The organization does not have a Live Agent account set up.
* You do not have permissions to create an Inbox for the Agent.

**Example 1**

The Cognigy Live Agent feature is not enabled, or a Live Agent account is not set up at the organizational level.

<img src={require('../../../../static/img/_assets/live-agent/getting-started/project-wide-live-agent-settings-not-configured.png').default} width="100%" />

**Example 2**

You don't have permissions to create an Inbox for Live Agent.

<img src={require('../../../../static/img/_assets/live-agent/getting-started/project-wide-live-agent-setting-no-permissions.png').default} width="100%" />

If you have both **Theming** enabled and the Cognigy Live Agent feature disabled, The **Live Agent Settings** section on both the **Admin Center** and **Agent Settings** pages will not be displayed.

## What's Next?

Now you need to set up a [Handover](live-agent-setup-handover.md) to Live Agent.
