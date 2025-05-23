---
title: "LLM Providers"
description: "Overview of all available LLM providers in Cognigy.AI"
---

import {GridCards} from '@site/src/components/GridCards';

# LLM Providers

<GridCards items={[
  {
    icon: "![azure](../../../../static/img/_assets/icons/azure.svg)",
    title: "Azure OpenAI",
    description: "Add credentials for the predefined models, such as `gpt-4o`, `gpt-4o-mini`, and `text-embedding` models, or a custom model based on an Azure OpenAI model.",
    links: [
      {text: "Learn More", href: "microsoft-azure-openai"}
    ]
  },
  {
    icon: "![open-ai](../../../../static/img/_assets/icons/open-ai.svg)",
    title: "OpenAI",
    description: "Add credentials for the predefined models, such as `gpt-4o`, `gpt-4o-mini`, and `text-embedding` models, or add a custom model based on an OpenAI model.",
    links: [
      {text: "Learn More", href: "openai"}
    ]
  },
  {
    icon: "![openai-compatible](../../../../static/img/_assets/icons/openai-compatible.svg)",
    title: "OpenAI-Compatible LLMs",
    description: "Add credentials for models from any providers that adhere to the OpenAI API standards, including HuggingFace, DeepSeek, xAI, Fireworks AI and others.",
    links: [
      {text: "Learn More", href: "openai-compatible"}
    ]
  },
  {
    icon: "![anthropic](../../../../static/img/_assets/icons/anthropic.svg)",
    title: "Anthropic",
    description: "Add credentials for the predefined models such as `claude-3-opus`, `claude-3-sonnet`, `claude-3-opus`, or add a custom model based on an Anthropic model.",
    links: [
      {text: "Learn More", href: "anthropic"}
    ]
  },
  {
    icon: "![google-vertex](../../../../static/img/_assets/icons/google-vertex.svg)",
    title: "Google Vertex",
    description: "Add credentials for the predefined model `text-bison-001 (Bard)` or add a custom model based on a model from the Vertex AI family.",
    links: [
      {text: "Learn More", href: "google-vertex-ai"}
    ]
  },
  {
    icon: "![google-gemini](../../../../static/img/_assets/icons/google-gemini.svg)",
    title: "Google Gemini",
    description: "Add credentials for the predefined model, such as `gemini-2.0-flash` and `gemini-2.0-flash-lite`, or add a custom model based on a model from the Gemini family.",
    links: [
      {text: "Learn More", href: "google-gemini"}
    ]
  },
  {
    icon: "![alephalpha](../../../../static/img/_assets/icons/alephalpha.svg)",
    title: "Aleph Alpha",
    description: "Add credentials for the predefined models such as `luminous` and `luminous-embedding-128` or add a custom model based on an Aleph Alpha model.",
    links: [
      {text: "Learn More", href: "aleph-alpha"}
    ]
  },
  {
    icon: "![amazon-bedrock](../../../../static/img/_assets/icons/amazon-bedrock.svg)",
    title: "Amazon Bedrock",
    description: "Add credentials for the predefined models or add a custom model based on any Amazon Bedrock model that supports the [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html).",
    links: [
      {text: "Learn More", href: "amazon-bedrock"}
    ]
  },
  {
    icon: "![mistral](../../../../static/img/_assets/icons/mistral.svg)",
    title: "Mistral AI",
    description: "Add credentials for the predefined models, such as `mistral-large-2411` and `pixtral-large-2503`, or add a custom model based on a Mistral AI model.",
    links: [
      {text: "Learn More", href: "mistral"}
    ]
  },
  {
    icon: "![ai-logo](../../../../static/img/_assets/icons/ai-logo.svg)",
    title: "Cognigy Nexus LLM",
    description: "Cognigy Nexus LLM is a proprietary LLM, provided and hosted by Cognigy, optimized for AI-driven customer service.",
    links: [
      {text: "Learn More", href: "cognigy-nex-llm"}
    ]
  },
  {
    icon: "![ai-logo](../../../../static/img/_assets/icons/ai-logo.svg)",
    title: "Platform-Provided LLM[^1]",
    description: "Cognigy.AI provides a GPT-based LLM for setting up and testing [design-time features](../../generative-ai.mdx#design-time-generative-ai-features).",
    links: [
      {text: "Learn More", href: "../model-support-by-feature"}
    ]
  }
]} />

[^1]: The Platform-Provided LLM is available only to customers with SaaS installations.