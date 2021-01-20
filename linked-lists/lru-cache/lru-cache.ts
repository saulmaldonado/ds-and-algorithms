class ListNode2 {
  next: ListNode2 | null;
  prev: ListNode2 | null;
  val: number;
  key: number;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  map: Record<number, ListNode2>;
  capacity: number;
  head: ListNode2;
  tail: ListNode2;
  size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};

    this.head = new ListNode2(0, 0);
    this.tail = new ListNode2(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number) {
    if (!this.map[key]) {
      return -1;
    }

    const node = this.map[key];
    this.moveToFront(node);
    return node.val;
  }

  put(key: number, value: number) {
    if (this.map[key]) {
      const node = this.map[key];
      node.val = value;
      this.moveToFront(node);
    } else {
      if (this.atCapacity()) {
        this.evict();
      }

      const newNode = new ListNode2(key, value);
      this.map[key] = newNode;
      this.size++;
      this.addToFront(newNode);
    }
  }

  atCapacity() {
    return this.size === this.capacity;
  }

  evict() {
    const lastNode: ListNode2 = this.tail.prev!;
    delete this.map[lastNode.key];
    this.size--;

    const prevNode: ListNode2 = lastNode.prev!;
    this.tail.prev = prevNode;
    prevNode.next = this.tail;
  }

  addToFront(node: ListNode2) {
    const firstNode: ListNode2 = this.head.next!;
    this.head.next = node;
    node.prev = this.head;
    node.next = firstNode;
    firstNode.prev = node;
  }

  moveToFront(node: ListNode2) {
    const prevNode: ListNode2 = node.prev!;
    const nextNode: ListNode2 = node.next!;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.addToFront(node);
  }
}
