# Binary Trees With Factors

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.

We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.

### Example 1

```
Input: arr = [2,4]
Output: 3
Explanation: We can make these trees: [2], [4], [4, 2, 2]
```

### Example 2

```
Input: arr = [2,4,5,10]
Output: 7
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
```

### Constraints

`1 <= arr.length <= 1000`

`2 <= arr[i] <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Dynamic Programming

##### Intuition

For any given number we can make at least one tree which will always be `[arr[i]]`. The number of tree greater than one node we can make out of one number is dependent on its factors and whether or not they are in the tree. Prime numbers have no factors and according to the problem can't have children so the max number of tree we can make out of them is one.

```
// 2 has no factors so we cannot build a tree greater than one node out of it

  2
/   \
```

For all other numbers, the max numbers of trees we can make is dependent on the number of factors we can multiply together to equal `arr[i]` and the max number of factors for those numbers. This can be expressed as `maxTrees(n) = 1 + maxTrees(a) * maxTrees(b)` where `n == arr[i]`, `a * b == n` and `2 <= a, b < n`. Obviously assumes that all of the factor for every number in the array is also included in the array. This won't always be the case and so the max number of subtrees we can make a certain number is dependent on how many of its factors are in the array. This will involve searching the array for any numbers factors as a possible child. Not only that we also need to check if the other part of the factor pair is also in the array. This means that for every `arr[i]` there needs to be `arr[j]` such that `arr[j] < arr[i]` and `arr[i] % arr[j] == 0` and also there needs to be `arr[k]` such that `arr[k] * arr[j] == arr[i]` or `arr[i] / arr[j] == arr[k]`. If these numbers are found in the array then we'll need to recursively solves the max subtrees for those numbers until we reach a numbers that has no factor pairs in the array of is a prime factor.

The slow recalculation of subproblems can be remedied through tabulation or bottom-up dynamic programming where we solve the max trees for all of the smaller numbers in the array to use a find the max trees for the larger numbers in the array

##### Implementation

Since we want to be able to solve the smaller max trees for the smaller numbers in the array we'll sort the array to take of them first. We'll also create a `dp` array that will store the max trees we can make for every number in the array. For every number in the array we'll need to check if any of its factors are contained in the array. Factors are all numbers smaller than the given number so we'll only need to search from `0...i` in the array where `arr[i]` is the current number. If one is found we'll also need to check if its pair is also in the array `arr[i] / arr[j]`. This will involve searching the array again for `arr[i] / arr[j]`. If we can instead keep a map of numbers seen in the array and their indices in the array we can skip this search. If the factor pair is in the array then we know that we can find the total max subtrees we can make out of this factor pair by using `1 + dp[j] * dp[k]`. There are no factor paris for a number in the array, the max trees we can make is `1`

Once we have calculated all possible trees we will sum together off all the max trees we have tabulated for every number in the array

Time: `O(n^2)` Where `N` is the length of `arr`. Two loops are used to iterate over the array and search for factors in the array

Space: `O(N)` Where `N` is the space used by the map for mapping numbers to indices in the array

- [JavaScript](./binary-trees-with-factors.js)
- [TypeScript](./binary-trees-with-factors.ts)
- [Java](./binary-trees-with-factors.java)
- [Go](./binary-trees-with-factors.go)

</details>
