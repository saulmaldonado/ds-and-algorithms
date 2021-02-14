class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {

    Map<String, List<String>> map = new HashMap<>();
    List<List<String>> res = new ArrayList<>();

    for (String str : strs) {
      char[] characters = str.toCharArray();

      Arrays.sort(characters);

      String newStr = new String(characters);

      map.putIfAbsent(newStr, new ArrayList<String>());

      List<String> list = map.get(newStr);

      list.add(str);
    }

    for (String key : map.keySet()) {
      res.add(map.get(key));
    }

    return res;
  }

  public List<List<String>> groupAnagrams2(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    List<List<String>> res = new ArrayList<>();

    for (String str : strs) {
      int[] charFreq = new int[26];

      for (char c : str.toCharArray()) {
        charFreq[c - 'a']++;
      }

      StringBuilder keyBuilder = new StringBuilder();

      for (int f : charFreq) {
        keyBuilder.append(f).append('#');
      }

      String key = keyBuilder.toString();

      map.putIfAbsent(key, new ArrayList<>());

      map.get(key).add(str);
    }

    for (List<String> list : map.values()) {
      res.add(list);
    }
    return res;
  }
}
