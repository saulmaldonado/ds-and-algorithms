function createSortedArray(instructions: number[]): number {
  let res: number = 0;
  const n: number = instructions.length;
  const mod: number = 1e9 + 7;
  const c: number[] = new Array(10e5 + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const min: number =
      (res + Math.min(get(instructions[i] - 1, c), i - get(instructions[i], c))) % mod;
    res = min;
    update(instructions[i], c);
  }
  return res;
}

function get(x: number, c: number[]): number {
  let res = 0;

  while (x > 0) {
    res += c[x];
    x -= x & -x;
  }

  return res;
}

function update(x: number, c: number[]): void {
  while (x < 10e5 + 1) {
    c[x]++;
    x += x & -x;
  }
}
