function isMatch(s: string, p: string): boolean {
  if (s === p || s === '*') {
    return true;
  }

  const S: number = s.length + 1;
  const P: number = p.length + 1;

  const dp: boolean[][] = new Array(S).fill(null).map(() => new Array(P).fill(false));

  dp[0][0] = true;

  for (let i = 1; i < P; i++) {
    dp[0][i] = p[i - 1] === '*' && dp[0][i - 1];
  }

  for (let i = 1; i < S; i++) {
    for (let j = 1; j < P; j++) {
      let startP: number = j - 1;
      let startS: number = i - 1;
      if (p[startP] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else if (s[startS] === p[startP] || p[startP] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[S - 1][P - 1];
}

function isMatch2(s: string, p: string): boolean {
  let i: number = 0;
  let j: number = 0;
  let prevI: number = 0;
  let prevJ: number = -1;

  while (i < s.length) {
    if (j < p.length && (p[j] === '?' || s[i] === p[j])) {
      i++;
      j++;
    } else if (j < p.length && p[j] === '*') {
      prevJ = j;
      prevI = i;
      j++;
    } else if (prevJ !== -1) {
      prevI++;
      i = prevI;

      j = prevJ;
    } else {
      return false;
    }
  }
  while (j < p.length && p[j] === '*') {
    j++;
  }

  return j === p.length;
}
