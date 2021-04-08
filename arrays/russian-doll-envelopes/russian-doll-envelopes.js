/**
 * @param {number[][]} envelopes
 * @return {number}
 */
function maxEnvelopes(envelopes) {
  const n = envelopes.length;

  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }

    return a[0] - b[0];
  });

  let count = 0;
  const dp = new Array(n);

  for (const envelope of envelopes) {
    let i = binarySearch(dp, 0, count, envelope[1]);

    dp[i] = envelope[1];

    if (i === count) {
      count++;
    }
  }
  return count;
}

/**
 *
 * @param {number[]} dp
 * @param {number} start
 * @param {number} end
 * @param {number} key
 */
function binarySearch(dp, start, end, key) {
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
