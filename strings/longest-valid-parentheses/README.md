# Longest Valid Parentheses

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

<!-- any examples -->

### Example 1:

```
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
```

### Example 2:

```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
```

### Example 2:

```
Input: s = ""
Output: 0
```

### Constraints

`0 <= s.length <= 3 * 104`

`s[i] is '(', or ')'.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

The naive solution would be to brute force the validate every possible combination substring in the given input. This would take `O(n^3)` time, `O(n^2)` for generating every possible substring and `O(n)` for validating every one of those substrings.

We can instead use two counters to keep track of every opening and closing parentheses and update the max substring length whenever both counters are the same. To do this effectively, we have to take care of certain cases.

1. At any time in the string can there not be more closing parentheses than opening. If there are more opening parentheses, the current substring is invalid and the counters have to be reset.

2. If there are more opening than closing by the end of iterating the string, the extra opening parentheses may be splitting the string into two valid substrings. To check the other side of the string for valid substrings, we repeat our operations from end to beginning with rule 1 applying to closing parentheses

```
()(()
^
opening = 1
closing = 0
max = 0

()(()
^
opening = 1
closing = 1
max = 2

()(()
  ^
opening = 1
closing = 2
max = 2

()(()
   ^
opening = 1
closing = 3
max = 2

()(()
    ^
opening = 2
closing = 3
max = 2

Reversed:

()(()
    ^
opening = 0
closing = 1
max = 0

()(()
   ^
opening = 1
closing = 1
max = 2

()(()
  ^
opening = 0
closing = 0
max = 2

()(()
 ^
opening = 0
closing = 1
max = 2

()(()
^
opening = 1
closing = 1
max = 2

```

- [JavaScript](./longest-valid-parentheses.js)
- [TypeScript](./longest-valid-parentheses.ts)
- [Java](./longest-valid-parentheses.java)
- [Go](./longest-valid-parentheses.go)
</details>
