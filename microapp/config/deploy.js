'use strict';

let repoToken = 'git';
if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN !== 'undefined') {
    repoToken = `x-access-token:${process.env.GITHUB_TOKEN}`;
} else if (process.env.ACCESS_TOKEN && process.env.ACCESS_TOKEN !== 'undefined') {
    repoToken = process.env.ACCESS_TOKEN;
}

module.exports = {
    repo: repoToken === 'git' ? 'git@github.com:zyao89/zyao89.github.io.git' : `https://${repoToken}@github.com/zyao89/zyao89.github.io.git`,
    branch: 'master',
    dist: '.vuepress/dist',
    user: {
        name: 'Zyao89',
        email: 'zyao89@gmail.com',
    },
    cname: 'zyao89.cn',
};
