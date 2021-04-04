class Solution {
  public int countSubstrings(String s) {
    int ans = 0;

    for (int i = 0; i < s.length(); i++) {
      ans += countPalindromesAroundCenter(s, i, i);
      ans += countPalindromesAroundCenter(s, i, i + 1);
    }

    return ans;
  }

  private int countPalindromesAroundCenter(String str, int low, int high) {
    int ans = 0;

    while (low >= 0 && high < str.length()) {
      if (str.charAt(low) != str.charAt(high)) {
        break;
      }

      low--;
      high++;

      ans++;
    }

    return ans;
  }
}
