---
title: 开启SSH允许root用户远程登录
categories: [后端开发]
tags: [Linux,SSH]
date: 2019-11-25 02:11:42
---

<!-- more -->

## 切换到root账号

```sh
sudo -i
```

## 设置root密码

```sh
passwd
```

然后会要求输入新密码，然后再重复一次密码，输入密码的时候不会显示出来，所以直接输入密码，然后回车，再然后重复输入密码回车

## 编辑 `sshd_config`

```sh
vim /etc/ssh/sshd_config
```

## 修改以下内容

```sh
# 默认为no，需要开启root用户访问改为yes
PermitRootLogin yes
```

```sh
# 默认为no，改为yes开启密码登陆
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
