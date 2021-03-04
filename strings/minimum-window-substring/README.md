# Minimum Window Substring

## Difficulty

![Hard](https://img.shields.io/badge/hard-d9534f?style=for-the-badge&logoColor=white)

## Problem

Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

### Example 1

```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
```

### Example 2

```
Input: s = "a", t = "a"
Output: "a"
```

### Constraints

`1 <= s.length, t.length <= 105`

`s and t consist of English letters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Expanding and Contracting Window

Here a valid substrings indicates a substring of `s` that at the very least contains all of the characters of `t` (including duplicates) in no particular order. This means that if `s` is a valid substring then that means that `s` contains all of the character of `t`

```
s = "ADOBECODEBANC", t = "ABC" // the entire string of s contains all of the characters of t
     ^  ^ ^
```

If we know that `s` is a valid substring then `s.substring(0, s.length)` is the largest possible answer. If we want to return the smallest possible substring then we would have to search the string using a **_sliding window_**. `left` and `right` would indicate the boundaries of the substring where `right - left + 1` is the length of the substring and `s.substring(left, right + 1)` is the current substring of the window. If we want to ensure that all of the character of `t` are contained in `s.substring(left, right + 1)` then we would need a quick way to reference these characters. We could use a **_HashMap_** that represents the frequencies of the characters in `t`. This way validating a window with `t` would be as simple as checking that the frequencies of characters of `t` are included in the window.

Instead of checking every substring we check check the frequencies of characters as we expand the window. For this strategy, we would increment our `right` pointer adding the characters at right `s[right]` to a separate frequency map. If at any point the unique character frequencies of the window are the same of `t`, then `s.substring(left, right + 1)` is a valid substring. We would record the length of the substring if it is less than the `minLen` were keeping track of.

To contract the window we would decrement the `left` pointer removing the character at pointer `left` from our local hashmap. If removing the character still makes the substring valid, then we would record the newer smaller window. If the substring becomes invalid, then we would continue incrementing `right` to add more characters to our window and make it valid again.

By the end of traversing to the end of `s` and we can't contract the window anymore, then we have finished searching the string

Time: `O(S + T)` Where `S` is the length of `s` and `T` is the length of `t`

Space: `O(S + T)` Where `S` is the length of the hashmap for our `s` window and `T` is the length of the hashmap for `t`

- [JavaScript](./minimum-window-substring.js)
- [TypeScript](./minimum-window-substring.ts)
- [Java](./minimum-window-substring.java)
- [Go](./minimum-window-substring.go)

</details>
