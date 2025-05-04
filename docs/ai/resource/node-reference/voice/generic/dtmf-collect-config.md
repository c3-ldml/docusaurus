---
title: "DTMF Collect Config"
slug: "dtmf-collect-config"
description: "The DTMF Collect Config Node is used to configure DTMF collection settings in voice conversations."
hidden: false
---

import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';

# DTMF Collect Config

<img src={require('../../../../../../static/img/_assets/ai/resource/node-reference/generic-voice/dtmf-collect-config.png').default} width="80%" />

## Description

<ACAndGenericNodeDeprecation />

Enables capturing of DTMF signals by the voice agent during the entire call session.

When executed, the settings will apply for the remainder of the session.

| Parameter                | Type          | Description                                                                                                                                    |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Capture DTMF signals     | Toggle        | Enables capturing of DTMF signals by the voice agent                                                                                           |
| DTMF Inter Digit Timeout | Number        | Defines the timeout in between collected DTMF digits                                                                                           |
| DTMF Max Digits          | Number        | Defines the maximum number of digits which can be entered by the user, the digits are being submitted automatically once this limit is reached |                         |
| DTMF Submit Digit        | CognigyScript | Defines the DTMF submit digit which will be used for submitting the previously entered digits. This overrides the minimum digits validation    |

