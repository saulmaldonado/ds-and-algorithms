class Solution {

  public List<String> letterCombinations(String digits) {
    List<String> ans = new ArrayList<>();

    if (digits.length() == 0) {
      return ans;
    }

    Map<String, String> phone = new HashMap<String, String>() {
      {
        put("2", "abc");
        put("3", "def");
        put("4", "ghi");
        put("5", "jkl");
        put("6", "mno");
        put("7", "pqrs");
        put("8", "tuv");
        put("9", "wxyz");
      }
    };

    backtrack(digits, "", ans, phone);

    return ans;
  }

  public void backtrack(String digits, String combination, List<String> ans, Map<String, String> phone) {
    if (digits.length() == 0) {
      ans.add(combination);
      return;
    }

    String currentDigitLetters = phone.get(digits.substring(0, 1));

    for (int i = 0; i < currentDigitLetters.length(); i++) {
      String letter = currentDigitLetters.substring(i, i + 1);
      backtrack(digits.substring(1), combination + letter, ans, phone);
    }
  }
}
