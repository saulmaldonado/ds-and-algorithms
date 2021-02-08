class Solution {
  public int[] shortestToChar(String s, char c) {
    int n = s.length();
    int prev = -n;
    int[] res = new int[n];

    for (int i = 0; i < n; i++) {
      if (s.charAt(i) == c) {
        prev = i;
      }
      res[i] = i - prev;
    }

    for (int i = prev - 1; i >= 0; i--) {
      if (s.charAt(i) == c) {
        prev = i;
      }
      res[i] = Math.min(res[i], prev - i);
    }

    return res;
  }
}
