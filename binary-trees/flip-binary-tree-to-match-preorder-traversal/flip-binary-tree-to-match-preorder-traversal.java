class Solution {
  int i = 0;

  public List<Integer> flipMatchVoyage(TreeNode root, int[] voyage) {
    List<Integer> list = new ArrayList<>();
    if (dfs(root, voyage, list)) {
      return list;
    }

    return Arrays.asList(-1);
  }

  private boolean dfs(TreeNode node, int[] voy, List<Integer> list) {
    if (node == null) {
      return true;
    }

    if (node.val != voy[i]) {
      return false;
    }

    i++;

    if (node.left != null && node.left.val != voy[i]) {
      list.add(node.val);
      return dfs(node.right, voy, list) && dfs(node.left, voy, list);
    }

    return dfs(node.left, voy, list) && dfs(node.right, voy, list);
  }
}
