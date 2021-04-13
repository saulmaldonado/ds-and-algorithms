/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
function constructArray(n, k) {
  const res = new Array(n);

  let left = 1;
  let right = k + 1;
  let i = 0;

  while (left < right) {
    res[i] = left;
    left++;
    i++;
    res[i] = right;
    right--;
    i++;
  }

  if (left == right) {
    res[i] = left;
    i++;
  }

  for (let j = k + 2; j <= n; j++) {
    res[i] = j;
    i++;
  }

  return res;
}
