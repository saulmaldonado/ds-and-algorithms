class Solution {
  public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return false;
    }

    int n = matrix.length;
    int m = matrix[0].length;

    int i = 0;
    int j = m - 1;

    while (i < n && j >= 0) {
      if (matrix[i][j] == target) {
        return true;
      }

      if (matrix[i][j] > target) {
        j--;
      } else {
        i++;
      }
    }
    return false;
  }

  public boolean searchMatrix2(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return false;
    }

    int n = matrix.length;
    int m = matrix[0].length;

    int left = 0;
    int right = (n * m) - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      int midCell = matrix[mid / m][mid % m];

      if (midCell == target) {
        return true;
      }

      if (midCell > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }

    }

    return false;
  }
}
