/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
  public List<Integer> rightSideView(TreeNode root) {
    List<Integer> list = new ArrayList<>();
    traverse(root, 0, list);
    return list;
  }

  private void traverse(TreeNode root, int level, List<Integer> list) {
    if (root == null) {
      return;
    }

    if (list.size() == level) {
      list.add(root.val);
    }

    traverse(root.right, level + 1, list);
    traverse(root.left, level + 1, list);
  }
}
