function generateMatrix(n: number): number[][] {
  const grid: number[][] = new Array(n).fill(null).map(() => new Array(n));

  let i: number = 0;
  let j: number = n - 1;
  let a: number = 0;
  let b: number = n - 1;

  let counter: number = 1;

  while (i <= j && a <= b) {
    for (let col = i; col <= j; col++) {
      grid[a][col] = counter++;
    }

    for (let row = a + 1; row <= b; row++) {
      grid[row][j] = counter++;
    }

    if (i < j || a < b) {
      for (let col = j - 1; col >= i + 1; col--) {
        grid[b][col] = counter++;
      }

      for (let row = b; row > a; row--) {
        grid[row][i] = counter++;
      }
    }

    i++;
    j--;
    a++;
    b--;
  }
  return grid;
}
