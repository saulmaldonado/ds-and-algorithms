class Solution {
  public List<String> letterCasePermutation(String S) {
    List<String> res = new ArrayList<>();
    StringBuilder list = new StringBuilder();

    build(S, 0, list, res);

    return res;
  }

  private void build(String s, int i, StringBuilder list, List<String> res) {
    if (i == s.length()) {
      res.add(list.toString());
      return;
    }

    char curr = s.charAt(i);

    if (Character.isLetter(curr)) {
      list.append(Character.toLowerCase(curr));
      build(s, i + 1, list, res);
      list.deleteCharAt(list.length() - 1);

      list.append(Character.toUpperCase(curr));
      build(s, i + 1, list, res);

      list.deleteCharAt(list.length() - 1);
    } else {
      list.append(curr);
      build(s, i + 1, list, res);

      list.deleteCharAt(list.length() - 1);
    }
  }
}
