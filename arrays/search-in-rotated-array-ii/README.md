# Search in Rotated Sorted Array II

## Difficulty

<!-- choose one -->

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are given an integer array nums sorted in ascending order (not necessarily distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,4,4,5,6,6,7] might become [4,5,6,6,7,0,1,2,4,4]).

If target is found in the array return its index, otherwise, return -1.

<!-- any examples -->

### Example 1:

```
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

### Example 2:

```
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

### Constraints

`1 <= nums.length <= 5000`

`-104 <= nums[i] <= 104`

`nums is guaranteed to be rotated at some pivot.`

`-104 <= target <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

This problem is a variation of [Search in Rotated Sorted Array](../search-in-rotated-array/README.md) where the input array allows for repeated numbers. This brings up a new edge case we have to account for.

If we being up the idea of two sorted sub arrays we run into an issue with the following input

```
target = 2

[1,1,1,1,1,1,2,1]

```

We are unable to partition the array correctly with binary search because the beginning end and middle numbers are all the same. In [Search in Rotated Sorted Array](../search-in-rotated-array/README.md) the array is partitioned with binary search based on where we believe arrays pivot or smallest number starts. We're unable to make such comparison when all beginning middle and end numbers are the same.

To fix this, we added a loop at the very beginning that compares the beginning and end numbers and increments our left boundary until we find a new number.

- [JavaScript](./title.js)
- [TypeScript](./title.ts)
- [Java](./title.java)
- [Go](./title.go)
</details>
