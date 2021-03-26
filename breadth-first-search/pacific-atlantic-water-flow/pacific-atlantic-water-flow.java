class Solution {
  int[][] directions = new int[][]{{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
  int n;
  int m;

  public List<List<Integer>> pacificAtlantic(int[][] matrix) {
    if(matrix.length == 0 || matrix[0].length == 0) {
      return new ArrayList<>();
    }

    List<List<Integer>> res = new ArrayList<>();
    n = matrix.length;
    m = matrix[0].length;

    boolean[][] flowsToPacific = new boolean[n][m];
    boolean[][] flowsToAtlantic = new boolean[n][m];

    Queue<int[]> pacificQueue = new LinkedList<>();
    Queue<int[]> atlanticQueue = new LinkedList<>();

    for(int i = 0; i < n; i++) {
      pacificQueue.offer(new int[]{i, 0});
      atlanticQueue.offer(new int[]{i, m - 1});
    }

    for(int i = 0; i < m; i++) {
      pacificQueue.offer(new int[]{0, i});
      atlanticQueue.offer(new int[]{n - 1, i});
    }

    traverse(pacificQueue, flowsToPacific, matrix);
    traverse(atlanticQueue, flowsToAtlantic, matrix);

    for(int i = 0; i < n; i++) {
      for(int j = 0; j < m; j++) {
        if(flowsToPacific[i][j] && flowsToAtlantic[i][j]) {
          List<Integer> cell = new ArrayList<>();
          cell.add(i);
          cell.add(j);
          res.add(cell);
        }
      }
    }

    return res;

  }

  private void traverse(Queue<int[]> queue, boolean[][] reachable, int[][] matrix) {
    while(!queue.isEmpty()) {
      int[] curr = queue.poll();
      int row = curr[0];
      int col = curr[1];

      reachable[row][col] = true;

      for(int[] dir : directions) {
        int newRow = curr[0] + dir[0];
        int newCol = curr[1] + dir[1];

        if(newRow < 0 || newRow >= n || newCol < 0 || newCol >= m) {
          continue;
        }

        if(reachable[newRow][newCol]) {
          continue;
        }

        if(matrix[row][col] > matrix[newRow][newCol]) {
          continue;
        }

        queue.offer(new int[]{newRow, newCol});
      }
    }
  }
}
