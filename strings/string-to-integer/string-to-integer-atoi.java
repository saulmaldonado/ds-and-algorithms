class Solution {
  public int myAtoi(String s) {
    char[] chars = s.toCharArray();

    int i = 0;
    int sign = 1;
    while (i < chars.length && chars[i] == ' ') {
      i++;
    }

    if (i < chars.length && chars[i] == '-') {
      sign = -1;
      i++;
    } else if (i < chars.length && chars[i] == '+') {
      i++;
    }

    long sum = 0;

    while (i < chars.length && chars[i] >= '0' && chars[i] <= '9') {
      sum = (sum * 10) + (chars[i] - '0') * sign;
      if (sum > Integer.MAX_VALUE) {
        return Integer.MAX_VALUE;
      } else if (sum < Integer.MIN_VALUE) {
        return Integer.MIN_VALUE;
      }
      i++;
    }

    return (int) sum;

  }
}
