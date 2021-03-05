class Solution {
  public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> res = new ArrayList<>();
    List<Integer> comb = new ArrayList<>();
    build(res, comb, 1, n, k);
    return res;
  }

  private void build(List<List<Integer>> res, List<Integer> comb, int start, int n, int k) {
    if (k == 0) {
      res.add(new ArrayList<>(comb));
      return;
    }

    for (int i = start; i <= n - k + 1; i++) {
      comb.add(i);
      build(res, comb, i + 1, n, k - 1);
      comb.remove(comb.size() - 1);
    }
  }
}
