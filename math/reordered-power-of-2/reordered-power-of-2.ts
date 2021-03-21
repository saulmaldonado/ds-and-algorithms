function reorderedPowerOf2(N: number): boolean {
  const nFreq = countDigits(N);
  let i = 0;

  while (i < 30) {
    if (equals(nFreq, countDigits(1 << i))) {
      return true;
    }
    i++;
  }
  return false;
}

function countDigits(n: number): number[] {
  const freq: number[] = new Array(10).fill(0);
  while (n > 0) {
    let lastDigit = n % 10;
    freq[lastDigit]++;
    n = Math.floor(n / 10);
  }
  return freq;
}

function equals(a: number[], b: number[]): boolean {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
