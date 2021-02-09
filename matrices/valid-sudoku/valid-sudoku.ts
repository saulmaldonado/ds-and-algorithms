function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == '.') continue;
      const res: boolean = validate(i, j, board);
      if (!res) return res;
    }
  }
  return true;
}

function validate(y: number, x: number, board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    if (i === y) {
      continue;
    }
    if (board[i][x] === board[y][x]) {
      return false;
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (x === i) {
      continue;
    }

    if (board[y][i] === board[y][x]) {
      return false;
    }
  }

  let a = ~~(y / 3) * 3;
  let b = ~~(x / 3) * 3;

  for (let i = a; i < a + 3; i++) {
    for (let j = b; j < b + 3; j++) {
      if (i === y && j === x) {
        continue;
      }
      if (board[i][j] === board[y][x]) {
        return false;
      }
    }
  }

  return true;
}
