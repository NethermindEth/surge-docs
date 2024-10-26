import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Surge documentation',
  tagline: 'Surge was created for high-performance Ethereum node management',
  url: 'https://docs.surge.nethermind.io/',
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
          editUrl: 'https://github.com/NethermindEth/surge/tree/main/docs/',
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
              label: 'Twitter',
              href: 'https://twitter.com/nethermindeth',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
