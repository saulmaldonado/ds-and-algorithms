/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    return myPow(x * x, Math.floor(n / 2));
  }
  return myPow(x * x, Math.floor(n / 2)) * x;
}
