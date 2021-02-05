# Reverse Nodes in k-Group

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

Follow up:

- Could you solve the problem in O(1) extra memory space?
- You may not alter the values in the list's nodes, only nodes itself may be changed.

### Example 1:

![Example 1](./images/example-1.jpg)

```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

### Example 2:

![Example 2](./images/example-2.jpg)

```
Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
```

### Example 3:

```
Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]
```

### Example 4:

```
Input: head = [1], k = 1
Output: [1]
```

### Constraints

`The number of nodes in the list is in the range sz.`

`1 <= sz <= 5000`

`0 <= Node.val <= 1000`

`1 <= k <= sz`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Reverse List Segments with Pointers

If we already know how to reverse a Linked List then we can easily node segments of `k` length and relink them to the bigger containing list with pointers. For example:

```
k = 3

1 -> 2 -> 3 -> 4 -> 5
```

If we want to reverse the first group of nodes `1 -> 2` to `2 -> 1` we'll need pointers that reference the node before and the node after the group. These nodes can be called `prev` and `next`

Note: If we are at the beginning of the list `prev` will be a new dummy node. The new dummy node will point to the head of the next reversed group.

```
prev = 0 // dummy node
next = 3

0   1 -> 2 -> 3 -> 4 -> 5
^              ^
```

Once the group of node are reversed, we'll need a reference to `2` or the previously last node of the group. Our `prev` node will be linked to `2`.

We'll also need a reference to `1` the previously first node of the group. Our `1` node will be linked to head of the next group.

```
prev = 0 // dummy node
next = 3

0 -> 2 -> 1    3 -> 4 -> 5    // 1 and 3 have not been linked
^              ^
```

Once we have relinked the group to the main list, we need a reference to the current node of `next`, `3`. This is the head of the next group that we'll need to reverse. We can then advance the `next` pointer `k` steps or until `next` becomes `null`. Our `prev` will then be `1` the last node of the group we just reversed.

``

```
prev = 1
next = 5

0 -> 2 -> 1    3 -> 4 -> 5
          ^              ^
```

The node group starting at `3` will then be reversed

```
prev = 1
next = 5

0 -> 2 -> 1    4 -> 3    5
          ^              ^
```

`prev`, the reference to `1`, will be linked to the head of the next revered group `4`, and `3` will be linked to `next` our reference to `5`.

```
prev = 1
next = 5

0 -> 2 -> 1 -> 4 -> 3 -> 5
          ^              ^
```

Time: `O(N*K)` Where `N` is the length of the List and `K` is `k`

Space: `O(1)`

- [JavaScript](./reverse-nodes-in-k-group.js)
- [TypeScript](./reverse-nodes-in-k-group.ts)
- [Java](./reverse-nodes-in-k-group.java)
- [Go](./reverse-nodes-in-k-group.go)
</details>
