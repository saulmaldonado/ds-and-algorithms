class MyHashMap {
  private final int size = 13;

  Entry[] buckets;

  /** Initialize your data structure here. */
  public MyHashMap() {
    this.buckets = new Entry[size];
  }

  /** value will always be non-negative. */
  public void put(int key, int value) {
    int i = getIndex(key);
    Entry curr = buckets[i];

    if (curr == null) {
      buckets[i] = new Entry(key, value);
      return;
    }

    while (curr.next != null) {
      if (curr.key == key) {
        curr.value = value;
        return;
      }
      curr = curr.next;
    }

    if (curr.key == key) {
      curr.value = value;
    } else {
      curr.next = new Entry(key, value);
    }
  }

  /**
   * Returns the value to which the specified key is mapped, or -1 if this map
   * contains no mapping for the key
   */
  public int get(int key) {
    int i = getIndex(key);

    Entry curr = buckets[i];

    if (curr == null) {
      return -1;
    }

    while (curr != null) {
      if (curr.key == key) {
        return curr.value;
      }
      curr = curr.next;
    }

    return -1;
  }

  /**
   * Removes the mapping of the specified value key if this map contains a mapping
   * for the key
   */
  public void remove(int key) {
    int i = getIndex(key);

    Entry curr = buckets[i];
    Entry prev = null;

    if (curr == null) {
      return;
    }

    while (curr != null) {
      if (curr.key == key) {
        if (prev == null) {
          buckets[i] = curr.next;
        } else {
          Entry next = curr.next;
          prev.next = next;
          curr.next = null;
        }
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  private int getIndex(int key) {
    return Math.abs(key * 12582917 % size);
  }

  private class Entry {
    int key;
    int value;
    Entry next;

    public Entry(int key, int value) {
      this.key = key;
      this.value = value;
    }
  }
}
