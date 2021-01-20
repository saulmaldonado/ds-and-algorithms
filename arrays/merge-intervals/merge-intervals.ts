function merge(intervals: number[][]): number[][] {
  const ans: number[][] = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    const starts: number = intervals[i][0];
    const ends: number = intervals[i][1];

    if (!ans.length || ans[ans.length - 1][1] < starts) {
      ans.push(intervals[i]);
    } else {
      const newEndingInterval: number = Math.max(ans[ans.length - 1][1], ends);
      ans[ans.length - 1][1] = newEndingInterval;
    }
  }
  return ans;
}
