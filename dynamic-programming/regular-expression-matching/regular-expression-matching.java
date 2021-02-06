class Solution {
  public boolean isMatch(String s, String p) {
    int S = s.length() + 1;
    int P = p.length() + 1;

    boolean[][] dp = new boolean[S][P];

    dp[0][0] = true;

    for (int i = 1; i < P; i++) {
      if (p.charAt(i - 1) == '*') {
        dp[0][i] = dp[0][i - 2];
      }
    }

    for (int i = 1; i < S; i++) {
      for (int j = 1; j < P; j++) {
        if (s.charAt(i - 1) == p.charAt(j - 1) || p.charAt(j - 1) == '.') {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p.charAt(j - 1) == '*') {
          if (p.charAt(j - 2) != s.charAt(i - 1) && p.charAt(j - 2) != '.') {
            dp[i][j] = dp[i][j - 2];
          } else {
            dp[i][j] = (dp[i][j - 1] || dp[i - 1][j] || dp[i][j - 2]);
          }
        }
      }
    }

    return dp[s.length()][p.length()];
  }
}
