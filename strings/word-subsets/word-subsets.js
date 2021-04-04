/**
 * @param {string[]} A
 * @param {string[]} B
 * @return {string[]}
 */
function wordSubsets(A, B) {
  const maxFreqB = new Array(26).fill(0);

  for (let b of B) {
    const freqB = count(b);

    for (let i = 0; i < 26; i++) {
      maxFreqB[i] = Math.max(maxFreqB[i], freqB[i]);
    }
  }

  const ans = [];

  for (let a of A) {
    const freqA = count(a);
    if (compare(freqA, maxFreqB)) {
      ans.push(a);
    }
  }
  return ans;
}

/**
 *
 * @param {string} S
 * @returns {number[]}
 */
function count(S) {
  const freq = new Array(26).fill(0);

  for (let i = 0; i < S.length; i++) {
    freq[S[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  return freq;
}

/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */
function compare(a, b) {
  for (let i = 0; i < 26; i++) {
    if (a[i] < b[i]) {
      return false;
    }
  }
  return true;
}
