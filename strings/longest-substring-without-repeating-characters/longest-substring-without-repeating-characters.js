/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const n = s.length;
  let maxLength = 0;
  const indexMap = {};

  let j = 0;

  for (let i = 0; i < n; i++) {
    const curr = s[i];
    if (indexMap[curr]) {
      j = Math.max(indexMap[curr], j);
    }

    const currLength = i - j + 1;

    maxLength = Math.max(currLength, maxLength);

    indexMap[curr] = i + 1;
  }
  return maxLength;
}
