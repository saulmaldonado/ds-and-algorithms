function rightSideView(root: TreeNode | null): number[] {
  const list: number[] = [];
  traverse(root, 0, list);
  return list;
}

function traverse(root: TreeNode | null, level: number, list: number[]) {
  if (root === null) {
    return;
  }

  if (list.length === level) {
    list.push(root.val);
  }

  traverse(root.right, level + 1, list);
  traverse(root.left, level + 1, list);
}
