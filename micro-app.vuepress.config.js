'use strict';

module.exports = {
    type: 'blog',
    // logo: '/logo.png',
    // sourceDir: 'docs',

    lang: 'zh-CN',
    title: "Zyao89's Blogs",
    description: '这家伙真的很懒。擅长Web前端、Android开发。专业程序员一枚。',
    head: [
        [ 'link', { rel: 'icon', href: '/favicon.png' }],
        [ 'link', { rel: 'manifest', href: '/manifest.json' }],
        [ 'meta', { name: 'keywords', content: 'Zyao89,Zyao89 Blogs,Android,移动开发,手机APP,javascript,html5,开发者,程序猿,极客,编程,代码,开源,IT网站,Developer,Programmer,Coder,Geek' }],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ],
    author: 'Zyao89',

    lastUpdated: '上次编辑时间',

    sidebar: 'auto',
    nav: getNav(),

    sidebarDepth: 2,
    // algolia: {
    //     indexName: "cli_vuejs",
    //     apiKey: "f6df220f7d246aff64a56300b7f19f21"
    // },
    // search: false,
    // searchMaxSuggestions: 10,
    // displayAllHeaders: true // 默认值：false

    svgIconsDir: 'icons',
    copyright: '2019 - present, Zyao89',
    footer: {
        powerby: true,
        copyright: true,
        // beian: 'abc',
    },
    // friendLinks: [
    //     {
    //         title: 'abc',
    //         logo: '/logo.png',
    //         link: 'http://www.baidu.com',
    //         description: 'abcdsd',
    //     },
    // ],

    comment: {
        type: 'vssue', // default: vssue
        owner: 'zyao89',
        repo: 'zyao89.github.io',
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },

    deploy: {
        repo: 'git@github.com:zyao89/zyao89.github.io.git',
        branch: 'master',
        CNAME: 'zyao89.cn',
        // name: 'Zyao89',
        // email: 'zyao89@gmail.com',
    },
};

function getNav() {
    return [
        {
            text: '首页',
            link: '/',
            icon: 'home',
        },
        {
            text: '分类',
            link: '/categories/',
            icon: 'category',
            role: 'category', // 只有 category 有此功能
        },
        {
            text: '标签',
            link: '/tags/',
            icon: 'tags',
        },
        {
            text: '归档',
            link: '/timeline/',
            icon: 'timeline',
        },
        {
            text: '了解更多',
            items: [
                { text: 'NPM', link: 'https://www.npmjs.com/zyao89', icon: 'npm' },
                { text: 'GitHub', link: 'https://github.com/zyao89', icon: 'github' },
                { text: 'Email', link: 'mailto:zyao89@gmail.com', icon: 'email' },
            ],
        },
    ];
}
