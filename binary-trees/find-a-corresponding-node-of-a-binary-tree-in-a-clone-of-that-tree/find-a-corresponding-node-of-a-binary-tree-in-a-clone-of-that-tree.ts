class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(val: number) {
    this.val = val;
  }
}

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  return dfs(cloned, target);
}

function dfs(root: TreeNode | null, target: TreeNode | null): TreeNode | null {
  if (!root) return null;

  if (root.val === target?.val) return root;

  const left = dfs(root.left, target);
  if (left) return left;

  const right = dfs(root.right, target);
  if (right) return right;

  return null;
}
