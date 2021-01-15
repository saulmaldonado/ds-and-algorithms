class Solution {
  public int getMaximumGenerated(int n) {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    }

    int[] nums = new int[n + 1];

    nums[0] = 0;
    nums[1] = 1;

    int i = 2;

    int max = 1;

    while (i <= n) {
      if (i % 2 == 0) {
        nums[i] = nums[i / 2];
        max = Math.max(max, nums[i]);
      } else {
        nums[i] = nums[(i + 1) / 2] + nums[i / 2];
        max = Math.max(max, nums[i]);
      }
      i++;
    }

    return max;
  }
}
