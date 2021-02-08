import java.util.Iterator;

// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html

class PeekingIterator implements Iterator<Integer> {
  Iterator<Integer> iterator;
  Integer head;

  public PeekingIterator(Iterator<Integer> iterator) {
    // initialize any member here.
    this.iterator = iterator;
    if (this.iterator.hasNext()) {
      head = this.iterator.next();
    }
  }

  // Returns the next element in the iteration without advancing the iterator.
  public Integer peek() {
    return head;
  }

  // hasNext() and next() should behave the same as in the Iterator interface.
  // Override them if needed.
  @Override
  public Integer next() {
    Integer res = head;
    if (iterator.hasNext()) {
      head = iterator.next();
    } else {
      head = null;
    }
    return res;
  }

  @Override
  public boolean hasNext() {
    return head != null;
  }
}
