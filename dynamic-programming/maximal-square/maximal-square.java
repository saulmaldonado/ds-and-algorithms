class Solution {
  public int maximalSquare(char[][] matrix) {
    int h = matrix.length;
    int l = matrix[0].length;

    int[][] dp = new int[h][l];

    int ans = 0;

    for (int i = 0; i < h; i++) {
      for (int j = 0; j < l; j++) {
        int curr = matrix[i][j];

        if (curr == '1') {
          dp[i][j] = 1;

          if (i > 0 && j > 0) {
            dp[i][j] += Math.min(Math.min(dp[i - 1][j], dp[i - 1][j - 1]), dp[i][j - 1]);
          }

          ans = Math.max(dp[i][j], ans);
        }
      }
    }
    return ans * ans;
  }
}
