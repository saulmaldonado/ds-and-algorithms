class Solution {
  public int minDistance(String word1, String word2) {
    if (word1.length() == 0) {
      return word2.length();
    } else if (word2.length() == 0) {
      return word1.length();
    }

    int n = word1.length() + 1;
    int m = word2.length() + 1;

    int[][] dp = new int[n][m];

    dp[0][0] = 0;

    for (int i = 1; i < m; i++) {
      dp[0][i] = dp[0][i - 1] + 1;
    }

    for (int i = 1; i < n; i++) {
      dp[i][0] = dp[i - 1][0] + 1;
    }

    for (int i = 1; i < n; i++) {
      for (int j = 1; j < m; j++) {
        if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
        }
      }
    }
    return dp[n - 1][m - 1];
  }
}
