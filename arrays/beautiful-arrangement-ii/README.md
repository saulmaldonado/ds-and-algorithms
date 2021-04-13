# Beautiful Arrangement II

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

If there are multiple answers, print any of them.

### Example 1

```
Input: n = 3, k = 1
Output: [1, 2, 3]
Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.
```

### Example 2

```
Input: n = 3, k = 2
Output: [1, 3, 2]
Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.
```

### Constraints

`The n and k are in the range 1 <= k < n <= 104.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Solution

##### Intuition

If we want to make sure that no two neighboring numbers have the same absolute difference, we can rearrange the numbers in a way where we place the numbers with the greatest difference next to each other. In doing so try to maximize the difference between neighboring number and since there are no repeating numbers all differences between neighboring numbers will always be different

```
[1 2 3 4 5]

n =   [1 5 2 4 3]
diff = |4|3|2|1|
```

If `k` is smaller than `n - 1`, or we only want to rearrage part of the sequence, then we can partition the array up to the kth number, rearrange `1...k` append `k + 1...n` to the rearranged sequence

```
k = 5
[1 2 3 4 5 | 6]

[1 5 2 4 3]

[1 5 2 4 3 6] <- add [6]
 |4|3|2|1|3|
```

##### Implementation

We first want to partition to sequence according to `k`. If `k` is `n - 1` then the entire sequence will be rearranged. Otherwise we'll only rearrange up to `k + 1`. `k + 2` will be the start of the non-rearranged sequnce that we'll append at the end
We'll then have two pointers at each end of the sequence we want to arrange. Since we want to maximize the differences between neighboring numbers our greedy approach would be to take the two numbers with the greatest difference and put them next to each other.

```
[1 2 3 4 5 6]
 ^         ^
```

We'll reconstruct the sequence by moving the pointers inward placing the numbers at the pointers into an array until either both pointers meet or cross each other.

```
[1 2 3 4 5 6]
 ^         ^
[1 6]

...

[1 2 3 4 5 6]
     ^ ^
[1 6 2 5 3 4]
```

If both pointers meet at the same place the sequence was of odd length. We will append the remaining number at the end of the sequence.

We can then append the non-rearranged partition of the sequence back on the rearranged sequence.

Time: `O(N)` Where `N` is `n`

Space: `O(N)`

- [JavaScript](./beautiful-arrangement-ii.js)
- [TypeScript](./beautiful-arrangement-ii.ts)
- [Java](./beautiful-arrangement-ii.java)
- [Go](./beautiful-arrangement-ii.go)

</details>
