# Search Insert Position

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

### Example 1:

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

### Example 2:

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

### Example 3:

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

### Example 4:

```
Input: nums = [1,3,5,6], target = 0
Output: 0
```

### Example 5:

```
Input: nums = [1], target = 0
Output: 0
```

### Constraints

`1 <= nums.length <= 104`

`-104 <= nums[i] <= 104`

`nums contains distinct values sorted in ascending order.`

`-104 <= target <= 104`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Binary Search

Here we want to find the index of the target or the closest number to `target` in the array that is greater than `target`. This index will be the position of target after shifting all of the greater elements to the right

```
target = 2

nums = [1,3,5,6]
          ^     // number at index is the next greatest number

[1,2,3,5,6] // new array after insertion
   ^
```

If all the numbers in the array are less than `target`, then target will simply be appended to the end

```
target = 7

nums = [1,3,5,6]
               ^

[1,3,5,6,7]
```

We can do this by iterating over the array and finding the index we can insert `target` but this has a time complexity of `O(N)`. Since the array is already sorted we can perform a binary search on the array to find this position instead.

```
target = 2

nums = [1,3,5,6]
        ^ ^    ^

[1,3,5,6] // move right pointer to mid
 ^ ^   ^

[1,3,5,6] // move left pointer to mid
 ^ ^
 ^

[1,3,5,6]
   ^     // 1 is the index

[1,2,3,5,6] // new array after insertion
```

Time: `O(log N)`

Space: `O(1)`

- [JavaScript](./search-insert-position.js)
- [TypeScript](./search-insert-position.ts)
- [Java](./search-insert-position.java)
- [Go](./search-insert-position.go)
</details>
