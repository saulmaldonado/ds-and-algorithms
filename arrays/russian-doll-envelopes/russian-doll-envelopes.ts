function maxEnvelopes(envelopes: number[][]): number {
  const n = envelopes.length;

  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  let count = 0;
  const dp: number[] = new Array(n);

  for (const envelope of envelopes) {
    let i = binarySearch(dp, 0, count, envelope[1]);

    dp[i] = envelope[1];

    if (i === count) {
      count++;
    }
  }
  return count;
}

function binarySearch(dp: number[], start: number, end: number, key: number): number {
  while (start < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (dp[mid] === key) {
      return mid;
    }

    if (dp[mid] < key) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
