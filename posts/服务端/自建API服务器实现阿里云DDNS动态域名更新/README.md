---
title: 自建API服务器实现阿里云DDNS(动态域名)更新
categories: [服务端]
tags: [Docker,阿里云]
date: 2021-03-29 13:06:38
---

DDNS（Dynamic Domain Name Server）是动态域名服务的缩写，它作为将域名和IP地址相互映射的一个分布式数据库,能够使人们更方便的访问互联网；

<!-- more -->

## DDNS相关介绍

### DNS

域名系统,是因特网的一项服务,它作为将域名和IP地址相互映射的一个分布式数据库,能够使人们更方便的用数字英文组合甚至中文访问互联网，而不需要用IPv4、IPv6 复杂的数字字符组合；

### DDNS

动态域名系统,是域名系统(DNS)中的一种自动更新名称服务器内容的技术。在传统的DNS中,域名必须和固定的IP绑定,当IP变化时,必须手动更新IP与域名的映射关系,才能保证变化后的IP仍与域名相对应,其他用户才可访问。DDNS的作用就是将这更新过程自动化

## 搭建服务

[alicloud-api-server](https://github.com/dockrepo/docker-alicloud-api-server)

```sh
docker run -d --name alicloud-api-server \
    -p 7899:7899 \
    -e TZ="Asia/Shanghai" \
    -e ACCESS_KEY_ID=$ACCESS_KEY_ID \
    -e ACCESS_KEY_SECRET=$ACCESS_KEY_SECRET \
    --restart unless-stopped \
    zyao89/alicloud-api-server
```

其中，

`$ACCESS_KEY_ID` 为阿里云的 AccessKey ID
`$ACCESS_KEY_SECRET` 为阿里云的 AccessKey Secret

详细获取方式参考官方文档 [如何获取AccessKey ID和AccessKey Secret](https://help.aliyun.com/knowledge_detail/38738.html)

## 调用服务接口动态更新

通过如下接口，可以快速实现查询更新

```js
    /**
     * @swagger
     * /api/v1/aliyun/AddDomainRecord:
     *   post:
     *     summary: 根据传入参数添加解析记录
     *     description: 根据传入参数添加解析记录
     *     parameters:
     *          - name: params
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              example: {
                            RR: '',
                            DomainName: '',
                            Type: '',
                            Value: '',
                        }
     *     responses:
     *       200:
     *         description: 成功
     */

    /**
     * @swagger
     * /api/v1/aliyun/UpdateDomainRecord:
     *   post:
     *     summary: 根据传入参数修改解析记录
     *     description: 根据传入参数修改解析记录
     *     parameters:
     *          - name: params
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              example: {
                                RR: '',
                                RecordId: '',
                                Type: '',
                                Value: '',
                            }
     *     responses:
     *       200:
     *         description: 成功
     */

    /**
     * @swagger
     * /api/v1/aliyun/DescribeDomainRecords:
     *   post:
     *     summary: 根据传入参数获取指定主域名的所有解析记录列表
     *     description: 根据传入参数获取指定主域名的所有解析记录列表
     *     parameters:
     *          - name: params
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              example: { DomainName: "baidu.com" }
     *     responses:
     *       200:
     *         description: 成功
     */

    /**
     * @swagger
     * /api/v1/aliyun/DescribeSubDomainRecords:
     *   post:
     *     summary: 根据传入参数获取某个固定子域名的所有解析记录列表
     *     description: 根据传入参数获取某个固定子域名的所有解析记录列表
     *     parameters:
     *          - name: params
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              example: { SubDomain: "a.b.baidu.com" }
     *     responses:
     *       200:
     *         description: 成功
     */

    /**
     * @swagger
     * /api/v1/aliyun/DescribeDomainRecordInfo:
     *   post:
     *     summary: 根据传入参数获取某个固定子域名下的解析记录信息
     *     description: 根据传入参数获取某个固定子域名下的解析记录信息
     *     parameters:
     *          - name: params
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              example: { RecordId: "xxxx" }
     *     responses:
     *       200:
     *         description: 成功
     */

    /**
     * @swagger
     * /api/v1/aliyun/CheckupAndUpdateDomainRecord:
     *   post:
     *     summary: 根据传入参数先校验，后修改解析记录
     *     description: 根据传入参数先校验，后修改解析记录
     *     parameters:
     *          - name: params
     *            in: body
     *            required: true
     *            schema:
     *              type: object
     *              example: {
                                RR: '',
                                RecordId: '',
                                Type: '',
                                Value: '',
                            }
     *     responses:
     *       200:
     *         description: 成功
     */
```

### ROS 配置脚本

> 此操作可以进行定时更新，具体配置自由发挥

```sh
# url

:local URL "http://x.x.x.x:7899/api/v1/aliyun/CheckupAndUpdateDomainRecord"

# 拨号的接口名称

:local ddnsinterface "pppoe-out1"

:delay 3;

:local ipssfn [ /ip address get [/ip address find interface=$ddnsinterface ] address ]

:local ipss [:pick $ipssfn 0 [:find $ipssfn "/" ] ]

# 上传的 json 文本 http-data，具体配置请进行相应修改

:local httpdata "{\"RecordId\":\"xxxx\",\"RR\":\"yyyy\",\"Type\":\"A\",\"DomainName\":\"zzzz.com\",\"Value\":\"$ipss\"}"

/tool fetch http-method=post http-data=$httpdata http-header-field="Content-Type: application/json" url=$URL

:delay 10;
:log info ("更新IP = " ."$ipss")
```

