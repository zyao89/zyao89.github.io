---
title: 前端模块化
categories: [前端开发]
tags: [JavaScript,规范,ES6]
date: 2020-04-03 14:16:11
---

前端组件的模块化己发展了很久, 这篇文章将对 IIFE AMD CMD CJS UMD 和 ES6 做一个介绍

<!-- more -->

## IIFE

Imdiately Invoked Function Expression 立即执行的函数表达式，是一个在定义时就会立即执行的  JavaScript 函数。

```js
(function () {
    statements
})();
```

这是一个被称为 自执行匿名函数 的设计模式，主要包含两部分。第一部分是包围在 `圆括号运算符 ()` 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。

第二部分再一次使用 `()` 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。

### 示例

当函数变成立即执行的函数表达式时，表达式中的变量不能从外部访问。

```js
(function () {
    var name = "Barry";
})();
// 无法从外部访问变量 name
name // 抛出错误："Uncaught ReferenceError: name is not defined"
```

将 IIFE 分配给一个变量，不是存储 IIFE 本身，而是存储 IIFE 执行后返回的结果。

```js
var result = (function () {
    var name = "Barry";
    return name;
})();
// IIFE 执行后返回的结果：
result; // "Barry"
```

### 函数表达式（function expression）

```js
var test = function() {};
```

### 函数声明（function declaration）

```js
function test() {};
```

## AMD（require.js）

AMD 即 Asynchronous  Module  Definition（异步模块规范）, 它是一个在浏览器端模块化开发的规范，RequireJS 就是 AMD 的一个典型的实现。

### 特点

异步加载，不阻塞页面的加载，能并行加载多个模块，但是不能按需加载，必须提前加载所需依赖。

### 语法

导入：

```js
require(['模块名称'], function ('模块变量引用'){
    // 代码
});
```

导出：

```js
define(function (){
    return '值'
});
```

### 示例

```js
// a.js
define(function (){
　　return {
　　　a:'hello world'
　　}
});
// b.js
require(['./a.js'], function (moduleA){
    console.log(moduleA.a); // 打印出：hello world
});
```

## CMD（sea.js）

CMD（Common Module Definition）是在 AMD 基础上改进的一种规范，它与AMD很类似，不同点在于：**AMD推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。** 而 Sea.js 就是 CMD 的一个典型的实现。

在 CMD 规范中，一个模块就是一个文件。代码的书写格式如下：

```js
/** CMD写法 **/
define(function(require, exports, module) {
    var a = require('./a'); //在需要时申明
    a.doSomething();
    if (false) {
        var b = require('./b');
        b.doSomething();
    }
});

/** sea.js **/
// 定义模块 math.js
define(function(require, exports, module) {
    var $ = require('jquery.js');
    var add = function(a,b){
        return a+b;
    }
    exports.add = add;
});

// 加载模块
seajs.use(['math.js'], function(math){
    var sum = math.add(1+2);
});
```

## CJS（CommonJS）

NodeJS是CommonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：`module`、`exports`、`require`、`global`。实际使用时，用 `module.exports` 定义当前模块对外输出的接口（不推荐直接用 `exports`），用 `require` 加载模块。

```js
// 定义模块math.js
var basicNum = 0;
function add(a, b) {
  return a + b;
}
module.exports = { //在这里写上需要向外暴露的函数、变量
  add: add,
  basicNum: basicNum
}

/** 必须加./路径，不加的话只会去node_modules文件找 **/
// 引用自定义的模块时，参数包含路径，可省略.js
var math = require('./math');
math.add(2, 5);

// 引用核心模块时，不需要带路径
var http = require('http');
http.createService(...).listen(3000);
```

CommonJS用同步的方式加载模块。

**在服务端，模块文件都存放在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。**

`exports` 和 `module.export` 区别：

- `exports`：对于本身来讲是一个变量（对象），它不是 `module` 的引用，它是 `{}` 的引用，它指向 `module.exports` 的 `{}` 模块。只能使用 `.` 语法 向外暴露变量。
- `module.exports`：`module` 是一个变量，指向一块内存，`exports` 是 `module` 中的一个属性，存储在内存中，然后 `exports` 属性指向 `{}` 模块。既可以使用 `.` 语法，也可以使用 `=` 直接赋值。

## ES6（ES6 Module）

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。
其模块功能主要由两个命令构成：`export` 和 `import`。`export` 命令用于规定模块的对外接口，`import` 命令用于输入其他模块提供的功能。

```js
/** 定义模块 math.js **/
var basicNum = 0;
var add = function (a, b) {
    return a + b;
};
export { basicNum, add };

/** 引用模块 **/
import { basicNum, add } from './math';
function test(ele) {
    ele.textContent = add(99 + basicNum);
}
```

如上例所示，使用 `import` 命令的时候，用户需要知道所要加载的变量名或函数名。其实ES6还提供了 `export default` 命令，为模块指定默认输出，对应的 `import` 语句不需要使用大括号。这也更趋近于ADM的引用写法。

```js
/** export default **/
//定义输出
export default { basicNum, add };

//引入
import math from './math';
function test(ele) {
    ele.textContent = math.add(99 + math.basicNum);
}
```

ES6的模块不是对象，`import` 命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。

ES6 模块的特征：

- 严格模式：ES6 的模块自动采用严格模式
- `import` read-only特性：`import` 的属性是只读的，不能赋值，类似于 `const` 的特性
- `export/import` 提升：`import/export` 必须位于模块顶级，不能位于作用域内；其次对于模块内的 `import/export` 会提升到模块顶部，这是在编译阶段完成的

## UMD

UMD 叫做通用模块定义规范（Universal Module Definition）。也是随着大前端的趋势所诞生，它可以通过运行时或者编译时让同一个代码模块在使用 CommonJs、CMD 甚至是 AMD 的项目中运行。未来同一个 JavaScript 包运行在浏览器端、服务区端甚至是 APP 端都只需要遵守同一个写法就行了。

它没有自己专有的规范，是集结了 CommonJs、CMD、AMD 的规范于一身，我们看看它的具体实现：

```js
((root, factory) => {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        //CommonJS
        var $ = requie('jquery');
        module.exports = factory($);
    } else {
        root.testModule = factory(root.jQuery);
    }
})(this, ($) => {
    //todo
});
```

不难发现，它在定义模块的时候会检测当前使用环境和模块的定义方式，将各种模块化定义方式转化为同样一种写法。

## ES6 模块与 CommonJS 模块的差异

1. CommonJS 模块输出的是一个**值的(浅)拷贝**，ES6 模块输出的是**值的引用**

   - CommonJS 模块输出的是**值的(浅)拷贝**，也就是说，一旦输出一个值，**模块内部的变化就影响不到这个值。**
   - ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 `import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 `import` 有点像 Unix 系统的“符号连接”，原始值变了，`import` 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

   - **运行时加载**: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
   - **编译时加载**: ES6 模块不是对象，而是通过 `export` 命令显式指定输出的代码，`import` 时采用静态命令的形式。即在 `import` 时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。模块内部引用的变化，会反应在外部。

CommonJS 加载的是一个对象（即 `module.exports` 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

### 例子代码

首先看个CommonJS输出拷贝的例子：

```js
// a.js
let a = 1;
let b = { num: 1 }
setTimeout(() => {
    a = 2;
    b = { num: 2 };
}, 200);
module.exports = {
    a,
    b,
};

// main.js
// node main.js
let {a, b} = require('./a');
console.log(a);  // 1
console.log(b);  // { num: 1 }
setTimeout(() => {
    console.log(a);  // 1
    console.log(b);  // { num: 1 }
}, 500);
```

所谓输出拷贝，如果了解过 NodeJS 或者 webpack 对 CommonJS 的实现，就会知道：`exports` 对象是模块内外的唯一关联， CommonJS 输出的内容，就是 `exports` 对象的属性，模块运行结束，属性就确定了。

再看ES6 Module输出的例子：

```js
// a.mjs
let a = 1;
let b = { num: 1 }
setTimeout(() => {
    a = 2;
    b = { num: 2 };
}, 200);
export {
    a,
    b,
};

// main.mjs
// node --experimental-modules main.mjs
import {a, b} from './a';
console.log(a);  // 1
console.log(b);  // { num: 1 }
setTimeout(() => {
    console.log(a);  // 2
    console.log(b);  // { num: 2 }
}, 500);
```

以上就是 ES6 Module 输出引用和 CommonJS 输出值的区别，模块内部引用的变化，会反应在外部，这是 ES6 Module 的规范。

<!-- ## 可参考 -->

<!-- - <https://juejin.im/post/5c17ad756fb9a049ff4e0a62> -->
