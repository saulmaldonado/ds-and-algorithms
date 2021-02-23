class Solution {
  public String addBinary(String a, String b) {
    int n = a.length();
    int m = b.length();

    int i = n - 1;
    int j = m - 1;

    int carry = 0;
    StringBuilder sb = new StringBuilder();

    while (i >= 0 || j >= 0) {
      int sum = carry;

      if (i >= 0) {
        sum += a.charAt(i) - '0';
        i--;
      }

      if (j >= 0) {
        sum += b.charAt(j) - '0';
        j--;
      }

      sb.append(sum & 1);

      if (sum > 1) {
        carry = 1;
      } else {
        carry = 0;
      }
    }

    if (carry == 1) {
      sb.append(1);
    }

    return sb.reverse().toString();
  }
}
