# Longest Harmonious Subsequence

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem:

We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

### Example 1:

```
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
```

### Example 2:

```
Input: nums = [1,2,3,4]
Output: 2
```

### Example 3:

```
Input: nums = [1,1,1,1]
Output: 0
```

### Constraints

`1 <= nums.length <= 2 * 104`

`-109 <= nums[i] <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Frequency Map

For every number `n` there are only two numbers that are exactly one away, `n - 1` and `n + 1` that we can use to build our harmonious array. If we can keep track of the frequency of numbers in the array, we can calculate the length of the array we can build containing `n` and `n - 1` or `n` and `n + 1` which would be `freq(n) + freq(n + 1)` and `freq(n) + freq(n - 1)`

Time: `O(N)`

Space: `O(N)`

- [JavaScript](./longest-harmonious-subsequence.js)
- [TypeScript](./longest-harmonious-subsequence.ts)
- [Java](./longest-harmonious-subsequence.java)
- [Go](./longest-harmonious-subsequence.go)
</details>
