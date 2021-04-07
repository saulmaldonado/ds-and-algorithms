let i: number;

function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  const list: number[] = [];

  i = 0;

  if (dfs(root, voyage, list)) {
    return list;
  }

  return [-1];
}

function dfs(node: TreeNode | null, voy: number[], list: number[]): boolean {
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
