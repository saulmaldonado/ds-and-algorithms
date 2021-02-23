function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return false;
  }

  const h: number = matrix.length;
  const w: number = matrix[0].length;

  let i: number = 0;
  let j: number = w - 1;

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
