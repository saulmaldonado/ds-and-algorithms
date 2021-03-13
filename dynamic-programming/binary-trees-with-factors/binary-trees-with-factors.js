/**
 * @param {number[]} arr
 * @return {number}
 */
function numFactoredBinaryTrees(arr) {
  const n = arr.length;

  if (n === 1) {
    return 1;
  }

  const mod = 1e9 + 7;
  const map = {};

  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    map[arr[i]] = i;
  }

  const dp = new Array(n).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    let count = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0 && Math.floor(arr[i] / arr[j]) in map) {
        count += dp[j] * dp[map[Math.floor(arr[i] / arr[j])]];
      }
    }
    dp[i] = count;
  }
  let sum = 0;

  for (let num of dp) {
    sum += num;
  }

  return sum % mod;
}
