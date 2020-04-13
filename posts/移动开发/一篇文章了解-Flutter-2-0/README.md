---
title: 一篇文章了解 Flutter 2.0
date: 2019-02-25 21:32:59
tags: [Flutter]
categories: [移动开发]
---
## Flutter Preview 2.0

Build beautiful native apps in record time

> Flutter is Google’s mobile app SDK for crafting high-quality native interfaces on iOS and Android in record time. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.

## 安装

1. 下载

```sh
https://flutter.io/sdk-archive/#macos
```

1. 解压

2. 添加`flutter`相关工具到path中：

```sh
export PATH=`pwd`/flutter/bin:$PATH
```

## 配置编辑器

### 配置环境变量

```bash
export PATH=/Users/用户名/Documents/flutter/flutter/bin:$PATH
export ANDROID_HOME="/Users/用户名/Documents/android_sdk" //android sdk目录，替换为你自己的即可
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

运行以下命令查看是否需要安装其它依赖项来完成安装：

```bash
flutter doctor
```

## 创建 Demo

```bash
flutter create ./demo
cd demo
flutter run
```

## 编写 Flutter

### Hello World

```dart
import 'package:flutter/material.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Welcome to Flutter',
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text('Welcome to Flutter'),
        ),
        body: new Center(
          child: new Text('Hello World'),
        ),
      ),
    );
  }
}
```

> Scaffold 是 Material library 中提供的一个widget, 它提供了默认的导航栏、标题和包含主屏幕widget树的body属性。widget树可以很复杂。
> 本示例中的body的widget树中包含了一个Center widget, Center widget又包含一个 Text 子widget。 Center widget可以将其子widget树对其到屏幕中心。

## 运行

> 解决问题: <https://segmentfault.com/q/1010000016775662>
> google仓库问题? 翻墙或者maven.aliyun.com

1. 查看模拟器

```sh
flutter emulators
```

2. 运行在制定的模拟器上

```sh
flutter emulators --launch <emulator id>
```

3. 创建模拟器

```sh
flutter emulators --create [--name xyz]
```

## 引入三方库

1. 在 pubspec.yaml 中引入依赖

```
english_words: ^3.1.0
```

2. 在 `main.dart` 中使用

```dart
final wordPair = new WordPair.random();

new Text(wordPair.asPascalCase),
```

### Stateless Widget 无状态的部件

Stateless widgets 是不可变的, 这意味着它们的属性不能改变 - 所有的值都是最终的.

### Stateful Widget 有状态的部件

Stateful widgets 持有的状态可能在widget生命周期中发生变化. 实现一个 stateful widget 至少需要两个类:

1. 一个 StatefulWidget类。
2. 一个 State类。 StatefulWidget类本身是不变的，但是 State类在widget生命周期中始终存在.

> createState()
> setState()

## Demo 演示

1. Hello World
2. Random Words
3. List View
4. Favorite
5. Route
6. Theme
7. GestureDetector

[Demo链接, 我是链接 >>>](https://github.com/zyao89/Dart-Flutter/tree/master/Code)

## 特殊分析

- 在Dart语言中使用下划线前缀标识符，会强制其变成私有的.
- main函数使用了(=>)符号, 这是Dart中单行函数或方法的简写。
- 在Flutter中，大多数东西都是widget，包括对齐(alignment)、填充(padding)和布局(layout)
- widget的主要工作是提供一个build()方法来描述如何根据其他较低级别的widget来显示自己。

# UI布局和控件

一些基本控件

## Widget

在 Flutter 里，UI 控件就是所谓的 Widget。通过组合不同的 Widget，来实现我们用户交互界面。

Widget 分为两种:

1. StatelessWidget  无状态的

   只能用来展示信息，不能有动作（用户交互）

2. StatefulWidget  有状态的

   可以通过改变状态使得 UI 发生变化，它可以包含用户交互。

**StatelessWidget** 的使用非常简单，我们只需要继承 StatelessWidget，然后实现 build 方法就可以了：

```dart
class FooWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // ...
  }
}
```

**StatefulWidget** 用起来麻烦一些，他还需要一个 State：

```dart
class BarWidget extends StatefulWidget {
  @override
  State createState() {
    return _BarWidgetState();
  }
}

class _BarWidgetState extends State<BarWidget> {
  @override
  Widget build(BuildContext context) {
    // ...
  }
}
```

这里看起来可能有些绕，BarWidget 依赖了 _BarWidgetState，而 _BarWidgetState 又继承了 State< BarWidget>。如果读者不太理解，其实也没有什么关系，这只是一个样板代码，照着写就行了。

从 BarWidget 的实现来看，好像跟前面使用 StatelessWidget 没有什么区别，都是在 build 方法里面返回一个 Widget，只是 stateful widget 把这个方法挪到了 State 里面。实际上，两者的区别非常大。stateless widget 整个生命周期里都不会改变，所以 build 方法只会执行一次。而 stateful widget 只要状态改变，就会调用 build 方法重新创建 UI。

为了触发 UI 的重建，我们可以调用 setState 方法。下面的代码读者留意一下即可，在后面我们学习了相关的控件后再回过头来看。

```dart
class BarWidget extends StatefulWidget {
  @override
  State createState() {
    return _BarWidgetState();
  }
}

class _BarWidgetState extends State<BarWidget> {
  var i = 0;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        Text('i = $i'),
        RaisedButton(
          onPressed: () {
            setState(() {
              ++i;
            });
          },
          child: Text('click'),
        )
      ],
    );
  }
}
```

## 文本

为了展示文本，我们使用 Text：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text("Put your text here");
  }
}
```

这就是最简单的文本了，它使用的是默认的样式。很多情况下，我们都需要对文本的样式进行修改，这个时候，可以使用 TextStyle：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Text(
      "Put your text here",
      style: TextStyle(
        color: Colors.blue,
        fontSize: 16.0,
        fontWeight: FontWeight.bold
      ),
    );
  }
}
```

## 图片

使用 Image，可以让我们向用户展示一张图片。图片的来源可以是网络、文件、资源和内存，它们对应的构造函数分别是：

```dart
Image.asset(name);
Image.file(file);
Image.memory(bytes);
Image.network(src);
```

比方说，为了展示一张来自网络的图片，我们可以这样：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Image.network(
      "http://www.example.com/xxx.png",
      width: 200.0,
      height: 150.0,
    );
  }
}
```

## 按钮

Flutter 提供了两个基本的按钮控件：`FlatButton` 和 `RaisedButton`，它们的使用方法是类似的：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var flatBtn = FlatButton(
      onPressed: () => print('FlatButton pressed'),
      child: Text('BUTTON'),
    );
    var raisedButton = RaisedButton(
      onPressed: () => print('RaisedButton pressed'),
      child: Text('BUTTON'),
    );
    return raisedButton;
  }
}
```

通过设置 onPressed 回调，我们可以在按钮被点击的时候得到回调。child 参数用于设置按钮的内容。虽然我们给 child 传递的是 Text，但这不是必需的，它可以接受任意的 Widget，比方说，Image。

注意，由于我们只是在按钮点击的时候打印一个字符串，这里使用 StatelessWidget 是没有问题的。但如果有其他 UI 动作（比如弹出一个 dialog，则必须使用 StatefulWidget）。

它们的区别只是样式不同而已.

## 文本输入框、显示弹框

在前面的 TextField 例子中，我们只是把用户的输入通过 print 打印出来，这未免也太无趣了。在这一小节，我们要把它显示在 dialog 里。为了弹出一个 dialog，我们需要调用 showDialog 方法并传递一个 builder：

```dart
class _MessageFormState extends State<MessageForm> {
  var editController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        Expanded(
          child: TextField(
            controller: editController,
          ),
        ),
        RaisedButton(
          child: Text("click"),
          onPressed: () {
            showDialog(
                // 第一个 context 是参数名，第二个 context 是 State 的成员变量
                context: context,
                builder: (_) {
                  return AlertDialog(
                    // dialog 的内容
                    content: Text(editController.text),
                    // actions 设置 dialog 的按钮
                    actions: <Widget>[
                      FlatButton(
                        child: Text('OK'),
                        // 用户点击按钮后，关闭弹框
                        onPressed: () => Navigator.pop(context),
                      )
                    ],
                  );
                }
            );
          }
        )
      ],
    );
  }

  @override
  void dispose() {
    super.dispose();
    editController.dispose();
  }
}
```

## 最简单的布局——、Padding 和 Center

我们经常说，Flutter 里面所有的东西都是 Widget，所以，布局也是 Widget。

控件 Container 可以让我们设置一个控件的尺寸、背景、margin 等：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('text'),
      padding: EdgeInsets.all(8.0),
      margin: EdgeInsets.all(4.0),
      width: 80.0,
      decoration: BoxDecoration(
        // 背景色
        color: Colors.grey,
        // 圆角
        borderRadius: BorderRadius.circular(5.0),
      ),
    );
  }
}
```

如果我们只需要 padding，可以使用控件 Padding：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: Text('text'),
    );
  }
}
```

Center 就跟它的名字一样，把一个控件放在中间：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(8.0),
      margin: EdgeInsets.all(4.0),
      width: 200.0,
      height: 200.0,
      decoration: BoxDecoration(
        // 背景色
        color: Colors.grey,
        // 圆角
        borderRadius: BorderRadius.circular(5.0),
      ),

      // 把文本放在 Container 的中间
      child: Center(
        child: Text('text'),
      ),
    );
  }
}
```

## 水平、竖直布局和 Expand

我们经常说，Flutter 里面所有的东西都是 Widget，所以，布局也是 Widget。水平布局我们可以使用 Row，竖直布局使用 Column。

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      // 只有一个子元素的 widget，一般使用 child 参数来设置；Row 可以包含多个子控件，
      // 对应的则是 children。
      children: <Widget>[
        Text('text1'),
        Text('text2'),
        Text('text3'),
        Text('text4'),
      ],
    );
  }
}
```

Column 的使用是一样的：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Text('text1'),
        Text('text2'),
        Text('text3'),
        Text('text4'),
      ],
    );
  }
}
```

关于 Expand 控件，我们来看看 TextField 的那个例子：

```dart
class MessageForm extends StatefulWidget {
  @override
  State createState() {
    return _MessageFormState();
  }
}

class _MessageFormState extends State<MessageForm> {
  var editController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        // 占满一行里除 RaisedButton 外的所有空间
        Expanded(
          child: TextField(
            controller: editController,
          ),
        ),
        RaisedButton(
          child: Text("click"),
          onPressed: () => print('text inputted: ${editController.text}'),
        )
      ],
    );
  }

  @override
  void dispose() {
    super.dispose();
    editController.dispose();
  }
}
```

这里通过使用 Expand，TextField 才能够占满一行里除按钮外的所有空间。此外，当一行/列里有多个 Expand 时，我们还可以通过设置它的 flex 参数，在多个 Expand 之间按比例划分可用空间。

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: <Widget>[
        Expanded(
          // 占一行的 2/3
          flex: 2,
          child: RaisedButton(child: Text('btn1'),),
        ),
        Expanded(
          // 占一行的 1/3
          flex: 1,
          child: RaisedButton(child: Text('btn2'),),
        ),
      ],
    );
  }
}
```

## Stack 布局

有些时候，我们可能会希望一个控件叠在另一个控件的上面。于是，Stack 应运而生：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Text('foobar'),
        Text('barfoo'),
      ],
    );
  }
}
```

默认情况下，子控件都按 Stack 的左上角对齐，于是，上面的两个文本完全一上一下堆叠在一起。我们还可以通过设置 alignment 参数来改变这个对齐的位置：

```dart
class TestWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Stack(
      // Aligment 的取值范围为 [-1, 1]，Stack 中心为 (0, 0)，
      // 这里设置为 (-0.5, -0.5) 后，可以让文本对齐到 Container 的 1/4 处
      alignment: const Alignment(-0.5, -0.5),
      children: <Widget>[
        Container(
          width: 200.0,
          height: 200.0,
          color: Colors.blue,
        ),
        Text('foobar'),
      ],
    );
  }
}
```

通过组合 Row/Column 和 Stack，已经能够完成绝大部分的布局了，所以 Flutter 里没有相对布局之类的东西。

更多的 Flutter 控件，读者可以参考 [flutter.io/widgets/](https://link.juejin.im?target=https%3A%2F%2Fflutter.io%2Fwidgets%2F)。
