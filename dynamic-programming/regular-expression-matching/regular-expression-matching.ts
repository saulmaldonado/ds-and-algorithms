function isMatch(s: string, p: string): boolean {
  const S: number = s.length + 1;
  const P: number = p.length + 1;

  const dp = new Array(S).fill(null).map(() => new Array(P).fill(false));

  dp[0][0] = true;

  for (let i = 1; i < P; i++) {
    if (p[i - 1] === '*') {
      dp[0][i] = dp[0][i - 2];
    }
  }

  for (let i = 1; i < S; i++) {
    for (let j = 1; j < P; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] === '*') {
        if (p[j - 2] !== s[i - 1] && p[j - 2] !== '.') {
          dp[i][j] = dp[i][j - 2];
        } else {
          dp[i][j] = dp[i][j - 1] || dp[i - 1][j] || dp[i][j - 2];
        }
      }
    }
  }
  return dp[s.length][p.length];
}
