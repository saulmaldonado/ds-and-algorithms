/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getSmallestString(n, k) {
  const chars = [];

  for (let i = n; i >= 1; i--) {
    let x = Math.min(k - (n - 1), 26);
    k -= x;
    n--;
    chars[i - 1] = String.fromCharCode(x - 1 + 97);
  }

  return chars.join('');
}
