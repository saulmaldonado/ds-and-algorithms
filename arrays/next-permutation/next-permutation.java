class Solution {
  public void nextPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;

    while (i >= 0 && nums[i + 1] <= nums[i]) {
      i--;
    }

    if (i < 0) {
      Arrays.sort(nums);
    } else {
      int j = nums.length - 1;

      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }

      int temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      Arrays.sort(nums, i + 1, nums.length);
    }
  }
}
