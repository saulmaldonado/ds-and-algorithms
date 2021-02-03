function maxProfit(prices: number[]): number {
  if (prices.length < 2) {
    return 0;
  }

  let maxProfit: number = 0;
  let min: number = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - min);
    }
  }
  return maxProfit;
}
