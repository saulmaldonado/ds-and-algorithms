/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const ans = [];

  const n = intervals.length;
  let i = 0;

  while (i < n && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    if (intervals[i][0] < newInterval[0]) {
      newInterval[0] = intervals[i][0];
    }

    if (intervals[i][1] > newInterval[1]) {
      newInterval[1] = intervals[i][1];
    }
    i++;
  }

  ans.push(newInterval);

  while (i < n) {
    ans.push(intervals[i]);
    i++;
  }
  return ans;
}
