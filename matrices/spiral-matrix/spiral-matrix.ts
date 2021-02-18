function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [];
  const n: number = matrix[0].length;
  const m: number = matrix.length;

  let i: number = 0;
  let j: number = n - 1;
  let a: number = 0;
  let b: number = m - 1;

  while (i <= j && a <= b) {
    for (let col = i; col <= j; col++) {
      ans.push(matrix[a][col]);
    }

    for (let row = a + 1; row <= b; row++) {
      ans.push(matrix[row][j]);
    }

    if (i < j && a < b) {
      for (let col = j - 1; col > i; col--) {
        ans.push(matrix[b][col]);
      }

      for (let row = b; row > a; row--) {
        ans.push(matrix[row][i]);
      }
    }

    i++;
    j--;
    a++;
    b--;
  }
  return ans;
}
