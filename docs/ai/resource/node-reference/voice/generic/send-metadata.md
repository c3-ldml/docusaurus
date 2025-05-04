---
title: "Send Metadata"
slug: "send-metadata"
description: "The Send Metadata Node is used to send metadata in a voice conversation."
hidden: false
---

import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';

# Send Metadata

<a href="../../../../../release-notes/4.45.md" /><img src="https://img.shields.io/badge/Added in-v4.45-blue.svg" alt="Version badge" />

<figure>
  <img class="image-center" src="../../../../../../static/img/_assets/ai/resource/node-reference/generic-voice/send-metadata.png" width="80%" />
  <figcaption>Voice Gateway Send Metadata Node</figcaption>
</figure>

## Description

<ACAndGenericNodeDeprecation />

The Send Metadata Node sends metadata via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                        |
|-----------|------|------------------------------------|
| Metadata | JSON | The metadata to send via SIP INFO. |

Example:

```json
{
  "myParamName": "myParamValue"
}
```

:::note[This Node supports Activity Parameters]

  You can find more information about activity parameters on the [Parameter Details](../voice-gateway/parameter-details.md) page.

:::

