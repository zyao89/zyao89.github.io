---
title: Linux下查看SELinux状态和关闭SELinux的方法
categories: [服务端]
tags: [Linux,解决问题]
date: 2019-08-23 01:53:36
---

<!-- more -->

## 前言

安全增强型 Linux（Security-Enhanced Linux）简称 SELinux，它是一个 Linux 内核模块，也是 Linux 的一个安全子系统。

SELinux 主要由美国国家安全局开发。2.6 及以上版本的 Linux 内核都已经集成了 SELinux 模块。

SELinux 的结构及配置非常复杂，而且有大量概念性的东西，要学精难度较大。很多 Linux 系统管理员嫌麻烦都把 SELinux 关闭了。

如果可以熟练掌握 SELinux 并正确运用，我觉得整个系统基本上可以到达"坚不可摧"的地步了（请永远记住没有绝对的安全）。

掌握 SELinux 的基本概念以及简单的配置方法是每个 Linux 系统管理员的必修课。

## 查看SELinux状态命令

### sestatus

如果SELinux status参数为enabled即为开启状态

```sh
/usr/sbin/sestatus -v
```

显示如下：

```sh
SELinux status: enabled
```

### getenforce

也可以用这个命令检查

```sh
getenforce
```

## 关闭SELinux方法

### 临时关闭（不用重启机器）

```sh
#设置SELinux 成为permissive模式
setenforce 0
```

还原

```sh
#设置SELinux 成为enforcing模式
setenforce 1
```

### 修改配置（需重启）

修改配置文件需要重启机器, 修改 `/etc/selinux/config` 文件.

将 `SELINUX=enforcing` 改为:

```sh
SELINUX=disabled
```

重启机器即可.
