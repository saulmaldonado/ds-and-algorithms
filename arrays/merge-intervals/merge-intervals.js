/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  const ans = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    const starts = intervals[i][0];
    const ends = intervals[i][1];

    if (!ans.length || ans[ans.length - 1][1] < starts) {
      ans.push(intervals[i]);
    } else {
      const newEndingInterval = Math.max(ans[ans.length - 1][1], ends);
      ans[ans.length - 1][i] = newEndingInterval;
    }
  }
  return ans;
}
