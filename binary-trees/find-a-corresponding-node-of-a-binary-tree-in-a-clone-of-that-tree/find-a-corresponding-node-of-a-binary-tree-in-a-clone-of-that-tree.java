class Solution {

  public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
      this.val = val;
    }
  }

  public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
    return dfs(cloned, target.val);
  }

  public TreeNode dfs(TreeNode root, int target) {
    if (root == null)
      return null;

    if (root.val == target) {
      return root;
    }

    TreeNode left = dfs(root.left, target);
    if (left != null)
      return left;
    TreeNode right = dfs(root.right, target);
    if (right != null)
      return right;

    return null;
  }
}
