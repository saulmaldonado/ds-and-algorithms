/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
function advantageCount(A, B) {
  A.sort((a, b) => a - b);
  const n = A.length;
  const res = new Array(n);

  const pq = [];

  for (let i = 0; i < n; i++) {
    pq.push(i);
  }

  pq.sort((a, b) => B[b] - B[a]);

  let low = 0;
  let high = n - 1;

  for (let i = 0; i < n; i++) {
    const index = pq[i];
    const value = B[index];

    if (A[high] > value) {
      res[index] = A[high];
      high--;
    } else {
      res[index] = A[low];
      low++;
    }
  }
  return res;
}
