class Solution {
  public int[] constructArray(int n, int k) {
    int[] res = new int[n];
    int left = 1;
    int right = k + 1;
    int i = 0;

    while (left < right) {
      res[i] = left;
      left++;
      i++;
      res[i] = right;
      right--;
      i++;
    }

    if (left == right) {
      res[i] = left;
      i++;
    }

    for (int j = k + 2; j <= n; j++) {
      res[i] = j;
      i++;
    }

    return res;
  }
}
