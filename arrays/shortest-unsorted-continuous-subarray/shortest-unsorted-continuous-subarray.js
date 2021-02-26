/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
  const n = nums.length;

  let max = -(2 ** 31);
  let min = 2 ** 31 - 1;

  let beg = -1;
  let end = -1;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) {
      end = i;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      beg = i;
    }
  }

  if (end === -1 || beg === -1) {
    return 0;
  }

  return end - beg + 1;
}
