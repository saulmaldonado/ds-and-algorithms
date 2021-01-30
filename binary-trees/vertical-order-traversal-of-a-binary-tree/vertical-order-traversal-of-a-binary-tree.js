function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function Point(x, y, node) {
  this.x = x;
  this.y = y;
  this.node = node;
}

function comp(p1, p2) {
  if (p1.x != p2.x) {
    return p1.x - p2.x;
  }

  if (p1.y != p2.y) {
    return p2.y - p1.y;
  }

  return p1.node.val - p2.node.val;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function verticalTraversal(root) {
  const res = [];
  const queue = [];

  traverse(root, 0, 0, queue);

  let prev = null;

  let list = [];

  while (queue.length) {
    const p = queue.shift();

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

function traverse(root, x, y, queue) {
  if (!root) {
    return;
  }

  queue.push(new Point(x, y, root));
  queue.sort(comp);
  traverse(root.left, x - 1, y - 1, queue);
  traverse(root.right, x + 1, y - 1, queue);
}
