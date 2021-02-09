/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const n = nums.length;

  let max = 0;
  let jumps = 0;
  let right = 0;

  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i === right) {
      jumps++;
      right = max;
    }
  }

  return jumps;
}
