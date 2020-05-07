---
title: 两数之和
categories: [算法]
tags: [LeetCode]
type: Easy
typeColor: green
date: 2020-04-20 18:56:08
---

<!-- more -->

::: tip 难度
简单
:::

## 题目

给定一个整数数组 nums  和一个目标值 target，请你在该数组中找出和为目标值的那   两个   整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

### 示例

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9

所以返回 [0, 1]

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const size = nums.length;
    if (!size) return [];
    for (let i = 0; i < size; i++) {
        // 双层循环取值
        for (let j = i + 1; j < size; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
```

> 来源链接：<https://leetcode-cn.com/problems/two-sum>
