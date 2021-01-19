class Solution {
  public String longestPalindrome(String s) {
    int start = 0;
    int end = 0;
    int maxLen = 0;

    for (int i = 0; i < s.length(); i++) {
      int len1 = findLongest(s, i, i);
      int len2 = findLongest(s, i, i + 1);

      int len = Math.max(len1, len2);

      if (len > maxLen) {
        start = i - (len - 1) / 2;
        end = i + len / 2;

        maxLen = len;
      }
    }

    return s.substring(start, end + 1);
  }

  public int findLongest(String s, int i, int j) {
    while (i >= 0 && j < s.length() && s.charAt(i) == s.charAt(j)) {
      i--;
      j++;
    }
    return j - i - 1;
  }
}
