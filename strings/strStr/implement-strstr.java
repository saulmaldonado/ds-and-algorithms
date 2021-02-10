class Solution {
  public int strStr(String haystack, String needle) {
    int n = haystack.length();
    int m = needle.length();
    if (m == 0) {
      return 0;
    }

    int[] kmp = generateKmp(haystack, needle);

    int i = 0;
    int j = 0;

    while (i < n) {
      if (haystack.charAt(i) == needle.charAt(j)) {
        j++;
        i++;
      }

      if (j == needle.length()) {
        return i - j;
      } else if (i < n && haystack.charAt(i) != needle.charAt(j)) {
        if (j != 0) {
          j = kmp[j - 1];
        } else {
          i++;
        }
      }
    }
    return -1;
  }

  private int[] generateKmp(String haystack, String needle) {

    int n = needle.length();
    int[] kmp = new int[n];

    // kmp[0] = 0;
    int j = 0;
    int i = 1;

    while (i < n) {
      if (needle.charAt(i) == needle.charAt(j)) {
        j++;
        kmp[i] = j;
        i++;
      } else {
        if (j != 0) {
          j = kmp[j - 1];
        } else {
          kmp[i] = 0;
          i++;
        }
      }
    }
    return kmp;
  }
}
