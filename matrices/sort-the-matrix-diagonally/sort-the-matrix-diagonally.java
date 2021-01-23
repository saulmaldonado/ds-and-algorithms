
class Solution {
  public int[][] diagonalSort(int[][] mat) {
    int m = mat.length;
    int n = mat[0].length;

    for (int i = 0; i < m; i++) {
      sortDiagonal(i, 0, mat, m, n);
    }

    for (int j = 0; j < n; j++) {
      sortDiagonal(0, j, mat, m, n);
    }

    return mat;

  }

  public void sortDiagonal(int i, int j, int[][] mat, int m, int n) {
    List<Integer> list = new ArrayList<>();

    while (i < m && j < n) {
      list.add(mat[i][j]);
      i++;
      j++;
    }

    Collections.sort(list);

    // put pointers back in bounds of mat
    i--;
    j--;

    while (i >= 0 && j >= 0) {
      int newValue = list.get(list.size() - 1);
      list.remove(list.size() - 1);

      mat[i][j] = newValue;
      i--;
      j--;
    }
  }
}

// heap
class Solution {
  public int[][] diagonalSort(int[][] mat) {
    int m = mat.length;
    int n = mat[0].length;

    Map<Integer, PriorityQueue<Integer>> map = new HashMap<>();

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {

        int diff = i - j;

        map.putIfAbsent(diff, new PriorityQueue<Integer>());

        PriorityQueue<Integer> queue = map.get(diff);

        queue.add(mat[i][j]);
      }
    }

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        int diff = i - j;

        PriorityQueue<Integer> queue = map.get(diff);

        mat[i][j] = queue.poll();
      }
    }

    return mat;
  }
}
