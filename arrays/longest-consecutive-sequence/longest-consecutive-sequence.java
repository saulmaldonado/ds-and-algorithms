// Sorting
class Solution {
  public int longestConsecutive(int[] nums) {
    if (nums.length == 0)
      return 0;

    Arrays.sort(nums);
    int max = 0;

    int maxSeq = 1;

    for (int i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] == 1) {
        maxSeq++;
      } else if (nums[i] == nums[i - 1]) {
        continue;
      } else {
        max = Math.max(max, maxSeq);
        maxSeq = 1;
      }
    }

    max = Math.max(max, maxSeq);

    return max;

  }
}

// Set
class Solution {
  public int longestConsecutive(int[] nums) {
    if (nums.length == 0)
      return 0;

    Set<Integer> set = new HashSet<>();

    for (int n : nums) {
      set.add(n);
    }

    int max = 0;

    int maxSeq = 1;
    for (int n : nums) {
      if (!set.contains(n - 1)) {
        int num = n;
        while (set.contains(num + 1)) {
          maxSeq++;
          num++;
        }
        max = Math.max(max, maxSeq);
        maxSeq = 1;
      }
    }

    max = Math.max(max, maxSeq);

    return max;

  }
}
