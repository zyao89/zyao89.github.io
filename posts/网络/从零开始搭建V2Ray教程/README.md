---
title: 从零开始搭建V2Ray教程
categories: [网络]
tags: [VPN]
date: 2020-02-15 17:14:48
---

<!-- more -->

## 环境信息

- 服务器系统：CentOS7 以上
- v2ray版本：v4 以上
- 客户端系统：MacOS
- VPS服务商：可选用 [vultr.com](https://www.vultr.com/?ref=8413306-6G)

## 准备工作

购买一个VPS服务器，可选用 [vultr.com](https://www.vultr.com/?ref=8413306-6G)

*如果已有服务器，可跳过此步骤。*

## 搭建v2ray

在上一步骤购买VPS及使用ssh进行远程连接你已经购买的VPS进行了远程连接，这里假设你已经使用root用户登录成功了。下面开始安装：

### 安装v2ray

```sh
bash <(curl -L -s https://install.direct/go.sh)
```

或者执行以下步骤：

#### 安装wget

在登录完成的窗口输入下面命令并回车进行wget安装：

```sh
yum -y install wget
```

#### 下载脚本

安装完wget之后就可以进行下载安装v2ray的脚本了，输入如下命令并回车：

```sh
wget https://install.direct/go.sh
```

#### 执行安装

输入下面的命令并回车执行安装

```sh
bash go.sh
```

安装日志如下：

```sh
Installing V2Ray ...
Downloading V2Ray.
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   608    0   608    0     0   2229      0 --:--:-- --:--:-- --:--:--  2235
100 8482k  100 8482k    0     0  2501k      0  0:00:03  0:00:03 --:--:-- 2813k
Extracting V2Ray package to /tmp/v2ray.
.....
V2Ray v3.14 is installed.
```

安装完成。

### 配置

如果你按照上面的命令执行安装完成之后，服务端其实是不需要再进行任何配置的，配置文件位于`/etc/v2ray/config.json`，使用`cat /etc/v2ray/config.json`查看配置信息。

#### 编辑配置

```sh
vim /etc/v2ray/config.json
```

说明：

- 配置文件中的id、端口、alterId需要和客户端的配置保持一致；
- 服务端使用脚本安装成功之后默认就是vmess协议；

配置完成之后重启v2ray。

### 其它命令

在首次安装完成之后，V2Ray不会自动启动，需要手动运行下面的启动命令。

```sh
## 启动
systemctl start v2ray
```

```sh
## 停止
systemctl stop v2ray
```

```sh
## 重启
systemctl restart v2ray
```

```sh
## 开机自启
systemctl enable v2ray
```

关于软件更新：更新 V2Ray 的方法是再次执行安装脚本！再次执行安装脚本！再次执行安装脚本！

### 防火墙开放端口(CentOS7)

有些服务器端口默认是不开放的，可能导致连接不成功，如果有这种情况，可简单配置防火墙开放端口

```sh
## 查看已开放端口
firewall-cmd --zone=public --list-ports
```

```sh
## 添加开放端口
firewall-cmd --zone=public --permanent --add-port=80/tcp
```

```sh
## 删除开放端口
firewall-cmd --zone=public --permanent --remove-port=80/tcp
```

```sh
## 重启防火墙
firewall-cmd --reload
```

[更多配置参考](https://havee.me/linux/2015-01/using-firewalls-on-centos-7.html)

### 检测IP和端口

`ping`IP是否可访问，[Ping检测](http://ping.chinaz.com/)

扫描端口是否开放，[端口扫描](http://ping.chinaz.com/port)

## 图形客户端

V2RayU (MacOS)

V2rayU,基于v2ray核心的mac版客户端,界面友好,使用swift4.2编写,支持vmess,shadowsocks,socks5等服务协议,支持订阅, 支持二维码,剪贴板导入,手动配置,二维码分享等。下载：[GitHub](https://github.com/yanue/V2rayU)

[更多客户端](https://www.v2ray.com/awesome/tools.html)

## V2Ray更多配置

[更多参考](https://www.v2ray.com/)
