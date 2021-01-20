# Find First and Last Position of Element in Sorted Array

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

### Example 1:

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

### Example 2:

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

### Example 3:

```
Input: nums = [], target = 0
Output: [-1,-1]
```

### Constraints

`0 <= nums.length <= 105`

`-109 <= nums[i] <= 109`

`nums is a non-decreasing array.`

`-109 <= target <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

A linear scan of the array can suffice for a solution but do better with binary search. There are only 2 indices needed to solve this problem, the first and last `target` in the array. Since the array is already sorted, we can use binary search to find these two indices

We'll use a slightly modified binary search to find the first occurrence.

1. If the value at `mid` is greater than `target` move `right` to `mid - 1`
2. If the value at `mid` is equal to `mid` move `right` to `mid - 1`. We do this to find the first occurrence
3. If the value at `mid` is less than target move `left` to `mid + 1`

```
start = 0
end = 5

 [5,7,7,8,8,10]
  ^   ^      ^

start = 2
end = 5

 [5,7,7,8,8,10]
      ^ ^    ^

start = 2
end = 3

 [5,7,7,8,8,10]
      ^ ^

start = 3
end = 3

 [5,7,7,8,8,10]
        ^

start = 3
end = 2

 [5,7,7,8,8,10]
      ^ ^

```

By the end, our left pointer will either be, at the first occurrence of target, just outside the bounds of the array (this denotes that all the numbers in the array were smaller than target), or `nums[left]` will not be equal to target (this denotes that all of the numbers in the array were greater than the target or target is not in the array at all). We can take into account for the edges cases this way and return `[-1, -1]`

If we found the first occurrence in the array, we can start another binary search to find the last occurrence of the target

```

 left = 3
 right = 5

 [5,7,7,8,8,10]
        ^    ^

 left = 4
 right = 5

 [5,7,7,8,8,10]
          ^  ^

 left = 5
 right = 5

 [5,7,7,8,8,10]
             ^

 left = 6
 right = 5

 [5,7,7,8,8,10]
             ^ ^
```

By the time both pointers cross the right pointer will either be at the last occurrence of `target`

- [JavaScript](./find-first-and-last-position-of-element-in-sorted-array.js)
- [TypeScript](./find-first-and-last-position-of-element-in-sorted-array.ts)
- [Java](./find-first-and-last-position-of-element-in-sorted-array.java)
- [Go](./find-first-and-last-position-of-element-in-sorted-array.go)
</details>
