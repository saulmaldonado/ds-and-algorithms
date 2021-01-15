# Minimum Operations to Reduce X to Zero

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

Return the minimum number of operations to reduce x to exactly 0 if it's possible, otherwise, return -1.

<!-- any examples -->

### Example 1:

```
Input: nums = [1,1,4,2,3], x = 5
Output: 2
Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
```

### Example 2:

```
Input: nums = [5,6,7,8,9], x = 4
Output: -1
```

### Example 3:

```
Input: nums = [3,2,20,1,1,3], x = 10
Output: 5
Explanation: The optimal solution is to remove the last three elements and the first two elements (5 operations in total) to reduce x to zero.
```

### Constraints

`1 <= nums.length <= 105`

`1 <= nums[i] <= 104`

`1 <= x <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

Instead of find the smallest prefix + suffix arrays who's values add to x, we can find the largest sub array who's values add up to inverse, `total of all numbers - x`. This can be done using a sliding window that keeps tracks of the sub array sum. Using a couple of restriction we can make sure we do the least number of operations

1. If calculated target `sum of number - x` is less than 0, x is greater than the sum of all numbers. x will never be `0` return `-1`

2. If target is `0`, `sum of all numbers - x` is 0, all numbers are needed to reach 0, return length of nums

3. We only need to increment our left pointer is the sum of the sliding window is greater than our target, or in other words we over shot our target

4. If our right pointe reaches the end, we do not need to decrement our left pointer since we are finding the greatest sub arr

For everytime we find the current sub array sum is equal to target, we will max of `max` and the sub array length and update `max`. We can then increment our left pointer as incrementing our right pointer will only make the sub greater.

At the end, if we have a valid `max` length, we can return the `nums.length - max`. If we do not have a valid `max` we can return `-1`

- [JavaScript](./minimum-operations-to-reduce-x-to-zero.js)
- [TypeScript](./minimum-operations-to-reduce-x-to-zero.ts)
- [Java](./minimum-operations-to-reduce-x-to-zero.java)
- [Go](./minimum-operations-to-reduce-x-to-zero.go)
</details>
