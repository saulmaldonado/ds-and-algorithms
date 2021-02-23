class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {

    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return false;
    }

    int h = matrix.length;
    int w = matrix[0].length;

    int i = 0;
    int j = w - 1;

    while (i < h && j >= 0) {
      if (matrix[i][j] == target) {
        return true;
      } else if (matrix[i][j] > target) {
        j--;
      } else {
        i++;
      }
    }
    return false;
  }
}
