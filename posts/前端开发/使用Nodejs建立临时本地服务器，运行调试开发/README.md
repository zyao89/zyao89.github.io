---
title: 使用Nodejs建立临时本地服务器，运行调试开发
date: 2017-03-12 23:04:56
tags: [Nodejs,静态服务,Server]
categories: [前端开发]
---

<!-- more -->

## First

安装Nodejs，略（自行百度）

## Second

安装必要组件；
> npm install url fs http path --save

## Final

在工程目录下创建新的app.js文件，并复制以下代码：

```javascript
var url  = require("url"),
     fs=require("fs"),
     http=require("http"),
     path = require("path");
http.createServer(function (req, res) {
    var pathname=__dirname+url.parse(req.url).pathname;
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }

    fs.exists(pathname,function(exists){
        if(exists){
            switch(path.extname(pathname)){
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html"});
                    break;
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
            }

            fs.readFile(pathname,function (err,data){
                res.end(data);
            });
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
        }
    });
}).listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");
```

最后在终端运行：
> node app.js

打开 Chrome 输入正确路径，如： `http://127.0.0.1:8080/` ，即可进行调试了。

---

**扩展**，增加监听端口号服务，自动刷新浏览器。

```javascript
(function initBrowserSyncConfig()
{
    // 监听本地服务器8080端口，也就是上面运行的端口
    browserSync.watch(['pages/', 'js/', 'css/', '*.html', '*.js', '*.css'])
               .on('change', browserSync.reload);
    browserSync.init(
        {
            proxy: "localhost:8080"
        }
    );
})();
```

最后，自动运行浏览器，打开监听的代理服务器

---

`作者：Zyao89；转载请保留此行，谢谢；`
