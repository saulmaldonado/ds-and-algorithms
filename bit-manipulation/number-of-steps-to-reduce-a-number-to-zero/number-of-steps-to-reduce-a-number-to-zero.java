class Solution {
  public int numberOfSteps(int num) {
    if (num == 0) {
      return 0;
    }

    int count = 0;

    while (num > 0) {
      if ((num & 1) == 1) {
        count += 2;
      } else {
        count++;
      }
      num >>= 1;
    }
    return count - 1;
  }
}
