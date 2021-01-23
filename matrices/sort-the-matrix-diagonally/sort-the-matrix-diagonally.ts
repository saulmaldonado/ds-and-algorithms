function diagonalSort(mat: number[][]): number[][] {
  const m: number = mat.length;
  const n: number = mat[0].length;

  for (let i = 0; i < m; i++) {
    sortDiagonal(i, 0, mat, m, n);
  }

  for (let j = 0; j < n; j++) {
    sortDiagonal(0, j, mat, m, n);
  }

  return mat;
}

function sortDiagonal(i: number, j: number, mat: number[][], m: number, n: number): void {
  const list: number[] = [];

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
    const newValue: number = list.pop()!;

    mat[i][j] = newValue;
    i--;
    j--;
  }
}
