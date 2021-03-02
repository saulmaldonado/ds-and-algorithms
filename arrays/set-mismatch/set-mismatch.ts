function findErrorNums(nums: number[]): number[] {
  let dup: number = -1;
  let mis: number = -1;

  const n: number = nums.length;

  for (const num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      dup = Math.abs(num);
    } else {
      nums[Math.abs(num) - 1] *= -1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      mis = i + 1;
    }
  }
  return [dup, mis];
}

function findErrorNums2(nums: number[]): number[] {
  const set: Set<number> = new Set();
  const n: number = nums.length;
  let sum: number = (n * (n + 1)) / 2;
  let dup: number = -1;

  for (const num of nums) {
    if (!set.has(num)) {
      set.add(num);
      sum -= num;
    } else {
      dup = num;
    }
  }
  return [dup, sum];
}
