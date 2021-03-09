class Solution {
  public String customSortString(String S, String T) {

    int[] freq = new int[26];

    for (char c : T.toCharArray()) {
      freq[c - 'a']++;
    }

    StringBuilder sb = new StringBuilder();

    for (char c : S.toCharArray()) {
      while (freq[c - 'a'] > 0) {
        sb.append(c);
        freq[c - 'a']--;
      }
    }

    for (int i = 0; i < freq.length; i++) {
      while (freq[i] > 0) {
        sb.append((char) (i + 'a'));
        freq[i]--;
      }
    }

    return sb.toString();
  }

  public String customSortString2(String S, String T) {
    Map<Character, Integer> map = new HashMap<>();

    for (int i = 0; i < S.length(); i++) {
      char c = S.charAt(i);
      map.put(c, i);
    }

    List<Character> characters = new ArrayList<>();

    for (char c : T.toCharArray()) {
      characters.add(c);
    }

    Collections.sort(characters, (a, b) -> {
      return map.getOrDefault(a, 26) - map.getOrDefault(b, 26);
    });

    StringBuilder sb = new StringBuilder();

    for (Character c : characters) {
      sb.append(c);
    }

    return sb.toString();
  }

}
