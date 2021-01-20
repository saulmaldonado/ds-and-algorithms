class Solution {
  public int trap(int[] height) {
    int[] dp = new int[height.length];
    int ans = 0;

    int max1 = 0;
    for (int i = 0; i < height.length; i++) {
      max1 = Math.max(max1, height[i]);
      dp[i] = max1;
    }

    int max2 = 0;
    for (int i = height.length - 1; i >= 0; i--) {
      max2 = Math.max(height[i], max2);
      dp[i] = Math.min(dp[i], max2);

      int diff = dp[i] > height[i] ? dp[i] - height[i] : 0;

      ans += diff;
    }
    return ans;
  }
}
