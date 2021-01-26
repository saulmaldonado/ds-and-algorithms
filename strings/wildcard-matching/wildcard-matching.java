class Solution {
  public boolean isMatch(String s, String p) {

    if (s.equals(p) || p.equals("*"))
      return true;

    int S = s.length() + 1;
    int P = p.length() + 1;

    boolean[][] dp = new boolean[S][P];

    dp[0][0] = true;

    for (int i = 1; i < P; i++) {
      dp[0][i] = p.charAt(i - 1) == '*' && dp[0][i - 1];
    }

    for (int i = 1; i < S; i++) {
      for (int j = 1; j < P; j++) {
        int startP = j - 1;
        int startS = i - 1;
        if (p.charAt(startP) == '*') {
          dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
        } else if (s.charAt(startS) == p.charAt(startP) || p.charAt(startP) == '?') {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }

    return dp[S - 1][P - 1];
  }
}
