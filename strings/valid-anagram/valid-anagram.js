/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram2(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const chars = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
    chars[code]++;
  }

  for (let i = 0; i < t.length; i++) {
    let code = t[i].charCodeAt(0) - 'a'.charCodeAt(0);
    chars[code]--;
    if (chars[code] < 0) {
      return false;
    }
  }
  return true;
}
