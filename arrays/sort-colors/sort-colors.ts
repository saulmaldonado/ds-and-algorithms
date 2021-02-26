function sortColors(nums: number[]): void {
  const n: number = nums.length;
  let left: number = 0;
  let right: number = n - 1;
  let i: number = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    } else if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
      i--;
    }
    i++;
  }
}
