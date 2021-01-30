class TreeNode3 {
  val: number;
  left: TreeNode3 | null;
  right: TreeNode3 | null;

  constructor(val: number, left: TreeNode3, right: TreeNode3) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class Point {
  x: number;
  y: number;
  node: TreeNode3;

  constructor(x: number, y: number, node: TreeNode3) {
    this.x = x;
    this.y = y;
    this.node = node;
  }
}

function comp(p1: Point, p2: Point): number {
  if (p1.x != p2.x) {
    return p1.x - p2.x;
  }

  if (p1.y != p2.y) {
    return p2.y - p1.y;
  }

  return p1.node.val - p2.node.val;
}

function verticalTraversal(root: TreeNode3 | null): number[][] {
  const res: number[][] = [];
  const queue: Point[] = [];

  traverse(root, 0, 0, queue);

  let prev: Point | null = null;

  let list = [];

  while (queue.length) {
    const p = queue.shift()!;

    if (prev === null || p.x !== prev.x) {
      if (prev !== null) {
        res.push(list);
      }
      list = [];
    }
    list.push(p.node.val);
    prev = p;
  }

  res.push(list);

  return res;
}

function traverse(root: TreeNode3 | null, x: number, y: number, queue: Point[]) {
  if (!root) {
    return;
  }

  queue.push(new Point(x, y, root));
  queue.sort(comp);
  traverse(root.left, x - 1, y - 1, queue);
  traverse(root.right, x + 1, y - 1, queue);
}
