# Combinations

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given two integers n and k, return all possible combinations of k numbers out of 1 ... _n_.

You may return the answer in any order.

### Example 1

```
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
```

### Example 2

```
Input: n = 1, k = 1
Output: [[1]]
```

### Constraints

`1 <= n <= 20`

`1 <= k <= n`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Backtracking

If we look at the basic strategy at building combinations of `k` numbers out of _1...n_ then we can see that we can divide the problem into subproblems

```
k = 2
n = 4

1 2 3 4 // numbers we can choose from

1 2 3 4 // take the first number and build all combinations with 1 as the first number
^

1 2 3 4
^ ^

1 2 3 4
^   ^

1 2 3 4
^     ^

// from this we have built

[[1,2],[1,3],[1,4]]
```

If we need to build combinations of `k` length then we can start by placing 1 number at the beginning. This is our prefix or the part of the number we know that will be part of the combination.

```
1 2 3 4
^

[1, x]
```

Now that our prefix is of length `1` we still need to figure out our suffix which is of length `k - 1`. We'll need to get all of the possible combinations of `k - 1` numbers using `2...n`.

```
// in this case it would be all possible combinations of 1 numbers using the numbers 2...4

1 | 2 3 4
^

[1, 2]
[1, 3]
[1, 4]
[1, 5]
```

We can solve this problem using a DFS strategy where we would insert number `x` in the our list and find all possible combinations of `k - 1` numbers from `x...n` where the base case is `k = 0`

Time: `O(n ^ k)` Upper bound

Space: `O(n ^ k)` Upper bound

- [JavaScript](./combinations.js)
- [TypeScript](./combinations.ts)
- [Java](./combinations.java)
- [Go](./combinations.go)

</details>
