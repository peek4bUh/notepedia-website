// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Notepedia',
  tagline: 'Dinosaurs are cool',
  favicon: 'notepedia.ico',
  url: 'https://www.notes.aandradeb.com',
  baseUrl: '/',
  organizationName: 'peek4bUh', 
  projectName: 'notepedia-website', 
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'], },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
	  routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
    ({
      navbar: {
        title: 'Notepedia',
        logo: {
          alt: 'Notepedia Logo',
          src: 'logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'homeSidebar',
            position: 'left',
            label: 'Home',
          },
	  {
	    to: 'blog',
	    position: 'left',
	    label: 'Blog',
	  },
          {
            href: 'http://www.aandradeb.com/',
            label: 'Portfolio',
	    position: 'left',
          },
	  {
	    href: "https://github.com/peek4bUh/notepedia-website",
	    position: "right",
	    className: "header-github-link",
	    "aria-label": "GitHub repository",
	  },
        ],
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      footer: {
        style: 'dark',
        copyright: `Created with ♥ by <a href="https://github.com/facebook/docusaurus">Docusaurus</a> `,
      },

      prism: {
        additionalLanguages: [
          'java',
          'bash',
        ],
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
