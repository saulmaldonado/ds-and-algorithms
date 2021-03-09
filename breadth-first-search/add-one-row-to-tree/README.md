# Add One Row to Tree

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d. The root node is at depth 1.

The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, create two tree nodes with value v as N's left subtree root and right subtree root. And N's original left subtree should be the left subtree of the new left subtree root, its original right subtree should be the right subtree of the new right subtree root. If depth d is 1 that means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, and the original tree is the new root's left subtree.

### Example 1

```
Input:
A binary tree as following:
       4
     /   \
    2     6
   / \   /
  3   1 5

v = 1

d = 2

Output:
       4
      / \
     1   1
    /     \
   2       6
  / \     /
 3   1   5
```

### Example 2

```
Input:
A binary tree as following:
      4
     /
    2
   / \
  3   1

v = 1

d = 3

Output:
      4
     /
    2
   / \
  1   1
 /     \
3       1
```

### Constraints

`The given d is in range [1, maximum depth of the given tree + 1].`

`The given binary tree has at least one tree node.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### BFS

For this problem we are trying to insert an extra level of nodes below right below nodes that are at depth `d - 1`. To do that we'll first need to have all of the NON-NULL nodes that depth `d - 1` to link an extra node below it. We can use this by doing a BFS down until we vist the nodes at the `d - 1` depth. At this level all of the nodes will need new child nodes.

```
d = 2

       4 <- here is the node we'll need to add new child nodes
     /   \
    2     6
   / \   /
  3   1 5
```

If the nodes at depth `d - 1` are leaf nodes, we'll simply just need to link new nodes as its left and right childs.
If the nodes are not leaf node, we'll need to insert them after the nodes at depth `d - 1` and before the nodes at depth `d + 1`. To do this we'll need to remove the link bewteen the parent node and its children and replace it with a link to the new nodes. Then we need to link the new nodes with the children to reattach the rest of the tree.

```
d = 2

       4
      / \
     1   1 <- new row
    /     \
   2       6
  / \    /
 3   1  5
```

- [JavaScript](./add-one-row-to-tree.js)
- [TypeScript](./add-one-row-to-tree.ts)
- [Java](./add-one-row-to-tree.java)
- [Go](./add-one-row-to-tree.go)

</details>
