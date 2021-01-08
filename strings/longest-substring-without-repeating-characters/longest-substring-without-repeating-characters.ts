function lengthOfLongestSubstring(s: string): number {
  const n: number = s.length;
  let maxLength: number = 0;
  const indexMap: Record<string, number> = {};

  let j: number = 0;
  for (let i = 0; i < n; i++) {
    const curr: string = s[i];

    if (indexMap[curr]) {
      j = Math.max(indexMap[curr], j);
    }

    const currLength: number = i - j + 1;

    maxLength = Math.max(maxLength, currLength);

    indexMap[curr] = i + 1;
  }
  return maxLength;
}
