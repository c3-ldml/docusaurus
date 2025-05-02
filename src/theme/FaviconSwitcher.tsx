import React, {useEffect} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

export default function FaviconSwitcher(): null {
  const {colorMode} = useColorMode();

  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = `/img/favicon-${colorMode}.svg`;
    }
  }, [colorMode]);

  return null;
} 