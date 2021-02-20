function romanToInt(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum: number = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const cur: number = map[s[i]];

    sum += cur;

    if (i > 0) {
      const next: number = map[s[i - 1]];

      if (next < cur) {
        sum -= next;
        i--;
      }
    }
  }
  return sum;
}
