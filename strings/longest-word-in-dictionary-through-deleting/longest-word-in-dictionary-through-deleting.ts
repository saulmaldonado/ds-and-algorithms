function findLongestWord(s: string, d: string[]): string {
  let maxString: string = '';

  for (const str of d) {
    if (search(s, str)) {
      if (str.length > maxString.length || (str.length === maxString.length && str < maxString)) {
        maxString = str;
      }
    }
  }
  return maxString;
}

function search(s: string, word: string): boolean {
  let i: number = 0;
  let j: number = 0;
  let n: number = s.length;
  let m: number = word.length;

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
