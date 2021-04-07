class Solution {
  public boolean halvesAreAlike(String s) {
    int n = s.length();

    int firstCount = 0;
    int secondCount = 0;

    int i = 0;
    int j = n / 2;

    while (j < n) {
      if (isVowel(s.charAt(i))) {
        firstCount++;
      }

      if (isVowel(s.charAt(j))) {
        secondCount++;
      }

      i++;
      j++;
    }

    return firstCount == secondCount;
  }

  private boolean isVowel(char c) {
    switch (Character.toLowerCase(c)) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
    default:
      return false;
    }
  }
}
