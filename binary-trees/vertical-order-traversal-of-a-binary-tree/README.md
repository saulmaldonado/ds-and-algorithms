# Vertical Order Traversal of a Binary Tree

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

For each node at position (x, y), its left and right children will be at positions (x - 1, y - 1) and (x + 1, y - 1) respectively.

The vertical order traversal of a binary tree is a list of non-empty reports for each unique x-coordinate from left to right. Each report is a list of all nodes at a given x-coordinate. The report should be primarily sorted by y-coordinate from highest y-coordinate to lowest. If any two nodes have the same y-coordinate in the report, the node with the smaller value should appear earlier.

Return the vertical order traversal of the binary tree.

### Example 1:

![Example 1](./images/example-1.png)

```
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation: Without loss of generality, we can assume the root node is at position (0, 0):
The node with value 9 occurs at position (-1, -1).
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2).
The node with value 20 occurs at position (1, -1).
The node with value 7 occurs at position (2, -2).
```

### Example 2:

![Example 1](./images/example-1.png)

```
Input: root = [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation: The node with value 5 and the node with value 6 have the same position according to the given scheme.
However, in the report [1,5,6], the node with value 5 comes first since 5 is smaller than 6.
```

### Constraints

`The number of nodes in the tree is in the range [1, 1000].`

`0 <= Node.val <= 1000`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Priority Queue with custom comparator

For this problem, we are simply sorting the nodes into a list based on their `x` value , `y` value, and `val` value. While we can access `val` for every node, `x` and `y` are not a part of the `TreeNode` class and we have to find a way to associate `x` and `y` indices to every TreeNode ourselves.

Thankfully the concept of `x` and `y` for a tree can be simplified to:

1. Traverse to left child: `x - 1, y - 1`
2. Traverse to right child: `x + 1, y - 1`
3. Traverse to parent from left child: `x + 1, y + 1`
4. Traverse to parent from right child: `x - 1, y + 1`

If we know this then all we have to do is traverse the entire tree to know the indices for each one of the TreeNodes. The indices for the TreeNode can be stored in either HashMap, or be stored an encapsulating class such as

```
class Point {
  TreeNode node;
  int x;
  int y;

  Point(int x, int y, TreeNode node) {
    this.x = x;
    this.y = y;
    this.node = node;
  }
}
```

This way we can store the `x` and `y` values for every specific TreeNode.

As we traverse the tree, we want to insert all of the visited nodes in to a priority, that way when it comes to building our finale array we would only have to `poll` the already sorted nodes from the queue and insert in our final list.

We'll need a custom comparator for our queue. according to the problem, nodes are:

- Put into reports that are sorted by the `x` value they represent

- Sorted within reports based on their `y` value from highest to lowest

- If two nodes have the same `y` value, they are sorted by their `val` value

We'll have to represent this logic in our custom comparator for our PriorityQueue. This can be done like:

```
public int compare(Point p1, Point p2){
  if(p1.x != p2.x) { // compare by x
    return p1.x - p2.x
  }

  if(p1.y != p2.y) { // compare by y
    return p2.y - p1.y;
  }

  return p1.node.val - p2.node.val; // compare by val
}
```

Lastly we'll need to add our TreeNode in our queue to a final list. We cannot simply poll them from the queue and insert them into the list since we need to group all them into `reports` or sub lists depending on the Point's `x`. Since our queue is already sorted by `x`, we can simply insert the first node and all subsequent nodes into their own report until the next Point polled from the queue has a different `x`. When this happens we'll start a new sub list and group all of the subsequent Points that have the same `x`.

Time: `(N log N)` where `N` is the total number of nodes in the tree

Space: `O(N)` where `N` is the total number of nodes in the tree

- [JavaScript](./vertical-order-traversal-of-a-binary-tree.js)
- [TypeScript](./vertical-order-traversal-of-a-binary-tree.ts)
- [Java](./vertical-order-traversal-of-a-binary-tree.java)
- [Go](./vertical-order-traversal-of-a-binary-tree.go)
</details>
