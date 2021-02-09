class Solution {
  public boolean isValidSudoku(char[][] board) {
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[0].length; j++) {
        if (board[i][j] == '.')
          continue;
        boolean res = validate(i, j, board);
        if (!res)
          return res;
      }
    }
    return true;
  }

  private boolean validate(int y, int x, char[][] board) {

    for (int i = 0; i < board.length; i++) {
      if (i == y) {
        continue;
      }
      if (board[i][x] == board[y][x]) {
        return false;
      }
    }

    for (int i = 0; i < board[0].length; i++) {
      if (x == i) {
        continue;
      }

      if (board[y][i] == board[y][x]) {
        return false;
      }
    }

    int a = (y / 3) * 3;
    int b = (x / 3) * 3;

    for (int i = a; i < a + 3; i++) {
      for (int j = b; j < b + 3; j++) {
        if (i == y && j == x) {
          continue;
        }
        if (board[i][j] == board[y][x]) {
          return false;
        }
      }
    }

    return true;
  }
}
