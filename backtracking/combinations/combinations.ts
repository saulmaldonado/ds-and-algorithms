function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const comb: number[] = [];
  build2(res, comb, 1, n, k);
  return res;
}

function build2(res: number[][], comb: number[], start: number, n: number, k: number) {
  if (k === 0) {
    res.push(comb.slice());
    return;
  }

  for (let i = start; i <= n - k + 1; i++) {
    comb.push(i);
    build2(res, comb, i + 1, n, k - 1);
    comb.pop();
  }
}
