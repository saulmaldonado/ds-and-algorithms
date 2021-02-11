# Valid Anagram

## Difficulty

![Easy](https://img.shields.io/badge/easy-5cb85c?style=for-the-badge&logoColor=white)

## Problem

Given two strings s and t , write a function to determine if t is an anagram of s.

### Example 1

```
Input: s = "anagram", t = "nagaram"
Output: true
```

### Example 2

```
Input: s = "rat", t = "car"
Output: false
```

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Canonical Form

Canonical Form is the _simplest representation of an object that which allows it to be identified in a unique way_. Since anagrams are just rearrangements of the same characters between strings we can just get both of the strings to their simplest form and compare them both. This can be done by lexicographical sorting both strings and comparing the two for the result.

```
s = "anagram", t = "nagaram"

sorting...

s = "aaagmnr", t = "aaagmnr"
```

Time: `O(N log N)` Where `N` is the length of the strings

Space: `O(1)`

#### Sharing a Frequency Map

Since anagrams are just rearrangements of the same characters between strings, we can take the frequencies of all characters in both strings and compare both. While this can be done using two frequency maps, one for each string, there is no necessity keep both map if were only interested in the different between them (if there is any). Instead we can do this with only one map that will have values incremented when traversing the first string and values decremented when traversing the other. If there ever is any discrepancy between the maps, such as decrementing a value will cause it to go negative, we can immediately assume that the strings are not valid anagrams

Time: `O(N)` Where `N` is the length of the strings

Space: `O(26)` For a frequency map with space for every lowercase letter in the alphabet

- [JavaScript](./valid-anagram.js)
- [TypeScript](./valid-anagram.ts)
- [Java](./valid-anagram.java)
- [Go](./valid-anagram.go)

</details>
