class Solution {
  public boolean closeStrings(String word1, String word2) {

    if (word1.length() != word2.length()) {
      return false;
    }

    int[] chars1 = new int[26];
    int[] chars2 = new int[26];

    for (int i = 0; i < word1.length(); i++) {
      chars1[word1.charAt(i) - 97]++;
      chars2[word2.charAt(i) - 97]++;
    }

    for (int i = 0; i < chars1.length; i++) {
      if ((chars1[i] == 0) != (chars2[i] == 0)) {
        return false;
      }
    }

    Arrays.sort(chars1);
    Arrays.sort(chars2);

    for (int i = 0; i < chars1.length; i++) {
      if (chars1[i] != chars2[i]) {
        return false;
      }
    }

    return true;

  }
}
