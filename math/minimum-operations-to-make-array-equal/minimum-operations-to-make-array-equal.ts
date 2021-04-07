function minOperations(n: number): number {
  if (n % 2 === 1) {
    n = Math.floor(n / 2);
    return n * (n + 1);
  }
  n = Math.floor(n / 2);
  return n * n;
}
