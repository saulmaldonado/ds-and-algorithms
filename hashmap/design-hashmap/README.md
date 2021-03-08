# Design HashMap

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

- `put(key, value)` : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
- `get(key)` : Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
- `remove(key)` : Remove the mapping for the value key if this map contains the mapping for the key.

### Example 1

```
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found)
```

### Constraints

`All keys and values will be in the range of [0, 1000000].`

`The number of operations will be in the range of [1, 10000].`

`Please do not use the built-in HashMap library.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Intuition

HashMaps are data structure that we can insert and get values using a unique `key`. They are built off of array in that all the values are store in an array. In order organize these values we'll need a method of identifying a `key` with a certain index in the array. For this we can using hashing function that will compute the same index in the array for the same unique `key` we give it. Using this index we can insert or get the values stores at that index.

Depending on the hashing algorithm used there may be some index collisions involved where two different `keys` are hashed into the same index of the array. For these cases we will use a LinkedList to store multiple values at the same index. To retrieve the correct value from the list the nodes will be identified by their unhashed `key`.

#### Implementation

##### `HashMap()`

We'll need an array to store the values of our `HashMap`. The initialize size can be anything but smaller numbers are better for less space and prime numbers are better for less index collisions.

For the hashing function we will multiply the number by a prime number and find the modulo using the size of the underlying array

Our values will be stored in an LinkedList of `Entry` nodes which is a custom class that includes the `int value`, `int key`, and `Entry next` that will acts as a link to the next `Entry` in the LinkedList

##### `put(int key, int value)`

We'll take the index by hashing the key using our hashing function.
If the index at the array is null we will instantiate and insert a new `Entry` into that position in the array. If it is not null, we will traverse the list until we can find the matching `Entry`.
If found we will replace the value of the found `Entry` with the given value.
If the `Entry` is not found a new `Entry` will be made and inserted at the end of the list

##### `get(int key)`

We'll take the index by hashing the key using the our hashing function.
If the position in the array at the index is null then the key is non-existent in the `HashMap`, return `-1`
If it is not empty we will iterate over the list finding the matching `Entry` and if found return the value of the `Entry`
If not found the kay is not in the `HashMap`, return `-1`

##### `remove(int key)`

We'll take the index by hashing the key using the our hashing function.

If the position in the array at the index is null then the key is non-existent in the `HashMap`, we do not need to remove an `Entry`
If it is not empty we will iterate over the list finding the matching `Entry` and if found remove the node by relinking its previous `Entry` with the next `Entry` of the `Entry` to be removed. If the `Entry` is the first one of the list make the next `Entry` the head `Entry` in the array at the index
If not found the kay is not in the `HashMap`, we do not need to remove an `Entry`

Time: `O(1)` Average for insertion, deletion and retrieving but worst case `O(N)`
Space: `O(N)` Where `N` is the number of entries in the HashMap

- [JavaScript](./design-hashmap.js)
- [TypeScript](./design-hashmap.ts)
- [Java](./design-hashmap.java)
- [Go](./design-hashmap.go)

</details>
