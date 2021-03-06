---
title: HTTP与HTTPS理解
categories: [网络]
tags: [HTTP,HTTPS]
date: 2020-04-07 17:07:33
---


<!-- more -->

## 什么是HTTP

超文本传输协议，是一个基于请求与响应，无状态的，应用层的协议，常基于TCP/IP协议传输数据，互联网上应用最为广泛的一种网络协议,所有的WWW文件都必须遵守这个标准。设计HTTP的初衷是为了提供一种发布和接收HTML页面的方法。

### 发展历史

版本      | 产生时间 | 内容                                                      | 发展现状
--       | --      | --                                                       | --
HTTP/0.9 | 1991年  | 不涉及数据包传输，规定客户端和服务器之间通信格式，只能GET请求      | 没有作为正式的标准
HTTP/1.0 | 1996年  | 传输内容格式不限制，增加PUT、PATCH、HEAD、 OPTIONS、DELETE命令 | 正式作为标准
HTTP/1.1 | 1997年  | 持久连接(长连接)、节约带宽、HOST域、管道机制、分块传输编码        | 2015年前使用最广泛
HTTP/2   | 2015年  | 多路复用、服务器推送、头信息压缩、二进制协议等                   | 逐渐覆盖市场

### 请求原理

![HTTP/1.1和HTTP/2对比](./images/2020-04-24-13-57-25.png)

**多路复用：** 通过单一的HTTP/2连接请求发起多重的请求-响应消息，多个请求stream共享一个TCP连接，实现多流并行而不是依赖建立多个TCP连接。

### HTTP报文格式

![HTTP报文格式](./images/2020-04-24-14-01-16.png)

## 什么是HTTPS

《图解HTTP》这本书中曾提过HTTPS是身披SSL外壳的HTTP。HTTPS是一种通过计算机网络进行安全通信的传输协议，经由HTTP进行通信，利用SSL/TLS建立全信道，加密数据包。HTTPS使用的主要目的是提供对网站服务器的身份认证，同时保护交换数据的隐私与完整性。

PS: TLS是传输层加密协议，前身是SSL协议，由网景公司1995年发布，有时候两者不区分。

参考：

- [Journey to HTTP/2](<https://kamranahmed.info/blog/2016/08/13/http-in-depth/>)
- [Hypertext Transfer Protocol Version 2 (HTTP/2)](https://http2.github.io/http2-spec/)

## HTTP VS HTTPS

### HTTP特点

1. 无状态：协议对客户端没有状态存储，对事物处理没有“记忆”能力，比如访问一个网站需要反复进行登录操作

2. 无连接：HTTP/1.1之前，由于无状态特点，每次请求需要通过TCP三次握手四次挥手，和服务器重新建立连接。比如某个客户机在短时间多次请求同一个资源，服务器并不能区别是否已经响应过用户的请求，所以每次需要重新响应请求，需要耗费不必要的时间和流量。

3. 基于请求和响应：基本的特性，由客户端发起请求，服务端响应

4. 简单快速、灵活

5. 通信使用明文、请求和响应不会对通信方进行确认、无法保护数据的完整性

**缺点：** HTTP协议传输数据以明文形式显示

### HTTPS特点

基于HTTP协议，通过SSL或TLS提供加密处理数据、验证对方身份以及数据完整性保护

1. 内容加密：采用混合加密技术，中间者无法直接查看明文内容

2. 验证身份：通过证书认证客户端访问的是自己的服务器

3. 保护数据完整性：防止传输的内容被中间人冒充或者篡改

**混合加密：** 结合非对称加密和对称加密技术。客户端使用对称加密生成密钥对传输数据进行加密，然后使用非对称加密的公钥再对秘钥进行加密，所以网络上传输的数据是被秘钥加密的密文和用公钥加密后的秘密秘钥，因此即使被黑客截取，由于没有私钥，无法获取到加密明文的秘钥，便无法获取到明文数据。

**数字摘要：** 通过单向hash函数对原文进行哈希，将需加密的明文“摘要”成一串固定长度(如128bit)的密文，不同的明文摘要成的密文其结果总是不相同，同样的明文其摘要必定一致，并且即使知道了摘要也不能反推出明文。

**数字签名技术：** 数字签名建立在公钥加密体制基础上，是公钥加密技术的另一类应用。它把公钥加密技术和数字摘要结合起来，形成了实用的数字签名技术。

![](./images/2020-04-24-15-22-16.png)

非对称加密过程需要用到公钥进行加密，那么公钥从何而来？其实公钥就被包含在数字证书中，数字证书通常来说是由受信任的数字证书颁发机构CA，在验证服务器身份后颁发，证书中包含了一个密钥对（公钥和私钥）和所有者识别信息。数字证书被放到服务端，具有服务器身份验证和数据传输加密功能。

## HTTP通信传输

### OSI七层协议模型

OSI七层协议模型是网络协议的理论模型，是ISO制定的一个用于计算机或通信系统间互联的标准体系。显然，用一个统一的协议来统筹庞大的互联网通信是不现实的，如果仅仅只想改变某一部分功能，整个协议都需要发生改变，这样的代价似乎有点大。所以人们通过分层的思想来规定网络通信协议，OSI协议共分为7层：

1. 物理层

    包含了多种与物理介质相关的协议，这些物理介质用以支撑TCP/IP通信。其主要功能为：利用传输介质为数据链路层提供物理连接，实现比特流的透明传输，其传输单位为bit。规定了集线器、中继器、调制解调器、网线、双绞线、同轴电缆等物理设备。同时还有制定了如下协议：

    - 电子/光学协议:描述了信号的各种特性。例如：电压、光强度、位定时、编码、信号波形等；
    - 机械协议：指定了连接器的尺寸或者导线的金属成分；
    - 功能性协议：描述了做什么。例如：在EIA-232-D连接器第4管脚上的功能描述是“信号发送”；
    - 程序性协议：描述了如何做。例如：在EIA-232-D导线上，二进制1表示电压小于-3V；

2. 链路层

    通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路。它主要解决两个相邻节点之间的通信问题，其传输单位为数据帧

3. 网络层

    其主要任务是：通过路由选择算法，为报文或分组通过通信子网选择最适当的路径。该层控制数据链路层与传输层之间的信息转发，建立、维持和终止网络的连接。具体地说，数据链路层的数据在这一层被转换为数据包，然后通过路径选择、分段组合、顺序、进/出路由等控制，将信息从一个网络设备传送到另一个网络设备。

4. 传输层

    OSI协议上三层用于数据处理，下三层用于数据交换，所以传输层在其中起到承上启下的作用。该层的主要任务是：向用户提供可靠的端到端的差错和流量控制，保证报文的正确传输，著名的TCP协议就在此层。

5. 会话层

    会话层是用户应用程序和网络之间的接口，主要任务是：向两个实体的表示层提供建立和使用连接的方法。将不同实体之间的表示层的连接称为会话。因此会话层的任务就是组织和协调两个会话进程之间的通信，并对数据交换进行管理。

6. 表示层

    表示层对来自应用层的命令和数据进行解释，对各种语法赋予相应的含义，并按照一定的格式传送给会话层。其主要功能是“处理用户信息的表示问题，如编码、数据格式转换和加密解密”等。

7. 应用层

    应用层是计算机用户，以及各种应用程序和网络之间的接口，其功能是直接向用户提供服务，完成用户希望在网络上完成的各种工作。它在其他6层工作的基础上，负责完成网络中应用程序与网络操作系统之间的联系，建立与结束使用者之间的联系，并完成网络用户提出的各种网络服务及应用所需的监督、管理和服务等各种协议。此外，该层还负责协调各个应用程序间的工作。

    ![OSI模型与TCP/IP模型的对应关系](./images/2020-04-24-15-32-09.png)

### TCP/IP协议族

OSI协议模型就像字典一样，面面俱到但也免不了臃肿，作为理解网络协议的教材尚可，但真正应用与实际中的还是TCP/IP协议的四层模型。实际上，TCP/IP协议簇是对OSI七层模型的整合：

1. 应用层

    OSI模型前三层的整合，主要作用是进行数据处理，常用的协议包括DNS，HTTP，FTP等。

2. 传输层

    对上层应用层提供处于网络连接中的两台计算机之间的数据传输。其中有两个不同的协议：TCP协议和UDP协议。

3. 网络层

    网络层用来处理网络上流动的数据包（网络传输的最小单位），该层通过一定的算法来选择数据交换时的最优线路。

网络传输分为两方：客户端与服务器。发出请求的称为客户端，做出响应的称之为服务器。利用TCP/IP协议族进行网络通信时，会通过分层的顺序与对方进行交互，发送端从上往下走，接受端由下往上爬：

![](./images/2020-04-24-15-34-29.png)

实际上，每过一层会添加或删除属于改层的首部，我们把这种数据包装的方法叫做封装。

![](./images/2020-04-24-15-37-31.png)

报文从应用层传送到传输层，传输层通过TCP三次握手和服务器建立连接，四次挥手释放连接。

### TCP连接的建立（三次握手）

![三次握手.gif](./images/2020-04-24-15-44-13.gif)

> 最开始的时候客户端和服务器都是处于CLOSED状态。主动打开连接的为客户端，被动打开连接的是服务器。

1. TCP服务器进程先创建传输控制块TCB，时刻准备接受客户进程的连接请求，此时服务器就进入了LISTEN（监听）状态；
2. TCP客户进程也是先创建传输控制块TCB，然后向服务器发出连接请求报文，这是报文首部中的同部位SYN=1，同时选择一个初始序列号 seq=x ，此时，TCP客户端进程进入了 SYN-SENT（同步已发送状态）状态。TCP规定，SYN报文段（SYN=1的报文段）不能携带数据，但需要消耗掉一个序号。
3. TCP服务器收到请求报文后，如果同意连接，则发出确认报文。确认报文中应该 ACK=1，SYN=1，确认号是ack=x+1，同时也要为自己初始化一个序列号 seq=y，此时，TCP服务器进程进入了SYN-RCVD（同步收到）状态。这个报文也不能携带数据，但是同样要消耗一个序号。
4. TCP客户进程收到确认后，还要向服务器给出确认。确认报文的ACK=1，ack=y+1，自己的序列号seq=x+1，此时，TCP连接建立，客户端进入ESTABLISHED（已建立连接）状态。TCP规定，ACK报文段可以携带数据，但是如果不携带数据则不消耗序号。
5. 当服务器收到客户端的确认后也进入ESTABLISHED状态，此后双方就可以开始通信了。

![三次握手](./images/2020-04-24-16-00-10.png)

为什么TCP客户端最后还要发送一次确认呢？

> 一句话，主要防止已经失效的连接请求报文突然又传送到了服务器，从而产生错误。
>
> 如果使用的是两次握手建立连接，假设有这样一种场景，客户端发送了第一个请求连接并且没有丢失，只是因为在网络结点中滞留的时间太长了，由于TCP的客户端迟迟没有收到确认报文，以为服务器没有收到，此时重新向服务器发送这条报文，此后客户端和服务器经过两次握手完成连接，传输数据，然后关闭连接。此时此前滞留的那一次请求连接，网络通畅了到达了服务器，这个报文本该是失效的，但是，两次握手的机制将会让客户端和服务器再次建立连接，这将导致不必要的错误和资源的浪费。
>
> 如果采用的是三次握手，就算是那一次失效的报文传送过来了，服务端接受到了那条失效报文并且回复了确认报文，但是客户端不会再次发出确认。由于服务器收不到确认，就知道客户端并没有请求连接。

### TCP连接的释放（四次挥手）

![四次挥手.gif](./images/2020-04-24-16-17-10.gif)

> 数据传输完毕后，双方都可释放连接。最开始的时候，客户端和服务器都是处于ESTABLISHED状态，然后客户端主动关闭，服务器被动关闭。

1. 客户端进程发出连接释放报文，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为seq=u（等于前面已经传送过来的数据的最后一个字节的序号加1），此时，客户端进入FIN-WAIT-1（终止等待1）状态。 TCP规定，FIN报文段即使不携带数据，也要消耗一个序号。
2. 服务器收到连接释放报文，发出确认报文，ACK=1，ack=u+1，并且带上自己的序列号seq=v，此时，服务端就进入了CLOSE-WAIT（关闭等待）状态。TCP服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个CLOSE-WAIT状态持续的时间。
3. 客户端收到服务器的确认请求后，此时，客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。
4. 服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为seq=w，此时，服务器就进入了LAST-ACK（最后确认）状态，等待客户端的确认。
5. 客户端收到服务器的连接释放报文后，必须发出确认，ACK=1，ack=w+1，而自己的序列号是seq=u+1，此时，客户端就进入了TIME-WAIT（时间等待）状态。注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态。
6. 服务器只要收到了客户端发出的确认，立即进入CLOSED状态。同样，撤销TCB后，就结束了这次的TCP连接。可以看到，服务器结束TCP连接的时间要比客户端早一些。

![四次挥手](./images/2020-04-24-16-55-18.png)

为什么客户端最后还要等待2MSL?

> MSL（Maximum Segment Lifetime），TCP允许不同的实现可以设置不同的MSL值。
>
> 第一，保证客户端发送的最后一个ACK报文能够到达服务器，因为这个ACK报文可能丢失，站在服务器的角度看来，我已经发送了FIN+ACK报文请求断开了，客户端还没有给我回应，应该是我发送的请求断开报文它没有收到，于是服务器又会重新发送一次，而客户端就能在这个2MSL时间段内收到这个重传的报文，接着给出回应报文，并且会重启2MSL计时器。
>
> 第二，防止类似与“三次握手”中提到了的“已经失效的连接请求报文段”出现在本连接中。客户端发送完最后一个确认报文后，在这个2MSL时间中，就可以使本连接持续的时间内所产生的所有报文段都从网络中消失。这样新的连接中不会出现旧连接的请求报文。
>
> 为什么建立连接是三次握手，关闭连接确是四次挥手呢？
>
> 建立连接的时候， 服务器在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。
>
> 而关闭连接时，服务器收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送，从而导致多了一次。

如果已经建立了连接，但是客户端突然出现故障了怎么办？

> TCP还设有一个保活计时器，显然，客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为2小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔75分钟发送一次。若一连发送10个探测报文仍然没反应，服务器就认为客户端出了故障，接着就关闭连接。

## HTTPS实现原理

### SSL建立连接过程

![RSA密钥交换](./images/2020-04-24-18-15-40.png)

1. 客户端提交https请求

2. 服务器响应客户，并把证书公钥发给客户端

3. 客户端验证证书公钥的有效性

4. 有效后，会生成一个会话密钥

5. 用证书公钥加密这个会话密钥后，发送给服务器

6. 服务器收到公钥加密的会话密钥后，用私钥解密，回去会话密钥

7. 客户端与服务器双方利用这个会话密钥加密要传输的数据进行通信

### 数字证书内容

包括了加密后服务器的公钥、权威机构的信息、服务器域名，还有经过CA私钥签名之后的证书内容（经过先通过Hash函数计算得到证书数字摘要，然后用权威机构私钥加密数字摘要得到数字签名），签名计算方法以及证书对应的域名。

![CA签名](./images/2020-04-24-18-18-34.png)

### 验证证书安全性过程

1. 当客户端收到这个证书之后，使用本地配置的权威机构的公钥对证书进行解密得到服务端的公钥和证书的数字签名，数字签名经过CA公钥解密得到证书信息摘要。

2. 然后证书签名的方法计算一下当前证书的信息摘要，与收到的信息摘要作对比，如果一样，表示证书一定是服务器下发的，没有被中间人篡改过。因为中间人虽然有权威机构的公钥，能够解析证书内容并篡改，但是篡改完成之后中间人需要将证书重新加密，但是中间人没有权威机构的私钥，无法加密，强行加密只会导致客户端无法解密，如果中间人强行乱修改证书，就会导致证书内容和证书签名不匹配。

## 总结

**安全性:**

1. HTTPS协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用

2. SSL证书的信用链体系并不安全，特别是在某些国家可以控制CA根证书的情况下，中间人攻击一样可行

> 中间人攻击（MITM攻击）是指，黑客拦截并篡改网络中的通信数据。又分为被动MITM和主动MITM，被动MITM只窃取通信数据而不修改，而主动MITM不但能窃取数据，还会篡改通信数据。最常见的中间人攻击常常发生在公共wifi或者公共路由上。

**成本:**

1. SSL证书需要购买申请，功能越强大的证书费用越高

2. SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗（SSL有扩展可以部分解决这个问题，但是比较麻烦，而且要求浏览器、操作系统支持，Windows XP就不支持这个扩展，考虑到XP的装机量，这个特性几乎没用）。

3. 根据ACM CoNEXT数据显示，使用HTTPS协议会使页面的加载时间延长近50%，增加10%到20%的耗电。

4. HTTPS连接缓存不如HTTP高效，流量成本高。

5. HTTPS连接服务器端资源占用高很多，支持访客多的网站需要投入更大的成本。

6. HTTPS协议握手阶段比较费时，对网站的响应速度有影响，影响用户体验。比较好的方式是采用分而治之，没有重要信息的页面使用HTTP协议，有关于用户信息等方面使用HTTPS。
