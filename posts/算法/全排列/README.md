---
title: 全排列
categories: [算法]
tags: [LeetCode]
type: Medium
typeColor: yellow
date: 2020-04-25 22:35:11
---

<!-- more -->

::: tip 难度
中等
:::

## 题目

给定一个 没有重复 数字的序列，返回其所有可能的全排列。

### 示例

输入:

```js
[1,2,3]
```

输出:

```js
[
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
]
```

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    return process(nums, nums.length, 0, [], {}, []);
};

function process(nums, len, deepth, path, used, result) {
    if (len === 0) return result;
    if (len === deepth) {
        result.push([].concat(path));
        return result;
    }
    for(let i = 0; i < nums.length; i ++) {
        if (used[i]) {
            continue;
        }
        used[i] = true;
        path.push(nums[i]);
        process(nums, len, deepth + 1, path, used, result);
        path.pop();
        used[i] = false;
    }
    return result;
}
```

> 来源链接：<https://leetcode-cn.com/problems/permutations>
