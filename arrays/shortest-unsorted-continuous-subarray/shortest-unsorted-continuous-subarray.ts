function findUnsortedSubarray(nums: number[]): number {
  const n: number = nums.length;

  let max: number = -(2 ** 31);
  let min: number = 2 ** 31 - 1;

  let beg: number = -1;
  let end: number = -1;

  for (let i = 0; i < n; i++) {
    max = Math.max(max, nums[i]);
    if (nums[i] < max) {
      end = i;
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    min = Math.min(min, nums[i]);
    if (nums[i] > min) {
      beg = i;
    }
  }

  if (end === -1 || beg === -1) {
    return 0;
  }

  return end - beg + 1;
}
