import java.util.ArrayList;

class PriorityQueue {

  ArrayList<Integer> elements = new ArrayList<>();

  public PriorityQueue() {
  }

  public int peek() {
    return elements.get(0);
  }

  public int poll() throws Exception {
    if (size() <= 0)
      throw new Exception("no elements in the queue");
    int popped = elements.get(0);
    int last = size() - 1;

    swap(0, last);

    elements.remove(last);

    heapifyDown();

    return popped;
  }

  public void offer(int element) {
    elements.add(element);
    heapifyUp();
  }

  public void print() {
    System.out.println(elements.toString());
  }

  private void heapifyUp() {
    int i = size() - 1;
    int parent = (i - 1) / 2;

    while (elements.get(parent) > elements.get(i)) {
      swap(i, parent);
      i = parent;
      parent = (i - 1) / 2;
    }
  }

  private void heapifyDown() {
    int i = 0;
    int len = size();

    while (i * 2 + 1 < len) {
      int left = i * 2 + 1;
      int right = i * 2 + 2;

      int smaller = left;

      if (right < len && elements.get(right) < elements.get(left)) {
        smaller = right;
      }

      if (elements.get(i) < elements.get(smaller)) {
        break;
      }
      swap(i, smaller);
      i = smaller;
    }
  }

  private void swap(int i, int j) {
    int temp = elements.get(i);
    elements.set(i, elements.get(j));
    elements.set(j, temp);
  }
}
