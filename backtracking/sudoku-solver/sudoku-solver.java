class Solution {
  public void solveSudoku(char[][] board) {
    solve(0, 0, board);
  }

  private boolean solve(int i, int j, char[][] board) {
    if (j == board[0].length) {
      j = 0;
      i++;

      if (i == board.length) {
        return true;
      }
    }

    if (board[i][j] != '.') {
      return solve(i, j + 1, board);
    }

    for (int a = 1; a <= 9; a++) {
      char curr = (char) (a + '0'); // converts int to correct ASCII value and casts to char

      if (valid(i, j, curr, board)) {
        board[i][j] = curr;
        if (solve(i, j + 1, board)) {
          return true;
        }
        board[i][j] = '.';
      }
    }
    return false;
  }

  private boolean valid(int i, int j, char curr, char[][] board) {
    for (int a = 0; a < board.length; a++) {
      if (curr == board[a][j]) {
        return false;
      }
    }

    for (int b = 0; b < board[0].length; b++) {
      if (curr == board[i][b]) {
        return false;
      }
    }

    int subGridRow = (i / 3) * 3;
    int subGridCol = (j / 3) * 3;

    for (int a = 0; a < 3; a++) {
      for (int b = 0; b < 3; b++) {
        if (board[subGridRow + a][subGridCol + b] == curr) {
          return false;
        }
      }
    }
    return true;
  }
}
