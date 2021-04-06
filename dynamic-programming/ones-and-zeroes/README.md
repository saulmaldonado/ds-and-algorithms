# Ones and Zeroes

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

### Example 1

```
Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
```

### Example 2

```
Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
```

### Constraints

`1 <= strs.length <= 600`

`1 <= strs[i].length <= 100`

`strs[i] consists only of digits '0' and '1'`

`1 <= m, n <= 100`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

A navie solution would be to try all possible subsets of numbers using a greedy strategy and finding the first one that satisfies the most the number of `0`s and `1`s needed. This would require a runtime of at most `2^N`. Using this strategy we have to recalculate the number of `0`s and `1`s for every subset. If we can instead memoize the calculations we we did for previous subsets, we can find the best one with less overall calculations.

##### Implementation

We can use top down dynamic programming grid `dp` where `dp[m][n]` is the most number of strings we can have in a subset where there are `m` zeros and `n` ones.

For every string we will calculate the number of `zeros` and `ones`. If we were to add the string to an existing subset the total number of zeros would increase by `zeros` and the number of ones would increase by `ones`. This means that the most number strings in the subset that includes the current string would be `dp[i - zeros][j - ones] + 1` where `dp[i - zeros][j - ones]` is the max length subset we can have where the current string is not included.

Time: `O(N * M * L)` Where `N` and `M` are the `n` and `m` and `L` is the average length of the strings in `strs`

Space: `O(N * M)`

- [JavaScript](./ones-and-zeroes.js)
- [TypeScript](./ones-and-zeroes.ts)
- [Java](./ones-and-zeroes.java)
- [Go](./ones-and-zeroes.go)

</details>
