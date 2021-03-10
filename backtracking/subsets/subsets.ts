function subsets(nums: number[]): number[][] {
  const list: number[] = [];
  const ans: number[][] = [];

  generateSubsets(0, list, ans, nums);
  return ans;
}

function generateSubsets(start: number, list: number[], ans: number[][], nums: number[]) {
  ans.push(list.slice());

  for (let i = start; i < nums.length; i++) {
    list.push(nums[i]);
    generateSubsets(i + 1, list, ans, nums);
    list.pop();
  }
}
