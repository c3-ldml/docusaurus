import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentation',
  tagline: 'Documentation for Cognigy.AI and Voice Gateway',
  favicon: 'img/favicon-light.svg',

  // Set the production url of your site here
  url: 'https://docs.cognigy.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cognigy', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cognigy/docs/tree/main/',
          remarkPlugins: [],
          rehypePlugins: [],
          admonitions: {
            keywords: ['coll-section'],
            extendDefaults: true,
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  clientModules: [
    require.resolve('./src/theme/FaviconSwitcher.tsx'),
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Cognigy Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'ai/about-cognigy-ai',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'voice-gateway/overview',
          position: 'left',
          label: 'Release Notes',
        },
        {
          href: 'https://github.com/cognigy/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Cognigy.AI',
              to: '/ai/about-cognigy-ai',
            },
            {
              label: 'Voice Gateway',
              to: '/voice-gateway/overview',
            },
            {
              label: 'Webchat',
              to: '/webchat/index',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/cognigy',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/cognigy',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cognigy',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cognigy/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cognigy. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
