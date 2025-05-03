---
title: "Send Metadata" 
slug: "send-metadata" 
hidden: false 
tags:
  - Voice Gateway
  - Send Metadata
---
import CollapsibleSection from '@site/src/components/CollapsibleSection';


# Send Metadata

<figure>
  <img class="image-center" src="../../../../../../static/img/_assets/ai/build/node-reference/vg/send-metadata.png" width="50%" />
</figure>

## Description

The Send Metadata Node will send metadata via SIP INFO messages to the connected SIP trunk.

## Parameters

| Parameter | Type | Description                                                   |
|-----------|------|---------------------------------------------------------------|
| Metadata  | JSON | The metadata to send via SIP INFO. See below for an example.  |

### JSON Example

```json
{
  "myParamName": "myParamValue"
}
```