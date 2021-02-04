class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    if (nums1.length > nums2.length) {
      int[] temp = nums1;
      nums1 = nums2;
      nums2 = temp;
    }

    int left = 0;
    int right = nums1.length;
    int totalLength = nums1.length + nums2.length;

    while (left <= right) {
      int i = left + (right - left) / 2;
      int j = (totalLength + 1) / 2 - i;

      if (i < right && nums2[j - 1] > nums1[i]) {
        left = i + 1;
      } else if (i > left && nums1[i - 1] > nums2[j]) {
        right = i - 1;
      } else {
        int maxLeft = 0;

        if (i == 0) {
          maxLeft = nums2[j - 1];
        } else if (j == 0) {
          maxLeft = nums1[i - 1];
        } else {
          maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
        }

        if (totalLength % 2 == 1) {
          return maxLeft;
        }

        int minRight = 0;
        if (i == nums1.length) {
          minRight = nums2[j];
        } else if (j == nums2.length) {
          minRight = nums1[i];
        } else {
          minRight = Math.min(nums2[j], nums1[i]);
        }

        return (maxLeft + minRight) / 2.0;
      }
    }
    return 0.0;
  }
}
