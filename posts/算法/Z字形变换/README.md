---
title: Z字形变换
categories: [算法]
tags: [LeetCode]
type: Medium
typeColor: yellow
date: 2020-04-21 19:04:09
---

<!-- more -->

## 题目

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

    L   C   I   R
    E T O E S I I G
    E   D   H   N

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

    tring convert(string s, int numRows);

### 示例 1

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"

### 示例 2

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

    L     D     R
    E   O E   I I
    E C   I H   N
    T     S     G

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const len = s.length;
    if (numRows < 2 || len < 2) return s;
    let ascFlag = false; // 正序 - true
    const arrs = [];
    for(let i = 0; i < numRows; i ++) {
        arrs[i] = [];
    }
    const iterNum = numRows - 1;
    for(let i = 0; i < len; i ++) {
        const row = i % iterNum;
        if (row === 0) {
            ascFlag = !ascFlag;
        }
        if (ascFlag) {
            arrs[row].push(s[i]);
        } else {
            arrs[iterNum - row].push(s[i]);
        }
    }
    const result = [];
    arrs.forEach(items => items.forEach(item => {
        result.push(item);
    }));
    return result.join('');
};
```

> 链接：<https://leetcode-cn.com/problems/zigzag-conversion>
