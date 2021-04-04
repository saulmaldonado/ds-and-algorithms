# Palindromic Substrings

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

### Example 1

```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

### Example 2

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

### Constraints

`The input string length won't exceed 1000.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Expand from centers

##### Intuition

Every single character is a palindrome by itself. The only way we can add to a string of a single character in a way that it still is a palindrome is if we add two of the same character at each end. Similarly we can add characters to an existing palindrome by adding two of the same characters at each end.

```
"a"

"bab"
 ^ ^


"bab"

"cbabc"
 ^   ^
```

We can apply the same logic for checking strings. If we start from a single character of a string and expand two pointers to each end checking that the characters at both pointers are always the same, then we know the string is a palindrome

```
cbabc
  ^

cbabc
 ^ ^

cbabc
^   ^
```

However this only works for strings of odd length and for checking substrings of odd length. For even length stirngs and substrings, we need to start at two characters.

```
cbaabc
  ^^

cbaabc
 ^  ^

cbaabc
^    ^
```

So if we want to check for substrings of both odd and even length, we need to start expansions at every single character and every two characters.

##### Implementation

We need a way to start searches for even length and odd length palindromic substrings. For odd length substrings we'll start two pointers at `s[i]` and `s[i]`

```
cbabc
  ^

cbabc
 ^ ^

cbaabc
^    ^

// 3 substrings starting from 'a'
```

For every even length substrings we'll start pointers at `s[i]` and `s[i + 1]`

```
cbaabc
  ^^
cbaabc
 ^  ^
cbaabc
^    ^

// 3 substrings starting from "aa"
```

We'll start 2 searches from every `s[i]` to find every possible palindrom substring

Time: `O(N^2)` Where `N` is the length of `s`

Space: `O(1)`

- [JavaScript](./palindromic-substrings.js)
- [TypeScript](./palindromic-substrings.ts)
- [Java](./palindromic-substrings.java)
- [Go](./palindromic-substrings.go)

</details>
