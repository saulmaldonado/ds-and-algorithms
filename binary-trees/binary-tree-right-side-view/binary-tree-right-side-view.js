function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  const list = [];
  traverse(root, 0, list);
  return list;
}

function traverse(root, level, list) {
  if (root === null) {
    return;
  }

  if (list.length === level) {
    list.push(root.val);
  }

  traverse(root.right, level + 1, list);
  traverse(root.left, level + 1, list);
}
