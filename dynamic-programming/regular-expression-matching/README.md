# Regular Expression Matching

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem:

Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '\*' where:

- '.' Matches any single character.​​​​
- '\*' Matches zero or more of the preceding element.
  The matching should cover the entire input string (not partial).

### Example 1:

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

### Example 2:

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

### Example 3:

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

### Example 4:

```
Input: s = "aab", p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
```

### Example 5:

```
Input: s = "mississippi", p = "mis*is*p*."
Output: false
```

### Constraints

`0 <= s.length <= 20`

`0 <= p.length <= 30`

`s contains only lowercase English letters.`

`p contains only lowercase English letters, '.', and '*'.`

`It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

##### Dynamic Programming

If we were to exclude `*` from our pattern then matching would be as simple that every _ith_ character of string and pattern match or the _ith_ character in the pattern is `.`. Here are the conditions for matching a pattern of characters and `.` with a string

1. if `s[i]` and `p[i]` are the same, the pattern matches if the preceding prefix matches `s.substring(0, i) == p.substring(0, i)`
2. if `p[i] == "."`, the pattern match is the preceding prefix matches `s.substring(0, i) == p.substring(0, i)`

Once we introduce the `*`, we can match a pattern to a string in a multitude of ways

1. if `p[i] == "*"`, compare the operand of `"*"` (character to the left of `"*"`) and the current character of `s`, `p[i - 1] == s[i]`:
2. if the operand of `"*"` does not match with the current character of `s`, `p[i - 1] != s[i]`, we can consider `x*` as empty. check if the preceding prefix matches `p.substring(0, i - 1) == s.substring(0, i)`
   1. if the operand of `"*"` matches with the current character of `s` or is `"."` we can:
      1. count `x*` as a multiple `x` check if the `s.substring(0, i) == p`
      2. count `x*` as a single `x`, in other words disregard `"*"`, check if `s == p.substring(0, i)`
      3. count `x*` as empty, in other words disregard `"x*"`, check if `s == p.substring(0, i - 1)`

If checking matches involves checking if prefixes match, we can most efficiently do that with memoization

We can have a grid of `s.length + 1 * p.length + 1` the represents every possible substring of string and pattern can be

![Substring Grid Example](./images/solution-1.png)

Here we can store the result of matching prefixes. The bottom right cell will store the result of matching the entire string with the entire pattern

Time: `O(S*P)` where S is all possible substrings of s and P is all possible substrings of P

Space: `O(S*P)`

- [JavaScript](./regular-expression-matching.js)
- [TypeScript](./regular-expression-matching.ts)
- [Java](./regular-expression-matching.java)
- [Go](./regular-expression-matching.go)
</details>
