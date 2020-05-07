---
title: 无重复字符的最长子串
categories: [算法]
tags: [LeetCode]
type: Medium
typeColor: yellow
date: 2020-04-20 19:33:44
---

<!-- more -->

::: warning 难度
中等
:::

## 题目

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

### 示例 1

**输入:** "abcabcbb"

**输出:** 3

**解释:** 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

### 示例 2

**输入:** "bbbbb"

**输出:** 1

**解释:** 因为无重复字符的最长子串是 "b"，所以其长度为 1。

### 示例 3

**输入:** "pwwkew"

**输出:** 3

**解释:** 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    let result = [];
    let max_num = 0;
    for (item of s) {
        let index = result.indexOf(item);
        if (index !== -1) {
            result = result.splice(index + 1);
        }
        result.push(item);
        const currNum = result.length;
        if (currNum > max_num){
            max_num = currNum;
        }
    }
    return max_num;
};
```

> 来源链接：<https://leetcode-cn.com/problems/longest-substring-without-repeating-characters>
