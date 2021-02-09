function jump(nums: number[]): number {
  const n: number = nums.length;

  let max: number = 0;
  let jumps: number = 0;
  let right: number = 0;

  for (let i = 0; i < n - 1; i++) {
    max = Math.max(max, i + nums[i]);

    if (i === right) {
      jumps++;
      right = max;
    }
  }

  return jumps;
}
