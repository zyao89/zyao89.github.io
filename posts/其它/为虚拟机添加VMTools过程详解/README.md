---
title: 为虚拟机添加VMTools过程详解
categories: [其它]
tags: [EXSI,虚拟机]
date: 2021-11-18 19:00:33
---

<!-- more -->

在虚拟机上为了更好的管理和显示，引入了VMTools工具。安装后直观的显示虚拟机的相关信息，而无需登入系统便于统计。下面记录了工具安装过程：

## 1、创建并启动虚拟机

## 2、选中要添加vmtools虚拟机——>清单/右键——>虚拟机——>客户机——>安装/升级VMware Tools

## 3、打开虚拟机界面——>挂载
```shell
    [root@test ~]# mkdir -p /mnt/tools     创建挂载目录         
    [root@test ~]# mount  /dev/cdrom   /mnt/tools        挂载光盘
    [root@test ~]# df -h                          查看是否挂载成功
```

## 4、进入挂载目录——>拷贝安装文件到临时文件夹
```shell
    [root@test ~]# cd /mnt/tools
    [root@test ~]# cp VMwareTools-8.6.0-425873.tar.gz  /tmp
    [root@test ~]# cd /tmp
    [root@test ~]# tar zxvf VMwareTools-8.6.0-425873.tar.gz
```
## 5、进入解压目录——>安装：一路默认即可

```shell
    [root@test ~]# cd vmware-tools-distrib
    [root@test ~]# ./vmware-install.pl
```

## 6、安装成功后，重新启动服务器