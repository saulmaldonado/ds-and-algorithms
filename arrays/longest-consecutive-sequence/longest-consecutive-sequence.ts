// Sorting
function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  nums.sort((a, b) => a - b);

  let max: number = 0;
  let maxSeq: number = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      maxSeq++;
    } else if (nums[i] === nums[i - 1]) {
      continue;
    } else {
      max = Math.max(max, maxSeq);
      maxSeq = 1;
    }
  }
  max = Math.max(max, maxSeq);

  return max;
}
