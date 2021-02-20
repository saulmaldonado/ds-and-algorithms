/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  const nums = [];
  const str = [];

  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
    nums.push(i);
  }

  k--;

  for (let i = 0; i < n; i++) {
    fact = Math.floor(fact / (n - i));
    let index = Math.floor(k / fact);
    str.push(nums[index]);
    nums.splice(index, 1);
    k -= index * fact;
  }

  return str.join('');
}
