/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  const n = nums.length;
  let i = n - 2;

  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i < 0) {
    nums.sort((a, b) => a - b);
  } else {
    let j = nums.length - 1;

    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

    const right = nums.slice(i + 1, n);
    const left = nums.slice(0, i + 1);

    right.sort((a, b) => a - b);
    const res = [...left, ...right];

    nums.forEach((_, i) => {
      nums[i] = res[i];
    });
  }
}
