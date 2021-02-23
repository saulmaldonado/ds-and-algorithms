function addBinary(a: string, b: string): string {
  const n: number = a.length;
  const m: number = b.length;

  let i: number = n - 1;
  let j: number = m - 1;

  let carry: number = 0;
  const chars: string[] = [];

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i].charCodeAt(0) - '0'.charCodeAt(0);
      i--;
    }

    if (j >= 0) {
      sum += b[j].charCodeAt(0) - '0'.charCodeAt(0);
      j--;
    }

    chars.push((sum & 1).toString());
    if (sum > 1) {
      carry = 1;
    } else {
      carry = 0;
    }
  }

  if (carry === 1) {
    chars.push('1');
  }

  return chars.reverse().join('');
}
