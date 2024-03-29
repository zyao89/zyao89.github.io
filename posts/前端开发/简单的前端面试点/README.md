---
title: 简单的前端面试点
categories: [前端开发]
tags: [JavaScript,Vue.js]
private: true
date: 2021-03-30 18:56:11
---

<!-- more -->

<!-- /s/36ba1dc1.html -->

## js基础

![js](./images/2021-03-30-18-53-56.png)


### 说一下事件代理？

事件委托是指将事件绑定到目标元素的父元素上，利用冒泡机制触发该事件

```js
ulEl.addEventListener('click', function(e){
    var target = event.target || event.srcElement;
    if(!!target && target.nodeName.toUpperCase() === "LI"){
        console.log(target.innerHTML);
    }
}, false);
```

### 说一下宏任务和微任务？

- 宏任务：当前调用栈中执行的任务称为宏任务。（主代码快，定时器等等）。
- 微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务为微任务。（可以理解为回调事件，promise.then，proness.nextTick等等）。
- 宏任务中的事件放在callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护。

### 说一下闭包？

闭包的实质是因为函数嵌套而形成的作用域链

闭包的定义即：函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包



## css基础

![css](./images/2021-03-30-21-32-44.png)

### css水平、垂直居中的写法，请至少写出4种？

> 这题考查的是css的基础知识是否全面，所以平时一定要注意多积累

水平居中

- 行内元素: `text-align: center`
- 块级元素: `margin: 0 auto`
- `position:absolute` + `left:50%` + `transform:translateX(-50%)`
- `display:flex` + `justify-content: center`

垂直居中

- 设置`line-height` 等于`height`
- `position：absolute` + `top:50%` + `transform:translateY(-50%)`
- `display:flex` + `align-items: center`
- `display:table` + `display:table-cell` + `vertical-align: middle`

### 说一下盒模型？

> 盒模型是css中重要的基础知识，也是必考的基础知识

盒模型的组成，由里向外content,padding,border,margin.
在IE盒子模型中，width表示content+padding+border这三个部分的宽度
在标准的盒子模型中，width指content部分的宽度

box-sizing的使用:
```
box-sizing: content-box 是W3C盒子模型
box-sizing: border-box 是IE盒子模型
```
box-sizing的默认属性是 content-box

### 清除浮动的几种方式，及原理？

> 清除浮动简单，但这题要引出的是BFC，BFC也是必考的基础知识点

- `::after` / `<br>` / `clear: both`
- 创建父级 BFC(overflow:hidden)
- 父级设置高度

> BFC （块级格式化上下文），是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。

触发条件:
- 根元素
- position: absolute/fixed
- display: inline-block / table
- float 元素
- ovevflow !== visible

规则:
- 属于同一个 BFC 的两个相邻 Box 垂直排列
- 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠
- BFC 的区域不会与 float 的元素区域重叠
- 计算 BFC 的高度时，浮动子元素也参与计算

### scoped

[https://vue-loader.vuejs.org/zh/guide/scoped-css.html](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)

### css-module

[http://www.ruanyifeng.com/blog/2016/06/css_modules.html](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

### 简述一下Sass、Less，且说明区别？

他们是动态的样式语言，是CSS预处理器,CSS上的一种抽象层。他们是一种特殊的语法/语言而编译成CSS。

区别：
变量符不一样，less是@，而Sass是$;
Sass支持条件语句，可以使用if{}else{},for{}循环等等。而Less不支持;
Sass是基于Ruby的，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出Css到浏览器

## 网络相关

### get、post的区别

1.get传参方式是通过地址栏URL传递，是可以直接看到get传递的参数，post传参方式参数URL不可见，get把请求的数据在URL后通过？连接，通过&进行参数分割。psot将参数存放在HTTP的包体内

2.get传递数据是通过URL进行传递，对传递的数据长度是受到URL大小的限制，URL最大长度是2048个字符。post没有长度限制

3.get后退不会有影响，post后退会重新进行提交

4.get请求可以被缓存，post不可以被缓存

5.get请求只URL编码，post支持多种编码方式

6.get请求的记录会留在历史记录中，post请求不会留在历史记录

7.get只支持ASCII字符，post没有字符类型限制

### 你所知道的http的响应码及含义？

1xx(临时响应)

100: 请求者应当继续提出请求。

101(切换协议) 请求者已要求服务器切换协议，服务器已确认并准备进行切换。

2xx(成功)

200：正确的请求返回正确的结果

201：表示资源被正确的创建。比如说，我们 POST 用户名、密码正确创建了一个用户就可以返回 201。

202：请求是正确的，但是结果正在处理中，这时候客户端可以通过轮询等机制继续请求。

3xx(已重定向)

300：请求成功，但结果有多种选择。

301：请求成功，但是资源被永久转移。

303：使用 GET 来访问新的地址来获取资源。

304：请求的资源并没有被修改过

4xx(请求错误)

400：请求出现错误，比如请求头不对等。

401：没有提供认证信息。请求的时候没有带上 Token 等。

402：为以后需要所保留的状态码。

403：请求的资源不允许访问。就是说没有权限。

404：请求的内容不存在。

5xx(服务器错误)

500：服务器错误。

501：请求还没有被实现。



## git相关

1. 列举工作中常用的几个git命令？
> 新增文件的命令：git add file或者git add .
提交文件的命令：git commit –m或者git commit –a
查看工作区状况：git status –s
拉取合并远程分支的操作：git fetch/git merge或者git pull
查看提交记录命令：git reflog

2. 提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的？
> 通过git stash命令，把工作区的修改提交到栈区，目的是保存工作区的修改；
通过git pull命令，拉取远程分支上的代码并合并到本地分支，目的是消除冲突；
通过git stash pop命令，把保存在栈区的修改部分合并到最新的工作空间中；

3. 使用过git cherry-pick，有什么作用？
> 命令git cherry-pick可以把branch A的commit复制到branch B上。
在branch B上进行命令操作：
```
复制单个提交：git cherry-pick commitId
复制多个提交：git cherry-pick commitId1…commitId3
注意：复制多个提交的命令不包含commitId1.
```

## vue相关

![vue](./images/2021-03-30-21-33-19.png)

1、谈谈你对MVVM开发模式的理解
> MVVM分为Model、View、ViewModel三者；
> Model代表数据模式，数据和业务逻辑都在Model层中定义；
> View代表UI视图，负责数据的展示；
> ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；
> Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步；
> 这种模式实现了Model和View的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作dom。

2、Vue有哪些指令
> v-html， v-show ， v-if , v-for 等等

3、v-if 和 v-show
> v-show仅仅控制元素的显示方式，将display属性在block和none来回切换；而v-if会控制这个DOM节点的存在与否。当我们需要经常切换某个元素的显示/隐藏时，使用v-show会更加节省性能上的开销；当只需要一次显示或隐藏时，使用v-if更加合理。

4、简述Vue的响应式原理
> 当一个Vue实例创建时，vue会遍历data选项的属性，用Object.defineProperty将它们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。
> 每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。

![](./images/2021-03-30-19-54-50.png)

5、Vue中如何在组件内部实现一个双向数据绑定
> 假设有一个输入框组件，用户输入时，同步父组件页面中的数据
> 思路：父组件通过props传值给子组件，子组件通过$emit来通知父组件修改相应的

6、Vue中给data中的对象属性添加一个新的属性时会发生什么，如何解决
> 点击button会发现，obj.b 已经成功添加，但是视图并未刷新：
> 原因在于在Vue实例创建时，obj.b并未声明，因此就没有被Vue转换为响应式的属性，
> 自然就不会触发视图的更新，这时就需要使用Vue的全局api $set()：

### vue基础

- 过滤器和插槽

- 计算属性和侦听器

- 组件生命周期
> 它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后

- $nextTick有什么作用？

- 你知道v-model的原理吗？说说看

- 你知道vue中key的原理吗？说说你对它的理解

- vue中怎么重置data？
> `Object.assign(this.$data, this.$options.data())`

- 如何在子组件中访问父组件的实例？
> `this.$parent`

- vue给组件绑定自定义事件无效怎么解决？
> 两种方式
> 1、组件外部加修饰符.navtive
> 2、组件内部声明$emit('自定义事件')

- 怎么访问到子组件的实例或者子元素？
> `this.$refs`

### vue-router

1、嵌套路由怎么定义？
> 在 VueRouter 的参数中使用 children 配置，这样就可以很好的实现路由嵌套。

```js
//引入两个组件
import home from "./home.vue"
import game from "./game.vue" //定义路由

const routes = [
    { path: "/", redirect: "/home" },//重定向,指向了home组件  
    {  
        path: "/home", component: home,  
        children: [  
            { path: "/home/game", component: game }  
        ]  
    }  
]
```

2、怎么定义vue-router的动态路由？怎么获取传过来的动态参数？
> 在router目录下的index.js文件中，对path属性加上/:id。
> 使用router对象的params.id。



3、vue-router有哪几种导航钩子？
```
有三种方式可以植入路由导航过程中：
第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子
第三种：单独路由独享组件
```

> beforeRouteEnter 不能获取组件实例 this，因为当守卫执行前，组件实例被没有被创建出来，剩下两个钩子则可以正常获取组件实例 this
但是并不意味着在 beforeRouteEnter 中无法访问组件实例，我们可以通过给 next 传入一个回调来访问组件实例。在导航被确认是，会执行这个回调，这时就可以访问组件实例了，如：

```js
beforeRouteEnter(to, from, next) {
    next (vm => {
        // 这里通过 vm 来访问组件实例解决了没有 this 的问题
    })
}
```

### vuex

vue框架中状态管理。
场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

- vuex中actions和mutations有什么区别？
- vuex的state、getter、mutation、action、module特性分别是什么？
- 你觉得vuex有什么缺点？

### vue-loader是什么？使用它的用途有哪些？

解析 `.vue` 文件的一个加载器，使template/js/style转换成js模块。
用途：js可以写es6、style样式可以scss或less、template可以加jade等


### ElementUI

- ElementUI是怎么做表单验证的？在循环里对每个input验证怎么做呢？
- 你有二次封装过ElementUI组件吗？
- ElementUI怎么修改组件的默认样式？
- ElementUI的穿梭组件如果数据量大会变卡怎么解决不卡的问题呢？
- ElementUI表格组件如何实现动态表头？
- ElementUI使用表格组件时有遇到过问题吗？
- 有阅读过ElementUI的源码吗？
- 项目中有使用过ElementUI吗？有遇到过哪些问题？它的使用场景主要是哪些？


## React 相关

### 基础问题

- 问题1：什么是虚拟DOM？
> 虚拟 DOM (VDOM)是真实 DOM 在内存中的表示。UI 的表示形式保存在内存中，并与实际的 DOM 同步。这是一个发生在渲染函数被调用和元素在屏幕上显示之间的步骤，整个过程被称为调和。

- 问题2：类组件和函数组件之间的区别是啥？
> 类组件可以使用其他特性，如状态 state 和生命周期钩子。
当组件只是接收 props 渲染到页面时，就是无状态组件，就属于函数组件，也被称为哑组件或展示组件。
函数组件和类组件当然是有区别的，而且函数组件的性能比类组件的性能要高，因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可。为了提高性能，尽量使用函数组件。

| 区别 | 函数 | 组件 |
| --- | --- | --- |
| 类组件是否有 this | 没有 | 有 | 
| 是否有生命周期 | 没有 | 有 | 
| 是否有状态 state | 没有 | 有 | 


- React 中 refs 干嘛用的？
> Refs 提供了一种访问在render方法中创建的 DOM 节点或者 React 元素的方法。在典型的数据流中，props 是父子组件交互的唯一方式，想要修改子组件，需要使用新的pros重新渲染它。凡事有例外，某些情况下咱们需要在典型数据流外，强制修改子代，这个时候可以使用 Refs。

- 问题 4：在 React 中如何处理事件
> 为了解决跨浏览器的兼容性问题，SyntheticEvent 实例将被传递给你的事件处理函数，SyntheticEvent是 React 跨浏览器的浏览器原生事件包装器，它还拥有和浏览器原生事件相同的接口，包括 stopPropagation() 和 preventDefault()。

> 比较有趣的是，React 实际上并不将事件附加到子节点本身。React 使用单个事件侦听器侦听顶层的所有事件。这对性能有好处，也意味着 React 在更新 DOM 时不需要跟踪事件监听器。

- 问题 5：state 和 props 区别是啥？
> props和state是普通的 JS 对象。虽然它们都包含影响渲染输出的信息，但是它们在组件方面的功能是不同的。即:
state 是组件自己管理数据，控制自己的状态，可变；
props 是外部传入的数据参数，不可变；
没有state的叫做无状态组件，有state的叫做有状态组件；
多用 props，少用 state，也就是多写无状态组件。

- 问题 6：如何创建 refs
> Refs 是使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```
或者这样用：
```js
class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} /> // Access DOM input in handle submit
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```

- 问题 7：什么是高阶组件？
> 高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
> HOC 可以用于以下许多用例
代码重用、逻辑和引导抽象
渲染劫持
state 抽象和操作
props 处理

- 问题 8：在构造函数调用 super 并将 props 作为参数传入的作用是啥？
> 在调用 super() 方法之前，子类构造函数无法使用this引用，ES6 子类也是如此。将 props 参数传递给 super() 调用的主要原因是在子构造函数中能够通过this.props来获取传入的 props。

- 问题 9：什么是控制组件？
> 在 HTML 中，表单元素如 `<input>`、`<textarea>`和`<select>`通常维护自己的状态，并根据用户输入进行更新。当用户提交表单时，来自上述元素的值将随表单一起发送。

> 而 React 的工作方式则不同。包含表单的组件将跟踪其状态中的输入值，并在每次回调函数(例如onChange)触发时重新渲染组件，因为状态被更新。以这种方式由 React 控制其值的输入表单元素称为受控组件。

- 问题 10：如何 React.createElement ？
```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)
```
上述代码如何使用 React.createElement 来实现:
```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

- 问题 11：讲讲什么是 JSX ？
> 当 Facebook 第一次发布 React 时，他们还引入了一种新的 JS 方言 JSX，将原始 HTML 模板嵌入到 JS 代码中。JSX 代码本身不能被浏览器读取，必须使用Babel和webpack等工具将其转换为传统的JS。很多开发人员就能无意识使用 JSX，因为它已经与 React 结合在一直了。

- 问题 13：为什么不直接更新 state 呢 ?
> 如果试图直接更新 state ，则不会重新渲染组件。
```js
// 错误
This.state.message = 'Hello world';
```
需要使用setState()方法来更新 state。它调度对组件state对象的更新。当state改变时，组件通过重新渲染来响应：
```js
// 正确做法
This.setState({message: 'Hello World'});
```

- 问题 14：React 组件生命周期有哪些不同阶段？
> 在组件生命周期中有四个不同的阶段：
Initialization：在这个阶段，组件准备设置初始化状态和默认属性。
Mounting：react 组件已经准备好挂载到浏览器 DOM 中。这个阶段包括componentWillMount和componentDidMount生命周期方法。
Updating：在这个阶段，组件以两种方式更新，发送新的 props 和 state 状态。此阶段包括shouldComponentUpdate、componentWillUpdate和componentDidUpdate生命周期方法。
Unmounting：在这个阶段，组件已经不再被需要了，它从浏览器 DOM 中卸载下来。这个阶段包含 componentWillUnmount 生命周期方法。


> 除以上四个常用生命周期外，还有一个错误处理的阶段：
Error Handling：在这个阶段，不论在渲染的过程中，还是在生命周期方法中或是在任何子组件的构造函数中发生错误，该组件都会被调用。这个阶段包含了 componentDidCatch 生命周期方法。

![](./images/2021-07-12-16-14-10.png)

- 问题 15：React 的生命周期方法有哪些？
> componentWillMount:在渲染之前执行，用于根组件中的 App 级配置。
componentDidMount：在第一次渲染之后执行，可以在这里做AJAX请求，DOM 的操作或状态更新以及设置事件监听器。
componentWillReceiveProps：在初始化render的时候不会执行，它会在组件接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染
shouldComponentUpdate：确定是否更新组件。默认情况下，它返回true。如果确定在 state 或 props 更新后组件不需要在重新渲染，则可以返回false，这是一个提高性能的方法。
componentWillUpdate：在shouldComponentUpdate返回 true 确定要更新组件之前件之前执行。
componentDidUpdate：它主要用于更新DOM以响应props或state更改。
componentWillUnmount：它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。

- 问题 17：使用 React Hooks 好处是啥？
> 首先，Hooks 通常支持提取和重用跨多个组件通用的有状态逻辑，而无需承担高阶组件或渲染 props 的负担。Hooks 可以轻松地操作函数组件的状态，而不需要将它们转换为类组件。
Hooks 在类中不起作用，通过使用它们，咱们可以完全避免使用生命周期方法，例如 componentDidMount、componentDidUpdate、componentWillUnmount。相反，使用像useEffect这样的内置钩子。

- 问题 18：什么是 React Hooks？
> Hooks是 React 16.8 中的新添加内容。它们允许在不编写类的情况下使用state和其他 React 特性。使用 Hooks，可以从组件中提取有状态逻辑，这样就可以独立地测试和重用它。Hooks 允许咱们在不改变组件层次结构的情况下重用有状态逻辑，这样在许多组件之间或与社区共享 Hooks 变得很容易。

- 问题 19：React 中的 useState() 是什么？
> 下面说明useState(0)的用途：
```js
...
const [count, setCounter] = useState(0);
const [moreStuff, setMoreStuff] = useState(...);
...

const setCount = () => {
    setCounter(count + 1);
    setMoreStuff(...);
    ...
};
```
> useState 是一个内置的 React Hook。useState(0) 返回一个元组，其中第一个参数count是计数器的当前状态，setCounter 提供更新计数器状态的方法。
咱们可以在任何地方使用setCounter方法更新计数状态-在这种情况下，咱们在setCount函数内部使用它可以做更多的事情，使用 Hooks，能够使咱们的代码保持更多功能，还可以避免过多使用基于类的组件。

- 问题 20：React 中的StrictMode(严格模式)是什么？
> React 的StrictMode是一种辅助组件，可以帮助咱们编写更好的 react 组件，可以使用`<StrictMode />`包装一组组件，并且可以帮咱们以下检查：
验证内部组件是否遵循某些推荐做法，如果没有，会在控制台给出警告。
验证是否使用的已经废弃的方法，如果有，会在控制台给出警告。
通过识别潜在的风险预防一些副作用。


- 问题 21：为什么类方法需要绑定到类实例？
> 在 JS 中，this 值会根据当前上下文变化。在 React 类组件方法中，开发人员通常希望 this 引用组件的当前实例，因此有必要将这些方法绑定到实例。通常这是在构造函数中完成的:
```js
class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      isFormSubmitted: true
    });
  }

  render() {
    return (
      <button onClick={this.handleSubmit}>Submit</button>
    )
  }
}
```

- 问题 22：什么是 prop drilling，如何避免？
> 在构建 React 应用程序时，在多层嵌套组件来使用另一个嵌套组件提供的数据。最简单的方法是将一个 prop 从每个组件一层层的传递下去，从源组件传递到深层嵌套组件，这叫做prop drilling。
prop drilling的主要缺点是原本不需要数据的组件变得不必要地复杂，并且难以维护。
为了避免prop drilling，一种常用的方法是使用React Context。通过定义提供数据的Provider组件，并允许嵌套的组件通过Consumer组件或useContext Hook 使用上下文数据。

- 问题 23：描述 Flux 与 MVC？
> 传统的 MVC 模式在分离数据(Model)、UI(View和逻辑(Controller)方面工作得很好，但是 MVC 架构经常遇到两个主要问题:
数据流不够清晰:跨视图发生的级联更新常常会导致混乱的事件网络，难于调试。
缺乏数据完整性:模型数据可以在任何地方发生突变，从而在整个UI中产生不可预测的结果。

> 使用 Flux 模式的复杂用户界面不再遭受级联更新，任何给定的React 组件都能够根据 store 提供的数据重建其状态。Flux 模式还通过限制对共享数据的直接访问来加强数据完整性。


- 问题 26：什么是 React Context?
> Context 通过组件树提供了一个传递数据的方法，从而避免了在每一个层级手动的传递 props 属性。

- 问题 27：什么是 React Fiber?
> Fiber 是 React 16 中新的协调引擎或重新实现核心算法。它的主要目标是支持虚拟DOM的增量渲染。React Fiber 的目标是提高其在动画、布局、手势、暂停、中止或重用等方面的适用性，并为不同类型的更新分配优先级，以及新的并发原语。

> React Fiber 的目标是增强其在动画、布局和手势等领域的适用性。它的主要特性是增量渲染:能够将渲染工作分割成块，并将其分散到多个帧中。

- 问题 29：在 React 中使用构造函数和 getInitialState 有什么区别？
> 构造函数和getInitialState之间的区别就是ES6和ES5本身的区别。在使用ES6类时，应该在构造函数中初始化state，并在使用React.createClass时定义getInitialState方法。
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
  }
}
```
等价于
```js
var MyComponent = React.createClass({
  getInitialState() {
    return { /* initial state */ };
  },
});
```

- 问题 32：如何避免组件的重新渲染？
> React 中最常见的问题之一是组件不必要地重新渲染。React 提供了两个方法，在这些情况下非常有用：
React.memo():这可以防止不必要地重新渲染函数组件
PureComponent:这可以防止不必要地重新渲染类组件
这两种方法都依赖于对传递给组件的props的浅比较，如果 props 没有改变，那么组件将不会重新渲染。虽然这两种工具都非常有用，但是浅比较会带来额外的性能损失，因此如果使用不当，这两种方法都会对性能产生负面影响。

> 通过使用 React Profiler，可以在使用这些方法前后对性能进行测量，从而确保通过进行给定的更改来实际改进性能。

- 问题 34：当调用setState时，React render 是如何工作的？
> 咱们可以将"render"分为两个步骤：
虚拟 DOM 渲染:当render方法被调用时，它返回一个新的组件的虚拟 DOM 结构。当调用setState()时，render会被再次调用，因为默认情况下shouldComponentUpdate总是返回true，所以默认情况下 React 是没有优化的。
原生 DOM 渲染:React 只会在虚拟DOM中修改真实DOM节点，而且修改的次数非常少——这是很棒的React特性，它优化了真实DOM的变化，使React变得更快。

## 工具基础

- 了解前端常用工具：npm、VSCode 等。
- lodash

## Node.js（可选）

- Node.js 的相关模块 http, fs, path, events
- Koa 简介
- http-proxy 如何实现代理

- 在服务端应用中如何获得客户端 IP
> 如果有 `x-forwarded-for` 的请求头，则取其中的第一个 IP，否则取建立连接 socket 的 `remoteAddr`。


## 业务相关

### 登录鉴权

### 请求嵌套

## 前端安全性问题

<!-- https://www.jianshu.com/p/f8e47a132e1c -->
### 跨站脚本攻击（XSS攻击）
1、xss跨站脚本攻击（原理、如何进行的、防御手段是什么，要说清楚）

### 跨站请求伪造(CSRF攻击)
2、CSRF跨站请求伪造（如何伪造法？怎么防御？等等都要说清楚）

### SQL注入攻击
3、sql脚本注入（注入方式，防御方式）

### 文件上传漏洞
4、上传漏洞 （防御方式）

### 数据加密

<!-- TODO 数据加密 -->

## 跨域问题的处理

### 常见的跨域场景

![](./images/2021-07-12-18-32-36.png)

### 9种跨域解决方案

<!-- https://www.imooc.com/article/291931 -->

#### JSONP跨域

#### 跨域资源共享（CORS）

#### nginx代理跨域


#### nodejs中间件代理跨域

#### document.domain + iframe跨域

#### location.hash + iframe跨域

#### window.name + iframe跨域

#### postMessage跨域

#### WebSocket协议跨域

### 其它

- CORS 如果需要指定多个域名怎么办？
> CORS 通过控制 Access-Control-Allow-Origin 控制哪些域名可以共享资源，取值如下
```js
Access-Control-Allow-Origin: <origin> | *
```
> 其中 * 代表所有域名，origin 代表指定特定域名，那如何设置多个域名了？
此时需要通过代码实现，根据请求头中的 `Origin` 来设置响应头 `Access-Control-Allow-Origin`，思路如下:
1.总是设置 Vary: Origin，避免 CDN 缓存破坏 CORS 配置
2.如果请求头不带有 Origin，证明未跨域，则不作任何处理
3.如果请求头带有 Origin，证明浏览器访问跨域，根据 Origin 设置相应的 Access-Control-Allow-Origin: `<Origin>`

> 使用伪代码实现如下:
```js
// 获取 Origin 请求头
const requestOrigin = ctx.get('Origin');

ctx.set('Vary', 'Origin')

// 如果没有，则跳过
if (!requestOrigin) {
  return await next();
}

// 设置响应头
ctx.set('Access-Control-Allow-Origin', requestOrigin)
```


## 通用能力判断

### 沟通能力

### 学习能力

### 团队意识

### 责任感

### 应变能力

## 其它综合

### 前端如何优化网站性能

```
- 你在前端性能优化方面有什么心得？
- 在类似webpack／gulp的自动化工具使用上，你有什么优化经验／心得？
- 如果网站首页加载速度很慢，你会怎样定位问题？
```

1.减少 HTTP 请求数量
> 在浏览器与服务器进行通信时，主要是通过 HTTP 进行通信。浏览器与服务器需要经过三次握手，每次握手需要花费大量时间。而且不同浏览器对资源文件并发请求数量有限（不同浏览器允许并发数），一旦 HTTP 请求数量达到一定数量，资源请求就存在等待状态，这是很致命的，因此减少 HTTP 的请求数量可以很大程度上对网站性能进行优化。
	1.CSS Sprites：
		国内俗称 CSS 精灵，这是将多张图片合并成一张图片达到减少 HTTP 请求的一种解决方案，可以通过 CSS background 属性来访问图片内容。这种方案同时还可以减少图片总字节数。
	2.合并 CSS 和 JS 文件：
		现在前端有很多工程化打包工具，如：grunt、gulp、webpack等。为了减少 HTTP 请求数量，可以通过这些工具再发布前将多个 CSS 或者 多个 JS 合并成一个文件。
	3.采用 lazyLoad：
		俗称懒加载，可以控制网页上的内容在一开始无需加载，不需要发请求，等到用户操作真正需要的时候立即加载出内容。这样就控制了网页资源一次性请求数量。

2.控制资源文件加载优先级
> 浏览器在加载 HTML 内容时，是将 HTML 内容从上至下依次解析，解析到 link 或者 script 标签就会加载 href 或者 src 对应链接内容，为了第一时间展示页面给用户，就需要将 CSS 提前加载，不要受 JS 加载影响。一般情况下都是 CSS 在头部，JS 在底部。
	1.利用浏览器缓存
		浏览器缓存是将网络资源存储在本地，等待下次请求该资源时，如果资源已经存在就不需要到服务器重新请求该资源，直接在本地读取该资源。
	2.减少重排（Reflow）
		基本原理：重排是 DOM 的变化影响到了元素的几何属性（宽和高），浏览器会重新计算元素的几何属性，会使渲染树中受到影响的部分失效，浏览器会验证 DOM 树上的所有其它结点的 visibility 属性，这也是 Reflow 低效的原因。如果 Reflow 的过于频繁，CPU 使用率就会急剧上升。
	3.减少 Reflow
		如果需要在 DOM 操作时添加样式，尽量使用 增加 class 属性，而不是通过 style 操作样式。减少 DOM 操作，图标使用 IconFont 替换

### 网页从输入网址到渲染完成经历了哪些过程

> 大致可以分为如下7步：
   1.输入网址；
   2.发送到DNS服务器，并获取域名对应的web服务器对应的ip地址；
   3.与web服务器建立TCP连接；
   4.浏览器向web服务器发送http请求；
   5.web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）；
   6.浏览器下载web服务器返回的数据及解析html源文件；
   7.生成DOM树，解析css和js，渲染页面，直至显示完成；


## 精简问题点

### js基础

- 字符串和数组的常用方法
- 函数和箭头函数
- Promise 和 async/await
- 作用域，let 和 const，解构赋值

- 说一下js执行过程？
- 闭包的变量存储在哪？
- JS基本数据类型，存储在内存的什么位置
- symbol有什么特殊的，用来做什么

### css基础

- position有哪些值？
- 盒模型
- flex每个值指什么？
> flex属性是flex-grow, flex-shrink 和 flex-basis
> flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
> flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
> flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

- 执行如下代码，abc 会是什么颜色？ 并且说明原因。
```html
<style>
  #p1 {
    color: red;
  }
  p.container {
    color: blue;
  }
  .p {
    color: yellow;
  }
</style>
<p id="p1" class="container p">abc</p>
```


### vue

- 你知道v-model的原理吗？说说看
- 在使用计算属性的时，函数名和data数据源中的数据可以同名吗？
- vue中data的属性可以和methods中的方法同名吗？为什么？
- 怎么给vue定义全局的方法？
- 跟keep-alive有关的生命周期是哪些？描述下这些生命周期
- 如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由
- 你知道vue中key的原理吗？说说你对它的理解
- 你知道style加scoped属性的用途和原理吗？
- 在vue项目中如果methods的方法用箭头函数定义结果会怎么样？
- vue怎么实现强制刷新组件？
- 说下attrs和attrs和listeners的使用场景
- vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？
- vue组件里的定时器要怎么销毁？
- vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？
- vue在created和mounted这两个生命周期中请求数据有什么区别呢？
- 删除数组用delete和Vue.delete有什么区别？
- 动态给vue的data添加一个新的属性时会发生什么？怎样解决？
- v-show和v-if有什么区别？使用场景分别是什么？
- vue不能检测哪些属性变化？
```
    数组
    - 使用下标更新数组元素
    - 使用赋值方式改变数组长度
    - 使用下标增删数组元素

    官方应对方法： - Vue.set( target, key, value ) - vm.items.splice(indexOfItem, 1, newValue)

    对象
    - 增删元素

    官方应对方法：
    Vue.set(target, propertyName, value);
    Vue.delete( target, propertyName/index )
```

- vue2和vue3的响应式原理?
- vue3做了哪些优化?
- vue和react比较?

### vue-router

- vue-router怎么配置404页面？
- vue-router路由有几种模式？说说它们的区别？
- vue-router有哪几种导航钩子（ 导航守卫 ）？
- 切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？
- 路由之间是怎么跳转的？有哪些方式？
- 如果vue-router使用history模式，部署时要注意什么？

### vuex

- vuex中actions和mutations有什么区别？
- 你觉得vuex有什么缺点？
- 你觉得要是不用vuex的话会带来哪些问题？

- vuex数据流？为什么要遵循这个数据流？假如在页面中直接修改state,而不是通过mutation 的commit方式修改，会怎么样？


### ElementUI

- ElementUI是怎么做表单验证的？在循环里对每个input验证怎么做呢？
- 你有二次封装过ElementUI组件吗？
- ElementUI怎么修改组件的默认样式？
- ElementUI使用表格组件时有遇到过问题吗？
- 项目中有使用过ElementUI吗？有遇到过哪些问题？它的使用场景主要是哪些？

### webpack

- 都使用了webpack的哪些loader和plugin，用来做什么？
- 如何写一个plugin？
- webpack的工作流程说一下？
- webpack做过哪些优化?
- webpack如何做的tree shaking, 基于es6的module引用机制，为什么es6之前不行？

### React

- react 的setState是异步的还是同步的，为什么这样设计?
- react 的diff讲一下？
- react 中如何调用元素？
- react 兄弟组件通信？
- react 生命周期？
- react hooks和class的区别？
- react 优化组件重复渲染

### 网络相关

- 强缓存和协商缓存
- 跨域的理解
- jsonp原理
- cookie是怎么存储的？
- http和https的区别？
- http和http2的不同点？

- 如何收集页面性能? 实现错误上报的原理?


### Nodejs 相关

- node 如何实现进程守护的？
- node 进程间通信方式
- PM2用来做什么？PM2如何实现的进程守护？

- 请介绍一下require的模块加载机制
```js
// 1、先计算模块路径
// 2、如果模块在缓存里面，取出缓存
// 3、加载模块
// 4、的输出模块的exports属性即可

// require 其实内部调用 Module._load 方法
Module._load = function(request, parent, isMain) {
 // 计算绝对路径
 var filename = Module._resolveFilename(request, parent);

 // 第一步：如果有缓存，取出缓存
 var cachedModule = Module._cache[filename];
 if (cachedModule) {
 return cachedModule.exports;

 // 第二步：是否为内置模块
 if (NativeModule.exists(filename)) {
 return NativeModule.require(filename);
 }
 
 /********************************这里注意了**************************/
 // 第三步：生成模块实例，存入缓存
 // 这里的Module就是我们上面的1.1定义的Module
 var module = new Module(filename, parent);
 Module._cache[filename] = module;

 /********************************这里注意了**************************/
 // 第四步：加载模块
 // 下面的module.load实际上是Module原型上有一个方法叫Module.prototype.load
 try {
 module.load(filename);
 hadException = false;
 } finally {
 if (hadException) {
  delete Module._cache[filename];
 }
 }

 // 第五步：输出模块的exports属性
 return module.exports;
};
```

- 加载模块时，为什么每个模块都有__dirname,__filename属性呢，那么这两个属性是从哪里来的?

```js
// 上面(1.2部分)的第四步module.load(filename)
// 这一步，module模块相当于被包装了，包装形式如下
// 加载js模块，相当于下面的代码（加载node模块和json模块逻辑不一样）
(function (exports, require, module, __filename, __dirname) {
 // 模块源码
 // 假如模块代码如下
 var math = require('math');
 exports.area = function(radius){
  return Math.PI * radius * radius
 }
});
```

- V8的内存分代和回收算法请简单讲一讲

> 在V8中，主要将内存分为新生代和老生代两代。新生代中的对象存活时间较短的对象，老生代中的对象存活时间较长，或常驻内存的对象。

![](./images/2021-06-16-18-45-26.png)

1. 新生代

> 新生代中的对象主要通过Scavenge算法进行垃圾回收。这是一种采用复制的方式实现的垃圾回收算法。它将堆内存一份为二，每一部分空间成为semispace。在这两个semispace空间中，只有一个处于使用中，另一个处于闲置状态。处于使用状态的semispace空间称为From空间，处于闲置状态的空间称为To空间。

![](./images/2021-06-16-18-45-10.png)

> a. 当开始垃圾回收的时候，会检查From空间中的存活对象，这些存活对象将被复制到To空间中，而非存活对象占用的空间将会被释放。完成复制后，From空间和To空间发生角色对换。
> b. 应为新生代中对象的生命周期比较短，就比较适合这个算法。
> c. 当一个对象经过多次复制依然存活，它将会被认为是生命周期较长的对象。这种新生代中生命周期较长的对象随后会被移到老生代中。

2. 老生代

> 老生代主要采取的是标记清除的垃圾回收算法。与Scavenge复制活着的对象不同，标记清除算法在标记阶段遍历堆中的所有对象，并标记活着的对象，只清理死亡对象。活对象在新生代中只占叫小部分，死对象在老生代中只占较小部分，这是为什么采用标记清除算法的原因。

3. 标记清楚算法的问题

主要问题是每一次进行标记清除回收后，内存空间会出现不连续的状态

![](./images/2021-06-16-18-46-51.png)

> a. 这种内存碎片会对后续内存分配造成问题，很可能出现需要分配一个大对象的情况，这时所有的碎片空间都无法完成此次分配，就会提前触发垃圾回收，而这次回收是不必要的。
> b. 为了解决碎片问题，标记整理被提出来。就是在对象被标记死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的内存。


### 综合问题

- 浏览器安全了解哪些？
- 项目中遇到的比较深刻的问题、如何一步步解决的？
- 前端工程化？
- 带团队遇到的问题？
- 团队沟通、协作？
- 职业规划？


## 一些简单的笔试题

### 用js递归的方式写1到100求和？

> 递归我们经常用到，vue在实现双向绑定进行数据检验的时候用的也是递归，但要我们面试的时候手写一个递归，如果对递归的概念理解不透彻，可能还是会有一些问题。

```js
function add(num1,num2){
	var num = num1+num2;
        if(num2+1>100){
	 return num;
	}else{
	  return add(num,num2+1)
        }
 }
var sum =add(1,2); 
```

### 数组去重？

> 此题看着简单，但要想面试官给你高分还是有难度的。至少也要写出几种方法

```js
var arr=['12','32','89','12','12','78','12','32'];
// 最简单数组去重法
function unique1(array){
    var n = []; //一个新的临时数组
    for(var i = 0; i < array.length; i++){ //遍历当前数组
        if (n.indexOf(array[i]) == -1)
            n.push(array[i]);
    }
    return n;
}
arr=unique1(arr);
// 速度最快， 占空间最多（空间换时间）
function unique2(array){
    var n = {}, r = [], type;
    for (var i = 0; i < array.length; i++) {
        type = typeof array[i];
        if (!n[array[i]]) {
            n[array[i]] = [type];
            r.push(array[i]);
        } else if (n[array[i]].indexOf(type) < 0) {
            n[array[i]].push(type);
            r.push(array[i]);
        }
    }
    return r;
}
//数组下标判断法
function unique3(array){
    var n = [array[0]]; //结果数组
    for(var i = 1; i < array.length; i++) { //从第二项开始遍历
        if (array.indexOf(array[i]) == i) 
            n.push(array[i]);
    }
    return n;
}
```

```js
// es6方法数组去重
const arr=[...new Set(arr)];
// es6方法数组去重，第二种方法
function dedupe(array) {
  return Array.from(new Set(array));       //Array.from()能把set结构转换为数组
}
```

### 防抖函数和节流函数

> 用JS实现防抖函数（短时间内多次触发同一事件，只执行最后一次）和节流函数（指连续触发事件但是在n秒中只执行一次函数）

#### 防抖函数

持续触发事件时，在设定时间段内没有被触发，才去调用事件处理函数，在设定时间段内如果事件又被触发，则不调用事件处理函数，并从触发事件时间重新开始延时。

- 设计思路：在setTimeout中调用事件处理函数，如果在定时器触发函数执行之前又触发函数，清除定时器。


#### 节流函数

当事件被持续触发时，在设定时间内只让事件处理函数触发一次。

- 定时器实现模式：定时器在延时时间执行过后，重置为null, 定时器为null时，重新设置定时器，如此循环。
- 时间戳实现模式：初始化时获取时间，每次触发事件时再次获取时间，两次时间间隔等于或大于设定时间，执行事件，初始化时间重置为当前时间，如此循环。

### 用css实现一个左右布局，右边固定300px宽，高度顶满，左边撑开顶满剩余位置
### CSS如何实现三列布局（左右固定宽度，中间自适应）？

### 消息队列限制并发请求数量

### 实现一个深拷贝

### ⭐️拉平的数据构建成一颗树

写一个函数tree,实现如下功能

```js
function tree(list) {
  //todo...
}

let list = [
  {
    code: '1001',
    parentCode: '',
    name: '北京'
  },
  {
    code: '10011',
    parentCode: '1001',
    name: '海淀'
  },
  {
    code: '10012',
    parentCode: '1001',
    name: '大兴'
  },
  {
    code: '100112',
    parentCode: '10011',
    name: '五道口'
  },
  {
    code: '1002',
    parentCode: '',
    name: '上海'
  },
  {
    code: '10022',
    parentCode: '1002',
    name: '徐汇'
  },
  {
    code: '1003',
    parentCode: '',
    name: '武汉'
  }

]


let newList = tree(list)
console.log(newList)

/*
[
  {
    code: '1001',
    parentCode: '',
    name: '北京',
    children: [
      {
        code: '10011',
        parentCode: '1001',
        name: '海淀',
        children: [
          {
            code: '100112',
            parentCode: '10011',
            name: '五道口',
            children: []
          }
        ]
      },
      {
        code: '10012',
        parentCode: '1001',
        name: '大兴',
        children: []
      }
    ]
  },
  {
    code: '1002',
    parentCode: '',
    name: '上海',
    children: [
      {
        code: '10022',
        parentCode: '1002',
        name: '徐汇',
        children: []
      }
    ]
  },
  {
    code: '1003',
    parentCode: '',
    name: '武汉',
    children: []
  }

]

*/
```

### 循环/闭包/setTimeout/Promise 综合

- 控制台显示内容为？

> 答案：5 个 5

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000 * i);
}
```


- 如何在 `setTimeout` 中输出 0，1，2，3，4

```js
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
```

- 下面的输出结果是多少？

> 答案： 2，3，5，4，1

```js
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);
```

### JS 作用域、原型链

```js
function Foo() {
    getName = function () { 
    	console.log('1');
    };
    return this;
}
Foo.getName = function () {
	console.log('2');
};
Foo.prototype.getName = function () { 
	console.log('3');
};
var getName = function () { 
	console.log('4');
};
function getName() { 
	console.log(5);
}

Foo.getName();  
getName();	
Foo().getName(); 
getName();  
new Foo.getName(); 
new Foo().getName();   
new new Foo().getName();
```

请问上述代码在浏览器环境下，输出结果是多少？

> 2,4,1,1,2,3,3

### 实现一个 Promise.allSettled()

> 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。

### 业务数据处理题

#### 列表数据处理

从某数据库接口得到如下值：

```js
{
 rows: [
  ["Lisa", 16, "Female", "2000-12-01"],
  ["Bob", 22, "Male", "1996-01-21"]
 ],
 metaData: [
  {name: "name", note: ''},
  {name: "age", note: ''},
  {name: "gender", note: ''},
  {name: "birthday", note: ''}
 ]
}

// ------------
// rows是数据，metaData是对数据的说明。现写一个函数，将上面的Object转化为期望的数组：

[
 {name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01"},
 {name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21"},
]
```

#### 两个数组数据合并

数组一

```js
a = [
{id: 10001, name: "Lisa", age: 16},
{id: 10002, name: "Bob", age: 22},
{id: 10003, name: "Alice", age: 20},
];
```

数组二

```js
b = [
{id: 10001, gender: "Female"},
{id: 10002, name: "Bob King", birthday: "1996-01-22"},
{id: 10005, name: "Tom", birthday: "2000-01-01"},
];
```

写一个函数按id用b更新a,期望得到的结果为：

```js
[
{id: 10001, name: "Lisa", age: 16, gender: "Female"},
{id: 10002, name: "Bob King", birthday: "1996-01-22", age: 22},
{id: 10003, name: "Alice", age: 20},
{id: 10005, name: "Tom", birthday: "2000-01-01"},
]
```

## 参考

- [vue 248+个知识点（面试题）为你保驾护航](https://zhuanlan.zhihu.com/p/71229672)
- [复习知识点总结（简单脑图版本）](https://juejin.cn/post/6939707197135781924#heading-13)
- [2021年我的前端面试准备](https://juejin.cn/post/6989422484722286600)