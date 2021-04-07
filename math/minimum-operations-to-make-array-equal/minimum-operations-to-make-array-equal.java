class Solution {
  public int minOperations(int n) {
    if (n % 2 == 1) {
      n /= 2;
      return n * (n + 1);
    }
    n /= 2;
    return n * n;
  }
}
