/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    const temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let left = 0;
  let right = nums1.length;
  const totalLength = nums1.length + nums2.length;

  while (left <= right) {
    let i = Math.floor(left + (right - left) / 2);
    let j = Math.floor((totalLength + 1) / 2) - i;

    if (i < right && nums2[j - 1] > nums1[i]) {
      left = i + 1;
    } else if (i > left && nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else {
      let maxLeft = 0;

      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1];
      } else {
        maxLeft = Math.max(nums2[j - 1], nums1[i - 1]);
      }
      if (totalLength % 2 === 1) {
        return maxLeft;
      }

      let minRight = 0;

      if (i === nums1.length) {
        minRight = nums2[j];
      } else if (j === nums2.length) {
        minRight = nums1[i];
      } else {
        minRight = Math.min(nums1[i], nums2[j]);
      }

      return (maxLeft + minRight) / 2;
    }
  }
}
