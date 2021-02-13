class Solution {
  public int removeBoxes(int[] boxes) {
    int n = boxes.length;
    int[][][] dp = new int[n][n][n];
    return dfs(boxes, 0, n - 1, 0, dp);
  }

  private int dfs(int[] boxes, int i, int j, int k, int[][][] dp) {

    if (i > j) {
      return 0;

    }

    if (i == j) {
      return (k + 1) * (k + 1);
    }

    if (dp[i][j][k] != 0) {
      return dp[i][j][k];
    }

    int count = 0;

    int left = i;

    while (left <= j && boxes[left] == boxes[i]) {
      left++;
      count++;
    }

    int start = left;

    int res = (count + k) * (count + k) + dfs(boxes, start, j, 0, dp);

    int m = left;

    while (m <= j) {
      if (boxes[m] == boxes[i] && boxes[m - 1] != boxes[i]) {
        res = Math.max(res, dfs(boxes, start, m - 1, 0, dp) + dfs(boxes, m, j, count + k, dp));
      }
      m++;
    }
    dp[i][j][k] = res;
    return res;
  }
}
