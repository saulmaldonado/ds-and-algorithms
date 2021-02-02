/**
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
  let count = 0;
  while (n != 0) {
    count++;
    n &= n - 1;
  }
  return count;
}
