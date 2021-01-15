function minPathSum(grid: number[][]): number {
  const h: number = grid.length;
  const w: number = grid[0].length;
  const dp: number[][] = new Array(h).fill(null).map(() => new Array(w).fill(0));

  dp[0][0] = grid[0][0];

  for (let i = 1; i < w; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }

  for (let i = 1; i < h; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
    }
  }

  return dp[h - 1][w - 1];
}
