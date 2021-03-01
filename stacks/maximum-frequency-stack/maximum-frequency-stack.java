class FreqStack {
  private Map<Integer, Integer> freq;
  private Stack<Stack<Integer>> stackOfStacks;

  public FreqStack() {
    freq = new HashMap<>();
    stackOfStacks = new Stack<>();
  }

  public void push(int x) {
    int xFreq = freq.getOrDefault(x, 0) + 1;
    freq.put(x, xFreq);

    if (xFreq > stackOfStacks.size()) {
      stackOfStacks.push(new Stack<>());
    }

    Stack<Integer> stack = stackOfStacks.get(xFreq - 1);
    stack.push(x);
  }

  public int pop() {
    Stack<Integer> topStack = stackOfStacks.peek();
    int returnValue = topStack.pop();
    freq.put(returnValue, freq.get(returnValue) - 1);

    if (freq.get(returnValue) == 0) {
      freq.remove(returnValue);
    }

    if (topStack.size() == 0) {
      stackOfStacks.pop();
    }

    return returnValue;
  }
}

/**
 * Your FreqStack object will be instantiated and called as such: FreqStack obj
 * = new FreqStack(); obj.push(x); int param_2 = obj.pop();
 */
