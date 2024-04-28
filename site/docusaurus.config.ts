import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Fahrenheit Robotics',
  tagline: 'FIRST Robotics Team 6882',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fahrenheitrobotics.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Farenheit6882', // Usually your GitHub org/user name.
  projectName: 'Fahrenheit6882.github.io', // Usually your repo name.

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
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Fahrenheit Robotics',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://fahrenheitrobotics.org', 
          label: 'Home', 
          position: 'left',
          target: '_self'
        },
        {
          to: 'https://fahrenheitrobotics.org#about', 
          label: 'About', 
          position: 'left',
          target: '_self'
        },
        {
          to: 'https://fahrenheitrobotics.org#contact', 
          label: 'Contact', 
          position: 'left',
          target: '_self'
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
//        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://frc-events.firstinspires.org/team/6882',
          label: 'FIRST Team 6882',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Our Site',
          items: [
            {
              to: 'https://fahrenheitrobotics.org',
              label: 'Home',
              target: '_self',
            },
            {
              to: 'https://fahrenheitrobotics.org#about',
              label: 'About',
              target: '_self',
            },
            {
              to: 'https://fahrenheitrobotics.org#contact',
              label: 'Contact',
              target: '_self',
            },
            {
              label: 'Guides',
              to: '/docs/welcome',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/channels/505146464037634050',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/fahrenheitrobotics',
            },
            {
              label: 'Github',
              href: 'https://github.com/Fahrenheit6882',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              href: 'https://frc-events.firstinspires.org/team/6882',
              label: 'FIRST Team 6882',
            },
//            {
//              label: 'Blog',
//              to: '/blog',
//            },
//            {
//              label: 'GitHub',
//              href: 'https://github.com/facebook/docusaurus',
//            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
