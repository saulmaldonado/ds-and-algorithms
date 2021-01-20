class Solution {
  public int[] searchRange(int[] nums, int target) {

    int left = 0;
    int right = nums.length - 1;
    int[] ans = new int[] { -1, -1 };

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (nums[mid] > target || nums[mid] == target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (left == nums.length || nums[left] != target) {
      return ans;
    }

    ans[0] = left;

    right = nums.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    ans[1] = right;

    return ans;
  }
}
