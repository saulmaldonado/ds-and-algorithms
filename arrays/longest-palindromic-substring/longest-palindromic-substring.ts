function longestPalindrome(s: string): string {
  let start: number = 0;
  let end: number = 0;
  let maxLen: number = 0;

  for (let i = 0; i < s.length; i++) {
    const len1: number = findLongest(s, i, i);
    const len2: number = findLongest(s, i, i + 1);

    const len: number = Math.max(len1, len2);

    if (len > maxLen) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
      maxLen = len;
    }
  }

  return s.substring(start, end + 1);
}

function findLongest(s: string, i: number, j: number): number {
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    i--;
    j++;
  }

  return j - i - 1;
}
