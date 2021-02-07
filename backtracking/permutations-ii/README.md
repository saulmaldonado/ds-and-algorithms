# Permutations II

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

### Example 1:

```
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
```

### Example 2:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### Constraints

`1 <= nums.length <= 8`

`-10 <= nums[i] <= 10`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Backtracking

Similar to [Permutations](../permutations), we will use backtracking to recursively loop through and visit every _non-visited_ members of the array to build a permutation. A Set will be used to record the indices already visited to make sure we don't insert a duplicate number. However, this time we will first sort the `nums` array and as we recursively loop through the array, we'll skip duplicate values when iterating by compare the current value with the very next value of the array. If the two values of the same we will skip it as recursively calling it will cause duplicate combinations in the our permutations array.

```
[[1 2 2 2 3 4], []]

[1 2 2 2 3 4]
 ^ ^ ^ ^ ^ ^

[1 2 2 2 3 4] // backtracking to 2, the very next value is the same, skip it
 ^ ^

[1 2 2 2 3 4] // the very next value is the same, skip it
 ^   ^

[1 2 2 2 3 4] // the next value is different, continue and recursively call it
 ^     ^
```

Time: `O(N! * N)` Where `N` is the total length of `nums`. Worst case with all unique numbers.

Space: `O(N! * N)`

- [JavaScript](./permutations-ii.js)
- [TypeScript](./permutations-ii.ts)
- [Java](./permutations-ii.java)
- [Go](./permutations-ii.go)
</details>
