class Solution {
  public List<String> generateParenthesis(int n) {
    List<String> ans = new ArrayList<>();
    backtrack(ans, "", 0, 0, n);
    return ans;
  }

  private void backtrack(List<String> ans, String currString, int open, int close, int n) {
    if (currString.length() == n * 2) {
      ans.add(currString);
      return;
    }

    if (open < n) {
      backtrack(ans, currString + "(", open + 1, close, n);
    }

    if (close < open) {
      backtrack(ans, currString + ")", open, close + 1, n);
    }

  }
}
