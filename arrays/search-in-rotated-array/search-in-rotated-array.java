class Solution {
  public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;

    while (left < right) {
      int mid = left + (right - left) / 2;

      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    int pivot = left;
    left = 0;
    right = nums.length - 1;

    if (target >= nums[pivot] && target <= nums[right]) {
      left = pivot;
    } else {
      right = pivot;
    }

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (nums[mid] == target) {
        return mid;
      }

      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }
}

// [4,5,6,7,8,1,2,3]
// ^
