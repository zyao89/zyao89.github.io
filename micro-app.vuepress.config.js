'use strict';

const SITE_URL = 'https://zyao89.cn';

module.exports = {
    type: 'blog',
    // logo: '/logo.png',

    shortLinks: true, // 开启短链接

    lang: 'zh-CN',
    title: "Zyao89's Blogs",
    description: '这家伙真的很懒。擅长Web前端、Android开发。专业程序员一枚。',
    keywords: '二圆三土,二圆与三土,Zyao89,Zyao89 Blogs,Android,移动开发,手机APP,javascript,html5,开发者,程序猿,极客,编程,代码,开源,IT网站,Developer,Programmer,Coder,Geek',
    head: [
        [ 'link', { rel: 'icon', href: '/favicon.png' }],
        [ 'link', { rel: 'manifest', href: '/manifest.json' }],
        [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        [ 'meta', { name: 'google-site-verification', content: '8sZJLe_q5uzLQR19aq4O6V5Y7YPj-mLjb7b-jlBloNo' }],
    ],
    author: 'Zyao89',
    avatar: '/favicon.png',

    lastUpdated: '上次编辑时间',

    sidebar: 'auto',
    sidebarDepth: 2,
    nav: getNav(),

    svgIconsDir: 'icons',
    copyright: '2017 - present, Zyao89',
    footer: {
        powerby: true,
        copyright: true,
        beian: '浙ICP备17039012号-1',
    },

    // friendLinks: [
    //     {
    //         title: 'abc',
    //         logo: '/logo.png',
    //         link: 'http://www.baidu.com',
    //         description: 'abcdsd',
    //     },
    // ],

    siteUrl: SITE_URL,
    blogConfig: {
        rss: true,
        sitemap: true,
        comment: {
            type: 'vssue', // default: vssue
            platform: 'github-v4',
            owner: 'zyao89',
            repo: 'zyao89.github.io',
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            prefix: '[Comments] ',
            labels: [ 'comments' ],
            // admins: [ 'zyao89' ],
        },
    },

    baidu: {
        autoPush: true,
        hmtID: process.env.BAIDU_HMT_ID,
    },

    GAID: process.env.GAID,

    command: {
        deploy: {
            repo: 'git@github.com:zyao89/zyao89.github.io.git',
            branch: 'master',
            CNAME: 'zyao89.cn',
            name: 'Zyao89',
            email: 'zyao89@gmail.com',
            message: 'Deploying',
        },
        create: {
            categories: [],
            tags: [],
        },
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
            text: '更多',
            icon: 'mores',
            items: [
                { text: 'RSS', link: `${SITE_URL}/rss.xml`, icon: 'rss' },
                { text: 'GitHub', link: 'https://github.com/zyao89', icon: 'github' },
                { text: 'Email', link: 'mailto:zyao89@gmail.com', icon: 'email' },
            ],
        },
    ];
}
