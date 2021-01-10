class Solution {
  public int createSortedArray(int[] A) {
    int res = 0;

    int n = A.length;

    int mod = (int) 1e9 + 7;

    int[] c = new int[(int) (10e5) + 1]; // counts of all possible number 1_000_000

    for (int i = 0; i < n; i++) {
      // first call to get with get count of all numbers less than A[i], second call
      // get all numbers up to A[i] including A[i] and subtract it with the position
      // in the array. This will give up the count of number in the array that are
      // greater than A[i]
      int min = (res + Math.min(get(A[i] - 1, c), i - get(A[i], c))) % mod;
      res = min;
      update(A[i], c); // will increment the occurrence of A[i] in our tree
    }
    return res;
  }

  public void update(int x, int[] c) {
    while (x < 100001) {
      c[x]++;
      x += x & -x;
    }
  }

  public int get(int x, int[] c) {
    int res = 0;
    while (x > 0) {
      res += c[x];
      x -= x & -x;
    }
    return res;
  }
}

// O(n^2)
class Solution {
  public int createSortedArray(int[] A) {
    int res = 0;

    int n = A.length;

    int mod = (int) 1e9 + 7;

    int[] c = new int[(int) (10e5) + 1]; // counts of all possible number 1_000_000

    for (int i = 0; i < n; i++) {
      int min = (res + Math.min(get(A[i] - 1, c), i - get(A[i], c))) % mod;
      res = min;
      update(A[i], c); // will increment the occurance of A[i] in our tree
    }
    return res;
  }

  public void update(int x, int[] c) {
    c[x]++;
  }

  public int get(int x, int[] c) {
    int res = 0;
    while (x > 0) {
      res += c[x];
      x--;
    }
    return res;
  }
}
