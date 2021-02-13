function shortestPathBinaryMatrix(grid: number[][]): number {
  const directions: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  const n = grid.length;
  if (grid[0][0] || grid[n - 1][n - 1]) {
    return -1;
  }
  const queue: number[][] = [[0, 0]];
  let level = 1;
  while (queue.length > 0) {
    let curr = queue.length;

    while (curr > 0) {
      const pos: number[] = queue.shift()!;
      curr--;
      const i = pos[0];
      const j = pos[1];

      if (i == n - 1 && j == n - 1) {
        return level;
      }

      for (let a = 0; a < directions.length; a++) {
        const newI = i + directions[a][0];
        const newJ = j + directions[a][1];

        if (newI >= 0 && newI < n && newJ >= 0 && newJ < n && grid[newI][newJ] == 0) {
          queue.push([newI, newJ]);
          grid[newI][newJ] = 1;
        }
      }
    }
    level++;
  }

  return -1;
}
