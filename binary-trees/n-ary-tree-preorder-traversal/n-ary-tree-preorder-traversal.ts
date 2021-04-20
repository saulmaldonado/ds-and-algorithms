class NAryNode {
  val: number;
  children: NAryNode[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: NAryNode | null): number[] {
  const list: number[] = [];
  traverse(root, list);
  return list;
}

function traverse(root: NAryNode | null, list: number[]) {
  if (root === null) {
    return;
  }

  list.push(root.val);

  for (let node of root.children) {
    traverse(node, list);
  }
}
