---
title: Clash基本配置
categories: [其它]
tags: [Clash,优化配置,科学上网]
date: 2020-02-24 20:40:20
---

<!--more-->

## 名词解释

Clash：一个 GO 开发的、基于规则的多平台代理客户端，兼容 Shadowsocks、V2Ray 等协议，拥有像 Surge 一样强大的代理规则。[GitHub](https://github.com/Dreamacro/clash)

## 基本配置

以下只是简单示例，请自行修改。

```yaml
# RESTful API 的口令 (可选)
# secret: ''

# 代理节点
Proxy:
# shadowsocks
# 所支持的加密方式与 go-shadowsocks2 保持一致
# 支持加密方式：
#   aes-128-gcm aes-192-gcm aes-256-gcm
#   aes-128-cfb aes-192-cfb aes-256-cfb
#   aes-128-ctr aes-192-ctr aes-256-ctr
#   rc4-md5 chacha20 chacha20-ietf xchacha20
#   chacha20-ietf-poly1305 xchacha20-ietf-poly1305

  - name: "测试1号"
    type: ss
    server: server
    port: 443
    cipher: chacha20-ietf-poly1305
    password: "password"
    # udp: true

  - name: "测试2号"
    type: ss
    server: server
    port: 443
    cipher: AEAD_CHACHA20_POLY1305
    password: "password"
    plugin: obfs
    plugin-opts:
      mode: tls # 混淆模式，可以选择 http 或 tls
      host: bing.com # 混淆域名，需要和服务器配置保持一致

```

## 代理组策略配置

请手段改写添加 `"测试1号"`, `"测试2号"` .

```yaml
# 代理组策略
Proxy Group:

    # url-test 通过指定的 URL 测试并选择延迟最低的节点
    - name: "自动节点选择"
    type: url-test
    proxies:
        - "测试1号"
        - "测试2号"
    url: 'http://www.gstatic.com/generate_204'
    interval: 300

    # fallback 可以尽量按照用户书写的服务器顺序，在确保服务器可用的情况下，自动选择服务器
    - name: "fallback-auto"
        type: fallback
        proxies:
        - "测试1号"
        - "测试2号"
        url: 'http://www.gstatic.com/generate_204'
        interval: 300

    # load-balance 可以使相同 eTLD 请求在同一条代理线路上
    - name: "load-balance"
        type: load-balance
        proxies:
        - "测试1号"
        - "测试2号"
        url: 'http://www.gstatic.com/generate_204'
        interval: 300

    # 代理节点选择
    - name: "PROXY"
    type: select
    proxies:
        - "自动节点选择"
        - "测试1号"
        - "测试2号"

    # Apple 服务代理
    - name: "Apple"
    type: select
    proxies:
        - "DIRECT"
        - "PROXY"

    # 运营商及声名狼藉网站劫持
    - name: "Hijacking"
    type: select
    proxies:
        - "REJECT"
        - "DIRECT"

    # 白名单模式 PROXY，黑名单模式 DIRECT
    - name: "FINAL"
    type: select
    proxies:
        - "PROXY"
        - "DIRECT"

```

## DNS配置

```yaml
dns:
    enable: true
    ipv6: true
    listen: 0.0.0.0:8053
    enhanced-mode: redir-host
    # enhanced-mode: redir-host # 或 fake-ip
    # # fake-ip-range: 198.18.0.1/16 # 如果你不知道这个参数的作用，请勿修改
    # fake-ip-filter: # fake-ip 白名单列表
    #   - '*.lan'
    #   - localhost.ptlogin2.qq.com

    nameserver:
        - 119.29.29.29
        - 114.114.114.114
        - 223.5.5.5
        - tls://dns.rubyfish.cn:853
        # - https://dns.rubyfish.cn/dns-query

    fallback:
        # 与 nameserver 内的服务器列表同时发起请求，当规则符合 GEOIP 在 CN 以外时，fallback 列表内的域名服务器生效。
        - tcp://8.8.8.8:53
        - tcp://8.8.4.4:53
        - tcp://208.67.222.222:443
        - tcp://208.67.220.220:443
        - tls://1.0.0.1:853
        - tls://dns.google:853
        - tls://dns.google

        # - https://dns.rubyfish.cn/dns-query
        # - https://cloudflare-dns.com/dns-query
        # - https://dns.google/dns-query
```

## 更多规则

<a target="_blank" :href="require('./rule.file.yaml')">规则订阅链接</a>
