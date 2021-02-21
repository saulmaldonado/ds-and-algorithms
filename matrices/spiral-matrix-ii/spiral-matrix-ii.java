class Solution {
  public int[][] generateMatrix(int n) {
    int[][] grid = new int[n][n];

    int i = 0;
    int j = n - 1;
    int a = 0;
    int b = n - 1;

    int counter = 1;

    while (i <= j && a <= b) {
      for (int col = i; col <= j; col++) {
        grid[a][col] = counter++;
      }

      for (int row = a + 1; row <= b; row++) {
        grid[row][j] = counter++;
      }

      if (i < j || a < b) {
        for (int col = j - 1; col >= i + 1; col--) {
          grid[b][col] = counter++;
        }

        for (int row = b; row > a; row--) {
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
}
