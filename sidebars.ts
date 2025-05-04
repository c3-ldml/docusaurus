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
                'ai/empower/nlu/intents/yes-no-intents',
                'ai/empower/nlu/intents/intent-trainer'
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
        },
        {
          type: 'category',
          label: 'Developer Reference',
          items: [
            'ai/empower/developers/api-and-cli',
            'ai/empower/developers/client-libraries',
            'ai/empower/developers/extension-framework'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Analyze',
      items: [
        'ai/analyze/overview',
        {
          type: 'category',
          label: 'Collecting Data',
          items: [
            'ai/analyze/collecting-data',
            'ai/analyze/user-and-session-identification'
          ]
        },
        'ai/analyze/insights',
        'ai/analyze/odata',
        'ai/analyze/call-tracing',
        'ai/analyze/contact-profiles',
        {
          type: 'category',
          label: 'Goals and Tasks',
          items: [
            'ai/analyze/goals-and-tasks/overview',
            'ai/analyze/goals-and-tasks/tasks',
            'ai/analyze/goals-and-tasks/goals'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Administer',
      items: [
        {
          type: 'category',
          label: 'User Menu',
          items: [
            'ai/administer/user-menu/overview',
            'ai/administer/user-menu/my-profile',
            'ai/administer/hotkeys'
          ]
        },
        {
          type: 'category',
          label: 'Access Management',
          items: [
            {
              type: 'category',
              label: 'Admin Center',
              items: [
                'ai/administer/access/admin-center/overview',
                'ai/administer/access/admin-center/dashboard',
                'ai/administer/access/admin-center/access-control',
                'ai/administer/access/admin-center/audit-events',
                {
                  type: 'category',
                  label: 'Global Resources',
                  items: [
                    'ai/administer/access/admin-center/global-resources/overview',
                    'ai/administer/access/admin-center/global-resources/global-llms',
                    'ai/administer/access/admin-center/global-resources/global-connections'
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Project and Members',
              items: [
                'ai/administer/access/project-settings',
                'ai/administer/access/members'
              ]
            },
            'ai/administer/access/management-ui'
          ]
        },
        'ai/administer/limitations',
        'ai/administer/billing'
      ]
    },
    {
      type: 'category',
      label: 'Install, Configure, and Migrate',
      items: [
        'ai/installation/access-to-cognigy-ai',
        'ai/installation/about',
        'ai/installation/browser-requirements',
        'ai/installation/architecture',
        {
          type: 'category',
          label: 'On-Premises',
          items: [
            'ai/installation/overview',
            'ai/installation/version-compatibility-matrix',
            'ai/installation/prerequisites',
            'ai/installation/pre-installation-checklist',
            'ai/installation/installation-process',
            'ai/installation/reset-init-user-credentials',
            'ai/installation/backups',
            {
              type: 'category',
              label: 'Upgrade and Migration Guides',
              items: [
                'ai/installation/migration/overview',
                'ai/installation/migration/single-replica-mongoDB-to-multi-replica-mongoDB-migration',
                'ai/installation/migration/kustomize-to-helm-migration',
                'ai/installation/migration/efs-provisioner-to-efs-csi-migration',
                'ai/installation/migration/azure-file-to-azure-csi-migration',
                'ai/installation/migration/from-nlu-v1-to-v2-migration',
                'ai/installation/migration/single-replica-redis-to-redis-ha-migration',
                'ai/installation/migration/weaviate-upgrade-to-1.22.5',
                'ai/installation/migration/from-weaviate-to-qdrant'
              ]
            }
          ]
        },
        {
          type: 'category',
          label: 'SaaS',
          items: [
            'ai/installation/saas-service-health',
            'ai/installation/ip-ranges-shared-environments'
          ]
        },
        {
          type: 'category',
          label: 'Single Sign-on (SSO)',
          items: [
            'ai/installation/single-sign-on-saml2',
            'ai/installation/single-signin-openid-connect'
          ]
        }
      ]
    }
  ],

  // Voice Gateway sidebar
  voiceSidebar: [
    'voice-gateway/index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'voice-gateway/overview',
        'voice-gateway/getting-started',
        'voice-gateway/technical-capabilities',
        'voice-gateway/migrate-from-ac-to-vg',
        'voice-gateway/glossary'
      ]
    },
    {
      type: 'category',
      label: 'Self-Service Portal',
      items: [
        'voice-gateway/webapp/overview',
        'voice-gateway/webapp/users',
        'voice-gateway/webapp/accounts',
        'voice-gateway/webapp/applications',
        'voice-gateway/webapp/recent-calls',
        'voice-gateway/webapp/alerts',
        'voice-gateway/webapp/carriers',
        {
          type: 'category',
          label: 'Speech Services',
          items: [
            'voice-gateway/webapp/speech-services',
            'voice-gateway/webapp/streaming'
          ]
        },
        'voice-gateway/webapp/phone-numbers',
        'voice-gateway/webapp/outbound-call-routing'
      ]
    },
    {
      type: 'category',
      label: 'Outbound Calls',
      items: [
        'voice-gateway/creating-outbound-calls',
        'voice-gateway/call-statuses'
      ]
    },
    {
      type: 'category',
      label: 'References',
      items: [
        {
          type: 'category',
          label: 'Voice Gateway Verbs',
          items: [
            'voice-gateway/references/verbs/overview',
            'voice-gateway/references/verbs/amd',
            'voice-gateway/references/verbs/config',
            'voice-gateway/references/verbs/dial',
            'voice-gateway/references/verbs/dub',
            'voice-gateway/references/verbs/dtmf',
            'voice-gateway/references/verbs/gather',
            'voice-gateway/references/verbs/hangup',
            'voice-gateway/references/verbs/listen',
            'voice-gateway/references/verbs/play',
            'voice-gateway/references/verbs/say',
            'voice-gateway/references/verbs/sip-refer',
            'voice-gateway/references/verbs/sip-request',
            'voice-gateway/references/verbs/transcribe'
          ]
        },
        {
          type: 'category',
          label: 'Voice Gateway Events',
          items: [
            'voice-gateway/references/events/overview',
            'voice-gateway/references/events/ANSWERING_MACHINE_DETECTION',
            'voice-gateway/references/events/CALL_CREATED',
            'voice-gateway/references/events/CALL_COMPLETED',
            'voice-gateway/references/events/CALL_FAILED',
            'voice-gateway/references/events/CALL_IN_PROGRESS',
            'voice-gateway/references/events/CALL_RECONNECTED',
            'voice-gateway/references/events/RECOGNIZED_DTMF',
            'voice-gateway/references/events/RECOGNIZED_SPEECH',
            'voice-gateway/references/events/TRANSFER_DIAL_ERROR',
            'voice-gateway/references/events/TRANSFER_DIAL_SUCCESS',
            'voice-gateway/references/events/TRANSFER_REFER_ERROR',
            'voice-gateway/references/events/TRANSFER_REFER_SUCCESS',
            'voice-gateway/references/events/USER_BUSY',
            'voice-gateway/references/events/USER_INPUT_TIMEOUT',
            'voice-gateway/references/events/NO_ANSWER'
          ]
        },
        'voice-gateway/references/sip-response-codes',
        'voice-gateway/references/tts-and-stt-vendors',
        'voice-gateway/references/sip-trunk-providers'
      ]
    },
    {
      type: 'category',
      label: 'On-Premises Installation',
      items: [
        'voice-gateway/installation/overview',
        'voice-gateway/installation/browser-requirements',
        'voice-gateway/installation/version-compatibility-matrix',
        'voice-gateway/installation/installation-process'
      ]
    }
  ],

  // Webchat sidebar
  webchatSidebar: [
    'webchat/index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'webchat/overview',
        'webchat/getting-started'
      ]
    },
    {
      type: 'category',
      label: 'Webchat v3',
      items: [
        'webchat/v3/overview',
        'webchat/v3/supported-browsers',
        'webchat/v3/features',
        {
          type: 'category',
          label: 'Endpoint Configuration',
          items: [
            'webchat/v3/configuration',
            'webchat/v3/metadata'
          ]
        },
        'webchat/v3/accessibility',
        'webchat/v3/embedding'
      ]
    },
    {
      type: 'category',
      label: 'Webchat v2 (Deprecated)',
      items: [
        'webchat/v2/overview',
        'webchat/v2/supported-browsers',
        'webchat/v2/features',
        'webchat/v2/configuration',
        'webchat/v2/embedding'
      ]
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        'webchat/migration',
        'webchat/plugins',
        'webchat/demo',
        'webchat/release-notes'
      ]
    }
  ],

  // Live Agent sidebar
  liveAgentSidebar: [
    'live-agent/index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'live-agent/overview',
        {
          type: 'category',
          label: 'Getting Started',
          items: [
            'live-agent/getting-started/overview',
            {
              type: 'category',
              label: 'Live Agent Setup',
              items: [
                'live-agent/getting-started/live-agent-setup/live-agent-setup-org',
                'live-agent/getting-started/live-agent-setup/live-agent-setup-inbox',
                {
                  type: 'category',
                  label: 'Handover Setup',
                  items: [
                    'live-agent/getting-started/live-agent-setup/live-agent-setup-handover',
                    'live-agent/getting-started/live-agent-setup/live-agent-setup-handover-endpoint',
                    'live-agent/getting-started/live-agent-setup/live-agent-setup-handover-flow',
                  ]
                },
                'live-agent/getting-started/live-agent-setup/live-agent-setup-agents',
                'live-agent/getting-started/live-agent-setup/live-agent-setup-additional-inbox',
              ]
            },
            'live-agent/glossary',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Conversations',
      items: [
        'live-agent/conversation/overview',
        'live-agent/conversation/assign-conversations',
        {
          type: 'category',
          label: 'Conversation Queue',
          items: [
            'live-agent/conversation/conversation-queue/overview',
            'live-agent/conversation/conversation-queue/real-time-queue-notifications',
          ]
        },
        {
          type: 'category',
          label: 'Conversation Routing',
          items: [
            'live-agent/conversation/conversation-routing/overview',
            'live-agent/conversation/conversation-routing/manual-mode',
            'live-agent/conversation/conversation-routing/automatic-mode',
          ]
        },
        'live-agent/conversation/send-reply',
        'live-agent/conversation/search-and-filter',
        'live-agent/conversation/other-operations',
      ]
    },
    {
      type: 'category',
      label: 'Assistants',
      items: [
        'live-agent/assistants/overview',
        'live-agent/assistants/ai-copilot-whisper',
        'live-agent/assistants/ai-copilot',
        'live-agent/assistants/ai-copilot-bot',
      ]
    },
    {
      type: 'category',
      label: 'Analytics Tools',
      items: [
        {
          type: 'category',
          label: 'Reports',
          items: [
            'live-agent/reports/overview',
            'live-agent/reports/supervisor-overview',
            {
              type: 'category',
              label: 'Administrator Reports',
              items: [
                'live-agent/reports/admin/overview',
                'live-agent/reports/admin/conversations',
                'live-agent/reports/admin/agents',
                'live-agent/reports/admin/labels',
                'live-agent/reports/admin/inboxes',
                'live-agent/reports/admin/teams',
              ]
            }
          ]
        },
        'live-agent/tools/odata-endpoint',
      ]
    },
    {
      type: 'category',
      label: 'Settings',
      items: [
        'live-agent/settings/overview',
        'live-agent/settings/agents',
        'live-agent/settings/teams',
        'live-agent/settings/inboxes',
        'live-agent/settings/labels',
        'live-agent/settings/skills',
        'live-agent/settings/automation-rules',
        'live-agent/settings/canned-responses',
        'live-agent/settings/attachments',
        'live-agent/settings/audit-logs',
        'live-agent/settings/account-settings',
      ]
    },
    {
      type: 'category',
      label: 'Access Management',
      items: [
        'live-agent/roles',
      ]
    },
    {
      type: 'category',
      label: 'User Profile and Notifications',
      items: [
        'live-agent/notifications',
        'live-agent/profile-settings',
      ]
    },
    {
      type: 'category',
      label: 'On-Premises Installation',
      items: [
        'live-agent/installation/browser-requirements',
        'live-agent/installation/deployment/version-compatibility-matrix',
        {
          type: 'category',
          label: 'Deployment',
          items: [
            'live-agent/installation/deployment/architecture',
            'live-agent/installation/deployment/prerequisites',
            'live-agent/installation/deployment/installation-using-helm',
            'live-agent/installation/deployment/cognigy-live-agent-oauth',
            {
              type: 'category',
              label: 'Helm Values',
              items: [
                'live-agent/installation/helm-values/helm-values',
                'live-agent/installation/helm-values/database',
                'live-agent/installation/helm-values/redis',
                'live-agent/installation/helm-values/storage',
                'live-agent/installation/helm-values/smtp',
                'live-agent/installation/helm-values/email-templates',
              ]
            }
          ]
        },
        'live-agent/installation/deployment/installation-updates',
        {
          type: 'category',
          label: 'Upgrade and Migration Guides',
          items: [
            'live-agent/installation/migration/overview',
            'live-agent/installation/migration/helm-dependencies',
            'live-agent/installation/migration/redis-sentinel',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        'live-agent/FAQs',
      ]
    }
  ],

  // Insights sidebar
  insightsSidebar: [
    'insights/index',
    {
      type: 'category',
      label: 'Overview',
      items: [
        'insights/overview',
        'insights/glossary',
      ]
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'insights/reports/overview',
        'insights/reports/engagement',
        'insights/reports/nlu-performance',
        'insights/reports/live-agent',
        'insights/reports/goals',
      ]
    },
    {
      type: 'category',
      label: 'Explorers',
      items: [
        'insights/explorers/step',
        'insights/explorers/transcript',
        'insights/explorers/message',
      ]
    },
    {
      type: 'category',
      label: 'Filter and Sort',
      items: [
        'insights/global-filters',
      ]
    },
    {
      type: 'category',
      label: 'Data Management',
      items: [
        {
          type: 'category',
          label: 'Pre-Aggregation',
          items: [
            'insights/data-management/pre-aggregation',
            'insights/data-management/time-zone-with-pre-aggregation',
          ]
        },
        'insights/data-management/time-zone',
        'insights/data-management/ttl',
      ]
    },
    {
      type: 'category',
      label: 'Download Reports',
      items: [
        'insights/download-reports',
      ]
    }
  ],

  // Support sidebar
  supportSidebar: [
    'help/index',
    'help/get-help'
  ],

  // Release Notes sidebar
  releaseNotesSidebar: [
    'release-notes/index',
    'release-notes/deprecations-and-removals',
    {
      type: 'category',
      label: 'Product Versions',
      items: [
        {
          type: 'category',
          label: '4.10x',
          items: [
            'release-notes/4.100'
          ]
        },
        {
          type: 'category',
          label: '4.9x',
          items: [
            'release-notes/4.99',
            'release-notes/4.98',
            'release-notes/4.97',
            'release-notes/4.96',
            'release-notes/4.95',
            'release-notes/4.94',
            'release-notes/4.93',
            'release-notes/4.92',
            'release-notes/4.91',
            'release-notes/4.90'
          ]
        },
        {
          type: 'category',
          label: '4.8x',
          items: [
            'release-notes/4.89',
            'release-notes/4.88',
            'release-notes/4.87',
            'release-notes/4.86',
            'release-notes/4.85',
            'release-notes/4.84',
            'release-notes/4.83',
            'release-notes/4.82',
            'release-notes/4.81',
            'release-notes/4.80'
          ]
        },
        {
          type: 'category',
          label: '4.7x',
          items: [
            'release-notes/4.79',
            'release-notes/4.78',
            'release-notes/4.77',
            'release-notes/4.76',
            'release-notes/4.75',
            'release-notes/4.74',
            'release-notes/4.73',
            'release-notes/4.72',
            'release-notes/4.71',
            'release-notes/4.70'
          ]
        },
        {
          type: 'category',
          label: '4.6x',
          items: [
            'release-notes/4.69',
            'release-notes/4.68',
            'release-notes/4.67',
            'release-notes/4.66',
            'release-notes/4.65',
            'release-notes/4.64',
            'release-notes/4.63',
            'release-notes/4.62',
            'release-notes/4.61',
            'release-notes/4.60'
          ]
        },
        {
          type: 'category',
          label: '4.5x',
          items: [
            'release-notes/4.59',
            'release-notes/4.58',
            'release-notes/4.57',
            'release-notes/4.56',
            'release-notes/4.55',
            'release-notes/4.54',
            'release-notes/4.53',
            'release-notes/4.52',
            'release-notes/4.51',
            'release-notes/4.50'
          ]
        },
        {
          type: 'category',
          label: '4.4x',
          items: [
            'release-notes/4.49',
            'release-notes/4.48',
            'release-notes/4.47',
            'release-notes/4.46',
            'release-notes/4.45',
            'release-notes/4.44',
            'release-notes/4.43',
            'release-notes/4.42',
            'release-notes/4.41',
            'release-notes/4.40'
          ]
        },
        {
          type: 'category',
          label: '4.3x',
          items: [
            'release-notes/4.39',
            'release-notes/4.38',
            'release-notes/4.37',
            'release-notes/4.36',
            'release-notes/4.35',
            'release-notes/4.34',
            'release-notes/4.33',
            'release-notes/4.32',
            'release-notes/4.31',
            'release-notes/4.30'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Earlier Product Versions',
      items: [
        'release-notes/earlier-versions/overview',
        'release-notes/earlier-versions/cognigy-ai-pre-4.30',
        'release-notes/earlier-versions/insights-pre-4.30',
        'release-notes/earlier-versions/live-agent-pre-4.30'
      ]
    }
  ],

};

export default sidebars;
