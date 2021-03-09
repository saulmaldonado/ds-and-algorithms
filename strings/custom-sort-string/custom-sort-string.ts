function customSortString(S: string, T: string): string {
  const freq: number[] = new Array(26).fill(0);

  for (let i = 0; i < T.length; i++) {
    const code: number = T[i].charCodeAt(0) - 'a'.charCodeAt(0);
    freq[code]++;
  }

  const sb: string[] = [];

  for (let i = 0; i < S.length; i++) {
    const code: number = S[i].charCodeAt(0) - 'a'.charCodeAt(0);
    while (freq[code] > 0) {
      sb.push(S[i]);
      freq[code]--;
    }
  }

  for (let i = 0; i < freq.length; i++) {
    const char: string = String.fromCharCode(i + 'a'.charCodeAt(0));
    while (freq[i] > 0) {
      sb.push(char);
      freq[i]--;
    }
  }
  return sb.join('');
}
