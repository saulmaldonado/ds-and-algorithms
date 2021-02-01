function removeDuplicates(nums: number[]): number {
  if (nums.length < 2) {
    return nums.length;
  }

  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }

  return j + 1;
}
