import java.util.Map;

class Solution {
  public int lengthOfLongestSubstring(String s) {
    int n = s.length();
    int maxLength = 0;
    Map<Character, Integer> map = new HashMap<>();

    int j = 0;

    for (int i = 0; i < n; i++) {
      char curr = s.charAt(i);
      if (map.containsKey(curr)) {
        j = Math.max(map.get(curr), j);
      }

      maxLength = Math.max(maxLength, i - j + 1);

      map.put(curr, i + 1);
    }
    return maxLength;
  }
}
