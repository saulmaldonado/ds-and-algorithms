/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function solveSudoku(board) {
  solve(0, 0, board);
}

function solve(i, j, board) {
  if (j === board[0].length) {
    j = 0;
    i++;

    if (i === board.length) {
      return true;
    }
  }

  if (board[i][j] !== '.') {
    return solve(i, j + 1, board);
  }

  for (let a = 1; a < 10; a++) {
    const curr = String(a);

    if (valid(i, j, curr, board)) {
      board[i][j] = curr;

      if (solve(i, j + 1, board)) {
        return true;
      }
      board[i][j] = '.';
    }
  }

  return false;
}

function valid(i, j, curr, board) {
  for (let a = 0; a < board.length; a++) {
    if (curr == board[a][j]) {
      return false;
    }
  }

  for (let b = 0; b < board[0].length; b++) {
    if (curr === board[i][b]) {
      return false;
    }
  }

  const subGridRow = ~~(i / 3) * 3;
  const subGridCol = ~~(j / 3) * 3;

  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      if (board[subGridRow + a][subGridCol + b] === curr) {
        return false;
      }
    }
  }

  return true;
}
