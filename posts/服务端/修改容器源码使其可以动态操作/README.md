---
title: 修改容器源码使其可以动态操作
categories: [服务端]
tags: [Docker,K8S]
date: 2021-03-31 10:37:19
---

<!-- more -->

## 注入脚本

```html
<script type="text/javascript">
window.onmessage = function(e){
    if (e.data) {
    var x = document.createElement("SCRIPT");
    x.setAttribute("type","text/javascript");
    x.text = e.data;
    document.body.appendChild(x);
    }
}
</script>
```

> 这里以 `grafana` 为例

## 通过替换注入

```sh
 sed -i 's/<\/body>/<script type="text\/javascript">window.onmessage = function(e){ if (e.data) { var x = document.createElement("SCRIPT"); x.setAttribute("type","text\/javascript"); x.text = e.data; document.body.appendChild(x); } } <\/script><\/body>/g' /usr/share/grafana/public/views/index.html
```

## k8s 配置

可以如下：

```yaml
containers:
  - args:
    - --config=/etc/grafana/config/custom.ini
    image: grafana/grafana:7.4.0
    imagePullPolicy: IfNotPresent
    lifecycle:
      postStart:
        exec:
          command:
          - /bin/bash
          - -c
          - |
            sed -i 's/<\/body>/<script type="text\/javascript">window.onmessage = function(e){ if (e.data) { var x = document.createElement("SCRIPT"); x.setAttribute("type","text\/javascript"); x.text = e.data; document.body.appendChild(x); } } <\/script><\/body>/g' /usr/share/grafana/public/views/index.html
```

## 调用

实际的业务代码中可以这样写

```js
window.document.getElementsByTagName('iframe')[0].contentWindow.postMessage(`(function(){
    document.querySelector('.sidemenu').style.display='none';
    document.querySelector('.navbar-page-btn').style.display='none';
    document.querySelector('.navbar-buttons.navbar-buttons--tv').style.display='none';
})();`, '*')
```