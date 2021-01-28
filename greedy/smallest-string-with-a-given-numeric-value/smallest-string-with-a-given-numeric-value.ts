function getSmallestString(n: number, k: number): string {
  const chars: string[] = [];

  for (let i = n; i >= 1; i--) {
    let x: number = Math.min(k - (n - 1), 26);
    k -= x;
    n--;
    chars[i - 1] = String.fromCharCode(x - 1 + 97);
  }

  return chars.join('');
}
