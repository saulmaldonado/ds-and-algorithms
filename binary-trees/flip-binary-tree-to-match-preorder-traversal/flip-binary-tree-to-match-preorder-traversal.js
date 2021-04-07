/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let i;

/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
function flipMatchVoyage(root, voyage) {
  const list = [];

  i = 0;

  if (dfs(root, voyage, list)) {
    return list;
  }

  return [-1];
}

/**
 *
 * @param {TreeNode} node
 * @param {number[]} voy
 * @param {number[]} list
 * @returns {boolean}
 */
function dfs(node, voy, list) {
  if (node === null) {
    return true;
  }

  if (node.val !== voy[i]) {
    return false;
  }

  i++;

  if (node.left !== null && node.left.val !== voy[i]) {
    list.push(node.val);
    return dfs(node.right, voy, list) && dfs(node.left, voy, list);
  }

  return dfs(node.left, voy, list) && dfs(node.right, voy, list);
}
