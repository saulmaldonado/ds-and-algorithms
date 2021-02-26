class Solution {
  public int findUnsortedSubarray(int[] nums) {
    int n = nums.length;

    int max = Integer.MIN_VALUE;
    int min = Integer.MAX_VALUE;

    int beg = -1;
    int end = -1;

    for (int i = 0; i < n; i++) {
      max = Math.max(max, nums[i]);

      if (nums[i] < max) {
        end = i;
      }
    }

    for (int i = n - 1; i >= 0; i--) {
      min = Math.min(min, nums[i]);

      if (nums[i] > min) {
        beg = i;
      }
    }

    if (end == -1 || beg == -1) {
      return 0;
    }

    return end - beg + 1;
  }
}
