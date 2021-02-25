---
title: Docker基于pm2制作Python运行环境基础镜像
categories: [服务端]
tags: [Nodejs,Docker]
date: 2020-05-13 17:04:18
---

<!-- more -->

由于npm依赖中，`node-gyp` 编译需要依赖 `python` 环境，因此需要重新构建基础镜像。

## 源

依赖安装源 `sources.list`

```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
# deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
# deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
# deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
deb http://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free
# deb-src http://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free
```

## 配置

Dockerfile配置

```dockerfile
FROM keymetrics/pm2:10-slim

# sources
COPY ./sources.list /etc/apt/

# node-gyp require python
RUN set -ex \
    && apt-get update \
    && apt-get install -y make gcc g++ python \
    && rm -rf /var/lib/apt/lists/*

# 赋予可执行权限
# RUN mkdir -p /usr/local/lib/node_modules
# RUN chmod -R 777 /usr/local/lib/node_modules

# 集成 vue-cli
# RUN npm install -g @vue/cli --registry=https://registry.npm.taobao.org --unsafe-perm=true --allow-root
# RUN npm install -g @vue/cli-service --registry=https://registry.npm.taobao.org --unsafe-perm=true --allow-root


# Bundle APP files
RUN mkdir -p /home/project
WORKDIR /home/project
COPY . /home/project

CMD [ "pm2-runtime", "pm2.config.js" ]
```
