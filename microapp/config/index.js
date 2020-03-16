'use strict';

const config = {
    plugins: [
        '@micro-app/plugin-deploy',
    ],
};

// 兼容两种启动方式
if (!process.env.MICRO_APP_VUEPRESS_DIRECT_RUNNING) {
    config.plugins.push('@micro-app/plugin-vuepress');
}

module.exports = config;
