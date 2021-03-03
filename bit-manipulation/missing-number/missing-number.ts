function missingNumber(nums: number[]): number {
  const n: number = nums.length;
  let missing: number = n;

  for (let i = 0; i < n; i++) {
    missing ^= i;
    missing ^= nums[i];
  }
  return missing;
}

function missingNumber2(nums: number[]): number {
  const n: number = nums.length;
  let sum: number = (n * (n + 1)) / 2;

  for (const num of nums) {
    sum -= num;
  }

  return sum;
}
