# Trim a Binary Search Tree

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

### Example 1:

![Example 1](./images/example-1.jpg)

```
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]
```

### Example 2:

![Example 2](./images/example-2.jpg)

```
Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]
```

### Example 3:

```
Input: root = [1], low = 1, high = 2
Output: [1]
```

### Example 4:

```
Input: root = [1,null,2], low = 1, high = 3
Output: [1,null,2]
```

### Example 5:

```
Input: root = [1,null,2], low = 2, high = 4
Output: [2]
```

### Constraints

`The number of nodes in the tree in the range [1, 104].`

`0 <= Node.val <= 104`

`The value of each node in the tree is unique.`

`root is guaranteed to be a valid binary search tree.`

`0 <= low <= high <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Recursion

Whenever we come across a node that is we'll have one of two situations:

1. The node `val` is greater than `high`
2. The node `val` is less than `low`
3. The node `val` is within bounds

A node in a Binary Search Tree always has left subtree where all the children nodes `val` are less then the current node's `val` and a right subtree where all the children nodes `val` are greater than the current node's `val`. This means we can make a optimal decision whenever we come across a node that is out of bounds

1. If the node `val` is greater than `high`, skip the current node and go on to its left child
2. If the node `val` is less than `low`, skip the current node and go on to its right child

If we ever need to skip a node, we'll need a way to link the parent node with its new child node. Instead of trying to relink certain nodes, it is easier to just relink the entire tree by recursively setting the `left` and `right` child for every valid inbounds node. We do so the same way we recursively traverse a BST except when ever we come across a node that is out out of bounds, we'll immediately recursively recall the recursive function again on the another child instead of returning the the current root.

```
    if(root.val < low) {
      return trimBST(root.right, low, high); // recall on right child
    }

    if(root.val > high) {
      return trimBST(root.left, low, high); // recall on left child
    }

    root.left = trimBST(root.left, low, high); // link the next left child
    root.right = trimBST(root.right, low, high); // link the next right child

    return root;
```

Time: `O(N)` Where `N` is the total number of nodes

Space: `O(N)` Where `N` is the total number of nodes (This is including the call stack of memory)

- [JavaScript](./trim-a-binary-search-tree.js)
- [TypeScript](./trim-a-binary-search-tree.ts)
- [Java](./trim-a-binary-search-tree.java)
- [Go](./trim-a-binary-search-tree.go)
</details>
