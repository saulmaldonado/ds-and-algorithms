class Solution {
  public String getPermutation(int n, int k) {
    List<Integer> nums = new LinkedList<>();
    StringBuilder sb = new StringBuilder();

    int fact = 1;

    for (int i = 1; i <= n; i++) {
      fact *= i;
      nums.add(i);
    }

    k--;

    for (int i = 0; i < n; i++) {
      fact /= n - i;
      int index = k / fact;
      sb.append(nums.get(index));
      nums.remove(index);
      k -= index * fact;
    }

    return sb.toString();
  }
}
