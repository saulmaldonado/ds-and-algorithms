function minDistance(word1: string, word2: string): number {
  if (word1.length === 0) {
    return word2.length;
  } else if (word2.length === 0) {
    return word1.length;
  }

  const n: number = word1.length + 1;
  const m: number = word2.length + 1;

  const dp: number[][] = new Array(n).fill(null).map(() => new Array(m).fill(0));

  for (let i = 1; i < m; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
      }
    }
  }
  return dp[n - 1][m - 1];
}
