function maxProfit(prices: number[], fee: number): number {
  const n: number = prices.length;
  let profits = 0;
  let hold: number = -prices[0];

  for (let i = 1; i < n; i++) {
    profits = Math.max(profits, hold + prices[i] - fee);
    hold = Math.max(hold, profits - prices[i]);
  }
  return profits;
}
