class Solution {
  public int findKthLargest(int[] nums, int k) {

    Arrays.sort(nums);

    return nums[nums.length - k];

  }
}

class Solution {
  public int findKthLargest(int[] nums, int k) {

    PriorityQueue<Integer> queue = new PriorityQueue<>();

    for (int i = 0; i < nums.length; i++) {
      queue.offer(nums[i]);

      if (queue.size() > k) {
        queue.poll();
      }
    }
    return queue.peek();
  }
}

class Solution {
  public int findKthLargest(int[] nums, int k) {
    k = nums.length - k;
    int start = 0;
    int end = nums.length - 1;

    while (start < end) {
      int pivot = nums[start];
      int j = start;

      swap(start, end, nums);

      for (int i = start; i < end; i++) {
        if (nums[i] <= pivot) {
          swap(i, j, nums);
          j++;
        }
      }

      swap(j, end, nums);

      if (j == k) {
        return pivot;
      } else if (j < k) {
        start = j + 1;
      } else {
        end = j - 1;
      }

    }
    return nums[start];
  }

  public void swap(int i, int j, int[] nums) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}
