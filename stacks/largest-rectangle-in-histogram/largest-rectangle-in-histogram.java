class Solution {
  public int largestRectangleArea(int[] heights) {
    int n = heights.length;

    int[] fromTheLeft = new int[n];
    int[] fromTheRight = new int[n];

    fromTheLeft[0] = -1;
    fromTheRight[n - 1] = n;

    for (int i = 1; i < n; i++) {
      int j = i - 1;

      while (j >= 0 && heights[j] >= heights[i]) {
        j = fromTheLeft[j];
      }
      fromTheLeft[i] = j;
    }

    for (int i = n - 2; i >= 0; i--) {
      int j = i + 1;
      while (j < n && heights[j] >= heights[i]) {
        j = fromTheRight[j];
      }
      fromTheRight[i] = j;
    }

    int max = 0;

    for (int i = 0; i < n; i++) {
      max = Math.max(max, heights[i] * (fromTheRight[i] - fromTheLeft[i] - 1));
    }

    return max;
  }

  public int largestRectangleArea2(int[] heights) {
    int n = heights.length;
    Stack<Integer> stack = new Stack<>();

    int max = 0;

    for (int i = 0; i <= n; i++) {
      int height = i == n ? 0 : heights[i];

      if (stack.isEmpty() || height >= heights[stack.peek()]) {
        stack.push(i);
      } else {
        int mid = stack.pop();

        int len = stack.isEmpty() ? i : i - stack.peek() - 1;
        max = Math.max(max, heights[mid] * len);

        i--;
      }
    }

    return max;

  }
}
