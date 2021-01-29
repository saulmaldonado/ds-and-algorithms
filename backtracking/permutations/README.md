# Permutations

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in **any order**.

### Example 1:

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

### Example 2:

```
Input: nums = [0,1]
Output: [[0,1],[1,0]]
```

### Example 3:

```
Input: nums = [1]
Output: [[1]]
```

### Constraints

`1 <= nums.length <= 6`

`-10 <= nums[i] <= 10`

`All the integers of nums are unique.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Backtracking

For this problem, we want to generate all possible combinations of the numbers contained in `nums`. We can solve this by diving the problem into sets of smaller sub-problem. For example:

```
nums = [1,2,3]
        ^
[1,]
```

For this first number, we would want to find every different combinations of the array where `1` is the very first number.

```
nums = [1,2,3]
          ^
[1,2]
```

If we go to the next number, we would choose `2` and find all combinations of the array where `1` is the first number and `2` is the second number.

```
nums = [1,2,3]
            ^
[1,2,3]
```

Lastly, we need to find all combinations where 3 is the last number of the array, which is `[1,2,3]`. Once we can no longer make any other combinations we will backtrack to the very next number that we can change.

```
nums = [1,2,3]
            ^
[1,3]
```

In this case it is `2` which we can change to `3`. Now we would find all combinations of the array where `1` is the first and `3` is the second.

For every subproblem where we want to find possible combinations we would want to loop over all numbers of the array. Since we can not have duplicate numbers in an array we would have to make sure that we skip number that are already in the permutation that we are building. To solve this we can use a Set that would keep track of the numbers currently in the array we are building

Time: `O(n * n!)` Where `n` operations are needed to copy an array of `n` length to the `ans` list and `n!` is the number of possible permutations

Space: `O(n * n!)` Where there are `n!` different permutations of `n` length each

- [JavaScript](./permutations.js)
- [TypeScript](./permutations.ts)
- [Java](./permutations.java)
- [Go](./permutations.go)
</details>
