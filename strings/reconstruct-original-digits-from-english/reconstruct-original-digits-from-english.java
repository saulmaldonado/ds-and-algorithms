class Solution {
  public String originalDigits(String s) {
    int[] count = new int[10];
    for (char c : s.toCharArray()) {
      if (c == 'z') {
        count[0]++;
      } else if (c == 'w') {
        count[2]++;
      } else if (c == 'u') {
        count[4]++;
      } else if (c == 'x') {
        count[6]++;
      } else if (c == 'g') {
        count[8]++;
      } else if (c == 's') {
        count[7]++;
      } else if (c == 'h') {
        count[3]++;
      } else if (c == 'f') {
        count[5]++;
      } else if (c == 'i') {
        count[9]++;
      } else if (c == 'o') {
        count[1]++;
      }
    }

    count[7] -= count[6];
    count[5] -= count[4];
    count[3] -= count[8];
    count[9] = count[9] - count[8] - count[5] - count[6];
    count[1] = count[1] - count[0] - count[2] - count[4];

    StringBuilder sb = new StringBuilder();

    for (int i = 0; i < count.length; i++) {
      for (int j = 0; j < count[i]; j++) {
        sb.append(i);
      }
    }
    return sb.toString();
  }
}
