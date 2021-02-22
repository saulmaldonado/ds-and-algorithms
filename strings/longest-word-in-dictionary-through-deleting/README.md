# Longest Word in Dictionary through Deleting

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

### Example 1

```
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output:
"apple"
```

### Example 2

```
Input:
s = "abpcplea", d = ["a","b","c"]

Output:
"a"
```

### Constraints

`All the strings in the input will only contain lower-case letters.`

`The size of the dictionary won't exceed 1,000.`

`The length of all the strings in the input won't exceed 1,000.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Search For Subsequence And Compare

For the first part of the solution, we'll need a way to check if a word in the dictionary `d` is a subsequence in the string `s`. We can do so by having two pointers, one for the `s` and one for `d[i]`. We'll try to compare every character in `s` with every character in `d[i]`. if the character are the same, we'll increment both pointers. If the characters are not the same, we'll only increment the `s` pointer in hopes for finding the character at the pointer for `d[i]` later on in the `s`. By the end of comparing the strings, our `d[i]` pointer should be at the end of `d[i]` if not `d[i]` is not found in `s`.

```
"abpcplea"   "apple"
 ^            ^

"abpcplea"   "apple"
  ^            ^

"abpcplea"   "apple"
   ^           ^

"abpcplea"   "apple"
    ^           ^

"abpcplea"   "apple"
     ^          ^

"abpcplea"   "apple"
      ^          ^

"abpcplea"   "apple" // pointer for "apple" is at the end. "apple" is a subsequence of "abpcplea"
       ^          ^
```

Since there is a possibility for multiple words in `d` as subsequences of `s`, we'll need a way to compare the subsequences and chose the one with the greatest length and is lexicographically the smallest. We can do so by keeping track of the longest subsequence of `s` in `d` and if two subsequences are of the same length pick the one that is lexicographically the smallest.

Time: `O(N * L)` Where `N` is the total number of strings in `d` and `L` is the average length of the strings in `d`

Space: `O( max(d[i]) )` Worst case where `max(d[i])` is the length of the longest string in `d`

- [JavaScript](./longest-word-in-dictionary-through-deleting.js)
- [TypeScript](./longest-word-in-dictionary-through-deleting.ts)
- [Java](./longest-word-in-dictionary-through-deleting.java)
- [Go](./longest-word-in-dictionary-through-deleting.go)

</details>
