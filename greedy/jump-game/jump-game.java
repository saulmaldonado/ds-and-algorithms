class Solution {
  public boolean canJump(int[] nums) {
    int n = nums.length;
    int jump = 0;

    for (int i = 0; i < n - 1; i++) {
      jump = Math.max(jump - 1, nums[i]);

      if (jump == 0) {
        return false;
      }
    }

    return true;
  }
}
