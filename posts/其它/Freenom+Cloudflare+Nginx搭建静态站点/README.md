---
title: Freenom+Cloudflare+Nginx搭建静态站点
categories: [其它]
tags: [Cloudflare,Freenom,Nginx,科学上网]
date: 2020-02-22 16:46:15
---

<!-- more -->

## 环境信息

- 服务器系统：CentOS7 以上
- 免费服务商：
  - [Freenom](https://www.freenom.com/)
  - [Cloudflare](https://www.cloudflare.com/)

## 提前完成

### 注册CentOS服务器

选择一家云服务器厂商注册一个服务。

### 注册域名

可以使用免费的 [Freenom](https://www.freenom.com/) 注册一个域名。

配置域名解析的DNS为 [Cloudflare](https://www.cloudflare.com/)。

### 注册DNS解析服务

可以使用免费的 [Cloudflare](https://www.cloudflare.com/) 进行解析。

## 安装nginx

:::tip 注意
以下所有操作都要在 root 权限下运行。

```sh
sudo -i
```

:::

SSH链接服务器后，输入下面命令并回车进行nginx安装：

```sh
yum -y install nginx
```

## 配置nginx

命令行编辑nginx配置文件

```sh
vim /etc/nginx/conf.d/www.conf
```

基本配置信息如下，注释处请自行修改：

```nginx
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.zyao89.cn;

    charset utf-8;

    ssl on;
    # 证书
    ssl_certificate       /etc/nginx/cert/zyao89.cn.crt;
    ssl_certificate_key   /etc/nginx/cert/zyao89.cn.key;
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers           HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    root /root/wwwroot;
    index index.html index.php index.htm;

    # 图片缓存时间设置
    location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$ {
        expires 180d;
    }

    # JS和CSS缓存时间设置
    location ~ .*.(js|css)?$ {
        expires 30d;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 404 = /404.html;

}

# 重定向80端口
server {
    listen 80;
    listen [::]:80;

    server_name zyao89.cn;

    return 301 https://www.zyao89.cn$request_uri;
}

```

### ws服务代理转发配置

```nginx
upstream API_WS {
    server 127.0.0.1:30040;
}

server {
    location ^~ /api {
        proxy_redirect off;
        proxy_pass http://API_WS;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
    }
}
```

### nginx参考配置

配置内容请自行替换修改。

```nginx
upstream API_WS {
    server 127.0.0.1:30040;
}

server {
    listen 443 ssl;
    listen [::]:443 ssl;
    server_name www.zyao89.cn;

    charset utf-8;

    ssl on;
    ssl_certificate       /etc/nginx/cert/zyao89.cn.crt;
    ssl_certificate_key   /etc/nginx/cert/zyao89.cn.key;
    ssl_protocols         TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers           HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    root /root/wwwroot;
    index index.html index.php index.htm;

    location ^~ /api {
        proxy_redirect off;
        proxy_pass http://API_WS;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;
    }

    # 图片缓存时间设置
    location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$ {
        expires 180d;
    }

    # JS和CSS缓存时间设置
    location ~ .*.(js|css)?$ {
        expires 30d;
    }

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 404 = /404.html;

}

server {
    listen 80;
    listen [::]:80;

    server_name zyao89.cn;

    return 301 https://www.zyao89.cn$request_uri;
}
```

## 获取和安装证书

此步骤依赖于 [Cloudflare](https://www.cloudflare.com/) 提供服务

:::tip 注意
请先提前注册添加绑定域名后操作。
:::

### 安装脚本

```sh
curl https://get.acme.sh | sh
```

编辑环境变量`.bashrc`，增加配置

```sh
vim ~/.bashrc
```

最下方加入从 `Cloudflare` 注册获取的 APIKey 信息，大致如下：

```sh
# 信息自行替换
export CF_Key="d2xxxxxxxx1eexxxx10984xxxxxxxxc556"
export CF_Email="xxxxxxxxxx@qq.com"
```

刷新生效变量

```sh
source ~/.bashrc
```

### 自动生成证书

```sh
# 其中的 zyao89.cn 信息请自行替换
~/.acme.sh/acme.sh --issue --dns dns_cf -d zyao89.cn -d *.zyao89.cn -k ec-256
```

```sh
mkdir /etc/nginx/cert/
# 其中的 zyao89.cn 信息请自行替换
~/.acme.sh/acme.sh --installcert -d zyao89.cn -d *.zyao89.cn --fullchainpath /etc/nginx/cert/zyao89.cn.crt --keypath /etc/nginx/cert/zyao89.cn.key --ecc
```

开启证书过期自动更新服务

```sh
~/.acme.sh/acme.sh --upgrade --auto-upgrade
```

## 尾声

启动 nginx 服务，或者重启服务器完成配置。

:::tip 提示
如果 nginx 启动失败，错位为没有权限时，请关注以下几点：

- nginx.conf 配置顶部 `user` 应配置为 `root`
- [Linux下查看SELinux状态和关闭SELinux的方法](../../后端开发/Linux下查看SELinux状态和关闭SELinux的方法/README.md)
- `cloudflare` 中的 `SSL/TLS` 界面开启 `Full` 模式

:::

## 其它资源

### 静态站点源码

```sh
mkdir /root/wwwroot
cd /root/wwwroot
git clone https://github.com/zyao89/WebStackPage.git  ./
```

:::tip 注意
如果没有git，则手动安装下：

```sh
yum -y install git
```

:::

## 其它命令

### nginx服务命令

```sh
## 启动nginx
systemctl start nginx
```

```sh
## 停止nginx
systemctl stop nginx
```

```sh
## 重启nginx
systemctl restart nginx
```

```sh
## 开机自启nginx
systemctl enable nginx
```
