# Shortest Unsorted Continuous Subarray

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.

### Example 1

```
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

### Example 2

```
Input: nums = [1,2,3,4]
Output: 0
```

### Example 3

```
Input: nums = [1]
Output: 0
```

### Constraints

`1` <= nums.length <= 10^4` `-10^5 <= nums[i] <= 10^5`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Min and max elements

In a sorted array, we know that every element in the array must be:

1. Greater than or equal to all the elements to its left
2. Less than or equal to all the elements to its right

```
[1 2 3 4]
 ^        // 1 is less than 2 3 4


[1 2 3 4]
 ^        // 2 is less than 3 4 and greater than 1

[1 2 3 4]
     ^    // 3 is less than 4 and greater than 1 2

[1 2 3 4]
       ^  // 4 is greater than 1 2 3
```

In a partially sorted array we can determine the unsorted portion of the array by taking the index of the first unsorted element of the array `i`, and the last unsorted element in the array `j`. Here sub array `i,j (inclusive)` is considered unsorted and a minimum of `j - i + 1` continuous elements need to be sorted to sort the entire array

```
[2 6 4 8 10 9 15]
   ^              // 6 is greater than 4 to the right

[2 6 4 8 10 9 15]
            ^    // 9 is less than 10 to the left
```

While we can do full comparisons for every element in the array, these comparisons are redundant and can cost up to `O(N^2)` time. Instead of comparing elements with its inner neighbors, we can compare elements with its outer neighbors. Doing this would help us set up boundaries where the first and last unsorted elements are.

As we traverse the array from left to right we can keep track of the greatest element seen. By rule, all elements to the left of the greatest element in the array must be less than of equal to the greatest element. That means every element we come across as we traverse the array must be greater than or equal to the last element. If the element is smaller then we know that the beginning of the array up to that point is considered unsorted.

```
max = 2
[2 6 4 8 10 9 15]
 ^

max = 6
[2 6 4 8 10 9 15]
   ^

max = 6
[2 6 4 8 10 9 15]
     ^           // 4 is smaller than the last max, subarray(0, 2) is unsorted

max = 8
[2 6 4 8 10 9 15]
       ^

max = 10
[2 6 4 8 10 9 15]
          ^

max = 10
[2 6 4 8 10 9 15]
            ^    // 9 is smaller than the last max, subarray(0, 5) is unsorted

max = 15
[2 6 4 8 10 9 15]
              ^

subarray(0, 5) (6 elements) is unsorted
```

Sorting the `subarray(0, 5)` works but would cause us to sort more elements than needed. If we know that last unsorted element in the array then we also need to know that first unsorted element in the array. That way we only need to sort the the elements in between these two points to sort the entire array.

We will use a similar approach to find the first unsorted element in the array. Starting from the end of the array we will keep track of the min element we've seen so far. By rule every element we come across must be less than or equal to the last smallest element we've seen. Every time we come across an element that is smaller that the min then we know that it is unsorted

```
min = 15
[2 6 4 8 10 9 15]
              ^

min = 9
[2 6 4 8 10 9 15]
            ^

min = 9
[2 6 4 8 10 9 15]
          ^      // 10 is greater than last min

min = 8
[2 6 4 8 10 9 15]
       ^

min = 4
[2 6 4 8 10 9 15]
     ^

min = 4
[2 6 4 8 10 9 15]
   ^             // 6 is greater than last min

min = 2
[2 6 4 8 10 9 15]
 ^

subarray(1, 6) (6 elements is unsorted)
```

After finding the first and last unsorted elements in the array then we know we can sort at least `last - first + 1` elements to sort the entire array where `first` and `last` are the indices of the first and last unsorted elements in the array

Time: `O(2N)` Where `N` is the length of the array

Space: `O(1)`

- [JavaScript](./shortest-unsorted-continuous-subarray.js)
- [TypeScript](./shortest-unsorted-continuous-subarray.ts)
- [Java](./shortest-unsorted-continuous-subarray.java)
- [Go](./shortest-unsorted-continuous-subarray.go)

</details>
