/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (n === 1) {
    return 1;
  }

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs2(n) {
  if (n === 1) {
    return 1;
  }

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
}
