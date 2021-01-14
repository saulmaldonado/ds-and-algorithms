class PriorityQueue {
  elements: number[] = [];

  public size(): number {
    return this.elements.length;
  }

  public peek(): number {
    return this.elements[0];
  }

  public poll(): number {
    if (!this.size()) throw new Error('queue is empty');
    const popped = this.elements[0];
    const last = this.size() - 1;

    this.swap(0, last);

    this.elements.length--;

    this.heapifyDown();

    return popped;
  }

  public offer(element: number) {
    this.elements.push(element);
    this.heapifyUp();
  }

  private heapifyDown() {
    let i = 0;
    let len = this.size();

    while (i * 2 + 1 < len) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;
      let smaller = left;

      if (right < len && this.elements[right] < this.elements[left]) {
        smaller = right;
      }

      if (this.elements[i] < this.elements[smaller]) {
        break;
      }

      this.swap(i, smaller);

      i = smaller;
    }
  }

  private heapifyUp() {
    let i = this.size() - 1;
    let parent = Math.floor((i - 1) / 2);

    while (this.elements[parent] > this.elements[i]) {
      this.swap(i, parent);
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }

  private swap(i: number, j: number) {
    [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
  }
}
