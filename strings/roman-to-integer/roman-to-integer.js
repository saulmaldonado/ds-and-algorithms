/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const cur = map[s[i]];

    sum += cur;

    if (i > 0) {
      const next = map[s[i - 1]];

      if (next < cur) {
        sum -= next;
        i--;
      }
    }
  }
  return sum;
}
