class Solution {
  public int totalNQueens(int n) {
    char[][] grid = new char[n][n];

    for (int i = 0; i < n; i++) {
      Arrays.fill(grid[i], '.');
    }

    return place(grid, 0, n, 0);
  }

  private int place(char[][] grid, int row, int n, int count) {
    if (row == n) {
      return count + 1;
    }

    for (int col = 0; col < n; col++) {
      if (isValid(grid, col, row, n)) {
        grid[row][col] = 'Q';
        count = place(grid, row + 1, n, count);
        grid[row][col] = '.';
      }
    }
    return count;
  }

  private boolean isValid(char[][] grid, int col, int row, int n) {

    for (int i = 0; i < row; i++) {
      if (grid[i][col] == 'Q') {
        return false;
      }
    }

    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (grid[i][j] == 'Q') {
        return false;
      }
    }

    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (grid[i][j] == 'Q') {
        return false;
      }
    }
    return true;
  }
}
