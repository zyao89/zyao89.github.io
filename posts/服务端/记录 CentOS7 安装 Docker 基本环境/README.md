---
title: 记录 CentOS7 安装 Docker 基本环境
categories: [服务端]
tags: [Docker]
date: 2021-02-25 15:57:01
---

<!-- more -->

## CentOS7 镜像

[aliyun 镜像仓库](https://mirrors.aliyun.com/centos/?spm=a2c6h.13651104.0.0.16d312b2utc849)

### 安装过程

略

### 安装依赖

```sh
yum -y install perl gcc gcc-c++ make cmake kernel kernel-headers kernel-devel net-tools nano vim
```

### 配置 SBM 支持

安装:

```sh
yum install cifs-utils -y
```

配置启动时自动 mount

```sh
echo "mount -t cifs //{SMB服务器IP地址}/AppData ~/AppData -o username=docker123,password=docker123,nobrl" >> /etc/rc.local

# 修改权限
chmod 755 /etc/rc.local
chmod -R 755 /etc/rc.d
```

### 关闭防火墙

> 关闭防火墙后，服务器不要再暴露到公网上了

```sh
systemctl disable firewalld
```

## Docker

### 安装

使用官方安装脚本自动安装

```sh
# 使用 Shell 脚本进行安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun
```

也可以使用国内 daocloud 一键安装命令：

```sh
curl -sSL https://get.daocloud.io/docker | sh
```

#### 启动

```sh
systemctl start docker
```

#### 开机启动

```sh
systemctl enable docker
```

#### Docker 换源

> 注意：如果拉取速度没问题，可以不用换

```sh
# 编辑配置文件
nano /etc/docker/daemon.json
```

配置文件的内容

```json
{
  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
}
```


## 常用 Docker 镜像

### Portainer

Portainer是一个可视化的容器镜像的图形管理工具，利用Portainer可以轻松构建，管理和维护Docker环境。 而且完全免费，基于容器化的安装方式，方便高效部署。

```sh
# 安装 Portainer：
docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v ~/AppData/portainer:/data --name portainer --restart=always portainer/portainer
```

### Speedtest

内网测速

```sh
# 安装 Speedtest：
docker run -d -p 6688:80 --restart=always --name speedtest ilemonrain/html5-speedtest:alpine
```

### Node-RED

Node-RED是一种基于Node.js的编程工具，用于以新颖有趣的方式将硬件设备，API和在线服务连接在一起。它提供了一个基于浏览器的编辑器，可以使用调色板中的各种节点轻松地将流连接在一起，只需单击即可将其部署到运行时。

```sh
docker run -d --restart=always --name="nodered" -p 1880:1880 nodered/node-red:latest-minimal
```

### Home-Assistant

Home Assistant 是一款基于 Python 的智能家居开源系统，支持众多品牌的智能家居设备，可以轻松实现设备的语音控制、自动化等。

```sh
docker run -d \
--name=home_assistant \
-e TZ="Asia/Shanghai" \
-v ~/AppData/homeassistant:/config \
-v /dev/bus/usb:/dev/bus/usb \
-v /var/run/dbus:/var/run/dbus \
-v /etc/localtime:/etc/localtime:ro \
--net=host \
--privileged \
--restart always \
homeassistant/home-assistant:stable
```