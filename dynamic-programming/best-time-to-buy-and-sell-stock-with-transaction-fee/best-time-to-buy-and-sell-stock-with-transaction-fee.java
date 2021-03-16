class Solution {
  public int maxProfit(int[] prices, int fee) {
    int n = prices.length;
    int profits = 0;
    int hold = -prices[0];

    for(int i = 1; i < n; i++) {
      profits = Math.max(profits, hold + prices[i] - fee);
      hold = Math.max(hold, profits - prices[i]);
    }

    return profits;
  }
}
