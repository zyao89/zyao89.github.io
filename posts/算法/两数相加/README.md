---
title: 两数相加
categories: [算法]
tags: [LeetCode]
type: Medium
typeColor: yellow
date: 2020-04-20 19:27:52
---

<!-- more -->

::: warning 难度
中等
:::

## 题目

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

### 示例

**输入:** (2 -> 4 -> 3) + (5 -> 6 -> 4)

**输出:** 7 -> 0 -> 8

**原因:** 342 + 465 = 807

## 解答

> 以下解答为个人原创答案，非最优解。保证运行通过。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let jwFlag = false; // 进位标识
    const result = []; // 收集结果
    while(l1 !== null || l2 !== null) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0); // 题目检测时，对空位用 0 处理了
        if (jwFlag) {
            jwFlag = false;
            sum = sum + 1; // 进位
        }
        if (sum >= 10) {
            sum = sum - 10;
            jwFlag = true; // 记录下一位需要进位
        }
        result.push(sum)

        // 同步跳到下一位
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    if (jwFlag) { // 题目要求最后一位进位也要加入
        jwFlag = false;
        result.push(1)
    }

    // 重组链表
    const first = new ListNode(result[0]);
    let curr = first;
    for(let i = 1; i < result.length; i ++) {
        curr.next = new ListNode(result[i]);
        curr = curr.next;
    }
    return first;
};
```

> 来源链接：<https://leetcode-cn.com/problems/add-two-numbers>
