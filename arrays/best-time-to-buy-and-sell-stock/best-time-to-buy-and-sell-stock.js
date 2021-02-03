/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let maxProfit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min);
    }
  }
  return maxProfit;
}
