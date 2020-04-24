---
title: 收集一些广告过滤的规则地址
categories: [其它]
tags: [广告过滤,规则]
date: 2019-06-20 13:55:09
---

收集一些可以去广告的规则说不定以后用 AdGuard Home 的时候会用上.

<!-- more -->

## abp复合规则Host规则

### EasyList

```
https://easylist.to/easylist/easylist.txt
```

### Easylist China

```
https://easylist-downloads.adblockplus.org/easylistchina.txt
```

### EasyList Lite

```
https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjxlist.txt
```

### CJX's Annoyance List(过滤烦人的自我推广，并补充EasyPrivacy隐私规则)

```
https://raw.githubusercontent.com/cjx82630/cjxlist/master/cjx-annoyance.txt
```

### StevenBlack/hosts(多个规则集合)

```
https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts
```

### hpHosts

```
https://hosts-file.net/hphosts-partial.txt
```

## 元素过滤规则

### ChinaListV2.0(国内大部分视频网站的广告过滤)

```
http://tools.yiclear.com/ChinaList2.0.txt
```

### Fanboy+Easylist-Merged Ultimate List

```
https://fanboy.co.nz/r/fanboy-ultimate.txt
```

### 乘风 广告过滤规则

```
https://raw.githubusercontent.com/xinggsf/Adblock-Plus-Rule/master/ABP-FX.txt
```

### baidu-lite(百度美化)

```
http://tools.yiclear.com/baidu-lite.txt
```

## AdGuardHome 配置

配置: <Link :href="require('./AdGuardHomeRules.txt')">链接</Link>
