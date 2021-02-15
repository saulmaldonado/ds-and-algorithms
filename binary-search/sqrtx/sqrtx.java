class Solution {
  public int mySqrt(int x) {
    if(x < 2) {
      return x;
    }

    int left = 1;
    int right = x;

    while(left < right) {
      int mid = left + (right - left) / 2;

      int sq = mid * mid;

      if(sq == x) {
        return mid;
      }

      if(sq > x) {
        right = mid + 1;
      } else {
        left = mid;
      }

    }
  return left - 1;
  }
}
