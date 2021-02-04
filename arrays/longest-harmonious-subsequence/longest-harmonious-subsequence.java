public class Solution {
  public int findLHS(int[] nums) {
    HashMap<Integer, Integer> map = new HashMap<>();
    int max = 0;
    for (int n : nums) {
      map.put(n, map.computeIfAbsent(n, k -> 0) + 1);
      if (map.containsKey(n + 1)) {
        max = Math.max(max, map.get(n) + map.get(n + 1));
      }

      if (map.containsKey(n - 1)) {
        max = Math.max(max, map.get(n) + map.get(n - 1));
      }
    }
    return max;
  }
}
