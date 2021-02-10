# Implement strStr()

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

### Example 1

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

### Example 2

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

### Example 3

```
Input: haystack = "", needle = ""
Output: 0
```

### Constraints

`0 <= haystack.length, needle.length <= 5 * 104`

`haystack and needle consist of only lower-case English characters.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Brute Force

Since we know the substring we want to match is of the same length of `needle`, we can try to match every substring from the beginning of `haystack` through index `haystack.length - needle.length`. Since we are trying to find the first occurrence, we will return the index of the first substring match found.

Time: `O(N*M)` Where `N` is the length of `haystack` and `M` is the length of `needle`. In most languages, `String.substring(s)` is an `O(N)` operation

Space: `O(1)`

#### KMP

Our naive would have us start a matching procedure at every index of the `haystack` string to search for `needle`. While this works for a lot of situations, there are times where backtracking all the way is unnecessary

```
haystack = "mississippi"
             ^   ^
needle = "issip"
          ^   ^
```

Here a substring of `haystack` starting at index `1` matches with `needle` up until the last character of `needle` which is `p` and `s`. Our naive approach would have had us travel back to index `2` of `haystack` to start another search. But here we can tell that if we back track by only one we can find the next best place to find a match

```
haystack = "mississippi"
                ^       // we can start a search at index 4
needle = "issip"
          ^
```

This is because the suffix of the substring we just searched if identical to the prefix meaning we've already technically started another match. If we know this then we don't need to backtrack to start a new search we can just continue on with matching `haystack` with the rest `needle`.

To efficiently do this, we first need to find prefixes that match suffixes in `needle`

```
"issip"

"issi..."
 ^  ^
```

Here we can see that the prefix `i` matches with the suffix `i`. If we were to find a mismatch right after this substring we can start a new search at `s` at index `1`. If `needle` were `issisp` and we found a mismatch at the very letter character `p` we can start a new search at the index `2`, `s`

```
"issisp"
  ^  ^
```

If we find these prefixes, suffixes, and indices ahead of time then we can use them when matching with `haystack`.

```
"issip"
 ^
 [0]
"issip"
 ^^
 [0 0]


"issip"
 ^ ^
 [0 0 0]

"issip"
 ^  ^
 [0 0 0 1]

"issip"
  ^  ^
 [0 0 0 1 0]

```

Now that we have our array of indices we can start our search at we can do a linear comparison with `haystack`

```
      [0 0 0 1 0]

     "mississippi" // no match advance i
i  =  ^
     "issip"
j  =  ^

     "mississippi" // match, advance both pointers
i  =   ^
     "issip"
j  =  ^

     "mississippi" // match, advance both pointers
i  =    ^
     "issip"
j  =   ^

     "mississippi" // match, advance both pointers
i  =     ^
     "issip"
j  =    ^

     "mississippi" // match, advance both pointers
i  =      ^
     "issip"
j  =     ^

     "mississippi" // mismatch, check our kmp array to find where to reset our j pointer
i  =       ^
     "issip"
j  =      ^

     "mississippi" // match, advance both pointers
i  =       ^
     "issip"
j  =   ^

     "mississippi" // match, advance both pointers
i  =        ^
     "issip"
j  =    ^

     "mississippi" // match, advance both pointers
i  =         ^
     "issip"
j  =     ^

     "mississippi" // match, haystack is fully matched with needle
i  =          ^
     "issip"
j  =      ^
```

Time: `O(N + M)` Where `N` is the length of `haystack` and `M` is the length of `needle`. `O(M)` operations for building our KMP array and `O(N)` find a match in `haystack` without needing to backtrack.

Space: `O(M)`

- [JavaScript](./strStr.js)
- [TypeScript](./strStr.ts)
- [Java](./strStr.java)
- [Go](./strStr.go)
</details>
