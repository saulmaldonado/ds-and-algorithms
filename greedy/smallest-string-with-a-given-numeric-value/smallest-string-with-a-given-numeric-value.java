class Solution {
  public String getSmallestString(int n, int k) {
    char[] chars = new char[n];

    for (int i = n; i >= 1; i--) {
      int x = Math.min(k - (n - 1), 26);
      k -= x;
      n--;
      chars[i - 1] = (char) (x - 1 + 'a');
    }

    return new String(chars);
  }
}
