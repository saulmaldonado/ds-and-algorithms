class Solution {

  int[][] directions = new int[][] { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 }, { -1, -1 }, { -1, 1 }, { 1, -1 },
      { 1, 1 } };

  public int shortestPathBinaryMatrix(int[][] grid) {
    int n = grid.length;

    if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) {
      return -1;
    }

    Queue<int[]> queue = new ArrayDeque<>();

    queue.add(new int[] { 0, 0 });

    int level = 1;

    while (queue.size() > 0) {
      int curr = queue.size();

      while (curr > 0) {
        int[] pos = queue.poll();
        curr--;

        int i = pos[0];
        int j = pos[1];

        if (i == n - 1 && j == n - 1) {
          return level;
        }

        for (int[] dir : directions) {
          int newI = i + dir[0];
          int newJ = j + dir[1];

          if (newI >= 0 && newI < n && newJ >= 0 && newJ < n && grid[newI][newJ] == 0) {
            queue.add(new int[] { newI, newJ });
            grid[newI][newJ] = 1;
          }

        }
      }
      level++;
    }
    return -1;
  }
}
