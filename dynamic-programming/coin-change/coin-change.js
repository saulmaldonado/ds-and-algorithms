/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(~~((1 << 31) - 2));
  let n = dp.length;
  let m = dp.length;

  dp[0] = 0;

  for (let i = 0; i < m; i++) {
    let coin = coins[i];
    for (let j = coin; j < n; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }

  if (dp[amount] == ~~((1 << 31) - 2)) {
    return -1;
  }

  return dp[amount];
}
