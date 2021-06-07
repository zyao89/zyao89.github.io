---
title: Electron工程一些坑点及VSCode调试的简单配置
date: 2019-02-28 16:57:44
tags: [Electron,VSCode,解决问题]
categories: [其它]
---

## 自定义标题栏

`frame: false`: 主进程中设置窗体参数。去掉默认的标题栏

`-webkit-app-region: drag`: 渲染进程中设置css。对应的组件可以进行拖动了

```js
mainWindow = new BrowserWindow({
    height: 350,
    width: 550,
    useContentSize: true,
    resizable: isDev, // 是否可调整大小
    alwaysOnTop: !isDev, // 应用是否始终在所有顶层之上
    transparent: true, // 透明边框
    frame: false, // 不使用默认边框
    center: true
})
```

```css
.u-header {
    -webkit-app-region: drag; /* as window header */
}
```

## 标题栏按钮无效 -- only windows

该bug只在windows平台上显示，mac上正常。在header组件中设置为drag，导致组件里的元素都无法点击。

解决方案：在需要点击的元素上添加no-drag。`-webkit-app-region: no-drag;` 详细看此 [issue](https://github.com/electron/electron/issues/1354)

## 自定义标题栏无法实现css hover -- only windows

当设置了为drag时，在windows上会屏蔽所有的鼠标事件,所以hover不起作用。这是一个由操作系统导致的问题，故无法修复，相关[issue](https://github.com/electron/electron/issues/13534)。
解决方案：去掉 `-webkit-app-region: drag;` 即可。

> 如果要同时保留可拖动并且hover上有变化，在windows暂时无法实现，需要对此进行取舍或改变交互设计。

## 打包后程序调试

解决方案：通过注册快捷键，调开web的开发者模式。

```js
globalShortcut.register('CommandOrControl+Shift+L', () => {
    let focusWin = BrowserWindow.getFocusedWindow()
    focusWin && focusWin.toggleDevTools()
})
```

## 文本不可选择

解决方案：使用css `-webkit-user-select: none;`

```css
html {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    -webkit-user-select: none; /* disable user select text */
}
```

## 打包参数设置

electron-builder进行打包, 常用的设置:

```js
scripts: {
    /** 打包成windows系统 **/
    "build": "node .electron-vue/build.js && electron-builder --win",
    /** 打包成macos系统 **/
    "build:mac": "node .electron-vue/build.js && electron-builder --mac",
},
"build": {
    /** 最终可执行文件名称：${productName}-${version}.${ext} **/
    "productName": "sight-electron-app",
    "appId": "netease.sight.controller",
    /** 压缩形式，默认normal;store打包最快，适合测试;maximum打包体积最小，适合生产模式 **/
    "compression": "maximum",
    /** 是否将多个文件合并为tar风格的归档模式 **/
    "asar": true,
    "directories": {
      "output": "build"  /** 打包结果目标地址 **/
    },
    "files": [
      "dist/electron/**/*" /** 需要打包的文件地址 **/
    ],
    /** 不同平台设置 **/
    "mac": {
      "icon": "build/icons/icon.icns"
    },
    "win": {
      "icon": "build/icons/icon.ico"
    },
    "linux": {
      "icon": "build/icons"
    }
}

```

## 触摸板放大缩小 -- only mac

在macOS系统中，触摸板的放大缩小手指指令，会导致electron程序内的webFrame内容也跟着放大缩小。

解决方案：在renderer进程中设置其缩放范围

```js
require('electron').webFrame.setZoomLevelLimits(1, 1);
```

## web端唤起本地客户端

electron提供该API能力：

```js
app.setAsDefaultProtocolClient(protocol[, path, args]);
```

## 禁止多开窗口

多次双击window 的exe文件，会开启多个窗口；mac下默认开1个，但通过命令还是可以多开。

解决方案：判断单实例：`app.makeSingleInstance(callback)`

```js
/**
 * 防止应用多开。bugfix:sholudQuit总是返回true，故暂时注释以下代码
 * 当进程是第一个实例时，返回false。
 * 如果是第二个实例时，返回true，并且执行第一个实例的回调函数
 */
const shouldQuit = app.makeSingleInstance((commandLine, workingDir) => {
    if (mainWindow) {
        mainWindow.isMinimized() && mainWindow.restore()
        mainWindow.focus()
    }
})
if (shouldQuit) {
    app.quit()
}
```

## 日志监听

解决方案：`electron-log` + `CrashReporter`

```js
const log = require('electron-log')

log.transports.file.level = 'info'
log.transports.file.format = '{h}:{i}:{s}:{ms} {text}'
log.transports.file.maxSize = 5 * 1024 * 1024
log.transports.console.level = false
```

## vscode 的相关配置

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "program": "${workspaceFolder}/main.js"
    },
    {
        "name": "Debug Main Process",
        "type": "node",
        "request": "launch",
        "cwd": "${workspaceFolder}",
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
        "windows": {
          "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
        },
        "args" : ["."]
      }
  ]
}
```

## 更多参数

Predefined variables
The following predefined variables are supported:

```
${workspaceFolder} - the path of the folder opened in VS Code
${workspaceFolderBasename} - the name of the folder opened in VS Code without any slashes (/)
${file} - the current opened file
${relativeFile} - the current opened file relative to workspaceFolder
${fileBasename} - the current opened file's basename
${fileBasenameNoExtension} - the current opened file's basename with no file extension
${fileDirname} - the current opened file's dirname
${fileExtname} - the current opened file's extension
${cwd} - the task runner's current working directory on startup
${lineNumber} - the current selected line number in the active file
${selectedText} - the current selected text in the active file
${execPath} - the path to the running VS Code executable
```

[相关链接](https://code.visualstudio.com/docs/editor/variables-reference)
