/**
 * @param {number} n
 * @return {number}
 */
function getMaximumGenerated(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const nums = [];

  nums[0] = 0;
  nums[1] = 1;

  let i = 2;
  let max = 1;

  while (i <= n) {
    if (i % 2 === 0) {
      nums[i] = nums[~~(i / 2)];
      max = Math.max(max, nums[i]);
    } else {
      nums[i] = nums[~~((i + 1) / 2)] + nums[~~(i / 2)];
      max = Math.max(max, nums[i]);
    }
    i++;
  }

  return max;
}
