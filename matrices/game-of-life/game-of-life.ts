function gameOfLife(board: number[][]): void {
  const l: number = board[0].length;
  const h: number = board.length;

  const res: number[][] = new Array(h).fill(undefined).map(() => new Array(l).fill(0));

  const dirs: number[][] = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      let liveCells: number = 0;

      for (let dir of dirs) {
        const x = j + dir[1];
        const y = i + dir[0];

        if (x >= 0 && x < l && y >= 0 && y < h) {
          if (board[y][x] == 1) {
            liveCells++;
          }
        }
      }

      if (liveCells < 2) {
        res[i][j] = 0;
      } else {
        if (liveCells > 3) {
          res[i][j] = 0;
        } else if (liveCells === 3) {
          res[i][j] = 1;
        } else if (board[i][j] === 1) {
          res[i][j] = 1;
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      board[i][j] = res[i][j];
    }
  }
}
