class Solution {
  public boolean kLengthApart(int[] nums, int k) {
    int prevIndex = -1;

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        if (prevIndex > -1 && i - prevIndex - 1 < k) {
          return false;
        }
        prevIndex = i;
      }

    }
    return true;
  }
}

class Solution {
  public boolean kLengthApart(int[] nums, int k) {

    int x = 0;

    for (int n : nums) {
      x = (x << 1); // push existing bits in x to left
      x = x | n; // flip first bit to 1 if n is 1
    }

    // edge case for array of 0s or k = 0
    if (x == 0 || k == 0) {
      return true;
    }

    // remove trailing 0s
    while ((x & 1) == 0) { // while last bit is 0
      x = x >> 1; // shift bits to left removing the first bit
    }

    while (x != 1) { // shift bits right until there is only one left
      x = x >> 1; // shift to right

      int count = 0;

      while ((x & 1) == 0) { // shift 0s between 1s counting along the way
        x = x >> 1;
        count++;
      }

      if (count < k) { // check is count is equal to or greater than k
        return false;
      }
    }

    return true;

  }
}
