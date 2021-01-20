class Solution {
  public int[][] merge(int[][] intervals) {
    List<int[]> ans = new ArrayList<>();

    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

    for (int[] interval : intervals) {
      int starts = interval[0];
      int ends = interval[1];

      if (ans.isEmpty() || ans.get(ans.size() - 1)[1] < starts) {
        ans.add(interval);
      } else {
        int newEndingTime = Math.max(ans.get(ans.size() - 1)[1], ends);
        ans.get(ans.size() - 1)[1] = newEndingTime;
      }
    }

    return ans.toArray(new int[ans.size()][2]);
  }
}
