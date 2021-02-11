class Solution {
  public int maximumScore(int a, int b, int c) {
    int max = Math.max(Math.max(a, b), c);
    int sum = a + b + c;
    if (sum - max < max) {
      return sum - max;
    }
    return sum / 2;
  }
}
