// brute force O(n^2). O(n^2) to generate every substring * O(n) for every check
class Solution {
  public int longestValidParentheses(String s) {
    int l = 2;
    int max = 0;

    while (l <= s.length()) {
      int i = 0;
      int j = l;
      while (j <= s.length()) {

        if (check(s.substring(i, j))) {
          max = Math.max(max, j - i);
        }
        i++;
        j++;
      }
      l += 2;
    }
    return max;
  }

  public boolean check(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
      if (c == '(') {
        stack.push(c);
      } else {
        if (stack.empty()) {
          return false;
        } else {
          stack.pop();
        }
      }
    }
    return stack.empty();
  }
}

// O(n) time and O(1) space iterating string forwards and backwards
class Solution {
  public int longestValidParentheses(String s) {

    int max = 0;

    int opening = 0;
    int closing = 0;

    for (int i = 0; i < s.length(); i++) {
      char curr = s.charAt(i);

      if (curr == '(') {
        opening++;
      } else {
        closing++;
        if (closing > opening) {
          closing = 0;
          opening = 0;
        } else if (closing == opening) {
          max = Math.max(max, opening + closing);
        }
      }
    }

    if (closing < opening) {
      opening = 0;
      closing = 0;

      for (int i = s.length() - 1; i >= 0; i--) {
        char curr = s.charAt(i);

        if (curr == '(') {
          opening++;
          if (closing < opening) {
            closing = 0;
            opening = 0;
          } else if (closing == opening) {
            max = Math.max(max, opening + closing);
          }
        } else {
          closing++;
        }
      }
    }

    return max;
  }
}
