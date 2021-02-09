/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
  public TreeNode convertBST(TreeNode root) {
    traverse(root, 0);

    return root;
  }

  private int traverse(TreeNode root, int sum) {
    if (root == null) {
      return sum;
    }

    sum = traverse(root.right, sum);

    sum += root.val;

    root.val = sum;

    sum = traverse(root.left, sum);

    return sum;
  }
}
