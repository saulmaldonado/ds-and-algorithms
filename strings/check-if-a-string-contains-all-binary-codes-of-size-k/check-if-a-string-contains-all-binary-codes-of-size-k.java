class Solution {
  public boolean hasAllCodes(String s, int k) {
    if (s.length() < k || s.length() - k + 1 < (1 << k)) {
      return false;
    }

    Set<String> seen = new HashSet<>();

    int total = 1 << k;

    int n = s.length();
    int start = 0;
    int end = start + k;

    while (end <= n) {
      String curr = s.substring(start, end);

      if (!seen.contains(curr)) {
        seen.add(curr);
      }

      if (seen.size() == total) {
        return true;
      }

      start++;
      end++;
    }

    return false;

  }
}
