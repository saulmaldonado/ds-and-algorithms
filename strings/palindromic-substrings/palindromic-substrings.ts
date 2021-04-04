function countSubstrings(s: string): number {
  let ans: number = 0;

  for (let i = 0; i < s.length; i++) {
    ans += countPalindromesAroundCenter(s, i, i);
    ans += countPalindromesAroundCenter(s, i, i + 1);
  }

  return ans;
}

function countPalindromesAroundCenter(str: string, low: number, high: number): number {
  let ans: number = 0;

  while (low >= 0 && high < str.length) {
    if (str.charAt(low) != str.charAt(high)) {
      break;
    }

    low--;
    high++;

    ans++;
  }

  return ans;
}
