import java.util.List;
import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.Comparator;

class Solution {
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

  public List<List<Integer>> verticalTraversal(TreeNode root) {
    List<List<Integer>> res = new ArrayList<List<Integer>>();

    Comparator<Point> comp = new Comparator<Point>() {
      public int compare(Point p1, Point p2) {
        if (p1.x != p2.x) { // compare by x
          return p1.x - p2.x;
        }

        if (p1.y != p2.y) { // compare by y
          return p2.y - p1.y;
        }

        return p1.node.val - p2.node.val; // compare by val
      };
    };

    PriorityQueue<Point> queue = new PriorityQueue<>(10, comp);

    traverse(root, 0, 0, queue);

    Point prev = null;

    List<Integer> l = new ArrayList<>();

    while (!queue.isEmpty()) {
      Point p = queue.poll();
      if (prev == null || p.x != prev.x) {
        if (prev != null)
          res.add(l);
        l = new ArrayList<>();
      }
      l.add(p.node.val);
      prev = p;
    }

    res.add(l);
    return res;
  }

  private void traverse(TreeNode root, int x, int y, PriorityQueue<Point> queue) {
    if (root == null) {
      return;
    }
    queue.offer(new Point(x, y, root));
    traverse(root.left, x - 1, y - 1, queue);
    traverse(root.right, x + 1, y - 1, queue);
  }
}
