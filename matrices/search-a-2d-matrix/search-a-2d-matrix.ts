function searchMatrix(matrix: number[][], target: number): boolean {
  const n = matrix.length;
  const m = matrix[0].length;

  let i = 0;
  let j = m - 1;

  while (i < n && i >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }

    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}

function searchMatrix2(matrix: number[][], target: number): boolean {
  let n = matrix.length;
  let m = matrix[0].length;

  let left = 0;
  let right = n * m - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let midCell = matrix[Math.floor(mid / m)][mid % m];

    if (midCell == target) {
      return true;
    }

    if (midCell > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
