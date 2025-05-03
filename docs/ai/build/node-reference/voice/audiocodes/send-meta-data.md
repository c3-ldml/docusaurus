---
title: "Send Meta Data"
slug: "send-meta-data"
description: "The Send Meta Data Node is used to send metadata in an AudioCodes voice conversation."
hidden: false
---

import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';

# Send Meta Data

<figure>
  <img class="image-center" src="../../../../../../static/img/_assets/ai/build/node-reference/audiocodes/send-metadata.png" width="80%" />
  <figcaption>AudioCodes Metadata</figcaption>
</figure>

## Description

<ACAndGenericNodeDeprecation />

The Send Metadata Node will send metadata via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                                                   |
|-----------|------|---------------------------------------------------------------|
| Metadata | JSON | The metadata to send via SIP INFO. See below for an example. |

```json
{
  "myParamName": "myParamValue"
}
``` 