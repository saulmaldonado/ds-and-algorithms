/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let len = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != ' ') {
      len++;
    } else if (len != 0) {
      return len;
    }
  }
  return len;
}
