package designhashmap

type MyHashMap struct {
	buckets []*Entry
	size    int
}

type Entry struct {
	key   int
	value int
	next  *Entry
}

/** Initialize your data structure here. */
func Constructor() MyHashMap {
	return MyHashMap{buckets: make([]*Entry, 13), size: 13}
}

/** value will always be non-negative. */
func (this *MyHashMap) Put(key int, value int) {
	i := this.getIndex(key)

	curr := this.buckets[i]

	if curr == nil {
		this.buckets[i] = &Entry{key: key, value: value}
		return
	}

	for curr.next != nil {
		if curr.key == key {
			curr.value = value
			return
		}
		curr = curr.next
	}
	if curr.key == key {
		curr.value = value
	} else {
		curr.next = &Entry{key: key, value: value}
	}

}

/** Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
func (this *MyHashMap) Get(key int) int {
	i := this.getIndex(key)

	curr := this.buckets[i]

	if curr == nil {
		return -1
	}

	for curr != nil {
		if curr.key == key {
			return curr.value
		}
		curr = curr.next
	}
	return -1
}

/** Removes the mapping of the specified value key if this map contains a mapping for the key */
func (this *MyHashMap) Remove(key int) {
	i := this.getIndex(key)

	curr := this.buckets[i]
	var prev *Entry

	if curr == nil {
		return
	}

	for curr != nil {
		if curr.key == key {
			if prev == nil {
				this.buckets[i] = curr.next
			} else {
				next := curr.next
				prev.next = next
				curr.next = nil
			}
			return
		}
		prev = curr
		curr = curr.next
	}
}

func (this *MyHashMap) getIndex(key int) int {
	i := key * 12582917 % this.size
	if i < 0 {
		i *= -1
	}
	return i
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Put(key,value);
 * param_2 := obj.Get(key);
 * obj.Remove(key);
 */
