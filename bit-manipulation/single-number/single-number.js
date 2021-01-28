/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let sum = 0;

  for (let n of nums) {
    sum ^= n;
  }

  return sum;
}
