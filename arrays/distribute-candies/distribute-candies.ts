function distributeCandies(candyType: number[]): number {
  const n: number = candyType.length;
  const set: Set<number> = new Set();

  for (const candy of candyType) {
    set.add(candy);
  }

  return Math.min(set.size, n / 2);
}
