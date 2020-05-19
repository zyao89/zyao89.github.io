---
title: docker删除所有none镜像
categories: [后端开发]
tags: [解决问题]
date: 2020-05-13 17:01:04
---

<!-- more -->

在docker反复build后，会存留很多none镜像，下面命令一键删除所有none镜像

```sh
docker rmi -f `docker images | grep  "<none>" | awk '{print $3}'`
```
