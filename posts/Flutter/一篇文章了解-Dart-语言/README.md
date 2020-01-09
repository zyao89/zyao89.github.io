---
title: 一篇文章了解 Dart 语言
date: 2019-02-21 19:41:11
tags: [Dart,移动开发]
categories: [Flutter]
---

## Dart 语言

> Dart 是谷歌在011 年推出的编程语言，是一种结构化 Web 编程语言，允许用户通过 Chromium 中所整合的虚拟机（Dart VM）直接运行 Dart 语言编写的程序，免去了单独编译的步骤。以后这些程序将从 Dart VM 更快的性能与较低的启动延迟中受益。Dart 从设计之初就为配合现代 web 整体运作而考虑，开发团队也同时在持续改进 Dart 向 JavaScript 转换的快速编译器。Dart VM 以及现代 JavaScript 引擎（V8 等）都是 Dart 语言的首选目标平台。
> <https://webdev.dartlang.org/api>

## 一个基础的 Dart 程序

下面的代码运用了 Dart 的许多基础功能：

``` dart
//定义一个函数
printNumber(num aNumber) {
  print('The number is $aNumber.'); // 输出至控制台.
}

// 此处是APP开始执行的地方
main() {
  var number = 42; // 声明并初始化变量
  printNumber(number); // 调用函数
}
```

**注释**

使用 `//` 来表示剩下的行是一个注释，也可以使用 `/*...*/` 来注释

**num**
一种变量类型。其他一些内置类型有 String, int 和 bool;

**42**
一个数字，数字是一种编译常量。

**print()**
一个手动的方式来展示输出。

**'...'(或者"...")**
一个字符串。

**variableName(或者{expression})**
字符串插值：包括一个变量或表达式的字符串，相当于一个字符串内。

**main()**
是一个特殊的、必要、顶级的函数，应用程序开始执行的地方。

**var** 一种特殊的方式来声明变量，不用特指变量类型。

## 重要的概念

当学习Dart语言的时候，把这些事实和概念记在脑子里：

- 每个变量都是一个对象，每个对象是一个类的实例。甚至数字，函数，和null都是对象。所有对象都继承自[Object](http://api.dartlang.org/dart_core/Object.html)类
- 虽然Dart是强类型语言，但变量类型是可选的因为Dart可以自动推断变量类型。
- Dart支持顶级函数（如main()）也支持类或者对象（静态和实例方法分别支持）里的函数。还可以在函数里创建函数（嵌套或局部功能）。
- 类似的，Dart支持顶级变量，以及依赖于类或对象（静态变量和实例变量）变量。实例变量有时被称为域或属性。
- 与Java不同，Dart不具备关键字public，protected和private。如果一个标识符以下划线`（_）`开始，那么它和它的库都是私有的。
- Dart中变量可以以字母或下划线开头，后面跟着任意组合的字符或数字。

## 关键字

下面表格列出了 Dart 语言的关键字：

| 关键字   | 关键字   | 关键字     | 关键字   | 关键字  |
| -------- | -------- | ---------- | -------- | ------- |
| abstract | continue | false      | new      | this    |
| as       | default  | final      | null     | throw   |
| assert   | deferred | finally    | operator | true    |
| async    | do       | for        | part     | try     |
| async*   | dynamic  | get        | rethrow  | typedef |
| await    | else     | if         | return   | var     |
| break    | enum     | implements | set      | void    |
| case     | export   | import     | static   | while   |
| catch    | external | in         | super    | with    |
| class    | extends  | is         | switch   | yield   |
| const    | factory1 | library    | sync*    | yield*  |

- 在关键字表中的所有单词都是保留字。不能使用保留字作为标识符。

## 变量

下面是创建变量并对其赋值的一个例子：

```dart
var name = 'Bob';
```

变量都是引用，变量name包含对一个 String 对象值是 “Bob” 的引用。

### 默认值

未初始化的变量具有 null 的初始值。即使数字类型变量最初为 null ，因为数字是对象。

### final 和 const

如果从不打算改变一个变量，使用 final 或者 const 代替 var 或者其他类型。一个 final 变量只能被设置一次；一个 const 变量是一个编译时常数。

被声明为 final 的顶层或类变量第一次使用时被初始化：

```dart
final name = 'Bob'; // Or: final String name = 'Bob';
// name = 'Alice';  // 取消注释会产生一个错误
```

> 注：延迟初始化变量最终有助于应用程序启动更快。

使用常量作为要编译的常数变量。如果 const 的变量是在类级别，将其标记为静态常量。 （实例变量不能是const。）如果你声明的变量，设置该值为编译时常数设置，如文字，一个 const 变量，或常数算术运算的结果：

```dart
const bar = 1000000;       //压力单位(dynes/cm2)
const atm = 1.01325 * bar; // 标准大气压
```

## 内建数据类型

Dart有如下几种内建的数据类型：

- number

- string

- boolean

- list(或者是array)

- map

- rune（UTF-32字符集的字符）

- symbol

- dynamic 和 Object

  下面用一段代码来演示以上各类数据类型：

```dart

  numbers() {
    // numbers
    var a = 0;
    int b = 1;
    double c = 0.1;

    output.print('a=$a, b=$b, c=$c');
  }

  strings() {
    // strings
    var s1 = 'hello';
    String s2 = "world";

    output.print('s1=$s1, s2=$s2');
  }

  booleans() {
    // booleans
    var real = true;
    bool isReal = false;

    output.print('real=$real, isReal=$isReal');
  }

  lists() {
    // lists
    var arr = [1, 2, 3, 4, 5];
    List<String> arr2 = ['hello', 'world', "123", "456"];
    List<dynamic> arr3 = [1, true, 'haha', 1.0];

    output.print('arr=$arr, arr2=$arr2, arr3=$arr3');
  }

  maps() {
    // maps
    var map = new Map();
    map['name'] = 'zhangsan';
    map['age'] = 10;
    Map m = new Map();
    m['a'] = 'a';

    output.print('map=$map, m=$m');
  }

  runes() {
    //runes，Dart 中 使用runes 来获取UTF-32字符集的字符。String的 codeUnitAt and codeUnit属性可以获取UTF-16字符集的字符
    var clapping = '\u{1f44f}';

    output.print('clapping=$clapping');
  }

  symbols() {
    // symbols
    final b = (#s == new Symbol("s")); // true

    output.print('#s == new Symbol("s")=$b');
  }

dynamics() {
    Object o = 'string';
    o = 42;
    o.toString();   // 我们只能调用Object 支持的方法

    // dynamic 是告诉编译器，我们知道自己在做什么，不用做类型检测。
    dynamic obj = 'string';
    obj['foo'] = 4;  // 可以编译通过，但在运行时会抛出 NoSuchMethodError
}
```

## 函数

Dart是一个面向对象的编程语言，所以即使是函数也是一个对象，也有一种类型Function，这就意味着函数可以赋值给某个变量或者作为参数传给另外的函数。虽然Dart推荐你给函数加上返回值，但是不加返回值的函数同样可以正常工作，另外你还可以用=>代替return语句，比如下面的代码：

```dart
// 声明返回值
int add(int a, int b) {
  return a + b;
}

// 不声明返回值
add2(int a, int b) {
  return a + b;
}

// =>是return语句的简写
add3(a, b) => a + b;

main() {
  print(add(1, 2)); // 3
  print(add2(2, 3)); // 5
  print(add3(1, 2)); // 3
}
```

## 命名参数、位置参数、参数默认值、可选参数

#### 命名参数

```dart
sayHello({String name}) {
  print("hello, my name is $name");
}

sayHello2({name: String}) {
  print("hello, my name is $name");
}

main() {
  // 打印 hello, my name is zhangsan
  sayHello(name: 'zhangsan');

  // 打印 hello, my name is wangwu
  sayHello2(name: 'wangwu');
}
```

可以看到，定义命名参数时，你可以以 `{type paramName}` 或者 `{paramName: type}` 两种方式声明参数，而调用命名参数时，需要以 `funcName(paramName: paramValue)` 的形式调用。

命名参数的参数并不是必须的，所以上面的代码中，如果调用sayHello()不带任何参数，也是可以的，只不过最后打印出来的结果是：hello, my name is null，在Flutter开发中，你可以使用@required注解来标识一个命名参数，这代表该参数是必须的，你不传则会报错，比如下面的代码：

```dart
const Scrollbar({Key key, @required Widget child})
```

#### 位置参数 (可选参数)

使用中括号[]括起来的参数是函数的位置参数，代表该参数可传可不传，位置参数只能放在函数的参数列表的最后面，如下代码所示：

```dart
sayHello(String name, int age, [String hobby]) { // 位置参数可以有多个，比如[String a, int b]
  StringBuffer sb = new StringBuffer();
  sb.write("hello, this is $name and I am $age years old");
  if (hobby != null) {
    sb.write(", my hobby is $hobby");
  }
  print(sb.toString());
}

main() {
  // hello, this is zhangsan and I am 20 years old
  sayHello("zhangsan", 20);
  // hello, this is zhangsan and I am 20 years old, my hobby is play football
  sayHello("zhangsan", 20, "play football");
}
```

#### 参数默认值

你可以为命名参数或者位置参数设置默认值，如下代码所示：

```dart
// 命名参数的默认值
int add({int a, int b = 3}) { // 不能写成：int add({a: int, b: int = 3})
  return a + b;
}

// 位置参数的默认值
int sum(int a, int b, [int c = 3]) {
  return a + b + c;
}
```

#### main()函数

不论在Dart还是Flutter中，必须都需要一个顶层的main()函数，它是整个应用的入口函数，main()函数的返回值是void，还有一个可选的参数，参数类型是List<String>。

#### 匿名函数

大多数函数都是有名称的，比如main() printName()等，但是你也可以写匿名函数，如果你对Java比较熟悉，那下面的Dart代码你肯定也不会陌生：

```dart
test(Function callback) {
  callback("hello");
}

main() {
  test((param) {
    // 打印hello
    print(param);
  });
}
```

匿名函数类似于Java中的接口，往往在某个函数的参数为函数时使用到。

#### 封闭函数

封闭指的是一个函数可以访问其语法作用域内的变量，即使这个函数是在变量本身的作用域之外被调用的。

函数内部会包含在临近作用域内所定义的变量。在下一个示例中，`makeAdder()`捕获了变量`addBy`。不管返回的函数在哪里被调用，它都可以使用`addBy`。

```dart
/// 返回一个把 addBy 作为参数的函数
Function makeAdder(num addBy) {
     return (num i) => addBy + 1;
}

main() {
     // 创建一个加2的函数
     var add2 = makeAdder(2);
     // 创建一个加4的函数
     var add4 = makeAdder(4);

     assert(add2(3) == 5);
     assert(add4(3) == 7);
}
```

#### 函数返回值

所有的函数都有返回值，如果没有指定return语句，那么该函数的返回值为null。

> Dart 不支持函数的重载。

## 运算符

| 操作符 | 含义                                               |
| ------ | -------------------------------------------------- |
| +      | 加                                                 |
| -      | 减                                                 |
| -expr  | 一元减号，也被命名为负号（使后面表达式的值反过来） |
| *      | 乘                                                 |
| /      | 除                                                 |
| ~/     | 返回一个整数值的除法                               |
| %      | 取余，除法剩下的余数                               |

#### 类型测试操作符

`as`、`is` 和 `is!` 操作符在运行时用于检查类型非常便捷。

| 运算符 | 含义                          |
| ------ | ----------------------------- |
| as     | 类型转换                      |
| is     | 当对象是相应类型时返回 true   |
| as     | 当对象不是相应类型时返回 true |

Dart中的运算符与Java中的类似，下面用代码说明：

```dart
main() {
  // 与Java相同的运算符操作

  int a = 1;
  ++a;
  a++;
  var b = 1;
  print(a == b);  // false
  print(a * b); // 3
  bool real = false;
  real ? print('real') : print('not real'); // not real
  print(real && a == b); // false
  print(real || a == 3); // true
  print(a != 2); // true
  print(a <= b); // false
  var c = 9;
  c += 10;
  print("c = $c"); // c = 19
  print(1<<2); // 4

  // 与Java不太一样的运算符操作

  // is运算符用于判断一个变量是不是某个类型的数据
  // is!则是判断变量不是某个类型的数据
  var s = "hello";
  print(s is String); // true
  var num = 6;
  print(num is! String); // true

  // ~/才是取整运算符，如果使用/则是除法运算，不取整
  int k = 1;
  int j = 2;
  print(k / j); // 0.5
  print(k ~/ j); // 0

  // as运算符类似于Java中的cast操作，将一个对象强制类型转换
  (emp as Person).teach();

  // ??=运算符 如果 ??= 运算符前面的变量为null，则赋值，否则不赋值
  var param1 = "hello", param2 = null;
  param1 ??= "world";
  param2 ??= "world";
  print("param1 = $param1"); // param1 = hello
  print("param2 = $param2"); // param2 = world

  // ?.运算符
  var str1 = "hello world";
  var str2 = null;
  print(str1?.length); // 11
  print(str2?.length); // null
  print(str2.length); // 报错
}
```

#### 级联操作符

```dart
class Person {
  eat() {
    print("I am eating...");
  }

  sleep() {
    print("I am sleeping...");
  }

  study() {
    print("I am studying...");
  }
}

main() {
  // 依次打印
  //  I am eating...
  //  I am sleeping...
  //  I am studying...
  new Person()..eat()
      ..sleep()
      ..study();
}
```

可以看到，使用..调用某个对象的方法（或者成员变量）时，返回值是这个对象本身，所以你可以接着使用..调用这个对象的其他方法.

## 控制流程 (与其他语言差不多)

你可以使用以下任何一种方式来控制你的Dart代码流：

- if 和 else
- for 循环
- while 和 do-while循环
- break和continue
- switch和 case
- assert

你也可以通过使用try-catch和throw来改变控制流的异常部分。

下面用一段代码说明：

```dart
main() {
  // if else语句
  int score = 80;
  if (score < 60) {
    print("so bad!");
  } else if (score >= 60 && score < 80) {
    print("just so so!");
  } else if (score >= 80) {
    print("good job!");
  }

  // switch语句
  String a = "hello";
  // case语句中的数据类型必须是跟switch中的类型一致
  switch (a) {
    case "hello":
      print("haha");
      break;
    case "world":
      print("heihei");
      break;
    default:
      print("WTF");
  }

  // for语句
  List<String> list = ["a", "b", "c"];
  for (int i = 0; i < list.length; i++) {
    print(list[i]);
  }
  for (var i in list) {
    print(i);
  }
  // 这里的箭头函数参数必须用圆括号扩起来
  list.forEach((item) => print(item));

  // while语句
  int start = 1;
  int sum = 0;
  while (start <= 100) {
    sum += start;
    start++;
  }
  print(sum);

  // try catch语句
  try {
    print(1 ~/ 0);
  } catch (e) {
    // IntegerDivisionByZeroException
    print(e);
  }
  try {
    1 ~/ 0;
  } on IntegerDivisionByZeroException { // 捕获指定类型的异常
    print("error"); // 打印出error
  } finally {
    print("over"); // 打印出over
  }
}
```

#### 异常

抛出异常：

```dart
throw Exception('put your error message here');
```

捕获异常：

```dart
try {
  // ...
// 捕获特定类型的异常
} on FormatException catch (e) {
  // ...
// 捕获特定类型的异常，但不需要这个对象
} on Exception {
  // ..
// 捕获所有异常
} catch (e) {
  // ...
} finally {
  // ...
}
```

跟 Java 不同的是，Dart 可以抛出任意类型的对象：

```dart
throw 42;
```

## 类 ( class )

Dart中的类没有访问控制，所以你不需要用private, protected, public等修饰成员变量或成员函数，一个简单的类如下代码所示：

```dart
class Person {
  String name;
  int age;
  String gender;
  Person(this.name, this.age, this.gender);
  sayHello() {
    print("hello, this is $name, I am $age years old, I am a $gender");
  }
}
```

构造方法等同于:

```dart
Person(String name, int age, String gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
```

使用如下:

```dart
var p = new Person("zhangsan", 20, "male");
  p.sayHello(); // hello, this is zhangsan, I am 20 years old, I am a male
  p.age = 50;
  p.gender = "female";
  p.sayHello(); // hello, this is zhangsan, I am 50 years old, I am a female
```

### 命名构造方法

```dart
class Point {
  num x, y;
  Point(this.x, this.y);
  // 类的命名构造方法
  Point.origin() {
    x = 0;
    y = 0;
  }
}

main() {
  // 调用Point类的命名构造方法origin()
  var p = new Point.origin();
  var p2 = new Point(1, 2);
}
```

命名构造方法继承, 需注意, 如下

```dart
class Human {
  String name;
  Human.fromJson(Map data) {
    print("Human's fromJson constructor");
  }
}

class Man extends Human {
  Man.fromJson(Map data) : super.fromJson(data) {
    print("Man's fromJson constructor");
  }
}
```

由于Human类没有默认构造方法，只有一个命名构造方法fromJson，所以在Man类继承Human类时，需要调用父类的fromJson方法做初始化，而且必须使用Man.fromJson(Map data) : super.fromJson(data)这种写法，而不是像Java那样将super写到花括号中。

有时候你仅仅只是在某个类的构造方法中，调用这个类的另一个构造方法，你可以这么写：

```dart
class Point {
  num x, y;
  Point(this.x, this.y);
  // 命名构造方法调用了默认的构造方法
  Point.alongXAxis(num x) : this(x, 0);
}
```

### 抽象类和抽象方法

使用abstract修饰一个类，则这个类是抽象类，抽象类中可以有抽象方法和非抽象方法，抽象方法没有方法体，需要子类去实现，如下代码：

```dart
abstract class Doer {
  // 抽象方法，没有方法体，需要子类去实现
  void doSomething();
  // 普通的方法
  void greet() {
    print("hello world!");
  }
}

class EffectiveDoer extends Doer {
  // 实现了父类的抽象方法
  void doSomething() {
    print("I'm doing something...");
  }
}
```

### 运算符重载

```dart
class Vector {
  num x, y;
  Vector(this.x, this.y);
  Vector operator +(Vector v) => new Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) => new Vector(x - v.x, y - v.y);
  printVec() {
    print("x: $x, y: $y");
  }
}

main() {
  Vector v1 = new Vector(1, 2);
  Vector v2 = new Vector(3, 4);
  (v1 - v2).printVec(); // -2, -2
  (v1 + v2).printVec(); // 4, 6
}
```

### 枚举类

使用enum关键字定义一个枚举类，这个语法跟Java类似，如下代码：

```dart
enum Color { red, green, blue }
```

### mixins

mixins是一个重复使用类中代码的方式，比如下面的代码：

```dart
class A {
  a() {
    print("A's a()");
  }
}

class B {
  b() {
    print("B's b()");
  }
}

// 使用with关键字，表示类C是由类A和类B混合而构成
class C = A with B;

main() {
  C c = new C();
  c.a(); // A's a()
  c.b(); // B's b()
}
```

### 静态成员变量和静态成员方法

```dart
// 类的静态成员变量和静态成员方法
class Cons {
  static const name = "zhangsan";
  static sayHello() {
    print("hello, this is ${Cons.name}");
  }
}

main() {
  Cons.sayHello(); // hello, this is zhangsan
  print(Cons.name); // zhangsan
}
```

## 泛型

如果你在API文档寻找基本数组类型或者 [List](https://api.dartlang.org/apidocs/channels/stable/dartdoc-viewer/dart:core.List) 类型，你将会看到该类型实际上为List`<E>`,其中<...>标记表示此表为一个泛型类型（或为参数化结构）—— 一种含有正规类型参数的类型。按照惯例，类型变量通常为单字符名称，例如E,T,S,K,以及V。

```dart
var names = new List<String>();
names.addAll(['Seth', 'Kathy', 'Lars']);
//...
names.add(42); //在调试模式中失败 (在生产模式中成功).
```

## 异步

> Dart 是单线程的，主线程由一个事件循环来执行（类似 Android 的主线程）。对于异步代码，我们通过 Future 来获取结果.

Dart提供了类似ES7中的async await等异步操作，这种异步操作在Flutter开发中会经常遇到，比如网络或其他IO操作，文件选择等都需要用到异步的知识。
 async和await往往是成对出现的，如果一个方法中有耗时的操作，你需要将这个方法设置成async，并给其中的耗时操作加上await关键字，如果这个方法有返回值，你需要将返回值塞到Future中并返回，如下代码所示：

```dart
Future checkVersion() async {
  var version = await lookUpVersion();
  // Do something with version
}
```

下面的代码使用Dart从网络获取数据并打印出来：

```dart
import 'dart:async';
import 'package:http/http.dart' as http;

Future<String> getNetData() async{
  http.Response res = await http.get("http://www.baidu.com");
  return res.body;
}

main() {
  getNetData().then((str) {
    print(str);
  });
}
```

## Dart库（Libraries）

Dart目前已经有很多的库提供给开发者，许多功能不需要开发者自己去实现，只需要导入对应的包即可，使用import语句来导入某个包，比如下面的代码:

```dart
import 'dart:html';
```

如果你想导入自己写的某个代码文件，使用相对路径即可，例如当前有一个demo.dart文件，跟该文件同级目录下有个util.dart文件，文件代码如下：

```dart
// util.dart文件内容

int add(int a, int b) {
  return a + b;
}
```

在demo.dart文件中如果要引用util.dart文件，使用下面的方式导入：

```dart
// demo.dart

import './util.dart';

main() {
  print(add(1, 2));
}
```

你可以使用as关键字为导入的某个包设置一个前缀，或者说别名，比如下面的代码：

```dart
import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// Uses Element from lib1.
Element element1 = Element();

// Uses Element from lib2.
lib2.Element element2 = lib2.Element();
```

你也可以在导入包时使用show hide关键字来导入某个包中的部分功能，比如下面的代码：

```dart
// 只导入foo
import 'package:lib1/lib1.dart' show foo;

// 导入除了foo的所有其他部分
import 'package:lib2/lib2.dart' hide foo;
```

导入包时使用deferred as可以让这个包懒加载，懒加载的包只会在该包被使用时得到加载，而不是一开始就加载，比如下面的代码：

```dart
import 'package:greetings/hello.dart' deferred as hello;
```

# dart:html

用于连接 Dart 和 HTML

```dart
import 'dart:html';

class OutPut {
    Element _$codeEl;
    Element _$resultEl;

    OutPut(String codeId, String resultId) {
        _$codeEl = querySelector('#$codeId');
        _$resultEl = querySelector('#$resultId');

        _init();
    }

    _init() {
        _$codeEl.style.border = 'solid 1px grey';
        _$codeEl.style.padding = '5px';
        _$codeEl.style.margin = '5px 0';

        _$resultEl.style.border = 'solid 1px green';
        _$resultEl.style.padding = '5px';
        _$resultEl.style.margin = '5px 0';
    }

    code(List cs) {
        var c = cs.join('<br>');
        _$codeEl.innerHtml = c;
    }

    print(String text) {
        _$resultEl.appendHtml('<p>$text</p>');
    }
}
```

# dart:js

用于调用原生 `JavaScript`

---

# Demo链接

[我是链接](https://github.com/zyao89/Dart-Flutter/tree/master/Code)
