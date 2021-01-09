class Solution {
  public void gameOfLife(int[][] board) {
    int l = board[0].length;
    int h = board.length;

    int[][] res = new int[h][l];

    int[][] dirs = new int[][] { { 0, -1 }, { 0, 1 }, { 1, 0 }, { -1, 0 }, { -1, -1 }, { -1, 1 }, { 1, -1 },
        { 1, 1 }, };

    for (int i = 0; i < h; i++) {
      for (int j = 0; j < l; j++) {
        int liveCells = 0;

        for (int[] dir : dirs) {
          int x = j + dir[1];
          int y = i + dir[0];

          if (x >= 0 && x < l && y >= 0 && y < h) {
            if (board[y][x] == 1) {
              liveCells++;
            }
          }
        }

        if (liveCells < 2) {
          res[i][j] = 0;
        } else {
          if (liveCells > 3) {
            res[i][j] = 0;
          } else if (liveCells == 3) {
            res[i][j] = 1;
          } else if (board[i][j] == 1) {
            res[i][j] = 1;
          }
        }

      }
    }

    for (int i = 0; i < h; i++) {
      for (int j = 0; j < l; j++) {
        board[i][j] = res[i][j];
      }
    }
  }
}
