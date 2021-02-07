function searchInsert(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
