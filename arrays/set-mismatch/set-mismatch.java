class Solution {
  public int[] findErrorNums(int[] nums) {
    int dup = -1;
    int mis = -1;
    int n = nums.length;

    for (int num : nums) {
      if (nums[Math.abs(num) - 1] < 0) {
        dup = Math.abs(num);
      } else {
        nums[Math.abs(num) - 1] *= -1;
      }
    }

    for (int i = 0; i < n; i++) {
      if (nums[i] > 0) {
        mis = i + 1;
      }
    }
    return new int[] { dup, mis };
  }

  public int[] findErrorNums2(int[] nums) {
    Set<Integer> set = new HashSet<>();
    int n = nums.length;
    int sum = n * (n + 1) / 2;
    int dup = -1;

    for (int num : nums) {
      if (!set.contains(num)) {
        set.add(num);
        sum -= num;
      } else {
        dup = num;
      }
    }
    return new int[] { dup, sum };

  }
}
