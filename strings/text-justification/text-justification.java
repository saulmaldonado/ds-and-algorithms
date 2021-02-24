class Solution {
  public List<String> fullJustify(String[] words, int maxWidth) {
    List<String> res = new ArrayList<>();

    int left = 0;
    int n = words.length;

    while (left < n) {
      int len = words[left].length();

      int right = left + 1;

      while (right < n && (len + words[right].length() + (right - left)) <= maxWidth) {
        len += words[right].length();
        right++;
      }

      int extra = maxWidth - len;

      if (right - left == 1 || right == n) {
        // left justify
        res.add(leftJustify(words, left, right, extra));
      } else {
        // mid justify
        res.add(midJustify(words, left, right, extra));
      }

      left = right;
    }

    return res;
  }

  private String leftJustify(String[] words, int left, int right, int extra) {
    int rightSpaces = extra - (right - left - 1);
    StringBuilder sb = new StringBuilder(words[left]);

    for (int i = left + 1; i < right; i++) {
      sb.append(" " + words[i]);
    }

    for (int i = 0; i < rightSpaces; i++) {
      sb.append(" ");
    }

    return sb.toString();
  }

  private String midJustify(String[] words, int left, int right, int extra) {
    int boundaries = right - left - 1;
    int spaces = extra / boundaries;
    int extraSpaces = extra % boundaries;

    StringBuilder sb = new StringBuilder(words[left]);

    for (int i = left + 1; i < right; i++) {
      int spacesToApply = spaces;

      if (extraSpaces > 0) {
        spacesToApply++;
        extraSpaces--;
      }

      for (int j = 0; j < spacesToApply; j++) {
        sb.append(" ");
      }

      sb.append(words[i]);
    }
    return sb.toString();
  }
}
