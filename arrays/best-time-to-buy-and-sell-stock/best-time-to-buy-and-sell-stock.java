class Solution {
  public int maxProfit(int[] prices) {
    if (prices.length < 2) {
      return 0;
    }

    int maxProfit = 0;
    int min = prices[0];

    for (int i = 1; i < prices.length; i++) {
      if (prices[i] <= min) {
        min = prices[i];
      } else {
        maxProfit = Math.max(maxProfit, prices[i] - min);
      }
    }
    return maxProfit;
  }
}
