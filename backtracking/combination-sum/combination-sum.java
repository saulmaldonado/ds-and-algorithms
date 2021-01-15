class Solution {
  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> ans = new ArrayList<>();

    if (candidates.length == 0) {
      return ans;
    }

    Arrays.sort(candidates);

    List<Integer> list = new ArrayList<>();
    add(candidates, target, 0, ans, list, 0);
    return ans;
  }

  public void add(int[] candidates, int target, int sum, List<List<Integer>> ans, List<Integer> list, int start) {
    if (sum == target) {
      ans.add(new ArrayList<Integer>(list));
      return;
    } else if (sum > target) {
      return;
    }

    for (int i = start; i < candidates.length; i++) {
      sum += candidates[i];
      list.add(candidates[i]);

      add(candidates, target, sum, ans, list, i);

      list.remove(list.size() - 1);
      sum -= candidates[i];
    }
  }
}
