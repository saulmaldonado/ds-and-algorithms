class MyHashMap {
  size: number = 13;
  buckets: Array<HashMapEntry | null>;
  constructor() {
    this.size = 13;
    this.buckets = new Array(this.size).fill(null);
  }

  put(key: number, value: number): void {
    const i: number = this.getIndex(key);
    let curr: HashMapEntry | null = this.buckets[i];

    if (curr === null) {
      this.buckets[i] = new HashMapEntry(key, value);
      return;
    }

    while (curr.next !== null) {
      if (curr.key === key) {
        curr.value = value;
        return;
      }
      curr = curr.next;
    }
    if (curr.key === key) {
      curr.value = value;
    } else {
      curr.next = new HashMapEntry(key, value);
    }
  }

  get(key: number): number {
    const i: number = this.getIndex(key);

    let curr: HashMapEntry | null = this.buckets[i];

    if (curr === null) {
      return -1;
    }

    while (curr !== null) {
      if (curr.key === key) {
        return curr.value;
      }
      curr = curr.next;
    }
    return -1;
  }

  remove(key: number): void {
    const i: number = this.getIndex(key);

    let curr: HashMapEntry | null = this.buckets[i];
    let prev: HashMapEntry | null = null;

    if (curr === null) {
      return;
    }

    while (curr != null) {
      if (curr.key === key) {
        if (prev === null) {
          this.buckets[i] = curr.next;
        } else {
          const next = curr.next;
          prev.next = next;
          curr.next = null;
        }
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  getIndex(key: number): number {
    return Math.abs((key * 12582917) % this.size);
  }
}

class HashMapEntry {
  key: number;
  value: number;
  next: HashMapEntry | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
