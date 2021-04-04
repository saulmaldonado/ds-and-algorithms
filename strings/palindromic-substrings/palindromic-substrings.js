/**
 * @param {string} s
 * @return {number}
 */
function countSubstrings(s) {
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    ans += countPalindromesAroundCenter(s, i, i);
    ans += countPalindromesAroundCenter(s, i, i + 1);
  }

  return ans;
}

function countPalindromesAroundCenter(str, low, high) {
  let ans = 0;

  while (low >= 0 && high < str.length()) {
    if (str.charAt(low) != str.charAt(high)) {
      break;
    }

    low--;
    high++;

    ans++;
  }

  return ans;
}
