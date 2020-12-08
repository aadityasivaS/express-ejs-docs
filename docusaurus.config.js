module.exports = {
  title: 'express-ejs docs',
  tagline: 'express-ejs documentation',
  url: 'https://express-ejs-docs.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'aadityasivaS', // Usually your GitHub org/user name.
  projectName: 'express-ejs', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '3ffe96765bf15fb2697dbe5d61f1dd0d'',
      indexName: 'express-ejs,
      contextualSearch: true,
    },
    navbar: {
      title: 'express-ejs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/',
            },
            {
              label: 'Usage',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/aadityasivaS/express-ejs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aadityasiva Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/aadityasivaS/express-ejs-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
