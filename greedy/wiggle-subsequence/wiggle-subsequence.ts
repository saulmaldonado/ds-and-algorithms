function wiggleMaxLength(nums: number[]): number {
  const n: number = nums.length;
  if (n < 2) {
    return n;
  }

  let prev: number = nums[0] - nums[1];

  let count: number = prev === 0 ? 1 : 2;

  for (let i = 2; i < n; i++) {
    const diff: number = nums[i - 1] - nums[i];
    if ((diff > 0 && prev <= 0) || (diff < 0 && prev >= 0)) {
      count++;
      prev = diff;
    }
  }
  return count;
}
