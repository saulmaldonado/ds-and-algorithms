/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const n = a.length;
  const m = b.length;

  let i = n - 1;
  let j = m - 1;

  let carry = 0;
  const chars = [];

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i] - '0';
      i--;
    }

    if (j >= 0) {
      sum += b[j] - '0';
      j--;
    }

    chars.push((sum & 1).toString());
    if (sum > 1) {
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry === 1) {
    chars.push('1');
  }

  return chars.reverse().join('');
}
