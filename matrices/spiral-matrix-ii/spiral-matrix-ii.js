/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  const grid = new Array(n).fill(null).map(() => new Array(n));

  let i = 0;
  let j = n - 1;
  let a = 0;
  let b = n - 1;

  let counter = 1;

  while (i <= j && a <= b) {
    for (let col = i; col <= j; col++) {
      grid[a][col] = counter++;
    }

    for (let row = a; row <= b; row++) {
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
