/**
 * @param {number} n
 * @return {number}
 */
function concatenatedBinary(n) {
  let sum = 0;
  let count = 0;
  let mod = 1e9 + 7;

  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) == 0) {
      count++;
    }
    sum = (Number(BigInt(sum) << BigInt(count)) + i) % mod;
  }
  return sum;
}
