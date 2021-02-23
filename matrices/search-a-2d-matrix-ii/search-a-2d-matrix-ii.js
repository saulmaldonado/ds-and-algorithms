/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false;
  }

  const h = matrix.length;
  const w = matrix[0].length;

  let i = 0;
  let j = w - 1;

  while (i < h && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}
