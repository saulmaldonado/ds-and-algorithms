class Solution {
  public List<List<Integer>> subsets(int[] nums) {
    List<Integer> list = new ArrayList<>();
    List<List<Integer>> ans = new ArrayList<>();

    traverse(0, list, ans, nums);

    return ans;
  }

  private void traverse(int start, List<Integer> list, List<List<Integer>> ans, int[] nums) {
    ans.add(new ArrayList<>(list));

    for (int i = start; i < nums.length; i++) {
      list.add(nums[i]);
      traverse(i + 1, list, ans, nums);
      list.remove(list.size() - 1);
    }
  }
}
