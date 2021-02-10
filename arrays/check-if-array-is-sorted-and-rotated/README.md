# Check if Array Is Sorted and Rotated

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

### Example 1

```
Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
```

### Example 2

```
Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
```

### Example 3

```
Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.
```

### Example 4

```
Input: nums = [1,1,1]
Output: true
Explanation: [1,1,1] is the original sorted array.
You can rotate any number of positions to make nums.
```

### Example 5

```
Input: nums = [2,1]
Output: true
Explanation: [1,2] is the original sorted array.
You can rotate the array by x = 5 positions to begin on the element of value 2: [2,1].
```

### Constraints

`1 <= nums.length <= 100`

`1 <= nums[i] <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Compare with Neighbor

In a sorted array, every number is always less than or equal to its right neighbor. If at any point there is a number that is greater than its right neighbor, the array can be considered is unsorted.

```
[2 1 3 4]
 ^ ^      // nums[0] is greater than nums[1], the array is unsorted
```

This changes once an array is rotated. When the array is rotated to the right, the right most greatest element overflows back into the front of the array causing it to be greater than its right neighbor

```
[1 2 3 4] ->

[4 1 2 3]
 ^ ^      // nums[0] is greater than its neighbor
```

This can only happen once as all the number remain the same. Because of this we can say that if more than one element in the array is ever greater than its neighbor then the array is considered to be unsorted, even if its rotated.

Time: `O(N)`

Space: `O(1)`

- [JavaScript](./check-if-array-is-sorted-and-rotated.js)
- [TypeScript](./check-if-array-is-sorted-and-rotated.ts)
- [Java](./check-if-array-is-sorted-and-rotated.java)
- [Go](./check-if-array-is-sorted-and-rotated.go)

</details>
