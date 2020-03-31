---
title: 开启SSH允许root用户远程登录
categories: [后端开发]
tags: [CentOS,SSH,远程登录]
date: 2020-02-25 02:11:42
---

<!-- more -->

## 编辑 `sshd_config`

```sh
vim /etc/ssh/sshd_config
```

## 修改以下内容

```sh
#默认为no，需要开启root用户访问改为yes
PermitRootLogin yes
```

```sh
#默认为no，改为yes开启密码登陆
PasswordAuthentication yes
```

## 修改完成后重启

按 Esc, 输入

```sh
:wq
```

接着重启

```sh
reboot
```
