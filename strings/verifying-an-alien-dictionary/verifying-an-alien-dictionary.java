class Solution {
  public boolean isAlienSorted(String[] words, String order) {
    int[] alphabet = new int[26];

    int n = order.length();

    for (int i = 0; i < n; i++) {
      alphabet[order.charAt(i) - 'a'] = i;
    }

    for (int i = 0; i < words.length - 1; i++) {
      for (int j = 0; j < words[i].length(); j++) {

        if (j == words[i + 1].length()) {
          return false;
        }

        int firstChar = words[i].charAt(j) - 'a';
        int secondChar = words[i + 1].charAt(j) - 'a';

        if (alphabet[firstChar] > alphabet[secondChar]) {
          return false;
        }

        if (alphabet[firstChar] < alphabet[secondChar]) {
          break;
        }
      }
    }
    return true;
  }
}
