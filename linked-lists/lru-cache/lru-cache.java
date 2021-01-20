import java.util.HashMap;
import java.util.Map;

class ListNode {
  ListNode next;
  ListNode prev;
  int val;
  int key;

  ListNode(int key, int val) {
    this.val = val;
    this.key = key;
  }
}

class LRUCache {
  Map<Integer, ListNode> map;
  ListNode head;
  ListNode tail;
  int capacity;

  public LRUCache(int capacity) {
    this.capacity = capacity;
    map = new HashMap<>();

    head = new ListNode(0, 0);
    tail = new ListNode(0, 0);

    head.next = tail;
    tail.prev = head;
  }

  public int get(int key) {
    if (!map.containsKey(key)) {
      return -1;
    }

    ListNode node = map.get(key);
    moveToFront(node);
    return node.val;
  }

  public void put(int key, int value) {
    if (map.containsKey(key)) {
      ListNode node = map.get(key);
      node.val = value;
      moveToFront(node);
    } else {
      if (atCapacity()) {
        evictLast();
      }
      ListNode newNode = new ListNode(key, value);
      map.put(key, newNode);
      addToFront(newNode);
    }
  }

  private boolean atCapacity() {
    return map.size() == capacity;
  }

  private void evictLast() {
    ListNode lastNode = tail.prev;
    map.remove(lastNode.key);

    ListNode prevNode = lastNode.prev;
    tail.prev = prevNode;
    prevNode.next = tail;
  }

  private void addToFront(ListNode newNode) {
    ListNode firstNode = head.next;
    head.next = newNode;
    newNode.prev = head;
    newNode.next = firstNode;
    firstNode.prev = newNode;
  }

  private void moveToFront(ListNode node) {
    ListNode prevNode = node.prev;
    ListNode nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    addToFront(node);
  }
}
