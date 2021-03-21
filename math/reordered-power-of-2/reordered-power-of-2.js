/**
 * @param {number} N
 * @return {boolean}
 */
function reorderedPowerOf2(N) {
  const nFreq = countDigits(N);
  let i = 0;

  while (i < 30) {
    if (equals(nFreq, countDigits(1 << i))) {
      return true;
    }
    i++;
  }
  return false;
}

/**
 * @param {number} n
 * @return {number[]}
 */
function countDigits(n) {
  const freq = new Array(10).fill(0);
  while (n > 0) {
    let lastDigit = n % 10;
    freq[lastDigit]++;
    n = Math.floor(n / 10);
  }
  return freq;
}

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {boolean}
 */
function equals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
