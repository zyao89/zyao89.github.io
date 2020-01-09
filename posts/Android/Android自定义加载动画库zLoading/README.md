---
title: Android自定义加载动画库zLoading
date: 2017-04-10 23:14:18
tags: [移动开发,ZLoading,动画]
categories: [Android]
---
Android自定义动画总结更新一下，增加了对话框Dialog模式，今天来简单的分享下如何使用吧。效果图如下：

**GIF有点大，手机流量请三思。**

<!--more-->

## 效果图

![演示效果动画](zLoadingDialog.gif)

## 目前拥有的类型

索引 | 名称 | 枚举值（Z_TYPE）
:------:|:------:|:------:
0|CircleBuilder | CIRCLE
1|ClockBuilder | CIRCLE_CLOCK
2|StarBuilder | STAR_LOADING
3|LeafBuilder | LEAF_ROTATE
4|DoubleCircleBuilder | DOUBLE_CIRCLE
5|PacManBuilder | PAC_MAN
6|ElasticBallBuilder | ELASTIC_BALL
7|InfectionBallBuilder | INFECTION_BALL
8|IntertwineBuilder | INTERTWINE
9|TextBuilder | TEXT

## 链接如下

[第一个，ClockBuilder](markdown/Android自定义动画-ClockLoadingView.md)

[第二个，StarBuilder](http://zyao89.github.io/2017/03/22/Android自定义动画-StarLoadingView/)

[第三个，LeafBuilder](https://zyao89.cn/2017/03/22/旋转的叶子-LeafLoadingView/)

[第四个，DoubleCircleBuilder](https://zyao89.cn/2017/03/25/Android自定义加载动画-DoubleCircleBuilder/)

[第五个，PacManBuilder](https://zyao89.cn/2017/03/26/Android自定义加载动画-PacMan/)

[第六个，ElasticBallBuilder](https://zyao89.cn/2017/03/27/Android自定义加载动画-颤抖吧！球球/)

[第七个，InfectionBallBuilder](https://zyao89.cn/2017/04/06/Android自定义加载动画-感染体/)

[第八个，IntertwineBuilder](https://zyao89.cn/2017/04/06/Android自定义加载动画-交织/)

## 引入

1. Gradle方式引用

```groovy
compile 'com.zyao89:zloading:1.0.0'
```

2. GitHub下载工程
[zyao89/ZCustomView](https://github.com/zyao89/ZCustomView)（这里应该比较新）

## 使用

1. 可以直接使用等待框模式，如下：

```java
ZLoadingDialog dialog = new ZLoadingDialog(MainActivity.this);
dialog.setLoadingBuilder(type)//设置类型
        .setLoadingColor(Color.BLACK)//颜色
        .setHintText("Loading...")
        .show();
```

2. 也可以直接使用LoadingView动画，如下：

```java
ZLoadingView zLoadingView_1 = (ZLoadingView) findViewById(R.id.loadingView_1);
zLoadingView_1.setLoadingBuilder(Z_TYPE.DOUBLE_CIRCLE);
zLoadingView_1.setColorFilter(Color.BLACK);
```

也可以如下使用xml配置：

```xml
<com.zyao89.view.zloading.ZLoadingView
        android:id="@+id/loadingView_1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        app:z_type="DoubleCircleBuilder"
        app:z_color="@android:color/holo_green_light"/>
```

 效果实现图可以看前面几篇文章介绍的。

> **如果有什么需要补充的接口等，可以评论@我**

## 总结

小伙伴们，要是想看更多细节，可以前往文章最下面的Github链接，如果大家觉得ok的话，希望能给个喜欢，最渴望的是在Github上给个star。谢谢了。

如果大家有什么更好的方案，或者想要实现的加载效果，可以给我留言或者私信我，我会想办法实现出来给大家。谢谢支持。

Github：[zyao89/ZCustomView](https://github.com/zyao89/ZCustomView)

`作者：Zyao89；转载请保留此行，谢谢；`

个人博客：[https://zyao89.cn](https://zyao89.cn)
