function numberOfArithmeticSlices(A: number[]): number {
  const n = A.length;
  let dp: number = 0;
  let sum: number = 0;

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
