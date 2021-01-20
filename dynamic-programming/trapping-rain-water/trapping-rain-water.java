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

class Solution {
  public int trap(int[] height) {
    if (height.length < 3) {
      return 0;
    }

    int i = 0;
    int j = height.length - 1;

    int iMax = 0;
    int jMax = 0;

    int ans = 0;

    while (i < j) {
      if (height[i] < height[j]) {
        if (height[i] > iMax) {
          iMax = height[i];
        } else {
          int diff = iMax > height[i] ? iMax - height[i] : 0;
          ans += diff;
        }
        i++;
      } else {
        if (height[j] > jMax) {
          jMax = height[j];
        } else {
          int diff = jMax > height[j] ? jMax - height[j] : 0;
          ans += diff;
        }
        j--;
      }
    }

    return ans;
  }
}
