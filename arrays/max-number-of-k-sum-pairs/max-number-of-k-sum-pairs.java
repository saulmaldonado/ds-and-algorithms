class Solution {
  public int maxOperations(int[] nums, int k) {
    Arrays.sort(nums);
    int i = 0;
    int j = nums.length - 1;
    int count = 0;

    while (i < j) {
      int sum = nums[i] + nums[j];

      if (sum == k) {
        count++;
        i++;
        j--;
      } else if (sum < k) {
        while (i < j && nums[i] + nums[j] < k) {
          i++;
        }
      } else {
        while (i < j && nums[i] + nums[j] > k) {
          j--;
        }
      }
    }

    return count;
  }
}

class Solution {
  public int maxOperations(int[] nums, int k) {
    Map<Integer, Integer> map = new HashMap<>();
    int count = 0;

    for (int num : nums) {
      map.put(num, map.getOrDefault(num, 0) + 1);
    }

    for (int key : map.keySet()) {
      if (map.containsKey(k - key)) {
        if (k - key == key) {
          count += map.get(key) / 2;
          map.put(key, 0);
        } else {
          count += Math.min(map.get(key), map.get(k - key));
          map.put(k - key, 0);
          map.put(key, 0);
        }
      }
    }

    return count;

  }
}
