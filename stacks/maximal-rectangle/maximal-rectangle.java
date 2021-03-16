class Solution {
  public int maximalRectangle(char[][] matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
      return 0;
    }

    int h = matrix.length;
    int l = matrix[0].length;
    int[] heights = new int[l];

    int max = 0;

    for (int i = 0; i < h; i++) {
      Stack<Integer> stack = new Stack<>();

      for (int j = 0; j <= l; j++) {
        int height = 0;

        if (j < l) {
          if (matrix[i][j] == '1') {
            heights[j]++;
          } else {
            heights[j] = 0;
          }
          height = heights[j];
        }

        if (stack.isEmpty() || height >= heights[stack.peek()]) {
          stack.push(j);
        } else {

          while (!stack.isEmpty() && height < heights[stack.peek()]) {
            int mid = stack.pop();

            int len = stack.isEmpty() ? j : j - stack.peek() - 1;
            max = Math.max(max, heights[mid] * len);
          }
          stack.push(j);
        }
      }
    }

    return max;

  }
}
