const directions = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
let n: number;
let m: number;

function pacificAtlantic(matrix: number[][]): number[][] {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  n = matrix.length;
  m = matrix[0].length;
  const res = [];

  const flowsToPacific: boolean[][] = new Array(n).fill(null).map(() => new Array(m).fill(false));
  const flowsToAtlantic: boolean[][] = new Array(n).fill(null).map(() => new Array(m).fill(false));

  const pacificQueue: number[][] = [];
  const atlanticQueue: number[][] = [];

  for (let i = 0; i < n; i++) {
    pacificQueue.push([i, 0]);
    atlanticQueue.push([i, m - 1]);
  }

  for (let i = 0; i < m; i++) {
    pacificQueue.push([0, i]);
    atlanticQueue.push([n - 1, i]);
  }

  traverse(pacificQueue, flowsToPacific, matrix);
  traverse(atlanticQueue, flowsToAtlantic, matrix);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (flowsToAtlantic[i][j] && flowsToPacific[i][j]) {
        res.push([i, j]);
      }
    }
  }
  return res;
}

function traverse(queue: number[][], reachable: boolean[][], matrix: number[][]): void {
  while (queue.length) {
    const curr: number[] = queue.shift()!;
    const row = curr[0];
    const col = curr[1];

    reachable[row][col] = true;

    for (const dir of directions) {
      const newRow = curr[0] + dir[0];
      const newCol = curr[1] + dir[1];

      if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= m) {
        continue;
      }

      if (reachable[newRow][newCol]) {
        continue;
      }

      if (matrix[row][col] > matrix[newRow][newCol]) {
        continue;
      }

      queue.push([newRow, newCol]);
    }
  }
}
