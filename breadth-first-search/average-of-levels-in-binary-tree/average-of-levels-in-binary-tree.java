/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
  public List<Double> averageOfLevels(TreeNode root) {
    List<Double> avg = new ArrayList<>();

    Queue<TreeNode> queue = new ArrayDeque<>();

    queue.add(root);

    while (!queue.isEmpty()) {
      int n = queue.size();
      int count = n;
      long sum = 0;

      while (count > 0) {
        TreeNode curr = queue.poll();

        sum += curr.val;

        if (curr.left != null) {
          queue.add(curr.left);
        }

        if (curr.right != null) {
          queue.add(curr.right);
        }
        count--;
      }
      avg.add((double) sum / n);
    }

    return avg;
  }
}
