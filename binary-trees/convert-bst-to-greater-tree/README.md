# Convert BST to Greater Tree

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

### Example 1:

![Example 1](./images/example-1.png)

```
Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

### Example 2:

```s
Input: root = [0,null,1]
Output: [1,null,1]
```

### Example 3:

```
Input: root = [1,0,2]
Output: [3,3,2]
```

### Example 4:

```
Input: root = [3,2,4,1]
Output: [7,9,4,10]
```

### Constraints

`The number of nodes in the tree is in the range [0, 104].`

`-104 <= Node.val <= 104`

`All the values in the tree are unique.`

`root is guaranteed to be a valid binary search tree.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Right, Root, Left Traversal

If we know that all the nodes in the left sub-tree are greater than the root and all the nodes in the right sub-tree are smaller, then we know that we only want to traverse the right sub tree for calculating a nodes new value. However this can only be done if we know the new values of the right sub-tree which mean we need to re-key the nodes from the bottom up starting from the right most node that has no greater children and remains untouched. This requires recursively traversing the tree from right child to root to left child.

From the bottom we will traverse to the parents of each right sub-tree where we will keep track of the sum of all values we've seen and replacing the key of the current node with the current sum. After traversing to the parent we will traverse the left sub-tree the same way.

By the end the left most node will contain the sum of all keys in the BST

Time: `O(N)` Where `N` is total number of nodes in the BST

Space: `O(H)` Where `H` is the max height of the tree.

- [JavaScript](./title.js)
- [TypeScript](./title.ts)
- [Java](./title.java)
- [Go](./title.go)
</details>
