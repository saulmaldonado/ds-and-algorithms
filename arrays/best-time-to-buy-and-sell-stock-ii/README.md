# Best Time to Buy and Sell Stock II

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

### Example 1:

```
Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```

### Example 2:

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

### Example 3:

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

### Constraints

`1 <= prices.length <= 3 * 10 ^ 4`

`0 <= prices[i] <= 10 ^ 4`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Greedy Buy and Sell

For this algorithm we want to be as greedy as possible. Since we are not limited to the number of trades we can make, we will buy every day we know that the stock price will go up the very next day. Then, when the next day comes around, sell for profit immediately to secure profits.

We can do this by, starting at the second day, take the difference between the current day and the last day. If the difference is positive, then we know buying on the previous day would give us a profit. We can add the profit to a running total.

```
profit = 0
[1,2,3,4,5]
 ^

profit = 1
[1,2,3,4,5] // difference between day 2 and day 1 is 1
 ^ ^

profit = 2
[1,2,3,4,5] // difference between day 3 and day 2 is 1
   ^ ^

profit = 3
[1,2,3,4,5] // difference between day 4 and day 3 is 1
     ^ ^

profit = 4
[1,2,3,4,5] // difference between day 5 and day 4 is 1
       ^ ^
```

#### Proof

Making frequent **profitable** greedy trades over a period of time is equally or more profitable than holding a single trade over the same period of time

Equally profitable:

```
// frequent trades

[1    2    3    4    5]
 b   s,b  s,b  s,b   s
      +1   +1   +1   +1 = 4

// one trade

[1    2    3    4    5]
 b                   s
                     +4 = 4
```

more profitable:

```
// frequent trades

[2    1    3    4    5]
      b   s,b  s,b   s
          +2   +1   +1 = 4

// one trade

[2    1    3    4    5]
 b                   s
                     +3 = 3
```

- [JavaScript](./best-time-to-buy-and-sell-stock-ii.js)
- [TypeScript](./best-time-to-buy-and-sell-stock-ii.ts)
- [Java](./best-time-to-buy-and-sell-stock-ii.java)
- [Go](./best-time-to-buy-and-sell-stock-ii.go)
</details>
