function search(nums: number[], target: number): boolean {
  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right && nums[left] === nums[right]) {
    left++;
  }

  while (left < right) {
    let mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const pivot: number = left;

  left = 0;
  right = nums.length - 1;

  if (target >= nums[pivot] && target <= nums[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  while (left <= right) {
    let mid: number = Math.floor(left + (right - left) / 2);

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
