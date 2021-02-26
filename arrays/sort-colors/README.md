# Sort Colors

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

### Example 1

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

### Example 2

```
Input: nums = [2,0,1]
Output: [0,1,2]
```

### Example 3

```
Input: nums = [0]
Output: [0]
```

### Example 4

```
Input: nums = [1]
Output: [1]
```

### Constraints

`n == nums.length`

`1 <= n <= 300`

`nums[i] is 0, 1, or 2.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Partitioning

Since there only 3 colors, we can partition the array in to three parts

```
red partition = 2
blue partition = 3

[0 0 1 1 2 2]
     ^ ^

Elements from the beginning of the array to the red partition (exclusive) are all red `nums[0, 2)`

Elements from after the red partition to the blue partition (inclusive) are all white `nums[2, 3]`

Elements from the blue partition (exclusive) to the end of the array are all blue `nums(3, 5]`
```

We'll start our partitions at both ends of the array. As we traverse the array if, the element is red we will swap the element at the red partition with the current element and increment our red partition. This way the red elements we've just encountered is behind the red partition. If the element is blue, we will swap it with the element at the blue partition and decrement the blue partition. If the element we swap with happens to be red, we will also swap it with the element at the red partition. If the element is white we will traverse to the next element.

```
[2,0,2,1,1,0] // element is blue, swap with element at blue partition
 ^         ^
 ^

[0 0 2 1 1 2] // element we just swapped is blue. swap current element with itself and traverse to next element
 ^       ^
 ^

[0 0 2 1 1 2] // element is red, swap with element at red partition (swap with itself)
   ^     ^
   ^

[0 0 2 1 1 2] // element is blue, swap with element at blue partition
     ^   ^
     ^

[0 0 1 1 2 2] // element is white, traverse to next
     ^ ^
     ^

[0 0 1 1 2 2] // element is white, traverse to next
     ^ ^
       ^

[0 0 1 1 2 2] // past the blue partition, array is sorted
     ^ ^ ^
```

Time: `O(N)` Where `N` is the length of the array

Space: `O(1)`

- [JavaScript](./sort-colors.js)
- [TypeScript](./sort-colors.ts)
- [Java](./sort-colors.java)
- [Go](./sort-colors.go)

</details>
