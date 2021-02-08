/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
  iterator: Iterator;
  head: number | null;
  constructor(iterator: Iterator) {
    this.iterator = iterator;
    if (this.iterator.hasNext()) {
      this.head = this.iterator.next()!;
    }
  }

  peek(): number | null {
    return this.head;
  }

  next(): number {
    const res = this.head;
    if (this.iterator.hasNext()) {
      this.head = this.iterator.next();
    } else {
      this.head = null;
    }
    return res!;
  }

  hasNext(): boolean {
    return this.head != null;
  }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
