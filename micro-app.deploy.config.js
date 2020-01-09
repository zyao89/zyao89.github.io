'use strict';

const repoToken = process.env.ACCESS_TOKEN || 'git';

module.exports = {
    repo: `${repoToken}@github.com:zyao89/zyao89.github.io.git`,
    branch: 'master',
    dist: '.vuepress/dist',
    user: {
        name: 'Zyao89',
        email: 'zyao89@gmail.com',
    },
    // message: 'AUTO TEST',
    // cname: 'zyao89.cn',
};
