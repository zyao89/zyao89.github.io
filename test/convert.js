'use strict';

const path = require('path');
const { fs, logger } = require('@micro-app/shared-utils');

const OLD_POSTS = path.resolve(process.cwd(), 'old');
const NEW_POSTS = path.resolve(__dirname, 'new');

fs.removeSync(NEW_POSTS);

const mds = {};
const dirs = {};

const filenames = fs.readdirSync(OLD_POSTS) || [];
filenames.forEach(name => {
    if (/\.md$/i.test(name)) {
        const key = name.replace(/\.md$/i, '');
        if (!mds[key]) {
            mds[key] = {
                key,
                filename: name,
                copy(dist) {
                    const _file = path.resolve(OLD_POSTS, name);
                    const dir = path.resolve(dist, key);
                    fs.ensureDirSync(dir);
                    const filepath = path.resolve(dir, 'README.md');
                    fs.copyFileSync(_file, filepath);
                    const str = fs.readFileSync(filepath).toString().replace(new RegExp(`\\(${key}/`, 'gm'), '(');
                    fs.writeFileSync(filepath, str);
                },
            };
        } else {
            logger.error('【重复】', `${name} 已经存在！`);
        }
    } else {
        dirs[name] = dist => {
            const _dir = path.resolve(OLD_POSTS, name);
            const _files = fs.readdirSync(_dir) || [];
            _files.forEach(file => {
                const _file = path.resolve(_dir, file);
                fs.copyFileSync(_file, path.resolve(dist, name, file));
            });
        };
    }
});

Object.entries(mds).forEach(([ key, item ]) => {
    item.copy(NEW_POSTS);
    if (dirs[key]) {
        dirs[key](NEW_POSTS);
    }
});

logger.success('OK!');
