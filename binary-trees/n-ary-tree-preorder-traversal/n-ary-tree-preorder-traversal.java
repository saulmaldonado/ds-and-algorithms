class Solution {
  public List<Integer> preorder(Node root) {
    List<Integer> list = new ArrayList<>();

    traverse(root, list);

    return list;
  }

  private void traverse(Node root, List<Integer> list) {
    if (root == null) {
      return;
    }

    list.add(root.val);

    for (Node node : root.children) {
      traverse(node, list);
    }
  }
}
