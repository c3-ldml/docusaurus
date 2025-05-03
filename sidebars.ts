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
        {
          type: 'category',
          label: 'User Interface',
          items: [
            'ai/user-interface/main-page',
            'ai/user-interface/project-page',
            'ai/user-interface/resource-pages',
          ]
        },
        {
          type: 'category',
          label: 'Build',
          items: [
            'ai/build/projects',
            'ai/build/connections',
            {
              type: 'category',
              label: 'Flows',
              items: [
                'ai/build/flows/overview',
                'ai/build/flows/editor',
              ],
            },
            {
              type: 'category',
              label: 'Nodes',
              items: [
                'ai/build/nodes/overview',
                'ai/build/nodes/node-search',
                'ai/build/nodes/channels',
                {
                  type: 'category',
                  label: 'Node Reference',
                  items: [
                    'ai/build/node-reference/overview',
                    {
                      type: 'category',
                      label: 'AI',
                      items: [
                        'ai/build/node-reference/ai/overview',
                        'ai/build/node-reference/ai/add-lexicon-keyphrase',
                        'ai/build/node-reference/ai/ai-agent',
                        'ai/build/node-reference/ai/ai-agent-handover',
                        'ai/build/node-reference/ai/clean-text',
                        'ai/build/node-reference/ai/copy-slots-to-context',
                        'ai/build/node-reference/ai/disable-slot-fillers',
                        'ai/build/node-reference/ai/enable-slot-fillers',
                        'ai/build/node-reference/ai/execute-cognigy-nlu',
                        'ai/build/node-reference/ai/fuzzy-search',
                        'ai/build/node-reference/ai/match-pattern',
                        'ai/build/node-reference/ai/regex-slot-filler',
                        'ai/build/node-reference/ai/resolve-tool-action',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'AI Copilot',
                      items: [
                        'ai/build/node-reference/ai-copilot/overview',
                        'ai/build/node-reference/ai-copilot/identity-tile',
                        'ai/build/node-reference/ai-copilot/knowledge-tile',
                        'ai/build/node-reference/ai-copilot/next-action-tile',
                        'ai/build/node-reference/ai-copilot/send-data',
                        'ai/build/node-reference/ai-copilot/sentiment-tile',
                        'ai/build/node-reference/ai-copilot/set-adaptive-card-tile',
                        'ai/build/node-reference/ai-copilot/set-grid',
                        'ai/build/node-reference/ai-copilot/set-html-tile',
                        'ai/build/node-reference/ai-copilot/set-iframe-tile',
                        'ai/build/node-reference/ai-copilot/secure-forms-tile',
                        'ai/build/node-reference/ai-copilot/transcript-tile',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Analytics',
                      items: [
                        'ai/build/node-reference/analytics/overview',
                        'ai/build/node-reference/analytics/activate-profile',
                        'ai/build/node-reference/analytics/add-memory',
                        'ai/build/node-reference/analytics/blind-mode',
                        'ai/build/node-reference/analytics/complete-task',
                        'ai/build/node-reference/analytics/deactivate-profile',
                        'ai/build/node-reference/analytics/delete-profile',
                        'ai/build/node-reference/analytics/merge-profile',
                        'ai/build/node-reference/analytics/overwrite-analytics',
                        'ai/build/node-reference/analytics/request-rating',
                        'ai/build/node-reference/analytics/set-rating',
                        'ai/build/node-reference/analytics/track-goal',
                        'ai/build/node-reference/analytics/update-profile',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Basic',
                      items: [
                        'ai/build/node-reference/basic/overview',
                        'ai/build/node-reference/basic/debug-message',
                        'ai/build/node-reference/basic/optional-question',
                        'ai/build/node-reference/basic/question',
                        'ai/build/node-reference/basic/say',
                        'ai/build/node-reference/basic/send-text',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Data',
                      items: [
                        'ai/build/node-reference/data/overview',
                        'ai/build/node-reference/data/datepicker',
                        'ai/build/node-reference/data/email-notification',
                        'ai/build/node-reference/data/send-smtp-email',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Logic',
                      items: [
                        'ai/build/node-reference/logic/overview',
                        'ai/build/node-reference/logic/add-to-context',
                        'ai/build/node-reference/logic/execute-flow',
                        'ai/build/node-reference/logic/go-to',
                        'ai/build/node-reference/logic/if',
                        'ai/build/node-reference/logic/interval',
                        'ai/build/node-reference/logic/lookup',
                        'ai/build/node-reference/logic/once',
                        'ai/build/node-reference/logic/remove-from-context',
                        'ai/build/node-reference/logic/reset-state',
                        'ai/build/node-reference/logic/set-state',
                        'ai/build/node-reference/logic/sleep',
                        'ai/build/node-reference/logic/stop-and-return',
                        'ai/build/node-reference/logic/switch-locale',
                        'ai/build/node-reference/logic/think',
                        'ai/build/node-reference/logic/wait-for-input',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Other Nodes',
                      items: [
                        'ai/build/node-reference/other-nodes/overview',
                        'ai/build/node-reference/other-nodes/knowledge-search',
                        'ai/build/node-reference/other-nodes/llm-entity-extract',
                        'ai/build/node-reference/other-nodes/log-message',
                        'ai/build/node-reference/other-nodes/search-extract-output',
                        'ai/build/node-reference/other-nodes/set-translation',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Service',
                      items: [
                        'ai/build/node-reference/service/overview',
                        'ai/build/node-reference/service/add-transcript-steps',
                        'ai/build/node-reference/service/check-agent-availability',
                        'ai/build/node-reference/service/close-handover',
                        'ai/build/node-reference/service/get-transcript',
                        'ai/build/node-reference/service/gpt-conversation',
                        'ai/build/node-reference/service/handover-to-agent',
                        'ai/build/node-reference/service/http-request',
                        'ai/build/node-reference/service/llm-prompt',
                        'ai/build/node-reference/service/mongo-db',
                        'ai/build/node-reference/service/ms-sql',
                        'ai/build/node-reference/service/set-handover-inactivity',
                        'ai/build/node-reference/service/trigger-function',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Voice',
                      items: [
                        'ai/build/node-reference/voice/overview',
                        {
                          type: 'category',
                          label: 'AudioCodes',
                          items: [
                            'ai/build/node-reference/voice/audiocodes/overview',
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Generic',
                          items: [
                            'ai/build/node-reference/voice/generic/overview',
                          ],
                        },
                        {
                          type: 'category',
                          label: 'Voice Gateway',
                          items: [
                            'ai/build/node-reference/voice/voice-gateway/overview',
                          ],
                        },
                      ],
                    },
                    {
                      type: 'category',
                      label: 'xApp',
                      items: [
                        'ai/build/node-reference/xApp/overview',
                        'ai/build/node-reference/xApp/get-xApp-session-PIN',
                        'ai/build/node-reference/xApp/init-xApp-session',
                        'ai/build/node-reference/xApp/set-AdaptiveCard-xApp-state',
                        'ai/build/node-reference/xApp/set-html-xApp-state',
                      ],
                    },
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'CognigyScript',
              items: [
                'ai/build/cognigyscript',
                'ai/build/tokens',
              ],
            },
          ]
        },
        {
          type: 'category',
          label: 'Test',
          items: [
            {
              type: 'category',
              label: 'Interaction Panel',
              items: [
                'ai/test/interaction-panel/overview',
                'ai/test/interaction-panel/input',
                'ai/test/interaction-panel/context',
                'ai/test/interaction-panel/profile',
                'ai/test/interaction-panel/state'
              ]
            },
            'ai/test/demo-webchat',
            'ai/test/logs',
            'ai/test/playbooks',
            'ai/test/voice-preview'
          ],
        },
        {
          type: 'category',
          label: 'Deploy',
          items: [
            {
              type: 'category',
              label: 'Endpoints',
              items: [
                'ai/deploy/endpoints/overview',
                'ai/deploy/endpoints/data-protection-and-analytics',
                'ai/deploy/endpoints/session-management',
                'ai/deploy/endpoints/handover-settings',
                'ai/deploy/endpoints/real-time-translation-settings',
                'ai/deploy/endpoints/file-storage',
                'ai/deploy/endpoints/content-conversion',
                'ai/deploy/endpoints/testing-mode',
                'ai/deploy/endpoints/inject-and-notify',
                {
                  type: 'category',
                  label: 'Transformers',
                  items: [
                    'ai/deploy/endpoints/transformers/transformers',
                    'ai/deploy/endpoints/transformers/input-transformer',
                    'ai/deploy/endpoints/transformers/output-transformer',
                    'ai/deploy/endpoints/transformers/execution-finished-transformer',
                    'ai/deploy/endpoints/transformers/notify-transformer',
                    'ai/deploy/endpoints/transformers/inject-transformer',
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Endpoint Reference',
              items: [
                'ai/deploy/endpoint-reference/overview',
                'ai/deploy/endpoint-reference/8x8',
                'ai/deploy/endpoint-reference/amazon-alexa',
                'ai/deploy/endpoint-reference/amazon-lex',
                'ai/deploy/endpoint-reference/audiocodes',
                'ai/deploy/endpoint-reference/avaya-cpaas',
                'ai/deploy/endpoint-reference/azure-bot-services',
                'ai/deploy/endpoint-reference/bandwidth',
                'ai/deploy/endpoint-reference/dialogflow',
                'ai/deploy/endpoint-reference/facebook-messenger',
                'ai/deploy/endpoint-reference/genesys',
                'ai/deploy/endpoint-reference/intercom',
                'ai/deploy/endpoint-reference/line-messenger',
                'ai/deploy/endpoint-reference/microsoft-teams',
                'ai/deploy/endpoint-reference/nice',
                'ai/deploy/endpoint-reference/rest',
                'ai/deploy/endpoint-reference/ringcentral-engage',
                'ai/deploy/endpoint-reference/socketio',
                'ai/deploy/endpoint-reference/slack',
                'ai/deploy/endpoint-reference/sunshine-conversations',
                'ai/deploy/endpoint-reference/twilio',
                'ai/deploy/endpoint-reference/userlike',
                'ai/deploy/endpoint-reference/voice-copilot',
                'ai/deploy/endpoint-reference/voice-gateway',
                'ai/deploy/endpoint-reference/webchat',
                'ai/deploy/endpoint-reference/webhook',
                'ai/deploy/endpoint-reference/whatsapp',
                'ai/deploy/endpoint-reference/workplace-by-fb',
              ],
            },
            'ai/deploy/snapshots',
          ]
        },
      ],
    },
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

};

export default sidebars;
