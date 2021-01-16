/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
}

function findKthLargest(nums, k) {
  k = nums.length - k;
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const pivot = nums[start];
    let j = start;

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

function swap(i, j, nums) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
