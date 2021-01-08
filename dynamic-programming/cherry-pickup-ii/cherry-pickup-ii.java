class Solution {
  public int[] dirs = new int[] { -1, 0, 1 };

  public int cherryPickup(int[][] grid) {

    int dp[][][] = new int[grid.length][grid[0].length][grid[0].length];

    return traverse(grid, dp, 0, 0, grid[0].length - 1);
  }

  private int traverse(int[][] grid, int[][][] dp, int h, int i, int j) {
    int cherries = grid[h][i];

    if (j != i) {
      cherries += grid[h][j];
    }

    if (h == grid.length - 1) {
      dp[h][i][j] = cherries;
      return cherries;
    }

    if (dp[h][i][j] > 0) {
      return dp[h][i][j];
    }

    int max = 0;

    for (int dir1 : dirs) {
      int rob1 = i + dir1;
      for (int dir2 : dirs) {
        int rob2 = j + dir2;

        if (rob1 >= 0 && rob1 < grid[0].length && rob2 >= 0 && rob2 < grid[0].length) {
          max = Math.max(traverse(grid, dp, h + 1, rob1, rob2), max);
        }
      }
    }

    dp[h][i][j] = max + cherries;
    return dp[h][i][j];
  }
}
