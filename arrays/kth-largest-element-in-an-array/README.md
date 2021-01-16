# Kth Largest Element in an Array

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

### Example 1:

```
Input: [3,2,1,5,6,4] and k = 2
Output: 5
```

### Example 2:

```
Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
```

### Constraints

`1 ≤ k ≤ nums.length`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

There are several answer one can come up with here.

#### Sorting

The simplest of them all would be to sort the array and return the `kth` number from the end of the array as the answer. This works and will only cost of `O(n log n)` time for sorting the array

#### Min Heap

We can also use a heap the size of `k` that will store the `k` greatest elements in the array. After going through the array inserting and popping elements from the heap to maintain a size of `k`, we will be left with the `kth` largest element at the root of the heap. This will take us `O(n log k)` time for heapifying and `O(k)` for our heap, an improvement sorting.

#### Quick Select

This solution revolves around the fact that sorting an array around a pivot number will means that the pivot is in its final sorted position. This means we can partition and perform quick sort on an array until we reach a pivot number that is placed a `nums.length - k` index. This means that the pivot number is at the `k`th position of the sorted array or the `k`th largest element.

```
pivot = 4

[3,2,1,5,6,4]   3 < 4 increment pivot position
 ^         ^

[3,2,1,5,6,4]   2 < 4 increment pivot position
   ^       ^

[3,2,1,5,6,4]   1 < 4 increment pivot position
     ^     ^

[3,2,1,5,6,4]
       ^   ^

[3,2,1,5,6,4]
       ^ ^ ^

[3,2,1,4,6,5]  swap 5 and 4
       ^ ^ ^

check if pivot is at index nums.length - k, if it is return the number at this index
if not, if the index we are looking for is below the pivot index, perform quick sort on the left partition. If it is greater, perform quick sort on the right partition.
```

- [JavaScript](./kth-largest-element-in-an-array.js)
- [TypeScript](./kth-largest-element-in-an-array.ts)
- [Java](./kth-largest-element-in-an-array.java)
- [Go](./kth-largest-element-in-an-array.go)
</details>
