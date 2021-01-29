/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const ans = [];
  const list = [];
  const visited = new Set();

  backtrack(nums, visited, ans, list);

  return ans;
}

function backtrack(nums, visited, ans, list) {
  if (list.length == nums.length) {
    ans.push(list.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited.has(i)) {
      continue;
    }

    visited.add(i);
    list.push(nums[i]);

    backtrack(nums, visited, ans, list);

    list.pop();
    visited.delete(i);
  }
}
