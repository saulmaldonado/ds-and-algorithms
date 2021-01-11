/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  // if there are repeated number from the end of the array, go to the unique one
  while (left < right && nums[left] === nums[right]) {
    left++;
  }

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const pivot = left;

  left = 0;
  right = nums.length - 1;

  if (target >= nums[pivot] && target <= nums[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
