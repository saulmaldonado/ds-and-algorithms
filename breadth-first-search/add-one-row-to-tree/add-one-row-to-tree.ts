class TreeNode4 {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function addOneRow(root: TreeNode4 | null, v: number, d: number): TreeNode4 | null {
  if (d === 1) {
    return new TreeNode4(v, root, null);
  }

  const queue: TreeNode4[] = [root!];
  let depth: number = 1;

  while (queue.length) {
    let n = queue.length;
    while (n > 0) {
      const curr: TreeNode4 = queue.shift()!;
      if (depth === d - 1) {
        const left: TreeNode4 | null = curr.left;
        const right: TreeNode4 | null = curr.right;

        curr.left = new TreeNode4(v, left, null);
        curr.right = new TreeNode4(v, null, right);
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
