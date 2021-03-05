function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
  const avg = [];

  const queue = [];

  queue.push(root);

  while (queue.length) {
    const n = queue.length;
    let count = n;
    let sum = 0;
    while (count > 0) {
      const curr = queue.shift();
      sum += curr.val;
      if (curr.left !== null) {
        queue.push(curr.left);
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      }

      count--;
    }
    avg.push(sum / n);
  }
  return avg;
}
