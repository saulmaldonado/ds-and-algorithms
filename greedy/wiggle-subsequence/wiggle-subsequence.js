/**
 * @param {number[]} nums
 * @return {number}
 */
function wiggleMaxLength(nums) {
  const n = nums.length;
  if (n < 2) {
    return n;
  }

  let prev = nums[0] - nums[1];

  let count = prev === 0 ? 1 : 2;

  for (let i = 2; i < n; i++) {
    const diff = nums[i - 1] - nums[i];
    if ((diff > 0 && prev <= 0) || (diff < 0 && prev >= 0)) {
      count++;
      prev = diff;
    }
  }
  return count;
}
