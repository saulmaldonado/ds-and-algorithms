class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> ans = new ArrayList<>();

    for (int i = 0; i < nums.length - 2; i++) {
      int a = i + 1;
      int b = nums.length - 1;
      int target = -nums[i];

      if (target < 0) { // optimization. if our target is negative and the numbers to the right are all
                        // positive, finding a valid triplet is impossible. break the loop
        break;
      }

      if (i > 0 && nums[i - 1] == nums[i]) { // avoids duplicate c
        continue;
      }

      while (a < b) {
        int sum = nums[a] + nums[b];
        if (sum == target) {
          List<Integer> triplet = new ArrayList<>();
          triplet.add(-target);
          triplet.add(nums[a]);
          triplet.add(nums[b]);
          ans.add(triplet);

          a++;

          while (a < b && nums[a - 1] == nums[a]) {
            a++;
          }

          b--;

          while (a < b && nums[b + 1] == nums[b]) {
            b--;
          }

        } else if (sum > target) {
          b--;
          while (a < b && nums[b + 1] == nums[b]) {
            b--;
          }

        } else {
          a++;
          while (a < b && nums[a - 1] == nums[a]) {
            a++;
          }
        }
      }

    }

    return ans;
  }
}
