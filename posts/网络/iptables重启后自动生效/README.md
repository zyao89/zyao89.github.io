---
title: iptables重启后自动生效
categories: [网络]
tags: [解决问题,Linux]
date: 2020-06-05 15:14:41
---

<!-- more -->

## 安装

```sh
sudo apt-get install iptables-persistent
```

## 保存当前配置

```sh
sudo netfilter-persistent save
```

## 重载

```sh
sudo netfilter-persistent reload
```
