class Solution {
  public boolean canMakeArithmeticProgression(int[] arr) {
    int n = arr.length;
    int min = Integer.MAX_VALUE;
    int max = Integer.MIN_VALUE;
    Set<Integer> set = new HashSet<>();

    for (int num : arr) {
      min = Math.min(num, min);
      max = Math.max(num, max);
      set.add(num);
    }

    int d = max - min;
    if (d % (n - 1) != 0) {
      return false;
    }

    d /= n - 1;
    int i = 0;
    while (i < n) {
      if (!set.contains(min)) {
        return false;
      }
      min += d;
      i++;
    }

    return true;

  }
}
