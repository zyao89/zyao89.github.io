---
title: k8s批量删除Evicted Pods
categories: [服务端]
tags: [解决问题,Linux]
date: 2020-05-08 12:09:55
---

<!-- more -->

## 背景

查询pod状态

```sh
kubectl -n kube-system get pods | grep coredns | grep Evicted
```

查询结果为：

```sh
coredns-67cb7b5f46-2crxg                0/1     Evicted   0          4h56m
coredns-67cb7b5f46-2ds7n                0/1     Evicted   0          4h56m
coredns-67cb7b5f46-2pzw5                0/1     Evicted   0          4h56m
coredns-67cb7b5f46-4f8nm                0/1     Evicted   0          166m
coredns-67cb7b5f46-4gncz                0/1     Evicted   0          10h
coredns-67cb7b5f46-4lnw2                0/1     Evicted   0          166m
coredns-67cb7b5f46-4smp6                0/1     Evicted   0          166m
coredns-67cb7b5f46-5hx49                0/1     Evicted   0          166m
coredns-67cb7b5f46-6jxqn                0/1     Evicted   0          166m
coredns-67cb7b5f46-6qh9z                0/1     Evicted   0          166m
coredns-67cb7b5f46-6rn4c                0/1     Evicted   0          10h
coredns-67cb7b5f46-7jsth                0/1     Evicted   0          10h
coredns-67cb7b5f46-7mzvb                0/1     Evicted   0          166m
coredns-67cb7b5f46-92t2k                0/1     Evicted   0          4h56m
coredns-67cb7b5f46-9jqdm                0/1     Evicted   0          10h
coredns-67cb7b5f46-9rxsc                0/1     Evicted   0          4h56m
coredns-67cb7b5f46-9xmkk                0/1     Evicted   0          166m
```

发现有很多 `Evicted` 状态的pod

**问题原因**：这是由于node节点的磁盘或内存资源不够后将现有的pod进行了驱赶。

## 解决

批量删除所有 `Evicted` 状态的pod即可

```sh
kubectl -n kube-system  get pods | grep coredns | grep Evicted | awk '{print$1}'| xargs kubectl -n kube-system delete pods
```

可自定义替换 `namespace`、`podName`

```sh
kubectl -n ${namespace}  get pods | grep ${podName} | grep Evicted | awk '{print$1}'| xargs kubectl -n ${namespace} delete pods
```

```sh
#指定pod所在的命名空间
kubectl -n kube-system get pods | grep coredns
```

执行完成后，成功删除全部 `Evicted` 状态的Pods
