---
title: "Hangup"
slug: "hangup"
description: "The Hangup Node is used to end an AudioCodes voice conversation."
hidden: false
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';

# Hangup

<ACAndGenericNodeDeprecation />

<figure>
  <img class="image-center" src="../../../../../../static/img/_assets/ai/build/node-reference/audiocodes/hang-up.png" width="80%" />
  <figcaption>AudioCodes Hang Up</figcaption>
</figure>

## Description

The Hangup Node will instruct AudioCodes to end the call.

| Parameter | Type          | Description                                              |
|-----------|---------------|----------------------------------------------------------|
| Reasons   | CognigyScript | The reason for hanging up. Will show in AudioCodes logs. |
