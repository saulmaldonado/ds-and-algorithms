class Solution {
  public String convert(String s, int numRows) {

    if (numRows == 1) {
      return s;
    }
    StringBuilder[] map = new StringBuilder[numRows];

    int i = 0;
    int j = 0;
    int n = s.length();
    int dir = -1;

    while (j < n) {
      if (map[i] == null) {
        map[i] = new StringBuilder();
      }
      StringBuilder builder = map[i];

      builder.append(s.charAt(j));

      if (i == numRows - 1 || i == 0) {
        dir = -dir;
      }

      i += dir;

      j++;
    }

    StringBuilder main = new StringBuilder();

    for (StringBuilder b : map) {
      if (b != null) {
        main.append(b.toString());
      }
    }

    return main.toString();

  }
}
