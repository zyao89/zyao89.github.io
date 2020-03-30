---
title: ES6之箭头函数中的this
categories: [前端开发]
tags: [es6]
date: 2020-03-30 15:23:53
---

本文主要介绍箭头函数中的`this`和普通函数的区别。

<!-- more -->

在讲箭头函数中的this之前我们先介绍一下普通函数中的this。

## 普通函数中的this

1. this指向它的直接调用者

2. 默认的，非严格模式下，没找到直接调用者则指向window

3. 严格模式下，没直接调用者的this是undefined

4. 使用call，apply，bind绑定对象，则this指向被绑定的对象。

```js
// ES5中
window.val = 1;
var obj = {
    val: 2,
    dbl: function () {
        this.val *= 2;
        val *= 2;
        console.log(val);
        console.log(this.val);
    }
};

obj.dbl();
var func = obj.dbl;
func();
// 输出结果
2 4 8 8
```

### 分析

1. val变量在没有指定对象前缀,默认从函数中找,找不到则从 `window` 中找全局变量, 即 `val *=2` 就是 `window.val *= 2`, `this.val`默认指的是 `obj.val` ; 因为 `dbl()` 第一次被 `obj` 直接调用

2. `func()` 没有任何前缀,类似于全局函数,即 `window.func` 调用, 所以第二次调用的时候, `this` 指的是 `window`, `val` 指的是 `window.val`。第二次的结果受第一次的影响。

**作用域链:** 当在函数中使用一个变量的时候,首先在本函数内部查找该变量,如果找不到则找其父级函数，最后直到window,全局变量默认挂载在window对象下。

## 箭头函数中的this

1. 箭头函数中的`this`对象就是定义时所在的对象，而不是使用时所在的对象

2. 不可以使用`new`命令创建实例

3. 不可以使用`argument`对象，该对象在函数体内不存在。如果要用，可以用`rest`参数代替

4. 不可以使用`yield`命令，因此箭头函数不能用作`Generator`函数。

5. 由于箭头函数没有自己的`this`，所以当然也就不能用`call()`、`apply()`、`bind()`这些方法去改变`this`的指向。

示例：

```js
var obj = {
    say: function () {
        setTimeout(() => {
            console.log(this);
        });
    }
}
obj.say();
```

输出：obj

此时的 this指的是定义它的对象：obj, 而不是 window。

## 多层嵌套的箭头函数

```js
var obj = {
    say: function () {
        var f1 = () => {
            console.log(this); // obj
            setTimeout(() => {
                console.log(this); // obj
            })
        }
        f1();
    }
}
obj.say()
```

由于fa定义时所处的函数中的this是指向obj的，所以无论嵌套多少层都指向obj。

## 普通函数和箭头函数混杂嵌套

```js
var obj = {
    say: function () {
        var f1 = function () {
            console.log(this);    // window, f1调用时,没有宿主对象,默认是window
            setTimeout(() => {
                console.log(this); // window
            })
        };
        f1();
    }
}
obj.say()
```

因为箭头函数所在的函数位置为f1，f1中的this是指向window，所以箭头函数的this与指向window。

## 箭头函数中使用call()、apply()、bind()

```js
(function() {
    return [
        (() => this.x).bind({ x: 'inner' })()
    ];
}).call({ x: 'outer' });
```

输出：

["outer"]

由于箭头函数没有自己的this，所以使用bind()方法无法改变this的指向。

## 总结

箭头函数中的`this`指向是固定的，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数内部没有`this`，导致内部的`this`就是外层代码块的`this`。正因为它没有`this`，所以也就不能用作构造函数。
