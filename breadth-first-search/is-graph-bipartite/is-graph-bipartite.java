class Solution {
  public boolean isBipartite(int[][] graph) {
    int n = graph.length;
    int[] sets = new int[n];

    for (int i = 0; i < n; i++) {
      if (sets[i] != 0) {
        continue;
      }

      Queue<Integer> queue = new ArrayDeque<>();
      queue.offer(i);
      sets[i] = 1;

      while (queue.size() > 0) {
        int curr = queue.poll();
        int[] node = graph[curr];
        for (int num : node) {
          if (sets[num] == 0) {
            sets[num] = -sets[curr];
            queue.add(num);
          } else if (sets[num] == sets[curr]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
