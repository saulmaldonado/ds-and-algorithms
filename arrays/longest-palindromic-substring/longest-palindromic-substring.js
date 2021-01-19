/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let start = 0;
  let end = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = findLongest(s, i, i);
    const len2 = findLongest(s, i, i + 1);

    const len = Math.max(len1, len2);

    if (len > maxLen) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
      maxLen = len;
    }
  }

  return s.substring(start, end + 1);
}

function findLongest(s, i, j) {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }

  return j - i - 1;
}
