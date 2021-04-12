function deepestLeavesSum(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const queue: TreeNode[] = [root];
  let sum = 0;

  while (queue.length) {
    let num = queue.length;
    sum = 0;
    while (num > 0) {
      const curr = queue.shift()!;
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
