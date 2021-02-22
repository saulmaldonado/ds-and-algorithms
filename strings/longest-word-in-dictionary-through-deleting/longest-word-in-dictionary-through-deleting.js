/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
function findLongestWord(s, d) {
  let maxString = '';

  for (const str of d) {
    if (search(s, str)) {
      if (str.length > maxString.length || (str.length === maxString.length && str < maxString)) {
        maxString = str;
      }
    }
  }
  return maxString;
}

/**
 *
 * @param {string} s
 * @param {string} word
 * @return {boolean}
 */
function search(s, word) {
  let i = 0;
  let j = 0;
  let n = s.length;
  let m = word.length;

  while (i < n && j < m) {
    if (s[i] === word[j]) {
      i++;
      j++;
    } else {
      i++;
    }
  }
  return j === m;
}
