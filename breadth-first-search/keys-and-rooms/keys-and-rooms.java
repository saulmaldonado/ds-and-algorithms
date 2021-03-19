class Solution {
  public boolean canVisitAllRooms(List<List<Integer>> rooms) {
    int n = rooms.size();
    Queue<Integer> queue = new ArrayDeque<>();
    boolean[] seen = new boolean[n];

    queue.add(0);
    seen[0] = true;

    while (!queue.isEmpty()) {
      Integer num = queue.poll();
      List<Integer> room = rooms.get(num);

      for (int keys : room) {
        if (!seen[keys]) {
          queue.add(keys);
          seen[keys] = true;
        }
      }
    }

    for (boolean v : seen) {
      if (!v) {
        return false;
      }
    }
    return true;
  }
}
