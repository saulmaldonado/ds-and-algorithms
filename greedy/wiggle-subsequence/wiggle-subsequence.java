class Solution {
  public int wiggleMaxLength(int[] nums) {
    int n = nums.length;
    if (n < 2) {
      return n;
    }

    int prev = nums[0] - nums[1];

    int count = prev == 0 ? 1 : 2;

    for (int i = 2; i < n; i++) {
      int diff = nums[i - 1] - nums[i];
      if ((diff > 0 && prev <= 0) || (diff < 0 && prev >= 0)) {
        count++;
        prev = diff;
      }
    }
    return count;
  }
}
