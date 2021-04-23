import java.util.Map;

class Solution {
  public int leastBricks(List<List<Integer>> wall) {
    Map<Integer, Integer> count = new HashMap<>();

    for (List<Integer> list : wall) {
      int edge = 0;
      for (int i = 0; i < list.size() - 1; i++) {
        edge += list.get(i);
        count.put(edge, count.getOrDefault(edge, 0) + 1);
      }
    }

    int max = 0;
    for (Integer value : count.values()) {
      max = Math.max(max, value);
    }

    return wall.size() - max;
  }
}
