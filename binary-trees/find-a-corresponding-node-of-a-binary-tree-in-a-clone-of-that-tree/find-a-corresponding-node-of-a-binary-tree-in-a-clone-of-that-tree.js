class TreeNode {
  val;
  left = null;
  right = null;

  constructor(val) {
    this.val = val;
  }
}

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function getTargetCopy(original, cloned, target) {
  return dfs(cloned, target);
}

function dfs(root, target) {
  if (!root) return null;

  if (root.val === target.val) return root;

  const left = dfs(root.left, target);
  if (left) return left;

  const right = dfs(root.right, target);
  if (right) return right;

  return null;
}
