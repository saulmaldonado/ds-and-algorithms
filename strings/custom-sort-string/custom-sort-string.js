/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
function customSortString(S, T) {
  const freq = new Array(26).fill(0);

  for (let i = 0; i < T.length; i++) {
    const code = T[i].charCodeAt(0) - 'a'.charCodeAt(0);
    freq[code]++;
  }

  const sb = [];

  for (let i = 0; i < S.length; i++) {
    const code = S[i].charCodeAt(0) - 'a'.charCodeAt(0);
    while (freq[code] > 0) {
      sb.push(S[i]);
      freq[code]--;
    }
  }

  for (let i = 0; i < freq.length; i++) {
    const char = String.fromCharCode(i + 'a'.charCodeAt(0));
    while (freq[i] > 0) {
      sb.push(char);
      freq[i]--;
    }
  }
  return sb.join('');
}
