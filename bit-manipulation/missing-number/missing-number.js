/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  const n = nums.length;
  let missing = n;

  for (let i = 0; i < n; i++) {
    missing ^= i;
    missing ^= nums[i];
  }
  return missing;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber2(nums) {
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;

  for (const num of nums) {
    sum -= num;
  }

  return sum;
}
