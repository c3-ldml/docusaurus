---
title: "Set AdaptiveCard xApp State"
slug: "set-adaptivecard-xapp-state"
description: "The Set AdaptiveCard xApp State Node is used to set the state of an AdaptiveCard in an xApp."
hidden: false
---

import CustomNode from '@site/docs/_includes/ai/xApp/_custom-node.md';
import WaitingBehavior from '@site/docs/_includes/ai/xApp/_waiting-behavior.md';
import Overlay from '@site/docs/_includes/ai/xApp/_overlay.md';

# Set AdaptiveCard xApp State

[![Version badge](https://img.shields.io/badge/Updated in-v4.75-blue.svg)](../../../../release-notes/4.75.md)

<figure>
  <img class="image-center" src="../../../../../static/img/_assets/ai/build/node-reference/xApp/set-AdaptiveCard-xApp-state.png" width="50%" />
</figure>

## Description

An xApp Page can be built by providing an Adaptive Card in JSON format.

To submit data back to the Flow, you need to include an action of type submit within the Adaptive Card.

To view submitted data, use the Interaction panel. You can access submitted data in the `data` object by clicking **INFO > Input**, or in the chat by adding a Say Node and specifying <code>Submit payload: &lcub;&lcub;JSON.stringify(input.data)&rcub;&rcub;</code> or <code>Submit payload: &lcub;&lcub;JSON.stringify(ci.data)&rcub;&rcub;</code>.

<CustomNode />

## Parameters

??? info "AdaptiveCard Definition"

    The [Adaptive Card Designer](https://adaptivecards.io/designer) can help you to define an Adaptive Card. Copy the JSON card payload and paste it into the form.

??? info "Style Overrides"

    To override the background and interaction element colors, use CSS color codes.

<WaitingBehavior />

<Overlay />

## More Information

- [xApps](../../../../xApps/overview.md)
- [xApp Nodes](overview.md)
- [xApp: Init Session](init-xApp-session.md)
- [xApp: Get Session PIN](get-xApp-session-PIN.md)
- [xApp: Show HTML](set-html-xApp-state.md)