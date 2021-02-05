class Solution {
  public int divide(int dividend, int divisor) {
    if (dividend == 1 << 31 && divisor == -1) {
      return (1 << 31) - 1;
    }

    int sign = 1;

    if (dividend < 0) {
      sign *= -1;
    }

    if (divisor < 0) {
      sign *= -1;
    }

    int dvd = Math.abs(dividend);
    int dvr = Math.abs(divisor);
    int res = 0;

    while (dvd - dvr >= 0) {
      int x = 0;

      while (dvd - (dvr << x << 1) >= 0) {
        x++;
      }

      res += 1 << x;
      dvd -= dvr << x;
    }

    return res * sign;
  }

}
