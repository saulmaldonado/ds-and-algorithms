class Solution {
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
    Arrays.sort(candidates);

    List<List<Integer>> result = new ArrayList<List<Integer>>();
    List<Integer> list = new ArrayList<>();

    printResult(result, list, candidates, target, 0);

    return result;
  }

  public void printResult(List<List<Integer>> result, List<Integer> list, int candidates[], int target, int start) {
    if (target == 0) {
      result.add(new ArrayList<Integer>(list));
    } else if (target > 0) {
      for (int k = start; k < candidates.length && target >= candidates[k]; k++) {
        if (k > start && candidates[k] == candidates[k - 1]) {
          continue;
        } else {
          list.add(candidates[k]);
          printResult(result, list, candidates, target - candidates[k], k + 1);
          list.remove(list.size() - 1);
        }
      }
    }
  }
}
