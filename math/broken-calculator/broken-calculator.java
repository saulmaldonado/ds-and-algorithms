class Solution {
  public int brokenCalc(int X, int Y) {
    int operations = 0;

    while(X < Y) {
      if(Y % 2 == 1) {
        Y++;
      } else {
        Y /= 2;
      }
      operations++;
    }

    return X - Y + operations;
  }
}
