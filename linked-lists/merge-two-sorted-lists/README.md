# Merge Two Sorted Lists

![difficulty](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

### Example 1:

```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

### Example 2:

```
Input: l1 = [], l2 = []
Output: []
```

### Example 3:

```
Input: l1 = [], l2 = [0]
Output: [0]
```

### Constraints

`The number of nodes in both lists is in the range [0, 50].`

`-100 <= Node.val <= 100`

`Both l1 and l2 are sorted in non-decreasing order.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Create a `sentinel` or `dummy` node to that will point to the beginning of our new linked list. Iterate through both linked lists at the same time using two different pointers comparing the value of the currently referenced nodes. Taking the smallest of the two nodes, link the node to the current node pointer of the new linked list. Continue this until one pointer reaches the end of the their list. Link the remaining part of the longer list to the end of the new list as it is already sorted. Return the new list by referencing the next node of the dummy node

- [JavaScript](./merge-two-sorted-lists.js)
- [TypeScript](./merge-two-sorted-lists.ts)
- [Java](./merge-two-sorted-lists.java)
- [Go](./merge-two-sorted-lists.go)
</details>
