/**
 * @param {number[]} A
 * @return {number}
 */
function numberOfArithmeticSlices(A) {
  const n = A.length;
  let dp = 0;
  let sum = 0;

  for (let i = 2; i < n; i++) {
    if (A[i] - A[i - 1] == A[i - 1] - A[i - 2]) {
      dp++;
      sum += dp;
    } else {
      dp = 0;
    }
  }
  return sum;
}
