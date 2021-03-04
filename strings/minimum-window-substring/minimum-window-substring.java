class Solution {
  public String minWindow(String s, String t) {
    int n = s.length();

    Map<Character, Integer> freq = new HashMap<>();

    for (char c : t.toCharArray()) {
      freq.put(c, freq.getOrDefault(c, 0) + 1);
    }

    int unique = freq.size();

    int left = 0;
    int right = 0;
    int count = 0;

    int minLeft = -1;
    int minRight = -1;
    int minLen = Integer.MAX_VALUE;

    Map<Character, Integer> window = new HashMap<>();

    while (right < n) {
      char cur = s.charAt(right);

      if (freq.containsKey(cur)) {
        window.put(cur, window.getOrDefault(cur, 0) + 1);

        if (freq.get(cur).equals(window.get(cur))) {
          count++;
        }
      }

      while (left <= right && unique == count) {
        int len = right - left + 1;

        if (minLeft == -1 || len < minLen) {
          minLen = len;
          minLeft = left;
          minRight = right;
        }

        char c = s.charAt(left);

        if (freq.containsKey(c)) {
          window.put(c, window.get(c) - 1);

          if (window.get(c) < freq.get(c)) {
            count--;
          }
        }
        left++;
      }
      right++;
    }

    if (minLeft == -1) {
      return "";
    }

    return s.substring(minLeft, minRight + 1);
  }
}
