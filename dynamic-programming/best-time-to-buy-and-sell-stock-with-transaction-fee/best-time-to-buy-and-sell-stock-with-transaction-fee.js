/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
function maxProfit(prices, fee) {
  const n = prices.length;
  let profits = 0;
  let hold = -prices[0];

  for (let i = 1; i < n; i++) {
    profits = Math.max(profits, hold + prices[i] - fee);
    hold = Math.max(hold, profits - prices[i]);
  }
  return profits;
}
