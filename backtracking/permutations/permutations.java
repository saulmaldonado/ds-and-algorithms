import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
  public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> ans = new ArrayList<>();
    List<Integer> list = new ArrayList<>();
    Set<Integer> visited = new HashSet<>();

    backtrack(nums, visited, ans, list);

    return ans;
  }

  public void backtrack(int[] nums, Set<Integer> visited, List<List<Integer>> ans, List<Integer> list) {

    if (list.size() == nums.length) {
      ans.add(new ArrayList<>(list));
      return;
    }

    for (int i = 0; i < nums.length; i++) {

      if (visited.contains(i)) {
        continue;
      }

      visited.add(i);
      list.add(nums[i]);

      backtrack(nums, visited, ans, list);

      list.remove(list.size() - 1);
      visited.remove(i);
    }
  }
}
