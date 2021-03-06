/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
  if (s === p || s === '*') {
    return true;
  }

  const S = s.length + 1;
  const P = p.length + 1;

  const dp = new Array(S).fill(null).map(() => new Array(P).fill(false));

  dp[0][0] = true;

  for (let i = 1; i < P; i++) {
    dp[0][i] = p[i - 1] === '*' && dp[0][i - 1];
  }

  for (let i = 1; i < S; i++) {
    for (let j = 1; j < P; j++) {
      let startP = j - 1;
      let startS = i - 1;
      if (p[startP] === '*') {
        dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
      } else if (s[startS] === p[startP] || p[startP] === '?') {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[S - 1][P - 1];
}

function isMatch2(s, p) {
  let i = 0;
  let j = 0;
  let prevI = 0;
  let prevJ = -1;

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
