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

class Solution {
  public boolean isMatch(String s, String p) {
    int i = 0;
    int j = 0;
    int prevI = 0;
    int prevJ = -1; // init. to -1 until we find the first *

    while (i < s.length()) {
      if (j < p.length() && (p.charAt(j) == '?' || s.charAt(i) == p.charAt(j))) { // characters match or p is at ?
        i++;
        j++;
      } else if (j < p.length() && p.charAt(j) == '*') { // p is ?
        prevJ = j; // set backtracking index for j
        prevI = i; // set backtracking index for i
        j++; // increment p pointer only. greedy approach, match as little characters with *
             // as possible
      } else if (prevJ != -1) { // we can backtrack to a *
        prevI++;
        i = prevI; // backtrack and this time increment i

        p = prevJ + 1; // backtrack and increment to next character
      } else {
        return false; // if we are at the end of p, the strings do not match
      }
    }

    while (j < p.length() && p.charAt(j) == '*') { // at end of s, check for * at end of p
      j++;
    }

    return j == p.length(); // we are at the end of p
  }
}
