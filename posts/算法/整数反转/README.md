---
title: 整数反转
categories: [算法]
tags: [LeetCode]
type: Easy
typeColor: green
date: 2020-04-20 23:58:48
---

<!-- more -->

::: tip 难度
简单
:::

## 题目

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

### 示例 1

**输入:** 123

**输出:** 321

### 示例 2

**输入:** -123

**输出:** -321

### 示例 3

**输入:** 120

**输出:** 21

## 注意

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let fs_flag = x < 0;
    if (fs_flag) {
        x = - x;
    }
    const arrs = String(x).split('');
    const size = arrs.length;
    const mid = Math.floor((size + 1) / 2);
    for(let i = 0; i < mid; i ++) {
        const temp = arrs[i];
        arrs[i] = arrs[size - i - 1];
        arrs[size - i - 1] = temp;
    }
    if (fs_flag) {
        arrs.unshift('-');
    }
    const result = parseInt(arrs.join(''));
    const a = Math.pow(2, 31);
    if (result < -a || result > a) return 0;
    return result;
};
```

> 链接：<https://leetcode-cn.com/problems/reverse-integer>
