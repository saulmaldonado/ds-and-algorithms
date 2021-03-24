class Solution {
  public int threeSumMulti(int[] arr, int target) {
    if (arr == null || arr.length < 3) {
      return 0;
    }
    int MOD = 1_000_000_007;

    int n = arr.length;
    Arrays.sort(arr);
    long count = 0;

    for (int i = 0; i < n - 2; i++) {
      int left = i + 1;
      int right = n - 1;

      while (left < right) {
        int sum = arr[i] + arr[left] + arr[right];

        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else if (arr[left] == arr[right]) {
          count += (right - left + 1) * (right - left) / 2;
          count %= MOD;
          break;
        } else {
          int leftCount = 1;
          int rightCount = 1;

          while (left + 1 < right && arr[left] == arr[left + 1]) {
            leftCount++;
            left++;
          }

          while (right - 1 > left && arr[right] == arr[right - 1]) {
            rightCount++;
            right--;
          }

          count += leftCount * rightCount;
          count %= MOD;
          left++;
          right--;
        }
      }
    }
    return (int) count;
  }
}
