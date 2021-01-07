
// O(log n)

class Solution {
  public int findKthPositive(int[] arr, int k) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
      int mid = left + (right - left) / 2;

      if (arr[mid] - mid - 1 >= k) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left + k;

  }

}

// O(n)
class Solution {
  public int findKthPositive(int[] arr, int k) {
    int i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] - i - 1 >= k) {
        return i + k;
      }
    }
    return i + k;
  }
}
