function hasAllCodes(s: string, k: number): boolean {
  if (s.length < k || s.length - k + 1 < 2 ** k) {
    return false;
  }

  const seen: Set<String> = new Set();

  const total = 2 ** k;

  const n: number = s.length;
  let start = 0;
  let end: number = start + k;

  while (end <= n) {
    const curr: string = s.substring(start, end);

    if (!seen.has(curr)) {
      seen.add(curr);
    }

    if (seen.size == total) {
      return true;
    }

    start++;
    end++;
  }
  return false;
}
