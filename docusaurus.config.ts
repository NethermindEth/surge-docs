import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  tagline: 'Surge was created for high-performance Ethereum node management',
  url: 'https://docs.surge.wtf/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'NethermindEth',
  projectName: 'surge',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/NethermindEth/surge-docs/tree/main/',
          remarkPlugins: [require('remark-gfm')],
          rehypePlugins: [],
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo-dark.png',
    navbar: {
      title: '',
      logo: {
        alt: 'Nethermind Logo',
        src: 'img/logo-dark.png',
        srcDark: 'img/logo-light.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/NethermindEth/surge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/PaCMRFdvWT',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/nethermindeth',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NethermindEth/surge',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Nethermind',
              href: 'https://nethermind.io/',
            },
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nethermind`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '40BP0L02ED',

      // Public API key: it is safe to commit it
      apiKey: '70f03e481647da6b519dd6341f590787',

      indexName: 'surge',

      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'false',

      insights: true,

      debug: false,

    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@gabrielcsapo/docusaurus-plugin-matomo',
      {
        siteId: '6',
        matomoUrl: 'https://nethermind.matomo.cloud/',
        siteUrl: 'https://www.surge.wtf',
        trackerUrl: 'https://nethermind.matomo.cloud/matomo.php',
        cookieDomain: '*.www.surge.wtf',
        domains: ['*.www.surge.wtf', '*.docs.surge.wtf'],
        enableCrossDomainLinking: true,
      },
    ],
  ],
};

export default config;
