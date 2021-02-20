class Solution {
  public String minRemoveToMakeValid(String s) {
    int n = s.length();
    int open = 0;

    char[] chars = s.toCharArray();

    for (int i = 0; i < n; i++) {
      char cur = chars[i];

      if (cur == ')') {
        if (open == 0) {
          chars[i] = '*';
        } else {
          open--;
        }
      } else if (cur == '(') {
        open++;
      }
    }

    int close = 0;

    for (int i = n - 1; i >= 0; i--) {
      char cur = chars[i];

      if (cur == '(') {
        if (close == 0) {
          chars[i] = '*';
        } else {
          close--;
        }
      } else if (cur == ')') {
        close++;
      }
    }

    StringBuilder builder = new StringBuilder();

    for (char c : chars) {
      if (c != '*') {
        builder.append(c);
      }
    }

    return builder.toString();
  }
}
