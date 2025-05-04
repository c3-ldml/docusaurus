import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Iconify from '@site/src/components/Iconify';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Iconify>" tag to our Iconify component
  // `Iconify` will receive all props that were passed to `<Iconify>` in MDX
  Iconify,
}; 