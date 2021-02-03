# Best Time to Buy and Sell Stock

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Example 1:

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Example 2:

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

### Constraints

`1 <= prices.length <= 105`
`0 <= prices[i] <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Kadane's Algorithm

Our main goal is to find a subsequence where the first number, buy, and last last number, sell, of the sub array has the highest possible difference.

We use subsequence here because order here matters. A buy price can only be pair with a sell price that occurs afterwards, in other words we cannot sell today's stock for yesterday's price.

Instead of trying to compare all single trades we can possibly make, we can use dynamic programming.

For everyday, we calculate the most profit we can make for that day by taking the max profit we can make for the previous day and add on anymore profit, if we can make any, for the current day. If we lose profit for that day, we can set the max profit to the same as the previous indicating that we have already sold for max profit the previous day and decided to make no trades for the current day.

```
prices = [7,1,5,3,6,4]
profit = [0,0,4,4,5,5]
```

To do this, we need to keep track of the best possible day to buy for every day.

```
prices = [7,1,5,3,6,4] // at day 3, the best possible previous day to buy is day 2 at a price of 1
              ^
```

The best way to do this is to keep track of the lowest price we've seen as the best prices to buy at. If current price is ever greater than the last best price to buy at, then we can set the current price as best price to buy at.

```
bestPrice = 7

prices = [7,1,5,3,6,4]
          ^

bestPrice = 1

prices = [7,1,5,3,6,4] // 1 < 7, set 1 as the best price to buy at
            ^
```

Now to calculate the max profit to make for every day we will take max between the difference of the last best price to buy and and the current price, and the max profit for the previous day

```
bestPrice = 1

prices = [7,1,5,3,6,4]
profit = [0,0,4, ]    // max(previousDay=4, 3 - bestPrice)
                ^

bestPrice = 1

prices = [7,1,5,3,6,4]
profit = [0,0,4,4, ]    // max(previousDay=4, 6 - bestPrice)
                  ^

bestPrice = 1

prices = [7,1,5,3,6,4]
profit = [0,0,4,4,5, ]    // max(previousDay=5, 4 - bestPrice)
                    ^

bestPrice = 1

prices = [7,1,5,3,6,4]
profit = [0,0,4,4,5,5]
                    ^
maxProfit = 5
```

Time: `O(N)` Where `N` is the length of prices

Space: `O(1)`

- [JavaScript](./best-time-to-buy-and-sell-stock.js)
- [TypeScript](./best-time-to-buy-and-sell-stock.ts)
- [Java](./best-time-to-buy-and-sell-stock.java)
- [Go](./best-time-to-buy-and-sell-stock.go)
</details>
