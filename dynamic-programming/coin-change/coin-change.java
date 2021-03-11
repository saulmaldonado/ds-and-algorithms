class Solution {
  public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    int n = dp.length;
    int m = coins.length;
    Arrays.fill(dp, Integer.MAX_VALUE - 1);

    dp[0] = 0;

    for (int i = 0; i < m; i++) {
      int coin = coins[i];
      for (int j = coin; j < n; j++) {
        dp[j] = Math.min(dp[j], dp[j - coin] + 1);
      }
    }

    if (dp[n - 1] == Integer.MAX_VALUE - 1) {
      return -1;
    }

    return dp[n - 1];

  }
}
