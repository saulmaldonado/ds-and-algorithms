import java.util.Arrays;

class Solution {
  public boolean isAnagram(String s, String t) {
    char[] sChars = s.toCharArray();
    char[] tChars = t.toCharArray();

    Arrays.sort(sChars);
    Arrays.sort(tChars);

    return Arrays.equals(sChars, tChars);
  }

  public boolean isAnagram2(String s, String t) {

    if (s.length() != t.length()) {
      return false;
    }

    int[] chars = new int[26];

    for (char c : s.toCharArray()) {
      chars[c - 'a']++;
    }

    for (char c : t.toCharArray()) {
      chars[c - 'a']--;
      if (chars[c - 'a'] < 0) {
        return false;
      }
    }

    return true;

  }
}
