/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
  public TreeNode addOneRow(TreeNode root, int v, int d) {
    if (d == 1) {
      return new TreeNode(v, root, null);
    }

    Queue<TreeNode> queue = new ArrayDeque<>();
    queue.add(root);

    int depth = 1;

    while (!queue.isEmpty()) {
      int n = queue.size();
      while (n > 0) {
        TreeNode curr = queue.poll();

        if (depth == d - 1) {
          TreeNode left = curr.left;
          TreeNode right = curr.right;

          curr.left = new TreeNode(v, left, null);
          curr.right = new TreeNode(v, null, right);
        } else {

          if (curr.left != null) {
            queue.add(curr.left);
          }

          if (curr.right != null) {
            queue.add(curr.right);
          }

        }
        n--;
      }
      depth++;
    }

    return root;
  }
}
