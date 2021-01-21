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

// Set
function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;

  const set: Set<number> = new Set(nums);

  let max: number = 0;
  let maxSeq: number = 1;

  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let num: number = nums[i];

      while (set.has(num + 1)) {
        maxSeq++;
        num++;
      }
      max = Math.max(max, maxSeq);
      maxSeq = 1;
    }
  }
  max = Math.max(max, maxSeq);
  return max;
}
