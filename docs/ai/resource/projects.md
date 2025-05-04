---
title: "Projects"
slug: "projects"
description: "Cognigy.AI Projects contain collections of Conversational AI resources, including Flows, Lexicons, Endpoints, and other resources. You can collaborate on a given Project with multiple team members."
hidden: false
tags:
  - Cognigy.AI
  - Projects
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Projects

<a href="../../release-notes/4.92.md" /><img src="https://img.shields.io/badge/Updated in-v4.92-blue.svg" alt="Version badge" />

_Projects_ are collections of Conversational AI resources with which you can create AI Agents. AI Agents are bots designed to tackle one use case and handle multiple user intents. You can deploy AI Agents on a wide range of channels within a Project. Multiple team members can work on a Project at the same time.

<Tabs>
  <TabItem value="tab1" label="GUI" default>
    To create a Project with the [Project Creation wizard](#project-creation-wizard), click the **+** button in the upper-left corner of the [Main page](../overview/user-interface/main-page.md). On the **Main** page, you can also edit or delete a Project as well as copy a Project's Reference ID.

  </TabItem>
  <TabItem value="tab2" label="API">
    You can view, create, and manage Projects using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#get-/v2.0/projects).

  </TabItem>
  <TabItem value="tab3" label="CLI">
    You can access Project resources, for example, AI Agents, Flows, and Endpoints, using the [Cognigy.AI CLI](https://github.com/Cognigy/Cognigy-CLI?tab=readme-ov-file#cognigy-command-line-interface-cli).

  </TabItem>
  <TabItem value="tab4" label="Agentic AI">
    An autonomous AI Agent driven by large language models (LLMs). You can build an [Agentic AI Agent](../empower/agentic-ai/getting-started.md) or hire one from the [Job Market](../empower/agentic-ai/overview.md#job-market).

  </TabItem>
  <TabItem value="tab5" label="Intent-driven AI">
    An AI Agent that uses [Intents](../empower/nlu/intents/ml-intents.md) to understand user input. You can build an [AI Agent](../../ai/overview/getting-started-with-digital-agent.md) and integrate it with [Knowledge AI](../empower/knowledge-ai/overview.md), a RAG-based solution that provides context-aware responses.

  </TabItem>
</Tabs>
Projects include [Flows](../resource/flows/overview.md), [Endpoints](../deploy/endpoints/overview.md), [Connections](connections.md), and many other resources you need to build an AI Agent.

## Working with Projects

### Project Creation Wizard

In the Project Creation wizard, select a Project type based on the AI Agent you want to build:

After creating a Project, you can customize your AI Agent to be Intent-driven or Agentic according to your needs.

If you already have a Live Agent account and admin rights, you can also:

- Connect Live Agent to your Project using the **Set Up Cognigy Live Agent** option.
- Create an [AI Copilot](../../ai-copilot/overview.md) Flow by selecting the **Enable AI Copilot** option from the list.

:::note[Live Agent feature flag for on-premises installations]

  For on-premises installations, the **Live Agent** section in the Project Creation wizard is visible only if you enable the `FEATURE_USE_COGNIGY_LIVE_AGENT` environment variable.

:::


## Task Panel

<a href="../../release-notes/4.65.md" /><img src="https://img.shields.io/badge/Updated in-v4.65-blue.svg" alt="Version badge" />

_Tasks_ are specific activities, such as training Intents, importing Snapshots, or creating a new Project. A Task is an asynchronous process that runs in the background and for which you get notifications. The Task Panel provides an overview of ongoing and completed Tasks. To open the Task Panel, click the ![task-menu](../../../static/img/_assets/icons/task-menu.svg) button in the upper-right corner of the **Project** page. 

<CollapsibleSection title="View Tasks">

    Note that only the most recent 100 tasks are visible on the Task Panel. To view tasks beyond the latest 100, use the [Get Tasks](https://api-trial.cognigy.ai/openapi#get-/v2.0/tasks) API request as follows:

    - To skip the first 100 Tasks that are already visible on the Task Panel, set the `skip` parameter to 100.
    - To view, for example, the next 100 Tasks, set the `limit` parameter to 100.

</CollapsibleSection>


## More Information

- [User Menu](../administer/user-menu/overview.md)
- [Interaction Panel](../test/interaction-panel/overview.md)
- [Insights](../../insights/overview.md)
- [Analytics](../analyze/overview.md)
- [Agentic AI Agent](../empower/agentic-ai/overview.md)
- [AI Workforce](../../ai/overview/ai-workforce.md)
