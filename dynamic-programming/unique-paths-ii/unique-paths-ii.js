/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1]) {
    return 0;
  }

  const dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

  dp[0][0] = 1;

  for (let i = 1; i < n; i++) {
    if (obstacleGrid[0][i - 1] == 0) {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (let i = 1; i < m; i++) {
    if (obstacleGrid[i - 1][0] == 0) {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i - 1][j] == 0) {
        dp[i][j] += dp[i - 1][j];
      }

      if (obstacleGrid[i][j - 1] == 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}
