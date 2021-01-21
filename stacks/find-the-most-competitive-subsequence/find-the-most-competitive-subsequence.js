/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function mostCompetitive(nums, k) {
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (
      stack.length &&
      stack[stack.length - 1] > nums[i] &&
      k < stack.length + nums.length - i
    ) {
      stack.pop();
    }
    if (stack.length < k) {
      stack.push(nums[i]);
    }
  }

  const arr = new Array(k);

  for (let i = k - 1; i >= 0; i--) {
    arr[i] = stack.pop();
  }

  return arr;
}
