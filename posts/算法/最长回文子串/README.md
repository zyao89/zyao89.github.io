---
title: 最长回文子串
categories: [算法]
tags: [LeetCode]
type: Medium
typeColor: yellow
date: 2020-04-20 23:16:16
---

<!-- more -->

::: warning 难度
中等
:::

## 题目

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

### 示例 1

**输入:** "babad"

**输出:** "bab"

**注意:** "aba" 也是一个有效答案。

### 示例 2

**输入:** "cbbd"

**输出:** "bb"

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const size = s.length;
    if (size <= 1) return s;
    const arrs = s.split('');
    let result = '';
    for(let i = 0; i < size; i ++) {
        const temp = [];
        for(let j = i; j < size; j ++) {
            temp.push(arrs[j]);
            if (isPalindrome(temp)) {
                if (temp.length > result.length) {
                    result = temp.join('');
                }
            }
        }
    }
    return result;
};

function isPalindrome(str) {
    var len  = str.length
    var middle = parseInt(len/2)
    for(var i = 0;i<middle;i++){
        if(str[i]!=str[len-i-1]){
            return false
        }
    }
    return true
}
```

> 链接：<https://leetcode-cn.com/problems/longest-palindromic-substring>
