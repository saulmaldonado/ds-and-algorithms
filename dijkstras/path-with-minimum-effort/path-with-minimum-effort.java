class Solution {
  public static class Cell {
    int effort;
    int i;
    int j;

    Cell(int i, int j, int effort) {
      this.i = i;
      this.j = j;
      this.effort = effort;
    }
  }

  public int minimumEffortPath(int[][] heights) {
    int h = heights.length;
    int w = heights[0].length;

    int[][] directions = new int[][] { { 0, -1 }, { 0, 1 }, { -1, 0 }, { 1, 0 } };

    int[][] efforts = new int[h][w];

    for (int[] effort : efforts) {
      Arrays.fill(effort, Integer.MAX_VALUE);
    }

    Comparator<Cell> comp = new Comparator<>() {
      public int compare(Cell i1, Cell i2) {
        return i1.effort - i2.effort;
      }
    };

    PriorityQueue<Cell> queue = new PriorityQueue<>(1, comp);

    boolean[][] visited = new boolean[h][w];

    int i = 0;
    int j = 0;

    efforts[i][j] = 0;

    queue.offer(new Cell(0, 0, 0));

    while (!queue.isEmpty()) {
      Cell next = queue.poll();
      i = next.i;
      j = next.j;

      if (visited[i][j]) {
        continue;
      }

      if (i == h - 1 && j == w - 1) {
        return next.effort;
      }

      visited[i][j] = true;

      int current = heights[i][j];
      int currentEffort = efforts[i][j];

      for (int[] dir : directions) {
        int newi = i + dir[0];
        int newj = j + dir[1];

        if (newi < 0 || newj < 0 || newi == h || newj == w) {
          continue;
        }

        int diff = Math.abs(current - heights[newi][newj]);

        int maxEffort = Math.max(diff, currentEffort);

        if (maxEffort < efforts[newi][newj]) {
          efforts[newi][newj] = maxEffort;
          queue.offer(new Cell(newi, newj, maxEffort));
        }
      }
    }

    return efforts[h - 1][w - 1];
  }
}
