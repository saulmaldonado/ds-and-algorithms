function findMaxForm(strs: string[], m: number, n: number): number {
  const dp: number[][] = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (const s of strs) {
    let ones = 0;
    let zeros = 0;

    for (const c of s) {
      if (c == '1') {
        ones++;
      } else {
        zeros++;
      }
    }

    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }
  return dp[m][n];
}
