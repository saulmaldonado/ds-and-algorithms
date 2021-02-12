function solveNQueens(n: number): string[][] {
  const grid: string[][] = new Array(n).fill(null).map(() => new Array(n).fill('.'));

  const res: string[][] = [];

  place(res, grid, 0, n);

  return res;
}

function place(res: string[][], grid: string[][], row: number, n: number) {
  if (row === n) {
    const list: string[] = [];
    for (let i = 0; i < n; i++) {
      list.push(grid[i].join(''));
    }
    res.push(list.slice());
    return;
  }

  for (let col = 0; col < n; col++) {
    if (isValid2(grid, row, col, n)) {
      grid[row][col] = 'Q';
      place(res, grid, row + 1, n);
      grid[row][col] = '.';
    }
  }
}

function isValid2(grid: string[][], row: number, col: number, n: number): boolean {
  for (let i = 0; i < row; i++) {
    if (grid[i][col] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (grid[i][j] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (grid[i][j] === 'Q') {
      return false;
    }
  }

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (grid[i][j] === 'Q') {
      return false;
    }
  }
  return true;
}
