import java.util.Arrays;

class Solution {
  public int maxEnvelopes(int[][] envelopes) {
    int n = envelopes.length;

    Arrays.sort(envelopes, (a, b) -> {
      if (a[0] == b[0]) {
        return b[1] - a[1];
      }

      return a[0] - b[0];
    });

    int count = 0;
    int[] dp = new int[n];

    for (int[] envelope : envelopes) {
      int i = Arrays.binarySearch(dp, 0, count, envelope[1]);

      if (i < 0) {
        i = -(i + 1);
      }

      dp[i] = envelope[1];

      if (i == count) {
        count++;
      }
    }
    return count;
  }
}
