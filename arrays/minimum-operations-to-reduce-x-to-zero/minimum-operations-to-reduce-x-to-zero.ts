function minOperations(nums: number[], x: number): number {
  const n: number = nums.length;
  let arrSum: number = 0;
  for (let num of nums) {
    arrSum += num;
  }

  const target: number = arrSum - x;

  if (target < 0) {
    return -1;
  }

  if (target === 0) {
    return n;
  }

  let max: number = 0;
  let sum: number = 0;
  let i: number = 0;
  let j: number = 0;

  while (j <= n) {
    if (j == n || sum + nums[j] > target) {
      if (sum === target) {
        max = Math.max(max, j - i);
      }

      sum -= nums[i];
      i++;
    } else {
      sum += nums[j];
      j++;
    }
  }

  if (max === 0) {
    return -1;
  } else {
    return n - max;
  }
}
