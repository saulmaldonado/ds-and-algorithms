# Remove Duplicates from Sorted Array

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

### Example 1:

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
```

### Example 2:

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
```

### Constraints

`0 <= nums.length <= 3 * 104`

`-104 <= nums[i] <= 104`

`nums is sorted in ascending order.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Two pointers

If we want to modify the array in place, we can partition it into two parts.

1. The first part will be an array of all unique numbers
2. The second part will be be an array of all duplicate numbers

Our goal as we iterate over the array is to put all of the numbers haven't seen yet in the left half and all the numbers we've already seen in the right half of the array

```
nums = [0,0,1,1,1,2,2,3,3,4]

// partitioned
[0,1,2,3,4 | 0,1,1,2,3]
```

We can partition the array using a pointer. All of the numbers up to the left of the pointers are unique and all of the number to the right at duplicates.

```
[0,1,2,3,4,0,1,1,2,3]
         ^
```

Once we finish iterating over the array, we can return the index of our partitioning pointer as the length of the unique array.

We'll need a way to keep track of all numbers seen. We can obviously use a Set, but we also do this constant memory

Since we know that the input array is sorted we can conclude that every time we come across a greater number than the last we've seen, it is a brand new number.

Proof:

Imagine reading an infinite stream of sorted numbers, we want to keep track of how many unique numbers we've seen. We can do so by keeping track of every time the next number we receive is greater than the last one we've received.

```

i = 0
j = 0

[0,0,1,1,1,2,2,3,3,4] // Here the number at both pointers are the same, they must be duplicates
 ^ ^

i = 0
j = 1

[0,0,1,1,1,2,2,3,3,4] // Here the number at j is greater than the number at i. We have not seen 1 before and we can move 1 to the left half of the array
 ^   ^

i = 1
j = 1

[0,1,1,1,1,2,2,3,3,4]
   ^ ^
...

i = 3
j = 4

[0,1,2,3,0,1,1,2,3,4] // Here the number at j is greater than the number at i
       ^           ^
```

Time: `O(N)` Where `N` is the length of the input array

Space: `O(1)`

- [JavaScript](./remove-duplicates-from-sorted-array.js)
- [TypeScript](./remove-duplicates-from-sorted-array.ts)
- [Java](./remove-duplicates-from-sorted-array.java)
- [Go](./remove-duplicates-from-sorted-array.go)
</details>
