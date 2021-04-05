/**
 * @param {number[]} A
 * @return {boolean}
 */
function isIdealPermutation(A) {
  for (let i = 0; i < A.length; i++) {
    if (Math.abs(A[i] - i) > 1) {
      return false;
    }
  }
  return true;
}
