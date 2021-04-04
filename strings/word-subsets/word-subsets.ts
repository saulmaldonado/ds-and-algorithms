function wordSubsets(A: string[], B: string[]): string[] {
  const maxFreqB: number[] = new Array(26).fill(0);

  for (let b of B) {
    const freqB: number[] = count(b);

    for (let i = 0; i < 26; i++) {
      maxFreqB[i] = Math.max(maxFreqB[i], freqB[i]);
    }
  }

  const ans: string[] = [];

  for (let a of A) {
    const freqA: number[] = count(a);
    if (compare(freqA, maxFreqB)) {
      ans.push(a);
    }
  }
  return ans;
}

function count(S: string): number[] {
  const freq: number[] = new Array(26).fill(0);

  for (let i = 0; i < S.length; i++) {
    freq[S[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  return freq;
}

function compare(a: number[], b: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (a[i] < b[i]) {
      return false;
    }
  }
  return true;
}
