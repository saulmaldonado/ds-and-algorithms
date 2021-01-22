function firstMissingPositive(nums: number[]): number {
  const n: number = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    let num: number = Math.abs(nums[i]);

    if (num > n) {
      continue;
    }

    if (nums[num - 1] > 0) {
      nums[num - 1] = -1 * nums[num - 1];
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
}
