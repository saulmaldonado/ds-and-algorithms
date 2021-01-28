/**
 * @param {number} n
 * @return {number}
 */
function concatenatedBinary(n: number): number {
  let sum: number = 0;
  let count: number = 0;
  let mod: number = 1e9 + 7;

  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) == 0) {
      count++;
    }
    sum = (Number(BigInt(sum) << BigInt(count)) + i) % mod;
  }
  return sum;
}
