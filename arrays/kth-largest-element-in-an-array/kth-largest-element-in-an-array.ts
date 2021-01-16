function findKthLargest(nums: number[], k: number) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}

function findKthLargest(nums: number[], k: number) {
  k = nums.length - k;
  let start: number = 0;
  let end: number = nums.length - 1;

  while (start < end) {
    const pivot: number = nums[start];
    let j: number = start;

    swap(start, end, nums);

    for (let i = start; i < end; i++) {
      if (nums[i] <= pivot) {
        swap(i, j, nums);
        j++;
      }
    }

    swap(j, end, nums);

    if (j === k) {
      return pivot;
    } else if (j < k) {
      start = j + 1;
    } else {
      end = j - 1;
    }
  }
  return nums[start];
}

function swap(i: number, j: number, nums: number[]) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
