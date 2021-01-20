/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const ans = [-1, -1];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > target || nums[mid] === target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (left === nums.length || nums[left] !== target) {
    return ans;
  }

  ans[0] = left;

  right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  ans[1] = right;

  return ans;
}
