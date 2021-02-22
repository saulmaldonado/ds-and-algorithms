class Solution {
  public boolean isNumber(String s) {
    int i = 0;
    int n = s.length();

    while (i < n && s.charAt(i) == ' ') {
      i++;
    }

    if (i == n) {
      return false;
    }

    if (s.charAt(i) == '+' || s.charAt(i) == '-') {
      i++;
    }

    if (i == n) {
      return false;
    }

    int digits = 0;
    int points = 0;

    while (i < n && ((s.charAt(i) >= '0' && s.charAt(i) <= '9') || s.charAt(i) == '.')) {
      if (s.charAt(i) == '.') {
        if (points == 1) {
          return false;
        }
        points++;
      } else {
        digits++;
      }
      i++;
    }

    if (digits < 1) {
      return false;
    }

    if (i < n && (s.charAt(i) == 'e' || s.charAt(i) == 'E')) {
      i++;

      if (i == n) {
        return false;
      }

      if (s.charAt(i) == '+' || s.charAt(i) == '-') {
        i++;
      }

      if (i == n) {
        return false;
      }

      while (i < n && (s.charAt(i) >= '0' && s.charAt(i) <= '9')) {
        i++;
      }
    }

    return i == n;
  }
}
