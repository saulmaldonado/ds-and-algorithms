/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
function shortestToChar(s, c) {
  let n = s.length;
  const res = [];
  let prev = -n;

  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }

    res[i] = i - prev;
  }

  for (let i = prev - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }

    res[i] = Math.min(res[i], prev - i);
  }

  return res;
}
