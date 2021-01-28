# Smallest String With A Given Numeric Value

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

The numeric value of a lowercase character is defined as its position (1-indexed) in the alphabet, so the numeric value of a is 1, the numeric value of b is 2, the numeric value of c is 3, and so on.

The numeric value of a string consisting of lowercase characters is defined as the sum of its characters' numeric values. For example, the numeric value of the string "abe" is equal to 1 + 2 + 5 = 8.

You are given two integers n and k. Return the lexicographically smallest string with length equal to n and numeric value equal to k.

Note that a string x is lexicographically smaller than string y if x comes before y in dictionary order, that is, either x is a prefix of y, or if i is the first position such that x[i] != y[i], then x[i] comes before y[i] in alphabetic order.

### Example 1:

```
Input: n = 3, k = 27
Output: "aay"
Explanation: The numeric value of the string is 1 + 1 + 25 = 27, and it is the smallest string with such a value and length equal to 3.
```

### Example 2:

```
Input: n = 5, k = 73
Output: "aaszz"
```

### Constraints

`1 <= n <= 105`

`n <= k <= 26 * n`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Greedy

For the to make the **_lexicographically smallest string_** possible we would want to construct a string where the character with the largest numeric value are pushed to the back and the characters with the smallest numeric value are pushed the the front.
To be more specific, we want to construct a string with as many leading `a`'s as possible. To explain this decision, make this observation:

```
n = 3, k = 27

"abx" > "aay"
```

`abx` and `aay` are two string that satisfy the requirements, the lengths of both string are `n` and the sum of all their characters' numeric values is `k`. They also both start with at least one `a`. `aay` is still the **_lexicographically smallest string_** because the following character is `a` while the following character for the greater string is `b`. This means in order to make the smallest string possible, we would want our string to start with as many `a`'s as possible. This is the optimal strategy for our greedy algorithm.

In order to achieve this we have to solve a sub problem of finding the smallest substring length string such that the difference between the sum of value of its characters and `k` is equal to the remaining length of the string. Once we can get to a point where `k == n` we can just fill the rest of the character with `a`.

We can do this by build the string backwards, inserting the largest character possible that would get us closer to `k == n`. This would be in most cases `z` with a value of 26 but may be times where subtracting `26` from `k` causes `k < n`. In that case we would want the min between both.

From this, we can come up with our greedy formula for getting the next possible character. `x = min(k - (n - 1), 26)`. We would use this formula `n` times decrementing `n` and `k` along the way and inserting our derived characters into a string

Time: `O(n)`

Space: `O(n)`

- [JavaScript](./smallest-string-with-a-given-numeric-value.js)
- [TypeScript](./smallest-string-with-a-given-numeric-value.ts)
- [Java](./smallest-string-with-a-given-numeric-value.java)
- [Go](./smallest-string-with-a-given-numeric-value.go)
</details>
