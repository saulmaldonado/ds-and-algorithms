# LRU Cache

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

### Example 1:

```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```

### Constraints

`1 <= capacity <= 3000`

`0 <= key <= 3000`

`0 <= value <= 104`

`At most 3 * 104 calls will be made to get and put.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

For our cache, a data structure or combination of data structure that will

1. Store key value pairs

2. Keep track of the order we've queried keys

3. Be able to evict the least recently use key value pair when we reach capacity

A hash map won't suffice here since we need a way to order the key values pairs. There are two other data structure that can keep track of order, an array and a linked list.

With an array we are able to access a values at `O(1)` time complexity if we know the exact index it is at. We want to be able to access values by key without needing to know it's index in the array. This can be tricky since indices can change all time every we add and remove elements from an array. plus insertions and deletion from an array at any index, can costs up the `O(n)` time.

LinkedLists, on the other hand, is essentially a collection of node that knows its neighboring nodes, we can use a linked list to store our key-value pairs and keep track of the order we've access these nodes. We can have a hash map that stores key node pairs or keys that correspond to nodes in the linkedlist that also contain our key - value pairs. By doing this we've essentially created a data structure reflects our hash map and gives order to the entries in our hash map. This also provides optimal time complexity since inserting and deleting nodes from a list can be done in `O(1)` time

#### put

A hash map will keep track of the nodes in our LinkedList. Every time we want to add a new key-value pair to our cache add a new key-node pair entry in our hash map and initialize a new node that will contain the corresponding key and value.

```
put: a: 1

{
  a: ListNode(a, 1)
}

```

We'll than insert the node in our LinkedList. We'll have a two ghost nodes that will denote the start and end of our LinkedList. The `head` node will denote the beginning of the list. The `tail` node will denote the end of the list. There can only be at most `capacity` nodes between these two ghost nodes.

Every time we want to add a new entry to the cache, we'll add the node after the `head` and before the `tail`. If there are already a nodes between `head` and `tail`, we'll insert the new node in between the `head` and the node right after the head.

```
put: a: 1
{
  a: ListNode(a, 1)
}

tail <-> [ListNode(a, 1)] <-> head

put: b: 2
{
  a: ListNode(a, 1),
  b: ListNode(b, 2)
}

tail <-> [ListNode(a, 1) <-> ListNode(b, 2)] <-> head

{
  a: ListNode(a, 1),
  b: ListNode(b, 2),
  c: ListNode(c, 3)
}
tail <-> [ListNode(a, 1) <-> ListNode(b, 2) <-> ListNode(c, 3)] <-> head

```

If at any point adding a new node will go over our `capacity` space. We'll have to remove our least recently node from the list and the hash map. Our last node in the linked list, right before the `tail`, is the least recently use node.

```
put: d: 4
{
  // a: ListNode(a, 1) removed

  b: ListNode(b, 2),
  c: ListNode(c, 3),
  d: ListNode(d, 4)
}
//      ListNode(a, 1)  removed
tail <-> [ListNode(b, 2) <-> ListNode(c, 3) <-> ListNode(d, 4)] <-> head
```

If we need to update key-value pairs already contained in our cache we can do so by simply changing the value of the corresponding ListNode in our hashmap. But if we do this we also need to move the position of the ListNode in our list to the very beginning as this is our most recently used node

```
put b: 5
{
  b: ListNode(b, 5), // update
  c: ListNode(c, 3),
  d: ListNode(d, 4)
}
tail <-> [ListNode(c, 3) <-> ListNode(d, 4) <-> ListNode(b, 5)] <-> head
```

#### get

A Doubly LinkedList will keep track of the keys we've queried. We'll have a two ghost nodes that will denote the start and end of our LinkedList. The `head` node will denote the beginning of the list. The `tail` node will denote the end of the list. There can only be at most `capacity` nodes between these two ghost nodes.

Every time we want to access a value from our cache, we'll first check if the key is in our hashmap, if it is not we'll return `-1`. If it is, we'll return the value of the corresponding ListNode in our list. We'll also need to update the position of the ListNode we've just accessed to the front of the list, after `head`.

```
get: a
{
  a: ListNode(a, 1), // return 1
  b: ListNode(b, 2),
  c: ListNode(c, 3)
}
tail <-> [ListNode(b, 2) <-> ListNode(c, 3) <-> ListNode(a, 1)] <-> head
```

- [JavaScript](./lru-cache.js)
- [TypeScript](./lru-cache.ts)
- [Java](./lru-cache.java)
- [Go](./lru-cache.go)
</details>

```

```
