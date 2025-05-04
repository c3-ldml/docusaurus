---
title: "Call Recording"
slug: "call-recording"
description: "The Call Recording Node is used to control call recording in AudioCodes voice conversations."
hidden: false
---

import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';

# Call Recording

<ACAndGenericNodeDeprecation />

<img src={require('../../../../../../static/img/_assets/ai/resource/node-reference/audiocodes/call-recording.png').default} width="80%" />

## Description

The Call Recording Node controls the voice recording capabilities of the conversation.

Recording is done by the SBC (SRC) using the SIPRec protocol and functioning as the Session Recording Client (SRC).
The session recording server (SRS) can be, for example, AudioCodes SmartTAP recording solution or any other SRS.

| Parameter             | Type          | Description                                                                                               |
|-----------------------|---------------|-----------------------------------------------------------------------------------------------------------|
| Activity              | Select        | Whether to start or stop a call recording.                                                                |
| Call Recording Server | CognigyScript | Defines the SRS as an IP Group name (as configured on the SBC) to record the call.                        |
| Call Recording ID     | CognigyScript | Defines the recording ID session, which is forwarded by the SBC to the SRS in the XML body.               |
| Destination Username  | CognigyScript | Defines the username that is used in the SIP Request-URI and To headers of the INVITE request for SIPRec. |
