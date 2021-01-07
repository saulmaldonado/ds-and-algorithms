/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) space
function getSumAbsoluteDifferences(nums) {
  const n = nums.length;
  const res = [];

  let rightSum = 0;
  let leftSum = 0;

  rightSum = nums.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < n; i++) {
    let curr = nums[i];

    res[i] = i * curr - leftSum + (rightSum - (n - i) * curr);

    rightSum -= curr;
    leftSum += curr;
  }

  return res;
}

// O(1) space
function getSumAbsoluteDifferences(nums) {
  const n = nums.length;
  const res = [];

  let rightSum = 0;
  let leftSum = 0;

  rightSum = nums.reduce((acc, num) => acc + num, 0);

  for (let i = 0; i < n; i++) {
    let curr = nums[i];

    nums[i] = i * curr - leftSum + (rightSum - (n - i) * curr);

    rightSum -= curr;
    leftSum += curr;
  }

  return nums;
}
