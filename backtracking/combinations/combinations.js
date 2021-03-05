/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
  const res = [];
  const comb = [];
  build(res, comb, 1, n, k);
  return res;
};

/**
 *
 * @param {number[][]} res
 * @param {number[]} comb
 * @param {number} start
 * @param {number} n
 * @param {number} k
 *
 * @returns {void}
 */
function build(res, comb, start, n, k) {
  if(k === 0){
    res.push(comb.slice());
    return;
  }

  for(let i = start; i <= n - k + 1; i++) {
    comb.push(i);
    build(res, comb, i + 1, n, k - 1);
    comb.pop();
  }
}
