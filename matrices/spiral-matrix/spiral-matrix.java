class Solution {
  public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> ans = new ArrayList<>();
    int n = matrix[0].length;
    int m = matrix.length;

    int i = 0;
    int j = n - 1;
    int a = 0;
    int b = m - 1;

    while (i <= j && a <= b) {
      for (int col = i; col <= j; col++) {
        ans.add(matrix[a][col]);
      }

      for (int row = a + 1; row <= b; row++) {
        ans.add(matrix[row][j]);
      }

      if (i < j && a < b) {
        for (int col = j - 1; col > i; col--) {
          ans.add(matrix[b][col]);
        }

        for (int row = b; row > a; row--) {
          ans.add(matrix[row][i]);
        }
      }

      i++;
      j--;
      a++;
      b--;
    }
    return ans;
  }
}
