/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root: TreeNode | null): number[] {
  const avg: number[] = [];

  const queue: TreeNode[] = [];

  queue.push(root!);

  while (queue.length) {
    const n: number = queue.length;
    let count: number = n;
    let sum: number = 0;
    while (count > 0) {
      const curr: TreeNode = queue.shift()!;
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
