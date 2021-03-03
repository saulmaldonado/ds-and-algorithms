class Solution {
  public int missingNumber(int[] nums) {
    int n = nums.length;
    int missing = n;
    for (int i = 0; i < n; i++) {
      missing ^= i;
      missing ^= nums[i];
    }
    return missing;
  }

  public int missingNumber2(int[] nums) {
    int n = nums.length;
    int sum = n * (n + 1) / 2;

    for (int num : nums) {
      sum -= num;
    }

    return sum;
  }
}
