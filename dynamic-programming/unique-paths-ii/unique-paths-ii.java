class Solution {
  public int uniquePathsWithObstacles(int[][] oGrid) {
    int m = oGrid.length;
    int n = oGrid[0].length;

    if(oGrid[0][0] == 1 || oGrid[m - 1][n - 1] == 1) {
      return 0;
    }

    int[][] dp = new int[m][n];

    dp[0][0] = 1;

    for(int i = 1; i < n; i++) {
      if(oGrid[0][i - 1] == 0) {
        dp[0][i] = dp[0][i - 1];
      }
    }

    for(int i = 1; i < m; i++) {
      if(oGrid[i - 1][0] == 0) {
        dp[i][0] = dp[i - 1][0];
      }
    }

    for(int i = 1; i < m; i++) {
      for(int j = 1; j < n; j++) {
        if(oGrid[i - 1][j] == 0) {
          dp[i][j] += dp[i - 1][j];
        }

        if(oGrid[i][j - 1] == 0) {
          dp[i][j] += dp[i][j - 1];
        }
      }
    }

    return dp[m - 1][n - 1];
  }
}
