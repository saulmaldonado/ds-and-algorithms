/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  let dup = -1;
  let mis = -1;

  const n = nums.length;

  for (const num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      dup = Math.abs(num);
    } else {
      nums[Math.abs(num) - 1] *= -1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      mis = i + 1;
    }
  }
  return [dup, mis];
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums2(nums) {
  const set = new Set();
  const n = nums.length;
  let sum = (n * (n + 1)) / 2;
  let dup = -1;

  for (const num of nums) {
    if (!set.has(num)) {
      set.add(num);
      sum -= num;
    } else {
      dup = num;
    }
  }
  return [dup, sum];
}
