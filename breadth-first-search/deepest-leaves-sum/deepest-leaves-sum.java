import java.util.LinkedList;
import java.util.Queue;

/**
 * Definition for a binary tree node.
 */

public class TreeNode {
  int val;
  TreeNode left;
  TreeNode right;

  TreeNode() {
  }

  TreeNode(int val) {
    this.val = val;
  }

  TreeNode(int val, TreeNode left, TreeNode right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  public int deepestLeavesSum(TreeNode root) {
    Queue<TreeNode> queue = new LinkedList<>();
    int sum = 0;
    queue.add(root);

    while (!queue.isEmpty()) {
      int num = queue.size();

      sum = 0;

      while (num > 0) {
        TreeNode curr = queue.poll();
        sum += curr.val;

        if (curr.left != null) {
          queue.add(curr.left);
        }

        if (curr.right != null) {
          queue.add(curr.right);
        }

        num--;
      }
    }

    return sum;
  }
}
