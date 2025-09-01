// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
//   title: 'gh-pages-test-docu',
  title: 'PURL type JSON Schema',
  tagline: 'What me worry?',
//   favicon: 'img/favicon.ico',
  favicon: 'img/purl-favicon.ico',


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
//   url: 'https://your-docusaurus-site.example.com',
//   url: 'https://johnmhoran.github.io/gh-pages-test-docu',
  url: 'https://johnmhoran.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: '/',
  baseUrl: '/gh-pages-test-docu/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'facebook', // Usually your GitHub org/user name.
//   projectName: 'docusaurus', // Usually your repo name.
  organizationName: 'johnmhoran',
  projectName: 'gh-pages-test-docu',
  trailingSlash: false,

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // 2025-08-30 Saturday 20:04:36.  Make the navbar dark
        style: 'dark',
        // title: 'My Site',
        // title: 'gh-page-test-docu',
        title: 'PURL type JSON Schema',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
            // 2025-08-31 Sunday 17:00:40.  Not using the tutorial so no sidebar needed atm.
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
        //   {to: '/blog', label: 'Blog', position: 'left'},
        //   {to: '/docs/intro', label: 'Docs', position: 'left'},
          {to: '/docs/', label: 'Docs', position: 'left'},
          { to: '/blog', label: 'Blog', position: 'left' }, // 👈 this makes Blog visible

          // Right-hand dropdown
          {
              label: 'More',
              position: 'right',
              items: [
                  { label: 'GitHub', href: 'https://github.com/johnmhoran/gh-pages-test-docu' },
                //   { label: 'Community', href: 'https://discord.com/...' }, // example
                //   { label: 'Blog', to: '/blog' },
              ],
          },

        //   {
        //     href: 'https://github.com/johnmhoran/gh-pages-test-docu',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
