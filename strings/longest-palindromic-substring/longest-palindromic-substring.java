class Solution {
  public String longestPalindrome(String s) {
    int start = 0;
    int end = 0;
    int maxLen = 0;

    for (int i = 0; i < s.length(); i++) {
      int len1 = findLongest(s, i, i);
      int len2 = findLongest(s, i, i + 1);

      int len = Math.max(len1, len2);

      if (len > maxLen) {
        start = i - (len - 1) / 2;
        end = i + len / 2;

        maxLen = len;
      }
    }

    return s.substring(start, end + 1);
  }

  public int findLongest(String s, int i, int j) {
    while (i >= 0 && j < s.length() && s.charAt(i) == s.charAt(j)) {
      i--;
      j++;
    }
    return j - i - 1;
  }
}

class Solution {
  public String longestPalindrome(String s) {
    s = insertHashes(s);

    int[] lengths = new int[s.length()];

    int center = 0;
    int right = 0;
    int maxIndex = 0;

    for (int i = 0; i < s.length(); i++) {
      int mirror = 2 * center - i;

      if (i < right) {
        lengths[i] = Math.min(lengths[mirror], right - i);
      }

      lengths[i] = findLongest(s, i, lengths[i]);

      if (i + lengths[i] > right) {
        center = i;
        right = i + lengths[i];
      }

      if (lengths[i] > lengths[maxIndex]) {
        maxIndex = i;
      }

    }

    int start = maxIndex - lengths[maxIndex];
    int end = maxIndex + lengths[maxIndex];

    return removeHashes(s.substring(start, end + 1));
  }

  public String removeHashes(String s) {
    List<Character> chars = new ArrayList<>();
    for (int i = 1; i < s.length(); i += 2) {
      chars.add(s.charAt(i));
    }
    StringBuilder builder = new StringBuilder(chars.size());

    for (Character c : chars) {
      builder.append(c);
    }

    return builder.toString();
  }

  public String insertHashes(String s) {
    List<Character> chars = new ArrayList<>();

    for (char c : s.toCharArray()) {
      chars.add('#');
      chars.add(c);
    }
    chars.add('#');

    StringBuilder builder = new StringBuilder(chars.size());

    for (Character c : chars) {
      builder.append(c);
    }
    return builder.toString();
  }

  public int findLongest(String s, int i, int length) {
    int start = i - length - 1;
    int end = i + length + 1;
    while (start >= 0 && end < s.length() && s.charAt(start) == s.charAt(end)) {
      length++;
      start--;
      end++;
    }
    return length;
  }
}
