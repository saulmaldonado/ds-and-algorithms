class Solution {
  public int minimumLengthEncoding(String[] words) {
    Set<String> wordsIncluded = new HashSet(Arrays.asList(words));

    for (String word : words) {
      for (int i = 1; i < word.length(); i++) {
        String prefix = word.substring(i);

        if (wordsIncluded.contains(prefix)) {
          wordsIncluded.remove(prefix);
        }
      }
    }

    int len = 0;

    for (String word : wordsIncluded) {
      len += word.length() + 1;
    }

    return len;
  }

  public int minimumLengthEncoding2(String[] words) {
    TrieNode root = new TrieNode();
    List<TrieNode> leaves = new ArrayList<>();
    Set<String> uniqueWords = new HashSet<>(Arrays.asList(words));

    for (String word : uniqueWords) {
      TrieNode curr = root;

      for (int i = word.length() - 1; i >= 0; i--) {
        char c = word.charAt(i);
        if (!curr.children.containsKey(c)) {
          curr.children.put(c, new TrieNode());
        }
        curr = curr.children.get(c);
      }
      curr.depth = word.length() + 1;
      leaves.add(curr);
    }

    int len = 0;

    for (TrieNode leaf : leaves) {
      if (leaf.children.isEmpty()) {
        len += leaf.depth;
      }
    }
    return len;
  }

  private class TrieNode {
    public Map<Character, TrieNode> children = new HashMap<Character, TrieNode>();
    int depth;
  }

}
