---
 title: "Attached Lexicon" 
 slug: "attached-lexicons" 
 hidden: false 
---
# Attached Lexicon

The Lexicon attachment feature allows single Lexicon libraries to be re-used across any Cognigy.AI agents. Lexicons can simply be **Attached** to single or multiple flows, in order to recognize custom keyphrases.

In order to attach a Lexicon, it must first be created in the [Lexicons Editor](../slots-and-lexicons/lexicons.md). All available Lexicons that have been added to the agent will be populated in the *Attach Lexicon* list.

## Managing Attached Lexicons


### Accessing the Attachment Menu

From the flow editor, select the **NLU** tab in the top menu and then select the **Attachments** sub-tab to open the Attachments menu.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/attach-flows-menu.png').default} width="100%" />

### Attach a Lexicon

Lexicons are attached by clicking the lexicon in the list, which enables the attachment toggle.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/attach-lexicons.png').default} width="100%" />

:::warning[Train Intents when Attaching]

  The NLU must be re-trained anytime a new flow or lexicon is attached.

:::

