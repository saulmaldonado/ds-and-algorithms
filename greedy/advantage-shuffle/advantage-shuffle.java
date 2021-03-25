class Solution {
  public int[] advantageCount(int[] A, int[] B) {
    Arrays.sort(A);
    int n = A.length;
    int[] res = new int[n];

    PriorityQueue<Integer> pq = new PriorityQueue<>((i, j) -> B[j] - B[i]);
    for (int i = 0; i < n; i++) {
      pq.add(i);
    }

    int low = 0;
    int high = n - 1;

    while (!pq.isEmpty()) {
      Integer curr = pq.poll();

      int i = curr;
      int val = B[i];

      if (A[high] > val) {
        res[i] = A[high];
        high--;
      } else {
        res[i] = A[low];
        low++;
      }
    }
    return res;
  }
}
