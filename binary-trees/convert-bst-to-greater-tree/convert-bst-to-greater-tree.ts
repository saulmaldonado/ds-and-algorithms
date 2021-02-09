/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function convertBST(root: TreeNode | null): TreeNode | null {
  traverse(root, 0);

  return root;
}

function traverse(root: TreeNode | null, sum: number): number {
  if (root == null) {
    return sum;
  }

  sum = traverse(root.right, sum);

  sum += root.val;

  root.val = sum;

  sum = traverse(root.left, sum);

  return sum;
}
