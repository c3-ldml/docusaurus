---
title: "Resource Pages"
slug: "resource-pages"
hidden: false
---

import CollapsibleSection from '@site/src/components/CollapsibleSection';

# Resource Pages

Resource pages are pages where you can view and manage resources to build AI Agents, for example, Flows, Knowledge Stores, Endpoints, and many others. You can access resource pages in the [left-side menu](project-page.md) of the **Project** page.

The following image provides an overview of the Flows page:

<img
  src={require('../../_assets/ai/overview/user-interface/resource-page.png').default}
  alt="Resource Page"
  width="70%"
/>

<CollapsibleSection title="Controls">

  |                             UI Element                             | Type   | Description                                                                                                                                                                                                              |
  |:------------------------------------------------------------------:|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  |                               ![plus-square](../../_assets/icons/plus-square.svg)                                | Button | You can create resources by clicking **+** in the upper-left corner.                                                                                                                                                     |
  |            ![search](../../_assets/icons/search.svg)            | Field  | You can search for resources by name.                                                                                                                                                                                    |
  | ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) | Menu   | With the right-side menu, you can perform other actions, for example, edit, delete, export as a Package, clone, copy Reference ID, as well as other resource-specific options. This menu is available for each resource. |

</CollapsibleSection>

<CollapsibleSection title="Notifications">

  | Notification Type | Description                                                                                                                                          | Example                                                                                                                            |
  |-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
  | Success message   | Displays when a Task is completed successfully.                                                                                                      | <figure><img class="image-center" src="../../../_assets/ai/overview/user-interface/success-message.png" width="70%" /></figure> |
  | Warning message   | Display when a Task is completed with a warning. Click ![arrow-down](../../_assets/icons/arrow-down.svg) to view the warning message. | <figure><img class="image-center" src="../../../_assets/ai/overview/user-interface/warning-message.png" width="70%" /></figure> |
  | Error message     | Displays when a Task fails. Click ![arrow-down](../../_assets/icons/arrow-down.svg) to view the error message.                        | <figure><img class="image-center" src="../../../_assets/ai/overview/user-interface/error-message.png" width="70%" /></figure>   |

</CollapsibleSection>
