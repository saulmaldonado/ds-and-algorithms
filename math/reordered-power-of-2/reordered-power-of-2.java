class Solution {
  public boolean reorderedPowerOf2(int N) {
    int[] nFreq = countDigits(N);

    int i = 0;

    while (i < 30) {
      if (Arrays.equals(nFreq, countDigits(1 << i))) {
        return true;
      }
      i++;
    }
    return false;
  }

  public int[] countDigits(int n) {
    int[] freq = new int[10];

    while (n > 0) {
      int lastDigit = n % 10;
      freq[lastDigit]++;
      n /= 10;
    }
    return freq;
  }
}
