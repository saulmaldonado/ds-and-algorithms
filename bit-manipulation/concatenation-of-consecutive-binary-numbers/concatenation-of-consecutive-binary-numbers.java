class Solution {
  public int concatenatedBinary(int n) {
    long sum = 0;
    int count = 0;
    long mod = (long) 1e9 + 7;

    for (int i = 1; i <= n; i++) {
      if ((i & (i - 1)) == 0) {
        count++;
      }
      sum = ((sum << count) + i) % mod;
    }
    return (int) sum;
  }
}
