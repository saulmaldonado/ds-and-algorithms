/**
 * @param {string} s
 * @return {number}
 */
function removePalindromeSub(s) {
  if (!s) {
    return 0;
  }

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return 2;
    }

    left++;
    right--;
  }
  return 1;
}
