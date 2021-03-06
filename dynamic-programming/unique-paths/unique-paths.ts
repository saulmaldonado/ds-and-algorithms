function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill(null).map(() => new Array(n));

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let top: number = dp[i - 1][j];
      let left: number = dp[i][j - 1];
      dp[i][j] = top + left;
    }
  }

  return dp[m - 1][n - 1];
}
