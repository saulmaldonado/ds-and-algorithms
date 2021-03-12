/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
function hasAllCodes(s, k) {
  if (s.length < k || s.length - k + 1 < 2 ** k) {
    return false;
  }

  const seen = new Set();

  const total = 2 ** k;

  const n = s.length;
  let start = 0;
  let end = start + k;

  while (end <= n) {
    const curr = s.substring(start, end);

    if (!seen.has(curr)) {
      seen.add(curr);
    }

    if (seen.size == total) {
      return true;
    }

    start++;
    end++;
  }
  return false;
}
