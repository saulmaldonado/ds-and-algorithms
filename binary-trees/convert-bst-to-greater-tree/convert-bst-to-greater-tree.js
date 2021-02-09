function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
  traverse(root, 0);
  return root;
}

function traverse(root, sum) {
  if (root === null) {
    return sum;
  }

  sum = traverse(root.right, sum);

  sum += root.val;

  root.val = sum;

  sum = traverse(root.left, sum);

  return sum;
}
