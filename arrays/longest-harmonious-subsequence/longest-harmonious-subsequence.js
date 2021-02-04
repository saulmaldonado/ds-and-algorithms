/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
  const map = {};
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }

    map[nums[i]]++;

    if (map[nums[i] - 1]) {
      max = Math.max(max, map[nums[i]] + map[nums[i] - 1]);
    }

    if (map[nums[i] + 1]) {
      max = Math.max(max, map[nums[i]] + map[nums[i] + 1]);
    }
  }

  return max;
}
