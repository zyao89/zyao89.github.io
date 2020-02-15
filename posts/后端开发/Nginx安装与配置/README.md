---
title: Nginx安装与配置
date: 2017-03-12 23:13:05
categories: [后端开发]
tags: [Nginx]
---

## 安装 Nginx

**系统平台：** CentOS

一、安装编译工具及库文件

```sh
yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel
```

<!--more-->

二、首先要安装 PCRE
PCRE 作用是让 Ngnix 支持 Rewrite 功能。
1、下载 PCRE 安装包，下载地址： <http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz>

```sh
wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
```

或执行命令：

```sh
yum install pcre pcre-devel
```

2、解压安装包:

```sh
tar zxvf pcre-8.35.tar.gz
```

3、进入安装包目录

```sh
cd pcre-8.35
```

4、编译安装

```sh
# ./configure
make && make install
```

5、查看pcre版本

```sh
pcre-config --version
```

---

### 下载 Nginx

官网地址：[http://nginx.org/en/download.html](http://nginx.org/en/download.html)
下载地址：[nginx-1.11.10.tar.gz](http://nginx.org/download/nginx-1.11.10.tar.gz)

```
# wget http://nginx.org/download/nginx-1.8.1.tar.gz
```

### 解压安装包

```sh
tar zxvf nginx-1.11.10.tar.gz
```

### 进入安装包目录

```sh
cd nginx-1.11.10
```

### 编译安装

```sh
# ./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35
make
make install
```

### 查看nginx版本

```sh
/usr/local/webserver/nginx/sbin/nginx -v
```

## 启动 Nginx

```sh
/usr/local/webserver/nginx/sbin/nginx
```

## Nginx 其他命令

以下包含了 Nginx 常用的几个命令：

```sh
/usr/local/webserver/nginx/sbin/nginx -s reload            # 重新载入配置文件
/usr/local/webserver/nginx/sbin/nginx -s reopen            # 重启 Nginx
/usr/local/webserver/nginx/sbin/nginx -s stop              # 停止 Nginx
```

---

`作者：Zyao89；转载请保留此行，谢谢；`
