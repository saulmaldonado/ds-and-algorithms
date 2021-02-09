/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let n = nums.length;
  let jump = 0;

  for (let i = 0; i < n - 1; i++) {
    jump = Math.max(jump - 1, nums[i]);

    if (jump === 0) {
      return false;
    }
  }
  return true;
}
