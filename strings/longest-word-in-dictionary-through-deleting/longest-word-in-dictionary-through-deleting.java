class Solution {
  public String findLongestWord(String s, List<String> d) {
    String maxString = "";
    for (String cur : d) {
      if (search(s, cur)) {
        if (cur.length() > maxString.length() || (cur.length() == maxString.length() && cur.compareTo(maxString) < 0)) {
          maxString = cur;
        }
      }
    }
    return maxString;
  }

  private boolean search(String s, String word) {
    int i = 0;
    int j = 0;
    int n = s.length();
    int m = word.length();

    while (i < n && j < m) {
      if (s.charAt(i) == word.charAt(j)) {
        i++;
        j++;
      } else {
        i++;
      }
    }

    return j == m;
  }
}
