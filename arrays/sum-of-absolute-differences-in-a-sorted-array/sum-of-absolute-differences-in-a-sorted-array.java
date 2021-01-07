
// O(n) space
class Solution {
  public int[] getSumAbsoluteDifferences(int[] nums) {
    int n = nums.length;

    int[] res = new int[n];

    int rightSum = 0;
    int leftSum = 0;

    for (int num : nums) {
      rightSum += num;
    }

    for (int i = 0; i < n; i++) {
      int curr = nums[i];

      res[i] = (i * curr - leftSum) + (rightSum - (n - i) * curr);

      rightSum -= curr;
      leftSum += curr;
    }

    return res;
  }
}

// O(1) space
class Solution {
  public int[] getSumAbsoluteDifferences(int[] nums) {
    int n = nums.length;

    int[] res = new int[n];

    int rightSum = 0;
    int leftSum = 0;

    for (int num : nums) {
      rightSum += num;
    }

    for (int i = 0; i < n; i++) {
      int curr = nums[i];

      nums[i] = (i * curr - leftSum) + (rightSum - (n - i) * curr);

      rightSum -= curr;
      leftSum += curr;
    }

    return nums;
  }
}
