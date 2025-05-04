---
 title: "Trigger Function" 
 slug: "trigger-function" 
 hidden: false 
---

# Trigger Function

<img src={require('../../../../../static/img/_assets/ai/resource/node-reference/services/trigger-function.png').default} width="50%" />

## Description

This Node executes a [Function](../../functions.md).

If the Function was successfully scheduled, it will execute the **On Scheduled** branch, otherwise it will execute the **On Scheduling Failed** branch.

## Parameters

| Parameter           | Type | Description                            |
|---------------------|------|----------------------------------------|
| Function            | List | Select the Function to be executed.    |
| Function Parameters | JSON | Enter the parameters for the Function. |
