/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
  const list = [];
  const ans = [];

  traverse(0, list, ans, nums);
  return ans;
}

/**
 *
 * @param {number} start
 * @param {number[]} list
 * @param {number[]} ans
 * @param {number[]} nums
 */
function traverse(start, list, ans, nums) {
  ans.push(list.slice());

  for (let i = start; i < nums.length; i++) {
    list.push(nums[i]);
    traverse(i + 1, list, ans, nums);
    list.pop();
  }
}
