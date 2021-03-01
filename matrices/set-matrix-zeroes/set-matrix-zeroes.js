/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let zeroCol = false;
  let zeroRow = false;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == 0) {
        if (i == 0) {
          zeroRow = true;
        }

        if (j == 0) {
          zeroCol = true;
        }
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (zeroCol) {
    for (let i = 0; i < n; i++) {
      matrix[i][0] = 0;
    }
  }

  if (zeroRow) {
    for (let j = 0; j < m; j++) {
      matrix[0][j] = 0;
    }
  }
}
