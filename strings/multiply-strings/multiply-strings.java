class Solution {
  public String multiply(String num1, String num2) {
    int n = num1.length();
    int m = num2.length();
    int[] prods = new int[n + m];

    for (int i = n - 1; i >= 0; i--) {
      for (int j = m - 1; j >= 0; j--) {
        int n1 = num1.charAt(i) - '0';
        int n2 = num2.charAt(j) - '0';

        prods[i + j + 1] += (n1 * n2);
      }
    }

    int p = prods.length;

    int carry = 0;
    for (int i = p - 1; i >= 0; i--) {
      int temp = (prods[i] + carry) % 10;
      carry = (prods[i] + carry) / 10;
      prods[i] = temp;
    }

    StringBuilder prodBuilder = new StringBuilder();

    for (int num : prods) {
      prodBuilder.append(num);
    }

    while (prodBuilder.length() > 0 && prodBuilder.charAt(0) == '0') {
      prodBuilder.deleteCharAt(0);
    }

    if (prodBuilder.length() == 0) {
      return "0";
    }
    return prodBuilder.toString();

  }
}
