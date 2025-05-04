---
title: "Play URL"
slug: "play-url"
description: "The Play URL Node is used to play audio from a URL in a voice conversation."
hidden: false
---

import ACAndGenericNodeDeprecation from '@site/docs/_includes/ai/node-reference/voice/_ac-and-generic-node-deprecation.md';

# Play URL

<img src={require('../../../../../../static/img/_assets/ai/resource/node-reference/generic-voice/play-url.png').default} width="80%" />

## Description

<ACAndGenericNodeDeprecation />

The Play URL Node lets you stream a sound file into the call. 

This Node is useful for playing advertisements, pre-recorded jingles, or other sound files for callers. It supports MP3 and WAV encoded files.

## Parameters

| Parameter               | Type          | Description                                                                                                                                                                                                                                                                                                                         |
|-------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | CognigyScript | Accepts URL links to MP3 and WAV tracks. The URL should point to the storage location where you want to host it and doesn't need to include the `.mp3` or `.wav` extension. For example, `https://abc.xyz/music.mp3` or `https://audio.jukehost.co.uk/N5pnlULbup8KabGRE7dsGwHTeIZAwWdr`. Make sure the file is publicly accessible. |
| Set Activity Parameters | Toggle        | Enables parameters which will be valid for this activity only. The available parameters are: <br /> - [Recognizer (STT)](../voice-gateway/parameter-details.md) <br /> - [Barge In](../voice-gateway/parameter-details.md) <br /> - [DTMF](../voice-gateway/parameter-details.md)               |

## More Information

- [AudioCodes Play URL Node](../audiocodes//play-url.md)
- [Voice Gateway Play Node](../voice-gateway//play.md)
- [Parameter Details](../voice-gateway/parameter-details.md)