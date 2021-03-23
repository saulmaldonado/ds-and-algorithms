class Solution {
  public String[] spellchecker(String[] wordlist, String[] queries) {
    Set<String> words = new HashSet<>(Arrays.asList(wordlist));
    Map<String, String> lowered = new HashMap<>();
    Map<String, String> noVowels = new HashMap<>();

    for (String word : wordlist) {
      lowered.putIfAbsent(caseInsensitive(word), word);
      noVowels.putIfAbsent(errorVowels(word), word);
    }

    for (int i = 0; i < queries.length; i++) {
      String word = queries[i];

      if (words.contains(word)) {
        continue;
      }

      String lower = caseInsensitive(word);
      String noVowel = errorVowels(word);

      if (lowered.containsKey(lower)) {
        queries[i] = lowered.get(lower);
      } else if (noVowels.containsKey(noVowel)) {
        queries[i] = noVowels.get(noVowel);
      } else {
        queries[i] = "";
      }
    }
    return queries;
  }

  private String caseInsensitive(String word) {
    return word.toLowerCase();
  }

  private String errorVowels(String word) {
    return word.toLowerCase().replaceAll("[aeiou]", "*");
  }
}
