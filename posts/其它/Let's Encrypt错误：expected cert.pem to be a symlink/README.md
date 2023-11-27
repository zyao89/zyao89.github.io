---
title: Let's Encrypt错误：expected cert.pem to be a symlink
categories: [其它]
tags: [Let's Encrypt,阿里云]
date: 2021-11-09 09:59:27
---

<!-- more -->


## Let's Encrypt 错误提示

```
certbot renew
certbot.errors.CertStorageError: expected /etc/letsencrypt/live/xxx.com/cert.pem to be a symlink
Renewal configuration file /etc/letsencrypt/renewal/xxx.com.conf is broken. Skipping.


certbot update_symlinks
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Expected /etc/letsencrypt/live/xxx.com/cert.pem to be a symlink
```

## 问题关键

问题的关键是：

`/etc/letsencrypt/live/xxx.com/cert.pem` 等文件不是软连接了，造成写入失败。

## 解决办法

> 请将以下的xxx.com修改为你的域名

```shell
cd /etc/letsencrypt/
chmod -R 0755 live/
chmod -R 0755 renewal/
chmod -R 0755 archive/
cd live/xxx.com/
rm ./*.*
ln -s ../../archive/xxx.com/cert1.pem .
ln -s ../../archive/xxx.com/chain1.pem .
ln -s ../../archive/xxx.com/fullchain1.pem .
ln -s ../../archive/xxx.com/privkey1.pem .
mv cert1.pem cert.pem
mv chain1.pem chain.pem
mv fullchain1.pem fullchain.pem
mv privkey1.pem privkey.pem
cd /etc/letsencrypt/
```

然后就可以certbot renew了，建议先 `certbot update_symlinks`

来看一下正确的子文件列表：(软连接指向的文件为最新的文件，如cert9.pem)

```shell

root@vps:/etc/letsencrypt/live/xxx.com# ls -al
drwxr-xr-x   2 root root  4096 May 13 10:25 ./
drwxr-xr-x 354 root root 20480 May 13 10:00 ../
lrwxrwxrwx   1 root root    37 May 13 10:25 cert.pem -> ../../archive/xxx.com/cert9.pem
lrwxrwxrwx   1 root root    38 May 13 10:25 chain.pem -> ../../archive/xxx.com/chain9.pem
lrwxrwxrwx   1 root root    42 May 13 10:25 fullchain.pem -> ../../archive/xxx.com/fullchain9.pem
lrwxrwxrwx   1 root root    40 May 13 10:25 privkey.pem -> ../../archive/xxx.com/privkey9.pem
-rw-r--r--   1 root root   543 Mar  6 10:43 README
```

