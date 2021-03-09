function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
function addOneRow(root, v, d) {
  if (d === 1) {
    return new TreeNode(v, root, null);
  }

  const queue = [root];
  let depth = 1;

  while (queue.length) {
    let n = queue.length;
    while (n > 0) {
      const curr = queue.shift();
      if (depth === d - 1) {
        const left = curr.left;
        const right = curr.right;

        curr.left = new TreeNode(v, left, null);
        curr.right = new TreeNode(v, null, right);
      } else {
        if (curr.left != null) {
          queue.push(curr.left);
        }

        if (curr.right != null) {
          queue.push(curr.right);
        }
      }
      n--;
    }
    depth++;
  }
  return root;
}
