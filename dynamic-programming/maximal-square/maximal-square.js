/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  const h = matrix.length;
  const l = matrix[0].length;

  const dp = new Array(h).fill(undefined).map(() => new Array(l).fill(0));

  let ans = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < l; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = 1;
        if (i > 0 && j > 0) {
          dp[i][j] += Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]);
        }

        ans = Math.max(dp[i][j], ans);
      }
    }
  }
  return ans * ans;
}
