const lightCodeTheme = require('./src/themes/light');
const darkCodeTheme = require('./src/themes/dark');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'ZenKey Docs',
    tagline: 'Your digital identity belongs to you',
    url: 'https://docs.myzenkey.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'zenkey-commercial', // Usually your GitHub org/user name.
    projectName: 'zenkey-docs', // Usually your repo name.

    plugins: [
        [require.resolve('@cmfcmf/docusaurus-search-local'), {
            style: 'none'
        }]
    ],

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/MyZenKey/documenter/edit/main/',
                    remarkPlugins: [require("remark-mermaid-dataurl")],
                },
                // blog: {
                //     showReadingTime: true,
                //     // Please change this to your repo.
                //     editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                // },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'ZenKey Docs',
            logo: {
                alt: 'My Site Logo',
                src: 'img/ZenKey_symbol_rgb.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                // { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/MyZenKey/documenter/',
                    label: 'GitLab',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Welcome',
                        to: '/docs/intro',
                    }, {
                        label: 'Basic Concepts',
                        to: '/docs/conceptual-overview/definitions-basic-concepts',
                    }, {
                        label: 'Authentication Flows',
                        to: '/docs/tech-overview/authentication-flows',
                    }],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/zenkey',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/myzenkey',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/myzenkey',
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/zenkey/',
                        },
                        {
                            label: 'YouTube',
                            href: 'https://www.youtube.com/channel/UC-0FnMmgpk3bmTy1LoxRE_Q',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        // {
                        //     label: 'Blog',
                        //     to: '/blog',
                        // },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/MyZenKey',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ZenKey.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
});