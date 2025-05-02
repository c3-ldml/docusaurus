import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Main sidebar for the home page

  // Cognigy.AI sidebar - simple navbar item
  cognigySidebar: [
    'ai/about-cognigy-ai',
    'ai/key-features',
    {
      type: 'category',
      label: 'AI Agents',
      items: [
        'ai/ai-agents/ai-workforce',
        'ai/ai-agents/getting-started-with-ai-agents',
        'ai/ai-agents/getting-started-with-digital-agent',
        'ai/ai-agents/getting-started-with-voice-agent',
      ],
    },
    {
      type: 'category',
      label: 'User Interface',
      items: [
        'ai/user-interface/main-page',
        'ai/user-interface/project-page',
        'ai/user-interface/resource-pages',
      ]
    }
  ],

  // Voice Gateway sidebar
  voiceSidebar: [
    'voice/intro',
    'voice/setup/installation',
    {
      type: 'category',
      label: 'Verbs',
      items: [
        'voice/verbs/overview',
      ],
    },
  ],

  // Webchat sidebar
  webchatSidebar: [
    'webchat/index',
  ],

  // API Reference sidebar
  apiSidebar: [
    'api/getting-started',
  ],

  // Guides sidebar
  guidesSidebar: [
    'guides/installation',
  ],
};

export default sidebars;
