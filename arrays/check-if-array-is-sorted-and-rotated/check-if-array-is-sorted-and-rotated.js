/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let next = nums[(i + 1) % n];

    if (nums[i] > next) {
      count++;
    }

    if (count > 1) {
      return false;
    }
  }
  return true;
}
