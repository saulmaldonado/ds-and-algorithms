function singleNumber(nums: number[]): number {
  let sum: number = 0;

  for (let n of nums) {
    sum ^= n;
  }

  return sum;
}
