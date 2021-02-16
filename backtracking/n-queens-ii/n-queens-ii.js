/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
  const grid = new Array(n).fill(null).map(() => new Array(n).fill('.'));

  return place(grid, 0, n, 0);
}

function place(grid, row, n, count) {
  if (row === n) {
    return count + 1;
  }

  for (let col = 0; col < n; col++) {
    if (isValid(grid, col, row, n)) {
      grid[row][col] = 'Q';
      count = place(grid, row + 1, n, count);
      grid[row][col] = '.';
    }
  }
  return count;
}

function isValid(grid, col, row, n) {
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

  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (grid[i][j] === 'Q') {
      return false;
    }
  }

  return true;
}
