function maximumScore(a: number, b: number, c: number): number {
  const max: number = Math.max(a, Math.max(b, c));
  const sum: number = a + b + c;

  if (sum - max < max) {
    return sum - max;
  }
  return Math.floor(sum / 2);
}
