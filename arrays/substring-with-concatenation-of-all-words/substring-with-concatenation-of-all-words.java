class Solution {
  public List<Integer> findSubstring(String s, String[] words) {
    int n = s.length();

    List<Integer> res = new ArrayList<>();
    Map<String, Integer> map = new HashMap<>();

    for (String w : words) {
      map.put(w, map.getOrDefault(w, 0) + 1);
    }

    int wordsLen = words.length;
    int len = words[0].length();
    int total = len * wordsLen;

    for (int i = 0; i < len; i++) {
      search(s, map, res, i, len, wordsLen);
    }

    return res;
  }

  private void search(String s, Map<String, Integer> map, List<Integer> res, int i, int len, int wordsLen) {
    Map<String, Integer> seen = new HashMap<>();

    int count = 0;
    int start = i;

    for (int j = i; i <= s.length() - len; i += len) {
      String word = s.substring(i, i + len);

      if (map.containsKey(word)) {
        seen.put(word, seen.getOrDefault(word, 0) + 1);

        count++;

        while (seen.get(word) > map.get(word)) {
          String left = s.substring(start, start + len);
          seen.put(left, seen.get(left) - 1);

          count--;
          start = start + len;
        }

        if (count == wordsLen) {
          res.add(start);

          String left = s.substring(start, start + len);

          seen.put(left, seen.get(left) - 1);

          count--;
          start = start + len;
        }

      } else {
        seen.clear();
        start = i + len;
        count = 0;
      }
    }
  }
}
