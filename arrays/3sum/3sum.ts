function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  const ans: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let a: number = i + 1;
    let b: number = nums.length - 1;
    let target: number = -nums[i];

    if (target < 0) {
      break;
    }

    if (i > 0 && nums[i - 1] == nums[i]) {
      continue;
    }

    while (a < b) {
      let sum: number = nums[a] + nums[b];

      if (sum === target) {
        const triplet = [-target, nums[a], nums[b]];

        ans.push(triplet);

        a++;

        while (a < b && nums[a - 1] === nums[a]) {
          a++;
        }

        b--;

        while (a < b && nums[b + 1] === nums[b]) {
          b--;
        }
      } else if (sum > target) {
        b--;

        while (a < b && nums[b + 1] === nums[b]) {
          b--;
        }
      } else {
        a++;

        while (a < b && nums[a - 1] === nums[a]) {
          a++;
        }
      }
    }
  }
  return ans;
}
