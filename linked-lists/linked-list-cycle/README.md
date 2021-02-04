# Linked List Cycle

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

### Example 1:

![Example 1](./images/example-1.png)

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

### Example 2:

![Example 2](./images/example-2.png)

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

### Example 3:

![Example 3](./images/example-3.png)

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

### Constraints

`The number of the nodes in the list is in the range [0, 104].`

`-105 <= Node.val <= 105`

`pos is -1 or a valid index in the linked-list.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Fast and slow pointers

If we have two pointers, one that move at regular speed and one that moves at double, and they travel through a loop, there will be a point where both of the pointers end up in the same place and the fast pointer overlaps the slow pointer. This happens because a loop has no ending and the pointer will just end up cycling over the same node perpetually. We can confirm that a list has no cycle when the fast pointer reaches `null` indicating the end of the list.

When in a cycle, we can determine the number of moves it take for both pointers to meet at the same node by: `distance between the two pointers / difference in speed`

Time: `O(N + K)` Where `N` is the non-cyclical distance prior to the loop and `K` is the length of the cycle

Space: `O(1)`

- [JavaScript](./linked-list-cycle.js)
- [TypeScript](./linked-list-cycle.ts)
- [Java](./linked-list-cycle.java)
- [Go](./linked-list-cycle.go)
</details>
