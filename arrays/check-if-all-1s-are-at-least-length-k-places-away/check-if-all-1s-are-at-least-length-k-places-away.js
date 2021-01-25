/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
  let prevIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (prevIndex > -1 && i - prevIndex - 1 < k) {
        return false;
      }
      prevIndex = i;
    }
  }

  return true;
}
