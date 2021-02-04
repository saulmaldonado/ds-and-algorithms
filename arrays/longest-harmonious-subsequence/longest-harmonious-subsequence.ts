function findLHS(nums: number[]): number {
  const map: Record<number, number> = {};
  let max: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }

    map[nums[i]]++;

    if (map[nums[i] - 1]) {
      max = Math.max(max, map[nums[i]] + map[nums[i] - 1]);
    }

    if (map[nums[i] + 1]) {
      max = Math.max(max, map[nums[i]] + map[nums[i] + 1]);
    }
  }

  return max;
}
