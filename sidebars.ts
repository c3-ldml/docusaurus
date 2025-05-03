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
    {
      type: 'category',
      label: 'Human Escalation',
      items: [
        'ai/human-escalation/handovers',
        'ai/human-escalation/migration',
        {
          type: 'category',
          label: 'Handover Provider Reference',
          items: [
            'ai/human-escalation/handover-reference/overview',
            'ai/human-escalation/handover-reference/live-agent',
            'ai/human-escalation/handover-reference/chatwoot',
            'ai/human-escalation/handover-reference/ring-central-engage',
            'ai/human-escalation/handover-reference/salesforce',
            'ai/human-escalation/handover-reference/salesforce-miaw',
            'ai/human-escalation/handover-reference/genesys-cloud-guest-chat',
            {
              type: 'category',
              label: 'Genesys Cloud Open Messaging',
              items: [
                'ai/human-escalation/handover-reference/genesys-cloud-open-messaging',
                'ai/human-escalation/handover-reference/genesys-cloud-open-messaging-handover-end-detection',
              ],
            },
            'ai/human-escalation/handover-reference/8x8',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'ai/resource/projects',
        'ai/resource/connections',
        {
          type: 'category',
          label: 'Flows',
          items: [
            'ai/resource/flows/overview',
            'ai/resource/flows/editor',
          ],
        },
        {
          type: 'category',
          label: 'Nodes',
          items: [
            'ai/resource/nodes/overview',
            'ai/resource/nodes/node-search',
            'ai/resource/nodes/channels',
            {
              type: 'category',
              label: 'Node Reference',
              items: [
                'ai/resource/node-reference/overview',
                {
                  type: 'category',
                  label: 'AI',
                  items: [
                    'ai/resource/node-reference/ai/overview',
                    'ai/resource/node-reference/ai/add-lexicon-keyphrase',
                    'ai/resource/node-reference/ai/ai-agent',
                    'ai/resource/node-reference/ai/ai-agent-handover',
                    'ai/resource/node-reference/ai/clean-text',
                    'ai/resource/node-reference/ai/copy-slots-to-context',
                    'ai/resource/node-reference/ai/disable-slot-fillers',
                    'ai/resource/node-reference/ai/enable-slot-fillers',
                    'ai/resource/node-reference/ai/execute-cognigy-nlu',
                    'ai/resource/node-reference/ai/fuzzy-search',
                    'ai/resource/node-reference/ai/match-pattern',
                    'ai/resource/node-reference/ai/regex-slot-filler',
                    'ai/resource/node-reference/ai/resolve-tool-action',
                  ],
                },
                {
                  type: 'category',
                  label: 'AI Copilot',
                  items: [
                    'ai/resource/node-reference/ai-copilot/overview',
                    'ai/resource/node-reference/ai-copilot/identity-tile',
                    'ai/resource/node-reference/ai-copilot/knowledge-tile',
                    'ai/resource/node-reference/ai-copilot/next-action-tile',
                    'ai/resource/node-reference/ai-copilot/send-data',
                    'ai/resource/node-reference/ai-copilot/sentiment-tile',
                    'ai/resource/node-reference/ai-copilot/set-adaptive-card-tile',
                    'ai/resource/node-reference/ai-copilot/set-grid',
                    'ai/resource/node-reference/ai-copilot/set-html-tile',
                    'ai/resource/node-reference/ai-copilot/set-iframe-tile',
                    'ai/resource/node-reference/ai-copilot/secure-forms-tile',
                    'ai/resource/node-reference/ai-copilot/transcript-tile',
                  ],
                },
                {
                  type: 'category',
                  label: 'Analytics',
                  items: [
                    'ai/resource/node-reference/analytics/overview',
                    'ai/resource/node-reference/analytics/activate-profile',
                    'ai/resource/node-reference/analytics/add-memory',
                    'ai/resource/node-reference/analytics/blind-mode',
                    'ai/resource/node-reference/analytics/complete-task',
                    'ai/resource/node-reference/analytics/deactivate-profile',
                    'ai/resource/node-reference/analytics/delete-profile',
                    'ai/resource/node-reference/analytics/merge-profile',
                    'ai/resource/node-reference/analytics/overwrite-analytics',
                    'ai/resource/node-reference/analytics/request-rating',
                    'ai/resource/node-reference/analytics/set-rating',
                    'ai/resource/node-reference/analytics/track-goal',
                    'ai/resource/node-reference/analytics/update-profile',
                  ],
                },
                {
                  type: 'category',
                  label: 'Basic',
                  items: [
                    'ai/resource/node-reference/basic/overview',
                    'ai/resource/node-reference/basic/debug-message',
                    'ai/resource/node-reference/basic/optional-question',
                    'ai/resource/node-reference/basic/question',
                    'ai/resource/node-reference/basic/say',
                    'ai/resource/node-reference/basic/send-text',
                  ],
                },
                {
                  type: 'category',
                  label: 'Data',
                  items: [
                    'ai/resource/node-reference/data/overview',
                    'ai/resource/node-reference/data/datepicker',
                    'ai/resource/node-reference/data/email-notification',
                    'ai/resource/node-reference/data/send-smtp-email',
                  ],
                },
                {
                  type: 'category',
                  label: 'Logic',
                  items: [
                    'ai/resource/node-reference/logic/overview',
                    'ai/resource/node-reference/logic/add-to-context',
                    'ai/resource/node-reference/logic/execute-flow',
                    'ai/resource/node-reference/logic/go-to',
                    'ai/resource/node-reference/logic/if',
                    'ai/resource/node-reference/logic/interval',
                    'ai/resource/node-reference/logic/lookup',
                    'ai/resource/node-reference/logic/once',
                    'ai/resource/node-reference/logic/remove-from-context',
                    'ai/resource/node-reference/logic/reset-state',
                    'ai/resource/node-reference/logic/set-state',
                    'ai/resource/node-reference/logic/sleep',
                    'ai/resource/node-reference/logic/stop-and-return',
                    'ai/resource/node-reference/logic/switch-locale',
                    'ai/resource/node-reference/logic/think',
                    'ai/resource/node-reference/logic/wait-for-input',
                  ],
                },
                {
                  type: 'category',
                  label: 'Other Nodes',
                  items: [
                    'ai/resource/node-reference/other-nodes/overview',
                    'ai/resource/node-reference/other-nodes/knowledge-search',
                    'ai/resource/node-reference/other-nodes/llm-entity-extract',
                    'ai/resource/node-reference/other-nodes/log-message',
                    'ai/resource/node-reference/other-nodes/search-extract-output',
                    'ai/resource/node-reference/other-nodes/set-translation',
                  ],
                },
                {
                  type: 'category',
                  label: 'Service',
                  items: [
                    'ai/resource/node-reference/service/overview',
                    'ai/resource/node-reference/service/add-transcript-steps',
                    'ai/resource/node-reference/service/check-agent-availability',
                    'ai/resource/node-reference/service/close-handover',
                    'ai/resource/node-reference/service/get-transcript',
                    'ai/resource/node-reference/service/gpt-conversation',
                    'ai/resource/node-reference/service/handover-to-agent',
                    'ai/resource/node-reference/service/http-request',
                    'ai/resource/node-reference/service/llm-prompt',
                    'ai/resource/node-reference/service/mongo-db',
                    'ai/resource/node-reference/service/ms-sql',
                    'ai/resource/node-reference/service/set-handover-inactivity',
                    'ai/resource/node-reference/service/trigger-function',
                  ],
                },
                {
                  type: 'category',
                  label: 'Voice',
                  items: [
                    'ai/resource/node-reference/voice/overview',
                    {
                      type: 'category',
                      label: 'AudioCodes',
                      items: [
                        'ai/resource/node-reference/voice/audiocodes/overview',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Generic',
                      items: [
                        'ai/resource/node-reference/voice/generic/overview',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Voice Gateway',
                      items: [
                        'ai/resource/node-reference/voice/voice-gateway/overview',
                      ],
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'xApp',
                  items: [
                    'ai/resource/node-reference/xApp/overview',
                    'ai/resource/node-reference/xApp/get-xApp-session-PIN',
                    'ai/resource/node-reference/xApp/init-xApp-session',
                    'ai/resource/node-reference/xApp/set-AdaptiveCard-xApp-state',
                    'ai/resource/node-reference/xApp/set-html-xApp-state',
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
            'ai/resource/cognigyscript',
            'ai/resource/tokens',
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Empower',
      items: [
        {
          type: 'category',
          label: 'Agentic AI',
          items: [
            'ai/empower/agentic-ai/overview',
            'ai/empower/agentic-ai/getting-started',
            'ai/empower/agentic-ai/manage-ai-agents'
          ]
        },
        {
          type: 'category',
          label: 'Natural Language Understanding',
          items: [
            'ai/empower/nlu/overview',
            {
              type: 'category',
              label: 'Intents',
              items: [
                'ai/empower/nlu/intents/ml-intents',
                'ai/empower/nlu/intents/annotations',
                'ai/empower/nlu/intents/conditions',
                'ai/empower/nlu/intents/intent-analyzer',
                'ai/empower/nlu/intents/intent-hierarchy',
                'ai/empower/nlu/intents/intent-mapping-priority',
                'ai/empower/nlu/intents/intent-upload-download',
                'ai/empower/nlu/intents/reject-intents',
                'ai/empower/nlu/intents/rule-intents',
                'ai/empower/nlu/intents/trigger-intent',
                'ai/empower/nlu/intents/yes-no-intents'
              ]
            },
            {
              type: 'category',
              label: 'Slots and Lexicons',
              items: [
                'ai/empower/nlu/slots-and-lexicons/lexicons',
                'ai/empower/nlu/slots-and-lexicons/slots',
                'ai/empower/nlu/slots-and-lexicons/any-slots'
              ]
            },
            'ai/empower/nlu/slot-fillers',
            'ai/empower/nlu/text-cleaner',
            {
              type: 'category',
              label: 'External NLU',
              items: [
                'ai/empower/nlu/external/overview',
                'ai/empower/nlu/external/no-nlu',
                'ai/empower/nlu/external/nlu-connectors',
                'ai/empower/nlu/external/external-nlu-intent-recognition',
                'ai/empower/nlu/external/intent-reranking',
                'ai/empower/nlu/external/nlu-transformers'
              ]
            },
            {
              type: 'category',
              label: 'NLU Attachments',
              items: [
                'ai/empower/nlu/attachments/attached-flows',
                'ai/empower/nlu/attachments/attached-lexicons',
                'ai/empower/nlu/attachments/attachments'
              ]
            },
            {
              type: 'category',
              label: 'Other',
              items: [
                'ai/empower/nlu/language-support',
                'ai/empower/nlu/nlu-warnings'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'Large Language Models',
          items: [
            'ai/empower/llms/overview',
            'ai/empower/llms/model-support-by-feature',
            {
              type: 'category',
              label: 'Providers',
              items: [
                'ai/empower/llms/providers/all-providers',
                'ai/empower/llms/providers/microsoft-azure-openai',
                'ai/empower/llms/providers/openai',
                'ai/empower/llms/providers/openai-compatible',
                'ai/empower/llms/providers/anthropic',
                'ai/empower/llms/providers/google-vertex-ai',
                'ai/empower/llms/providers/google-gemini',
                'ai/empower/llms/providers/aleph-alpha',
                'ai/empower/llms/providers/amazon-bedrock',
                'ai/empower/llms/providers/mistral'
              ]
            },
            'ai/empower/llms/fallback',
            'ai/empower/llms/llm-session-token-counter',
            'ai/empower/llms/other-operations'
          ]
        },
        'ai/empower/generative-ai',
        {
          type: 'category',
          label: 'Knowledge AI',
          items: [
            'ai/empower/knowledge-ai/overview',
            'ai/empower/knowledge-ai/activate',
            'ai/empower/knowledge-ai/getting-started',
            'ai/empower/knowledge-ai/knowledge-store',
            {
              type: 'category',
              label: 'Knowledge Source',
              items: [
                'ai/empower/knowledge-ai/knowledge-source/knowledge-source',
                {
                  type: 'category',
                  label: 'Text Formats',
                  items: [
                    'ai/empower/knowledge-ai/knowledge-source/text-formats/ctxt',
                    'ai/empower/knowledge-ai/knowledge-source/text-formats/pdf',
                    'ai/empower/knowledge-ai/knowledge-source/text-formats/web-page'
                  ]
                },
                {
                  type: 'category',
                  label: 'Text Extraction',
                  items: [
                    'ai/empower/knowledge-ai/knowledge-source/text-extraction/overview',
                    'ai/empower/knowledge-ai/knowledge-source/text-extraction/basic-parser',
                    'ai/empower/knowledge-ai/knowledge-source/text-extraction/advanced-parser',
                    'ai/empower/knowledge-ai/knowledge-source/text-extraction/azure-ai'
                  ]
                },
                'ai/empower/knowledge-ai/knowledge-source/knowledge-source-tags'
              ]
            },
            {
              type: 'category',
              label: 'Knowledge Chunk',
              items: [
                'ai/empower/knowledge-ai/knowledge-chunk/knowledge-chunk',
                'ai/empower/knowledge-ai/knowledge-chunk/knowledge-chunk-editor'
              ]
            },
            {
              type: 'category',
              label: 'Knowledge Search and Extraction',
              items: [
                'ai/empower/knowledge-ai/knowledge-search-and-extraction/search-extract-output',
                'ai/empower/knowledge-ai/knowledge-search-and-extraction/ai-copilot-knowledge'
              ]
            },
            'ai/empower/knowledge-ai/distance-value-change-after-migration'
          ]
        }
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

};

export default sidebars;
