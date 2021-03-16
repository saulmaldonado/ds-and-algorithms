# Partition List

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

### Example 1

![Example 1](./images/example-1.png)

```
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
```

### Example 2

```
Input: head = [2,1], x = 2
Output: [1,2]
```

### Constraints

`The number of nodes in the list is in the range [0, 200].`

`-100 <= Node.val <= 100`

`-200 <= x <= 200`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Divied Into Two Lists

As we traverse the list from head to tail we can divide the nodes into two seperate lits. One list will contain all the nodes whoes values are less than `x` and the other list will contain nodes that are equal to or greater than `x`.

```
x = 3
[1,4,3,2,5,2]
 ^

headOne -> 1

headTwo

[1,4,3,2,5,2]
   ^

headOne -> 1

headTwo -> 4

[1,4,3,2,5,2]
     ^

headOne -> 1

headTwo -> 4 -> 3

[1,4,3,2,5,2]
       ^

headOne -> 1 -> 2

headTwo -> 4 -> 3

[1,4,3,2,5,2]
         ^

headOne -> 1 -> 2

headTwo -> 4 -> 3 -> 5

[1,4,3,2,5,2]
           ^

headOne -> 1 -> 2 -> 2

headTwo -> 4 -> 3 -> 5
```

This way the two lists are both subsequences of the main list and are divided by their value compared to `x`. To put together the list we will link the tail of the first list to the head of the second list. This way the list is partitioned into with all the nodes with values less than `x` are at the beginning of the list and all nodes with values greater than or equal to `x` are at the end of the list

```
 1 -> 2 -> 2 -> 4 -> 3 -> 5
```

Time: `O(N)` where `N` is the length of the list

Space: `O(1)`

- [JavaScript](./partition-list.js)
- [TypeScript](./partition-list.ts)
- [Java](./partition-list.java)
- [Go](./partition-list.go)

</details>
