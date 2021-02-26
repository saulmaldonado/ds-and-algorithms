class Solution {
  public boolean validateStackSequences(int[] pushed, int[] popped) {
    int n = pushed.length;

    if (n == 0) {
      return true;
    }

    int i = 0;

    Stack<Integer> stack = new Stack<>();

    for (int p : pushed) {
      stack.push(p);

      while (!stack.isEmpty() && stack.peek() == popped[i]) {
        stack.pop();
        i++;
      }
    }
    return i == n;
  }
}
