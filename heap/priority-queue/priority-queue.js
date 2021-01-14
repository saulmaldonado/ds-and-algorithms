class PriorityQueue {
  elements = [];

  size() {
    return this.elements.length;
  }

  peek() {
    return this.elements[0];
  }

  poll() {
    if (!this.size()) throw new Error('queue is empty');
    const popped = this.elements[0];
    const last = this.size() - 1;

    this.swap(0, last);

    this.elements.length--;

    this.heapifyDown();

    return popped;
  }

  offer(element) {
    this.elements.push(element);
    this.heapifyUp();
  }

  heapifyDown() {
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

  heapifyUp() {
    let i = this.size() - 1;
    let parent = Math.floor((i - 1) / 2);

    while (this.elements[parent] > this.elements[i]) {
      this.swap(i, parent);
      i = parent;
      parent = Math.floor((i - 1) / 2);
    }
  }

  swap(i, j) {
    [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
  }
}
