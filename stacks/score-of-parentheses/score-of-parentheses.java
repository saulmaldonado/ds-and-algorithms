class Solution {

  public int scoreOfParentheses(String S) {
    Stack<Integer> stack = new Stack<>();
    int score = 0;
    for (char c : S.toCharArray()) {
      if (c == '(') {
        stack.push(score);
        score = 0;
      } else {
        score = stack.pop() + Math.max(score * 2, 1);
      }
    }
    return score;
  }

  public int scoreOfParentheses2(String S) {
    int multiplier = 1;
    int res = 0;

    for (int i = 0; i < S.length() - 1; i++) {
      if (S.charAt(i) == '(') {
        if (S.charAt(i + 1) == ')') {
          res += multiplier;
          i++;
        } else {
          multiplier *= 2;
        }
      } else {
        multiplier /= 2;
      }
    }
    return res;
  }
}
