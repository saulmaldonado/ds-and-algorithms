class Solution {
  public List<String> wordSubsets(String[] A, String[] B) {
    int[] maxFreqB = new int[26];
    for (String b : B) {
      int[] freqB = count(b);

      for (int i = 0; i < 26; i++) {
        maxFreqB[i] = Math.max(maxFreqB[i], freqB[i]);
      }
    }

    List<String> ans = new ArrayList();

    search: for (String a : A) {
      int[] freqA = count(a);
      if (compare(freqA, maxFreqB)) {
        ans.add(a);
      }
    }

    return ans;
  }

  public int[] count(String S) {
    int[] freq = new int[26];

    for (char c : S.toCharArray()) {
      freq[c - 'a']++;
    }
    return freq;
  }

  public boolean compare(int[] A, int[] B) {
    for (int i = 0; i < 26; i++) {
      if (A[i] < B[i]) {
        return false;
      }
    }

    return true;
  }
}
