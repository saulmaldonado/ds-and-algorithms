# Search in Rotated Sorted Array

## Difficulty

<!-- choose one -->

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.

<!-- any examples -->

### Example 1:

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

### Example 2:

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

### Example 3:

```
Input: nums = [1], target = 0
Output: -1
```

### Constraints

`1 <= nums.length <= 5000`

`-104 <= nums[i] <= 104`

`All values of nums are unique.`

`nums is guaranteed to be rotated at some pivot.`

`-104 <= target <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

The easiest naive solution would be to search the array for the number and return the index. This would give us a linear runtime. We can lower our time to `O(log n)` by using binary search but binary search only works for sorted arrays. Our array is sorted but is shifted. The order remains intact but the starting index of the array is different. We can view this array as combination of two sorted arrays

```
 [4,5,6,7,0,1,2]
      /     \
[4,5,6,7]   [0,1,2]

```

We can actually break this problem down by choosing one sub array to preform the binary search on since they are both sorted arrays. We can determine which array to search by first finding the bounds of the first array the smallest number to the end of the array. If our target is within the bounds of the first array, we can search this array. If not we can search our other array which is the start of the `nums` array to the index of the smallest number - 1

```
target = 0

 [4,5,6,7,0,1,2]
      /     \
[4,5,6,7]   [0,1,2]

0 is our smallest number and will be the start of our first array. The index range of the first array will be 4 to nums.length - 1

our second array will be the start of nums to the index of the start of the second array - 1. The index range of our second array will be 0 to 4 - 1
```

We will then check which array contains our target

```
[4,5,6,7,0,1,2]
           \
            [0,1,2]

0 is within
nums[4] to nums[nums.length-1]
```

preform binary search on our chosen sub array.

To find our smallest number of the array or our pivot we can also use binary search. We can find the index at which our array rotated on by comparing the values of the mid number and the end number of our search. In a normally sorted array, our end number will be greater than the mid, but in a rotated array our end number will be greater than our mid. This confirms that at some point after the mid point the array is not sorted. Here we can find the pivot index.

```
[4,5,6,7,0,1,2]
       ^     ^
mid = 7
end = 2

end is less than mid. our pivot is between mid and end
```

- [JavaScript](./search-in-rotated-array.js)
- [TypeScript](./search-in-rotated-array.ts)
- [Java](./search-in-rotated-array.java)
- [Go](./search-in-rotated-array.go)
</details>
