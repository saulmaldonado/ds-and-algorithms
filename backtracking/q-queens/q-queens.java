class Solution {
  public List<List<String>> solveNQueens(int n) {
    char[][] grid = new char[n][n];

    for (int i = 0; i < n; i++) {
      Arrays.fill(grid[i], '.');
    }

    List<List<String>> res = new ArrayList<>();

    place(res, grid, 0, n);

    return res;
  }

  private void place(List<List<String>> res, char[][] grid, int row, int n) {
    if (row == n) {
      List<String> list = new ArrayList<>();
      for (int i = 0; i < n; i++) {
        list.add(new String(grid[i]));
      }
      res.add(new ArrayList<>(list));
      return;
    }

    for (int col = 0; col < n; col++) {
      if (isValid(grid, row, col, n)) {
        grid[row][col] = 'Q';
        place(res, grid, row + 1, n);
        grid[row][col] = '.';
      }
    }
  }

  private boolean isValid(char[][] grid, int row, int col, int n) {
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
