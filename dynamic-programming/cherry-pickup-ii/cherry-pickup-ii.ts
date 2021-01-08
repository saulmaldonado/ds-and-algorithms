/**
 * @param {number[][]} grid
 * @return {number}
 */
function cherryPickup(grid: number[][]): number {
  const dp: number[][][] = new Array(grid.length)
    .fill(undefined)
    .map(() => new Array(grid[0].length).fill(undefined).map(() => new Array(grid[0].length)));

  return traverse(grid, dp, 0, 0, grid[0].length - 1);
}

function traverse(grid: number[][], dp: number[][][], h: number, i: number, j: number): number {
  const dirs: number[] = [1, 0, -1];

  let cherries: number = grid[h][i];

  if (j !== i) {
    cherries += grid[h][j];
  }

  if (h === grid.length - 1) {
    dp[h][i][j] = cherries;
    return cherries;
  }

  if (dp[h][i][j] !== undefined) {
    return dp[h][i][j];
  }

  let max = 0;

  for (let dir1 of dirs) {
    const rob1 = i + dir1;
    for (let dir2 of dirs) {
      const rob2 = j + dir2;

      if (rob1 >= 0 && rob1 < grid[0].length && rob2 >= 0 && rob2 < grid[0].length) {
        max = Math.max(traverse(grid, dp, h + 1, rob1, rob2), max);
      }
    }
  }

  dp[h][i][j] = max + cherries;

  return dp[h][i][j];
}
