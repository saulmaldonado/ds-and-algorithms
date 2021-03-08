/**
 * Initialize your data structure here.
 */
function MyHashMap() {
  this.size = 13;
  this.buckets = new Array(this.size).fill(null);
}

function Entry(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
}

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const i = this.getIndex(key);
  let curr = this.buckets[i];

  if (curr === null) {
    this.buckets[i] = new Entry(key, value);
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
    curr.next = new Entry(key, value);
  }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const i = this.getIndex(key);

  let curr = this.buckets[i];

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
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  let i = this.getIndex(key);

  let curr = this.buckets[i];
  let prev = null;

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
        curr.next = undefined;
      }
      return;
    }
    prev = curr;
    curr = curr.next;
  }
};

MyHashMap.prototype.getIndex = function (key) {
  return Math.abs((key * 12582917) % this.size);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
