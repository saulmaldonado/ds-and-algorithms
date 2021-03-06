# Longest Consecutive Sequence

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

### Example 1:

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

### Example 2:

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

### Constraints

`0 <= nums.length <= 104`

`-109 <= nums[i] <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Sorting

By sorting we place any consecutive number next to each other. This makes it easy to iterate over the array and find sequences where `nums[i - 1]` is equal to `nums[i] - 1` (ignoring repeated numbers) and take the max length of all sequences we can find.

```
0,3,7,2,5,8,4,6,0,1

...sort

0,0,1,2,3,4,5,6,7,8
  ^               ^
max sequence if of length 9
```

Time: O(n log n)
Space: O(1)

#### Set

Since it's safe to ignore duplicates, we can convert the array into a set, letting us take advantage of `O(1)` lookup.

After making a set out of the array, we can again iterate over the array and find sequences where `num[i]` is the smallest number in a sequence (we check this by checking if `nums[i] - 1` is in the set) walk down the set, checking if the next number of the sequence `num[i] + 1` is in the array. We'll take the max length of all sequences we find and return it

Time: O(n)
Space: O(n)

- [JavaScript](./longest-consecutive-sequence.js)
- [TypeScript](./longest-consecutive-sequence.ts)
- [Java](./longest-consecutive-sequence.java)
- [Go](./longest-consecutive-sequence.go)
  </details>
