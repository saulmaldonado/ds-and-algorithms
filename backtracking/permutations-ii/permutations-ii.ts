function permuteUnique(nums: number[]): number[][] {
  const ans: number[][] = [];
  const list: number[] = [];
  const visited: Set<number> = new Set();

  nums.sort((a, b) => a - b);

  backtrack(nums, visited, ans, list);

  return ans;
}

function backtrack(nums: number[], visited: Set<number>, ans: number[][], list: number[]) {
  if (list.length == nums.length) {
    ans.push(list.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited.has(i)) {
      continue;
    }

    visited.add(i);
    list.push(nums[i]);

    backtrack(nums, visited, ans, list);

    list.pop();
    visited.delete(i);

    while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      i++;
    }
  }
}
