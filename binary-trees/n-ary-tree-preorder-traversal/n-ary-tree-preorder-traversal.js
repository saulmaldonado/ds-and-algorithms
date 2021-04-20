function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
  const list = [];
  traverse(root, list);
  return list;
}

/**
 *
 * @param {Node} root
 * @param {number[]} list
 * @returns
 */
function traverse(root, list) {
  if (root === null) {
    return;
  }

  list.push(root.val);

  for (let node of root.children) {
    traverse(node, list);
  }
}
