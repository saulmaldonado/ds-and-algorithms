class Solution {
  public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    Set<String> set = new HashSet<>();

    for (String word : wordList) {
      set.add(word);
    }

    if (!set.contains(endWord)) {
      return 0;
    }

    Queue<String> queue = new ArrayDeque<>();

    queue.offer(beginWord);

    int level = 1;

    while (!queue.isEmpty()) {
      int size = queue.size();

      for (int i = 0; i < size; i++) {
        String curr = queue.poll();
        char[] chars = curr.toCharArray();

        for (int j = 0; j < chars.length; j++) {
          char original = chars[j];
          for (char c = 'a'; c <= 'z'; c++) {
            if (chars[j] == c) {
              continue;
            }

            chars[j] = c;

            String newWord = String.valueOf(chars);

            if (newWord.equals(endWord)) {
              return level + 1;
            }

            if (set.contains(newWord)) {
              queue.offer(newWord);
              set.remove(newWord);
            }
          }
          chars[j] = original;
        }
      }
      level++;
    }
    return 0;
  }
}
