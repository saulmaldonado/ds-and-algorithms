function searchRange(nums: number[], target: number): number[] {
  let left: number = 0;
  let right: number = nums.length - 1;

  const ans: number[] = [-1, -1];

  while (left <= right) {
    let mid: number = left + Math.floor((right - left) / 2);

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
    let mid: number = left + Math.floor((right - left) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  ans[1] = right;

  return ans;
}
