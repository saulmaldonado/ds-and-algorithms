// Time: O(n) (up to the length of the shortest string in the array)
// Space: O(1)
class Solution {
  public String longestCommonPrefix(String[] strs) {
    if (strs.length == 0)
      return "";

    for (int i = 0; i < strs[0].length(); i++) {
      char curr = strs[0].charAt(i);
      for (int j = 1; j < strs.length; j++) {
        if (i == strs[j].length() || curr != strs[j].charAt(i)) {
          return strs[0].substring(0, i);
        }
      }
    }
    return strs[0];
  }
}
