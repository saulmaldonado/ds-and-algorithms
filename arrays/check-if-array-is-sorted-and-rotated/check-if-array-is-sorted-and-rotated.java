class Solution {
  public boolean check(int[] nums) {
    int count = 0;
    int n = nums.length;

    for (int i = 0; i < n; i++) {
      int next = nums[(i + 1) % n]; // if we are at the end of the array, we can overflow to the very beginning of
                                    // the array with %
      if (nums[i] > next) {
        count++;
      }

      if (count > 1) {
        return false;
      }
    }
    return true;
  }
}
