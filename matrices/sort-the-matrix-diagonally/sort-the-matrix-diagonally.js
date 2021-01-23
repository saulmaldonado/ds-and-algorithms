/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function diagonalSort(mat) {
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    sortDiagonal(i, 0, mat, m, n);
  }

  for (let j = 0; j < n; j++) {
    sortDiagonal(0, j, mat, m, n);
  }

  return mat;
}

function sortDiagonal(i, j, mat, m, n) {
  const list = [];

  while (i < m && j < n) {
    list.push(mat[i][j]);
    i++;
    j++;
  }

  list.sort((a, b) => a - b);

  // put pointers back in bounds of mat
  i--;
  j--;

  while (i >= 0 && j >= 0) {
    const newValue = list.pop();

    mat[i][j] = newValue;
    i--;
    j--;
  }
}
