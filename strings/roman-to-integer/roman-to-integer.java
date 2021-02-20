class Solution {
  public int romanToInt(String s) {
    Map<Character, Integer> map = new HashMap<>() {
      {
        put('I', 1);
        put('V', 5);
        put('X', 10);
        put('L', 50);
        put('C', 100);
        put('D', 500);
        put('M', 1000);
      }
    };

    int sum = 0;

    for (int i = s.length() - 1; i >= 0; i--) {
      int cur = map.get(s.charAt(i));
      sum += cur;

      if (i > 0) {
        int next = map.get(s.charAt(i - 1));
        if (next < cur) {
          sum -= next;
          i--;
        }
      }
    }
    return sum;
  }
}
