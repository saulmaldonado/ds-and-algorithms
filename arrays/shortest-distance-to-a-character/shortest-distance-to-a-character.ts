function shortestToChar(s: string, c: string): number[] {
  let n: number = s.length;
  const res: number[] = [];
  let prev: number = -n;

  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      prev = i;
    }

    res[i] = i - prev;
  }

  for (let i = prev - 1; i >= 0; i--) {
    if (s[i] === c) {
      prev = i;
    }

    res[i] = Math.min(res[i], prev - i);
  }

  return res;
}
