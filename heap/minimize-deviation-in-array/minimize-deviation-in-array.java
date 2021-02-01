class Solution {
  public int minimumDeviation(int[] nums) {

    Queue<Integer> pq = new PriorityQueue<>(new Comparator<Integer>() {
      public int compare(Integer i1, Integer i2) {
        return i2 - i1;
      }
    });

    int min = Integer.MAX_VALUE;
    int res = Integer.MAX_VALUE;

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] % 2 == 1) {
        nums[i] *= 2;
      }
      min = Math.min(min, nums[i]);
    }

    for (int i = 0; i < nums.length; i++) {
      while (nums[i] % 2 == 0 && nums[i] >= min * 2) {
        nums[i] /= 2;
      }
      pq.offer(nums[i]);
    }

    while (true) {
      int n = pq.poll();
      res = Math.min(res, n - min);

      if (n % 2 == 1) {
        break;
      }

      min = Math.min(min, n / 2);
      n /= 2;
      pq.offer(n);
    }

    return res;
  }
}
