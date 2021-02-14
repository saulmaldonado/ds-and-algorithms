class Solution {
  public int maxArea(int[] height) {
    int i = 0;
    int j = height.length - 1;
    int max = 0;

    while (i < j) {
      if (height[i] < height[j]) {
        max = Math.max((j - i) * height[i], max);
        i++;
      } else {
        max = Math.max((j - i) * height[j], max);
        j--;
      }
    }
    return max;
  }
}
