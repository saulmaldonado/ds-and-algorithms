# Best Time to Buy and Sell Stock with Transaction Fee

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

### Example 1

```
Input: prices = [1,3,2,8,4,9], fee = 2
Output: 8
Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
```

### Example 2

```
Input: prices = [1,3,7,5,10,3], fee = 3
Output: 6
```

### Constraints

`1 < prices.length <= 5 * 104`

`0 < prices[i], fee < 5 * 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Dymanic Programming

At the end of each day our profits is determined by:

1. Not having a stock our profits are `cash` the most amount of money we can have for the day

2. Having a stock and our profits are `cash - prices[i]` with the intention of selling our stock for profit

Assuming we buy a stock on the first day and our `cash` for the first day is `0`, we want to sell our stock only if selling it would net us more money than we had the previous day. Likewise we only want to buy a stock if buying it would also leave us with the most amount of profit or in otherwords give us the best buying price.

If we want to sell the stock our new profit would be `hold (the profits we had buying at the best price) + prices[i] (the current value) - fee`. If selling nets us more profit without a stock than the previous day then we would sell.

If we want to buy the stock our new profit would be `cash (the profits we had without holding a stock) - prices[i] (the current value)`. If buying nets us more profit with a stock than the previous day then we would buy.

Time: `O(N)`

Space: `O(1)`

- [JavaScript](./best-time-to-buy-and-sell-stock-with-transaction-fee.js)
- [TypeScript](./best-time-to-buy-and-sell-stock-with-transaction-fee.ts)
- [Java](./best-time-to-buy-and-sell-stock-with-transaction-fee.java)
- [Go](./best-time-to-buy-and-sell-stock-with-transaction-fee.go)

</details>
