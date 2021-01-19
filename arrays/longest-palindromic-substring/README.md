# Longest Palindromic Substring

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

Given a string s, return the longest palindromic substring in s.

### Example 1:

```
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

### Example 2:

```
Input: s = "cbbd"
Output: "bb"
```

### Example 3:

```
Input: s = "a"
Output: "a"
```

### Example 4:

```
Input: s = "ac"
Output: "a"
```

### Constraints

`1 <= s.length <= 1000`

`s consist of only digits and English letters (lower-case and/or upper-case),constraints`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Two pointers expand from middle

This method checks for palindromes by starting two pointers at some midpoints or points, and expanding both checking that the characters at both pointers are the same.

```
Example for odd length strings:

    babad
i     ^
j     ^

s[i] = 'b'
s[j] = 'b'
// both are the same, decrement i and increment j

    babad
i    ^
j      ^

s[i] = 'a'
s[j] = 'a'
// both are the same, decrement i and increment j

    babad
i   ^
j       ^

s[i] = 'b'
s[j] = 'd'
// both are not the same, the longest substring length is i - j - 1 "aba"
```

```
Example for even length strings

Instead off starting at the same position, both pointers start next to each other

    cbbd
i    ^
j     ^

s[i] = b
s[j] = b
// both are the same, decrement i and increment j

    cbbd
i   ^
j      ^

s[i] = c
s[j] = d

// both are not the same, the longest substring length is i - j - 1 "bb"
```

For every character in `s`, we can find the longest substring we can build with off of `s[i]`. We have to take into account that there are two different types of palindromes, odd length palindromes are built off of a single midpoint, even length palindromes are built off of two midpoints next to each other. We can use a helper method that will find the longest palindromic substring off of `s[i]`. The helper method will take the starting positions of the two pointers. We'll need to call this method twice. Once where both pointers start at the same position `i`, and once where both pointer start next to each other `i` and `i + 1`. This will take into account for even and odd length substrings.

After getting back the lengths of both method calls we can take the max and compare that to the running max length palindromic substring of s. If our new length is greater, we can find the starting point and ending point of our new substring by `start = i - (len - 1) / 2` and `end = i + len / 2`.

Once we have iterated over the string `s` we will return a `s.substring(start, end + 1)`

- [JavaScript](./longest-palindromic-substring.js)
- [TypeScript](./longest-palindromic-substring.ts)
- [Java](./longest-palindromic-substring.java)
- [Go](./longest-palindromic-substring.go)
</details>
