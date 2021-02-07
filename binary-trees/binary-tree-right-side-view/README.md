# Binary Tree Right Side View

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

### Example 1:

```
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

### Constraints

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Root, Right, Left Tree Traversal

Our first intuition is to recursively traverse the trees right sub trees, pushing the nodes' `val` into list along the way. But this approach will only capture the `R` total values where `R` is the depth of the right-most node in the tree. This does not capture `H + 1` (tree's height) number of nodes like we need. As long as there isn't a right subtree blocking the view, a node in the left subtree can be seen from the right side. For example:

```
       1             <---
     /   \
    2     3          <---
   /  \     \
  6    5     4       <---
   \
     7               <---

[1,3,4,7]
```

Here the node with a `val` of 7 can be seen from the right because the depth of this node exceeds the depth of the right-most node. If we want to capture `H + 1` numbers of nodes, we need to traverse the entire tree from, right to left, recording the first node `val` we find at every level.

This can be done by using a Root, Right, Left tree traversal where every time the current depth of the node exceeds the length of the list, we append the node's `val` to the list

Time: `O(N)`

Space: `O(H)` where `H ` is the total height of the tree plus 1

- [JavaScript](./binary-tree-right-side-view.js)
- [TypeScript](./binary-tree-right-side-view.ts)
- [Java](./binary-tree-right-side-view.java)
- [Go](./binary-tree-right-side-view.go)
</details>
