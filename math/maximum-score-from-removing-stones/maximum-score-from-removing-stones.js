/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function maximumScore(a, b, c) {
  const max = Math.max(a, Math.max(b, c));
  const sum = a + b + c;

  if (sum - max < max) {
    return sum - max;
  }
  return Math.floor(sum / 2);
}
