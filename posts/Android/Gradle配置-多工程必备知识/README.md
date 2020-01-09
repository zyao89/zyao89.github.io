---
title: Gradle配置-多工程必备知识
categories: [Android]
tags: [Gradle,移动开发]
date: 2017-12-05 17:43:12
---

## 介绍

Gradle是一个基于Apache Ant和Apache Maven概念的项目自动化建构工具。它使用一种基于Groovy的特定领域语言(DSL)来声明项目设置，抛弃了基于XML的各种繁琐配置。

Gradle是Android Studio标配的构建系统，想要熟练使用Android Studio进行Android开发，必须对Gradle有一定程度的认知。

## 多文件共享变量

Gradle开发中经常会涉及到很多相同的配置，例如不同module中都要配置compileSdkVersion、buildToolsVersion等变量值。一般情况下，它们的取值都应该保持一致，为了不让修改都要经过每个module文件，我们可以定义一个名为config.gradle的文件，并放在项目根目录中，文件内容可以如下：

```groovy
project.ext{
    //Java相关
    javaVersion = JavaVersion.VERSION_1_8

    //Android
    compileSdkVersion = 25
    buildToolsVersion = "25.0.1"
    minSdkVersion = 14
    targetSdkVersion = 25

    //混淆
    minifyEnabled = false

    //其它
    sourceCompatibility = javaVersion
    targetCompatibility = javaVersion
}
```

工程中的module的build.gradle文件引入全局配置项如下：

```groovy
apply plugin: 'com.android.application'
apply from: '../config.gradle'

android {
    compileSdkVersion project.ext.compileSdkVersion
    buildToolsVersion project.ext.buildToolsVersion
    defaultConfig {
        applicationId "com.zyao.test"
        minSdkVersion project.ext.minSdkVersion
        targetSdkVersion project.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            minifyEnabled project.ext.minifyEnabled
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

## 高级配置

在多个module项目中，每次都要引入`apply from: '../config.gradle'`显然非常的繁琐，下面介绍一种常见解决方案在根目录的build.gradle文件中配置`subprojects`，如下：

```groovy
subprojects {
    apply from: '../config.gradle'
}
```

## aar库引用配置

`aar`是在Android Studio中开始引入的一种全新的文件类型，它其实就是一个压缩文件，里面包含了jar文件和相关资源文件。

我们在项目中引入本地aar文件的配置方式如下：

* 首先，在根目录中的build.gradle中配置如下参数：

```groovy
repositories {
        flatDir {
            dirs 'libs路径'
        }
    }
```

* 然后，在module中的build.gradle中就可以配置依赖文件了，如下：

```groovy
dependencies {
    ...
    compile(name: '输入你引入的文件名', ext: 'aar')
    ...
}
```

## 总结

完美，完美，是不是很完美...

小伙伴们，加油了！！！

## Author Blog

[zyao89.cn](https://zyao89.cn)

---

`作者：Zyao89；转载请保留此行，谢谢；`
`原文网站：https://www.zyao89.cn`
`祝你好运，谢谢支持`
