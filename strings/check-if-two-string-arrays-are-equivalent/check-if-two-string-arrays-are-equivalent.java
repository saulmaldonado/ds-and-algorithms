class Solution {
  public boolean arrayStringsAreEqual(String[] word1, String[] word2) {

    int i = 0;
    int j = 0;

    for (int a = 0, b = 0; i < word1.length && j < word2.length;) {
      String currString1 = word1[i];
      char currChar1 = currString1.charAt(a++);

      String currString2 = word2[j];
      char currChar2 = currString2.charAt(b++);

      if (currChar1 != currChar2) {
        return false;
      }

      if (a == currString1.length()) {
        a = 0;
        i++;
      }

      if (b == currString2.length()) {
        b = 0;
        j++;
      }
    }

    return i == word1.length && j == word2.length;
  }
}
