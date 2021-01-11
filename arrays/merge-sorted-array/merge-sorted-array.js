/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  m--;
  n--;
  let i = nums1.length - 1;

  while (n >= 0 && m >= 0) {
    if (nums2[n] > nums1[m]) {
      nums1[i] = nums2[n];
      n--;
    } else {
      nums1[i] = nums1[m];
      m--;
    }
    i--;
  }

  while (n >= 0) {
    nums1[i] = nums2[n];
    i--;
    n--;
  }
}
