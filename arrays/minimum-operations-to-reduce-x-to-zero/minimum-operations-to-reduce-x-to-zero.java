class Solution {
  public int minOperations(int[] nums, int x) {
    int n = nums.length;

    int arrTotal = 0;

    for (int num : nums) {
      arrTotal += num;
    }

    int target = arrTotal - x; // our sub array sum target

    if (target < 0) { // impossible
      return -1;
    }

    if (target == 0) { // ans is all of numbers in array
      return n;
    }

    int maxlen = 0;
    int sum = 0;
    int i = 0;
    int j = 0;

    while (j <= n) {

      if (j == n || sum + nums[j] > target) {

        if (sum == target) {
          maxlen = Math.max(maxlen, j - i);
        }

        if (j == n) {
          break;
        }

        sum -= nums[i]; // sum is to big, decrease window
        i++;
      } else {
        sum += nums[j]; // sim is too small increase window
        j++;
      }
    }
    return maxlen == 0 ? -1 : nums.length - maxlen;
  }
}
