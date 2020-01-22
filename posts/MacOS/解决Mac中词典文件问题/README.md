---
title: 解决Mac中词典文件问题
categories: [MacOS]
tags: [解决问题,Mac词典]
date: 2020-01-20 16:48:16
---

如果MacOS系统升级了，导致词典功能无法正常使用时，你可以看看这里。

<!--more-->

## 问题背景

MacOS 系统升级后，词典功能 --> 偏好设置 中无法添加。

## 解决步骤

### 查找目录

```sh
/System/Library/AssetsV2/PreinstalledAssetsV2/InstallWithOs/com_apple_MobileAsset_DictionaryServices_dictionaryOSX
```

### 删除目录下的文件

删除目录 `com_apple_MobileAsset_DictionaryServices_dictionaryOSX` 下的文件.

::: warning
目录不要删！！！可先备份！
:::

### 重新打开词典应用

打开词典 --> 左上角词典偏好设置 --> ☑️打勾下载词典

看到有底部的进度条，就是开始下载了。

完美解决。
