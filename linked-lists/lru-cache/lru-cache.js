class ListNode {
  next;
  tail;
  val;
  key;

  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  map;
  capacity;
  head;
  tail;
  size;

  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};

    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map[key]) {
      return -1;
    }

    const node = this.map[key];
    this.moveToFront(node);
    return node.val;
  }

  put(key, value) {
    if (this.map[key]) {
      const node = this.map[key];
      node.val = value;
      this.moveToFront(node);
    } else {
      if (this.atCapacity()) {
        this.evict();
      }

      const newNode = new ListNode(key, value);
      this.map[key] = newNode;
      this.size++;
      this.addToFront(newNode);
    }
  }

  atCapacity() {
    return this.size === this.capacity;
  }

  evict() {
    const lastNode = this.tail.prev;
    delete this.map[lastNode.key];
    this.size--;

    const prevNode = lastNode.prev;
    this.tail.prev = prevNode;
    prevNode.next = this.tail;
  }

  addToFront(node) {
    const firstNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = firstNode;
    firstNode.prev = node;
  }

  moveToFront(node) {
    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.addToFront(node);
  }
}
