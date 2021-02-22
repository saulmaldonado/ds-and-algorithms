/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
  let i = 0;
  const n = s.length;

  while (i < n && s[i] === ' ') {
    i++;
  }

  if (i === n) {
    return false;
  }

  if (s[i] === '+' || s[i] === '-') {
    i++;
  }

  if (i === n) {
    return false;
  }

  let digits = 0;
  let points = 0;

  while (i < n && ((s[i] >= '0' && s[i] <= '9') || s[i] === '.')) {
    if (s[i] === '.') {
      if (points === 1) {
        return false;
      }
      points++;
    } else {
      digits++;
    }
    i++;
  }

  if (digits < 1) {
    return false;
  }

  if (i < n && (s[i] === 'e' || s[i] === 'E')) {
    i++;

    if (i === n) {
      return false;
    }

    if (s[i] === '+' || s[i] === '-') {
      i++;
    }

    if (i === n) {
      return false;
    }

    while (i < n && s[i] >= '0' && s[i] <= '9') {
      i++;
    }
  }

  return i === n;
}
