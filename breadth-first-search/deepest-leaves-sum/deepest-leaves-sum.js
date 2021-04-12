function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function deepestLeavesSum(root) {
  const queue = [root];
  let sum = 0;

  while (queue.length) {
    let num = queue.length;
    sum = 0;
    while (num > 0) {
      const curr = queue.shift();
      sum += curr.val;

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }

      num--;
    }
  }
  return sum;
}
