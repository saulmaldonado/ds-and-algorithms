// O(n) space
function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n: number = nums.length;
  const res: number[] = [];

  let rightSum: number = 0;
  let leftSum: number = 0;

  rightSum = nums.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < n; i++) {
    let curr: number = nums[i];

    res[i] = i * curr - leftSum + (rightSum - (n - i) * curr);

    rightSum -= curr;
    leftSum += curr;
  }

  return res;
}

// O(1) space
function getSumAbsoluteDifferences(nums: number[]): number[] {
  const n: number = nums.length;
  const res: number[] = [];

  let rightSum: number = 0;
  let leftSum: number = 0;

  rightSum = nums.reduce((acc, num) => acc + num);

  for (let i = 0; i < n; i++) {
    let curr: number = nums[i];

    nums[i] = i * curr - leftSum + (rightSum - (n - i) * curr);

    rightSum -= curr;
    leftSum += curr;
  }

  return nums;
}
