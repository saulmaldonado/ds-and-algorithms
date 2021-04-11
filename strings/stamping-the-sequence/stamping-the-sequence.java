import java.util.List;

class Solution {
  public int[] movesToStamp(String stamp, String target) {
    char[] s = stamp.toCharArray();
    char[] t = target.toCharArray();

    int n = t.length;
    int m = s.length;

    List<Integer> res = new ArrayList<>();

    boolean[] visited = new boolean[t.length];
    int count = 0;

    while (count < t.length) {
      boolean replaced = false;
      for (int i = 0; i <= t.length - s.length; i++) {
        if (!visited[i] && canReplace(t, i, s)) {
          count = replace(t, i, s.length, count);
          replaced = true;
          visited[i] = true;
          res.add(i);

          if (count == n) {
            break;
          }

        }
      }

      if (!replaced) {
        return new int[0];
      }
    }

    int[] ans = new int[res.size()];

    for (int i = 0; i < res.size(); i++) {
      ans[i] = res.get(res.size() - i - 1);
    }

    return ans;

  }

  private boolean canReplace(char[] t, int start, char[] s) {
    for (int i = 0; i < S.length; i++) {
      if (T[i + p] != '*' && T[i + p] != S[i]) {
        return false;
      }
    }
    return true;
  }

  private int replace(char[] t, int start, int len, int count) {
    for (int i = 0; i < len; i++) {
      if (T[i + start] != '*') {
        T[i + start] = '*';
        count++;
      }
    }
    return count;
  }

}
