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

If we know that `s` is a valid substring then `s.substring(0, s.length)` is the largest possible answer. If we want to return the smallest possible substring then we would have to search the string using a **_sliding window_**. `left` and `right` would indicate the boundaries of the substring where `right - left + 1` is the length of the substring and `s.substring(left, right + 1)` is the current substring of the window.

If we want to ensure that all of the character of `t` are contained in `s.substring(left, right + 1)` then we would need a quick way to reference these characters. We could use a **_HashMap_** that represents the frequencies of the characters in `t`. This way validating a window with `t` would be as simple as checking that the frequencies of characters of `t` are included in the window.

```
t = "ABC"
{
  A: 1
  B: 1
  C: 1
}

left = 0
right = 5

s.substring(left, right + 1) = "ADOBEC" // VALID substring

{
  A: 1 <-
  D: 1
  O: 1
  B: 1 <-
  E: 1
  C: 1 <-
}

// here the window substring contains all of the characters frequencies of t
```

To check for valid substrings we would need to keep track of the window substring character frequencies.
For this we would use a separate local hashmap.
As we expand our window by incrementing `right` to include new characters, we would add the new character and update its frequency in the hashmap.
As we contract our window by incrementing `left`, we would decrement the character frequency from our hashmap

```
left = 0
right = 5
"ADOBECODEBANC"
 ^    ^

 {
  A: 1
  D: 1
  O: 1
  B: 1
  E: 1
  C: 1
}

// expand our window by incrementing right

left = 0
right = 6

"ADOBECODEBANC"
 ^     ^
  {
  A: 1
  D: 1
  O: 2 <- O is incremented
  B: 1
  E: 1
  C: 1
}

// contract our window by incrementing left

left = 1
right = 6

"ADOBECODEBANC"
  ^    ^
  {
  A: 0 <- A is decremented
  D: 1
  O: 2
  B: 1
  E: 1
  C: 1
}
```

As we find valid substring while expanding and contracting the window we would record the smallest length substring seen.

By the end of traversing to the end of `s` and we can't contract the window anymore, then we have finished searching the string

Time: `O(S + T)` Where `S` is the length of `s` and `T` is the length of `t`

Space: `O(S + T)` Where `S` is the length of the hashmap for our `s` window and `T` is the length of the hashmap for `t`

- [JavaScript](./minimum-window-substring.js)
- [TypeScript](./minimum-window-substring.ts)
- [Java](./minimum-window-substring.java)
- [Go](./minimum-window-substring.go)

</details>
