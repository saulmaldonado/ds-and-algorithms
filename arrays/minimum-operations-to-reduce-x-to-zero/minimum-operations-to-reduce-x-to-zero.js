/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
function minOperations(nums, x) {
  const n = nums.length;
  let arrSum = 0;
  for (let num of nums) {
    arrSum += num;
  }

  const target = arrSum - x;

  if (target < 0) {
    return -1;
  }

  if (target === 0) {
    return n;
  }

  let max = 0;
  let sum = 0;
  let i = 0;
  let j = 0;

  while (j <= n) {
    if (j == n || sum + nums[j] > target) {
      if (sum === target) {
        max = Math.max(max, j - i);
      }

      if (j === n) {
        break;
      }

      sum -= nums[i];
      i++;
    } else {
      sum += nums[j];
      j++;
    }
  }

  if (max === 0) {
    return -1;
  } else {
    return n - max;
  }
}
