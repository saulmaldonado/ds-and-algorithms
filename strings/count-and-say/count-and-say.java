class Solution {
  public String countAndSay(int n) {
    String str = "1";
    int i = 1;

    while (i < n) {
      str = say(str);
      i++;
    }

    return str;
  }

  private String say(String s) {

    char curr = s.charAt(0);

    int count = 1;

    StringBuilder chars = new StringBuilder();

    for (int i = 1; i < s.length(); i++) {
      if (s.charAt(i) != curr) {
        chars.append(count);
        chars.append(curr);
        curr = s.charAt(i);
        count = 1;
      } else {
        count++;
      }
    }
    chars.append(count);
    chars.append(curr);
    return chars.toString();
  }
}
