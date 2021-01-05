# Find a Corresponding Node of a Binary Tree in a Clone of That Tree

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given two binary trees original and cloned and given a reference to a node target in the original tree.

The cloned tree is a copy of the original tree.

Return a reference to the same node in the cloned tree.

Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.

### Example 1:

`Input: tree = [7,4,3,null,null,6,19], target = 3 Output: 3`

```
   7         7
  / \       / \
 4   3 <-  4   3 <-
    /  \      / \
   6    19   6   19
```

Constraints:

`The number of nodes in the tree is in the range [1, 10^4].`

`The values of the nodes of the tree are unique.`

`target node is a node from the original tree and is not null.`

<details>
  <summary>Solutions (Click to expand)</summary>

Since both tree are **copies** and all values of each tree are **unique**, finding the first occurrence of a node with the same value as the target is the resulting node.

- [JavaScript](./find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.js)
- [TypeScript](./find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.ts)
- [Java](./find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.java)
- [Go](./find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.go)
</details>
