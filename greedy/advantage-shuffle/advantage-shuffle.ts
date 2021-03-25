function advantageCount(A: number[], B: number[]): number[] {
  A.sort((a, b) => a - b);
  const n: number = A.length;
  const res: number[] = new Array(n);

  const pq: number[] = [];

  for (let i = 0; i < n; i++) {
    pq.push(i);
  }

  pq.sort((a, b) => B[b] - B[a]);

  let low = 0;
  let high = n - 1;

  for (let i = 0; i < n; i++) {
    const index: number = pq[i];
    const value: number = B[index];

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
